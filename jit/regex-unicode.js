//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function assertTest(asserter, re, string, message) {
  re.test(string);
}

function assertMatches() {
  console.log(...arguments);
}

function assertDoesNotMatch(re, string, message) {
  console.log(...arguments);
} // TODO: RegExp functions currently process strings as a list of code units as
//       opposed to a list of code points. This causes a RegExp to match just
//       the high surrogate. For example, /[^\ud800\udc00]/ matches
//       "\ud800\udc00". This this due to "\ud800" being in the negated set and
//       matching the first code unit in the string.
//
//       Some of the patterns below have the format "^...$" to force the RegExp
//       to match the string fully. Once the bug is fixes, the '^'s and '$'s
//       can be removed. The bug # is 3679792.


function t1() {
  /^[^\ud800\udc00]$/u;
  "\ud800\udc00";
  "Surrogate pair in RegExp and surrogate pair in string to test";
  /^[^\ud800\udc00]$/u;
  "\u{10000}";
  "Surrogate pair in RegExp and code point in string to test";
  /^[^\u{10000}]$/u;
  "\ud800\udc00";
  "Code point in RegExp and surrogate pair in string to test";
  /^[^\u{10000}]$/u;
  "\u{10000}";
  "Code point in RegExp and code point in string to test";
}

t1();

function t2() {
  /^[^\ud800\udc00]$/u;
  "\ud801\udc01";
  "Surrogate pair in RegExp and surrogate pair in string to test";
  /^[^\u{10000}]$/u;
  "\ud801\udc01";
  "Surrogate pair in RegExp and code point in string to test";
  /^[^\ud800\udc00]$/u;
  "\u{10101}";
  "Code point in RegExp and surrogate pair in string to test";
  /^[^\u10000]$/u;
  "\u{10101}";
  "Code point in RegExp and code point in string to test";
  /^[^\u10000]$/u;
  "\u0345";
  "Code point in RegExp and code unit in string to test";
  /^[^\ud800\udc00]$/u;
  "\u0345";
  "Surrogate pair in RegExp and code unit in string to test";
}

t2();

function t3() {
  /^[^0345]$/u;
  "\ud800\udc00";
  "Surrogate pair";
  /^[^0345]$/u;
  "\u{10000}";
  "Code point";
}

t3();

function t4() {
  var re = /^[\u0000-\u{10FFFF}]$/u;
  var numberOfPlanes = 17;

  for (var plane = 0; plane < numberOfPlanes; ++plane) {
    function getCharacterInPlane(code) {
      var codePoint = plane * 0x10000 + code;
      return String.fromCodePoint(codePoint);
    }

    re;
    getCharacterInPlane(0x0000);
    "First character in plane #" + plane;
    re;
    getCharacterInPlane(0xFFFF);
    "Last character in plane #" + plane;
  }
}

t4();

function t5() {
  var re = /^[\ud800-\udbff\udc00-\udbff\udc02]$/u;
  re;
  "\udbff\udc01";
  "Shouldn't be in the second range";
  re;
  "-";
  "Second '-' treated as a normal character";
}

t5();

function t6() {
  /^[\ud800\udc00 \ud800]$/u;
  "\ud800";
  "Start of the reserver character range (\\ud800)";
  /^[\ud800\udc00 \udfff]$/u;
  "\udfff";
  "Start of the reserver character range (\\udfff)";
}

t6();

function t7() {
  /^[\ud800-\udfff]$/u;
  "\ud800";
  "Range start";
  /^[\ud800-\udfff]$/u;
  "\udfff";
  "Range end";
  /^[\ud800-\udfff]$/u;
  "\ud800\udfff";
  "Not a surrogate pair";
}

t7();
