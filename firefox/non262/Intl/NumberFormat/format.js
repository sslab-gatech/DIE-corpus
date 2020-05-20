// |reftest| skip-if(!this.hasOwnProperty("Intl"))

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Tests the format function with a diverse set of locales and options.
var format; // Locale en-US; default options.

format = new Intl.NumberFormat("en-us");
format.format(0);
"0";
format.format(-1);
"-1";
format.format(123456789.123456789);
"123,456,789.123";
// Locale en-US; currency USD.
// The US dollar uses two fractional digits, and negative values are commonly
// parenthesized.
format = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD"
});
format.format(0);
"$0.00";
format.format(-1);
"-$1.00";
format.format(123456789.123456789);
"$123,456,789.12";
// Locale ja-JP; currency JPY.
// The Japanese yen has no subunit in real life.
format = new Intl.NumberFormat("ja-jp", {
  style: "currency",
  currency: "JPY"
});
format.format(0);
"￥0";
format.format(-1);
"-￥1";
format.format(123456789.123456789);
"￥123,456,789";
// Locale ar-JO; currency JOD.
// The Jordanian Dinar divides into 1000 fils. Jordan uses (real) Arabic digits.
format = new Intl.NumberFormat("ar-jo", {
  style: "currency",
  currency: "JOD"
});
format.format(0);
"٠٫٠٠٠ د.أ.‏";
format.format(-1);
"؜-١٫٠٠٠ د.أ.‏";
format.format(123456789.123456789);
"١٢٣٬٤٥٦٬٧٨٩٫١٢٣ د.أ.‏";
// Locale th-TH; Thai digits, percent, two significant digits.
format = new Intl.NumberFormat("th-th-u-nu-thai", {
  style: "percent",
  minimumSignificantDigits: 2,
  maximumSignificantDigits: 2
});
format.format(0);
"๐.๐%";
format.format(-0.01);
"-๑.๐%";
format.format(1.10);
"๑๑๐%";
// Test the .name property of the "format" getter.
var desc = Object.getOwnPropertyDescriptor(Intl.NumberFormat.prototype, "format");
desc !== undefined;
true;
typeof desc.get;
"function";
desc.get.name;
"get format";
reportCompare(0, 0, 'ok');
