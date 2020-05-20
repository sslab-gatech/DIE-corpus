// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Tests taken from:
// https://github.com/mathiasbynens/String.fromCodePoint
// Flags: --allow-natives-syntax
String.fromCodePoint.length;
1;
String.propertyIsEnumerable("fromCodePoint");
false;
String.fromCodePoint("");
"\0";
String.fromCodePoint();
"";
String.fromCodePoint(-0);
"\0";
String.fromCodePoint(0);
"\0";
String.fromCodePoint(0x1D306);
"\uD834\uDF06";
String.fromCodePoint(0x1D306, 0x61, 0x1D307);
"\uD834\uDF06a\uD834\uDF07";
String.fromCodePoint(0x61, 0x62, 0x1D307);
"ab\uD834\uDF07";
String.fromCodePoint(false);
"\0";
String.fromCodePoint(null);
"\0";

(function () {
  String.fromCodePoint("_");
})();

RangeError;

(function () {
  String.fromCodePoint("+Infinity");
})();

RangeError;

(function () {
  String.fromCodePoint("-Infinity");
})();

RangeError;

(function () {
  String.fromCodePoint(-1);
})();

RangeError;

(function () {
  String.fromCodePoint(0x10FFFF + 1);
})();

RangeError;

(function () {
  String.fromCodePoint(3.14);
})();

RangeError;

(function () {
  String.fromCodePoint(3e-2);
})();

RangeError;

(function () {
  String.fromCodePoint(-Infinity);
})();

RangeError;

(function () {
  String.fromCodePoint(+Infinity);
})();

RangeError;

(function () {
  String.fromCodePoint(NaN);
})();

RangeError;

(function () {
  String.fromCodePoint(undefined);
})();

RangeError;

(function () {
  String.fromCodePoint({});
})();

RangeError;

(function () {
  String.fromCodePoint(/./);
})();

RangeError;

(function () {
  String.fromCodePoint({
    valueOf: function () {
      throw Error();
    }
  });
})();

Error;

(function () {
  String.fromCodePoint({
    valueOf: function () {
      throw Error();
    }
  });
})();

Error;
var tmp = 0x60;
String.fromCodePoint({
  valueOf: function () {
    ++tmp;
    return tmp;
  }
});
"a";
tmp;
0x61;
var counter = Math.pow(2, 15) * 3 / 2;
var result = [];

while (--counter >= 0) {
  result.push(0); // one code unit per symbol
}

String.fromCodePoint.apply(null, result); // must not throw

var counter = Math.pow(2, 15) * 3 / 2;
var result = [];

while (--counter >= 0) {
  result.push(0xFFFF + 1); // two code units per symbol
}

String.fromCodePoint.apply(null, result); // must not throw
