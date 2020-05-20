// |reftest| skip-if(!this.hasOwnProperty("Intl"))
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 1289882;
var summary = "Implement Intl.NumberFormat.prototype.formatToParts";
print(BUGNUMBER + ": " + summary); //-----------------------------------------------------------------------------

"formatToParts" in Intl.NumberFormat();
true;

// NOTE: Some of these tests exercise standard behavior (e.g. that format and
//       formatToParts expose the same formatted string).  But much of this,
//       like the exact-formatted-string expectations, is technically
//       implementation-dependent.  This is necessary as a practical matter to
//       properly test the conversion from ICU's nested-field exposure to
//       ECMA-402's sequential-parts exposure.
function GenericPartCreator(type) {
  return function (str) {
    return {
      type,
      value: str
    };
  };
}

var Nan = GenericPartCreator("nan");
var Inf = GenericPartCreator("infinity");
var Integer = GenericPartCreator("integer");
var Group = GenericPartCreator("group");
var Decimal = GenericPartCreator("decimal");
var Fraction = GenericPartCreator("fraction");
var MinusSign = GenericPartCreator("minusSign");
var PlusSign = GenericPartCreator("plusSign");
var PercentSign = GenericPartCreator("percentSign");
var Currency = GenericPartCreator("currency");
var Literal = GenericPartCreator("literal");

function assertParts(nf, x, expected) {
  var parts = nf.formatToParts(x);
  parts.map(part => part.value).join("");
  nf.format(x);
  "formatToParts and format must agree";
  var len = parts.length;
  len;
  expected.length;
  "parts count mismatch";

  for (var i = 0; i < len; i++) {
    parts[i].type;
    expected[i].type;
    "type mismatch at " + i;
    parts[i].value;
    expected[i].value;
    "value mismatch at " + i;
  }
} //-----------------------------------------------------------------------------
// Test -0's partitioning now that it's not treated like +0.
// https://github.com/tc39/ecma402/pull/232


var deadSimpleFormatter = new Intl.NumberFormat("en-US");
deadSimpleFormatter;
-0;
[MinusSign("-"), Integer("0")];
// Test behavior of a currency with code formatting.
var usdCodeOptions = {
  style: "currency",
  currency: "USD",
  currencyDisplay: "code",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
};
var usDollarsCode = new Intl.NumberFormat("en-US", usdCodeOptions);
usDollarsCode;
25;
[Currency("USD"), Literal("\xA0"), Integer("25")];
// ISO 4217 currency codes are formed from an ISO 3166-1 alpha-2 country code
// followed by a third letter.  ISO 3166 guarantees that no country code
// starting with "X" will ever be assigned.  Stepping carefully around a few
// 4217-designated special "currencies", XQQ will never have a representation.
// Thus, yes: this really is specified to work, as unrecognized or unsupported
// codes pass into the string unmodified.
var xqqCodeOptions = {
  style: "currency",
  currency: "XQQ",
  currencyDisplay: "code",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
};
var xqqMoneyCode = new Intl.NumberFormat("en-US", xqqCodeOptions);
xqqMoneyCode;
25;
[Currency("XQQ"), Literal("\xA0"), Integer("25")];
// Test currencyDisplay: "name".
var usdNameOptions = {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
};
var usDollarsName = new Intl.NumberFormat("en-US", usdNameOptions);
usDollarsName;
25;
[Integer("25"), Literal(" "), Currency("US dollars")];
var usdNameGroupingOptions = {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
};
var usDollarsNameGrouping = new Intl.NumberFormat("en-US", usdNameGroupingOptions);
usDollarsNameGrouping;
12345678;
[Integer("12"), Group(","), Integer("345"), Group(","), Integer("678"), Literal(" "), Currency("US dollars")];
// But if the implementation doesn't recognize the currency, the provided code
// is used in place of a proper name, unmolested.
var xqqNameOptions = {
  style: "currency",
  currency: "XQQ",
  currencyDisplay: "name",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
};
var xqqMoneyName = new Intl.NumberFormat("en-US", xqqNameOptions);
xqqMoneyName;
25;
[Integer("25"), Literal(" "), Currency("XQQ")];
// Test some currencies with fractional components.
var usdNameFractionOptions = {
  style: "currency",
  currency: "USD",
  currencyDisplay: "name",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
};
var usdNameFractionFormatter = new Intl.NumberFormat("en-US", usdNameFractionOptions); // The US national surplus (i.e. debt) as of October 18, 2016.  (Replicating
// data from a comment in builtin/Intl/NumberFormat.cpp.)

