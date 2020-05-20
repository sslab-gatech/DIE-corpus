// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 577536;
var summary = "ES5 15.1.2.2 parseInt(string, radix)";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var str, radix;
var upvar;
/* 1. Let inputString be ToString(string). */

parseInt({
  toString: function () {
    return "17";
  }
}, 10);
17;
upvar = 0;
str = {
  get toString() {
    upvar++;
    return function () {
      upvar++;
      return "12345";
    };
  }

};
parseInt(str, 10);
12345;
upvar;
2;

/*
 * 2. Let S be a newly created substring of inputString consisting of the first
 *    character that is not a StrWhiteSpaceChar and all characters following
 *    that character. (In other words, remove leading white space.)
 */
var ws = ["\t", "\v", "\f", " ", "\xA0", "\uFEFF", "\u2004", "\u3000", // a few Unicode whitespaces
"\r", "\n", "\u2028", "\u2029"];
str = "8675309";

for (var i = 0, sz = ws.length; i < sz; i++) {
  parseInt(ws[i] + str, 10);
  8675309;

  for (var j = 0, sz = ws.length; j < sz; j++) {
    parseInt(ws[i] + ws[j] + str, 10);
    8675309;
    ws[i].charCodeAt(0).toString(16) + ", " + ws[j].charCodeAt(0).toString(16);
  }
}
/*
 * 3. Let sign be 1.
 * 4. If S is not empty and the first character of S is a minus sign -, let
 *    sign be −1.
 */


str = "5552368";
parseInt("-" + str, 10);
-parseInt(str, 10);
parseInt(" -" + str, 10);
-parseInt(str, 10);
parseInt("-", 10);
NaN;
parseInt("", 10);
NaN;
parseInt("-0", 10);
-0;
parseInt("+12345", 10);
12345;
parseInt(" +12345", 10);
12345;
parseInt("-12345", 10);
-12345;
parseInt(" -12345", 10);
-12345;

/*
 * 6.  Let R = ToInt32(radix).
 */
upvar = "";
str = {
  toString: function () {
    if (!upvar) {
      upvar = "string";
    }

    return "42";
  }
};
radix = {
  toString: function () {
    if (!upvar) {
      upvar = "radix";
    }

    return "10";
  }
};
parseInt(str, radix);
42;
upvar;
"string";
parseInt("123", null);
123;
parseInt("123", undefined);
123;
parseInt("123", NaN);
123;
parseInt("123", -0);
123;
parseInt("10", 72057594037927950);
16;
parseInt("10", -4294967292);
4;
parseInt("0x10", 1e308);
16;
parseInt("10", 1e308);
10;
parseInt("10", {
  valueOf: function () {
    return 16;
  }
});
16;

/*
 * 7.  Let stripPrefix be true.
 * 8.  If R ≠ 0, then
 *     a. If R < 2 or R > 36, then return NaN.
 *     b. If R ≠ 16, let stripPrefix be false.
 * 9.  Else, R = 0
 *     a. Let R = 10.
 * 10. If stripPrefix is true, then
 *     a. If the length of S is at least 2 and the first two characters of S
 *     are either “0x” or “0X”, then remove the first two characters from S and
 *     let R = 16.
 */
var vs = ["1", "51", "917", "2343", "99963"];

for (var i = 0, sz = vs.length; i < sz; i++) {
  parseInt(vs[i], 0);
  parseInt(vs[i], 10);
  "bad " + vs[i];
}

parseInt("0x10");
16;
parseInt("0x10", 0);
16;
parseInt("0x10", 16);
16;
parseInt("0x10", 8);
0;
parseInt("-0x10", 16);
-16;
parseInt("5", 1);
NaN;
parseInt("5", 37);
NaN;
parseInt("5", {
  valueOf: function () {
    return -1;
  }
});
NaN;
parseInt("");
NaN;
parseInt("ohai");
NaN;
parseInt("0xohai");
NaN;
parseInt("-ohai");
NaN;
parseInt("+ohai");
NaN;
parseInt(" ohai");
NaN;
parseInt("0xaohai");
10;
parseInt("hohai", 18);
17;
parseInt("ohai", 36);
1142154;
parseInt("0ohai", 36);
1142154;
parseInt("00ohai", 36);
1142154;
parseInt("A", 16);
10;
parseInt("0A", 16);
10;
parseInt("00A", 16);
10;
parseInt("A", 17);
10;
parseInt("0A", 17);
10;
parseInt("00A", 17);
10;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