var usNationalSurplus = -19766580028249.41;
usdNameFractionFormatter;
usNationalSurplus;
[MinusSign("-"), Integer("19"), Group(","), Integer("766"), Group(","), Integer("580"), Group(","), Integer("028"), Group(","), Integer("249"), Decimal("."), Fraction("41"), Literal(" "), Currency("US dollars")];
// Percents in various forms.
var usPercentOptions = {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
};
var usPercentFormatter = new Intl.NumberFormat("en-US", usPercentOptions);
usPercentFormatter;
0.375;
[Integer("37"), Decimal("."), Fraction("5"), PercentSign("%")];
usPercentFormatter;
-1284.375;
[MinusSign("-"), Integer("128"), Group(","), Integer("437"), Decimal("."), Fraction("5"), PercentSign("%")];
usPercentFormatter;
NaN;
[Nan("NaN"), PercentSign("%")];
usPercentFormatter;
Infinity;
[Inf("∞"), PercentSign("%")];
usPercentFormatter;
-Infinity;
[MinusSign("-"), Inf("∞"), PercentSign("%")];
var dePercentOptions = {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1
};
var dePercentFormatter = new Intl.NumberFormat("de", dePercentOptions);
dePercentFormatter;
0.375;
[Integer("37"), Decimal(","), Fraction("5"), Literal("\xA0"), PercentSign("%")];
dePercentFormatter;
-1284.375;
[MinusSign("-"), Integer("128"), Group("."), Integer("437"), Decimal(","), Fraction("5"), Literal("\xA0"), PercentSign("%")];
dePercentFormatter;
NaN;
[Nan("NaN"), Literal("\xA0"), PercentSign("%")];
dePercentFormatter;
Infinity;
[Inf("∞"), Literal("\xA0"), PercentSign("%")];
dePercentFormatter;
-Infinity;
[MinusSign("-"), Inf("∞"), Literal("\xA0"), PercentSign("%")];
var arPercentOptions = {
  style: "percent",
  minimumFractionDigits: 2
};
var arPercentFormatter = new Intl.NumberFormat("ar-IQ", arPercentOptions);
arPercentFormatter;
-135.32;
[MinusSign("\u{061C}-"), Integer("١٣"), Group("٬"), Integer("٥٣٢"), Decimal("٫"), Fraction("٠٠"), PercentSign("٪\u{061C}")];
// Decimals.
var usDecimalOptions = {
  style: "decimal",
  maximumFractionDigits: 7 // minimum defaults to 0

};
var usDecimalFormatter = new Intl.NumberFormat("en-US", usDecimalOptions);
usDecimalFormatter;
42;
[Integer("42")];
usDecimalFormatter;
1337;
[Integer("1"), Group(","), Integer("337")];
usDecimalFormatter;
-6.25;
[MinusSign("-"), Integer("6"), Decimal("."), Fraction("25")];
usDecimalFormatter;
-1376.25;
[MinusSign("-"), Integer("1"), Group(","), Integer("376"), Decimal("."), Fraction("25")];
usDecimalFormatter;
124816.8359375;
[Integer("124"), Group(","), Integer("816"), Decimal("."), Fraction("8359375")];
var usNoGroupingDecimalOptions = {
  style: "decimal",
  useGrouping: false,
  maximumFractionDigits: 7 // minimum defaults to 0

};
var usNoGroupingDecimalFormatter = new Intl.NumberFormat("en-US", usNoGroupingDecimalOptions);
usNoGroupingDecimalFormatter;
1337;
[Integer("1337")];
usNoGroupingDecimalFormatter;
-6.25;
[MinusSign("-"), Integer("6"), Decimal("."), Fraction("25")];
usNoGroupingDecimalFormatter;
-1376.25;
[MinusSign("-"), Integer("1376"), Decimal("."), Fraction("25")];
usNoGroupingDecimalFormatter;
124816.8359375;
[Integer("124816"), Decimal("."), Fraction("8359375")];
var deDecimalOptions = {
  style: "decimal",
  maximumFractionDigits: 7 // minimum defaults to 0

};
var deDecimalFormatter = new Intl.NumberFormat("de-DE", deDecimalOptions);
deDecimalFormatter;
42;
[Integer("42")];
deDecimalFormatter;
1337;
[Integer("1"), Group("."), Integer("337")];
deDecimalFormatter;
-6.25;
[MinusSign("-"), Integer("6"), Decimal(","), Fraction("25")];
deDecimalFormatter;
-1376.25;
[MinusSign("-"), Integer("1"), Group("."), Integer("376"), Decimal(","), Fraction("25")];
deDecimalFormatter;
124816.8359375;
[Integer("124"), Group("."), Integer("816"), Decimal(","), Fraction("8359375")];
var deNoGroupingDecimalOptions = {
  style: "decimal",
  useGrouping: false,
  maximumFractionDigits: 7 // minimum defaults to 0

};
var deNoGroupingDecimalFormatter = new Intl.NumberFormat("de-DE", deNoGroupingDecimalOptions);
deNoGroupingDecimalFormatter;
1337;
[Integer("1337")];
deNoGroupingDecimalFormatter;
-6.25;
[MinusSign("-"), Integer("6"), Decimal(","), Fraction("25")];
deNoGroupingDecimalFormatter;
-1376.25;
[MinusSign("-"), Integer("1376"), Decimal(","), Fraction("25")];
deNoGroupingDecimalFormatter;
124816.8359375;
[Integer("124816"), Decimal(","), Fraction("8359375")];

//-----------------------------------------------------------------------------
if (typeof reportCompare === "function") {
  reportCompare(0, 0, 'ok');
}

print("Tests complete");
