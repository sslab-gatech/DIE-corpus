var BUGNUMBER = 918879;
var summary = 'String.fromCodePoint';
print(BUGNUMBER + ": " + summary); // Tests taken from:
// https://github.com/mathiasbynens/String.fromCodePoint/blob/master/tests/tests.js

String.fromCodePoint.length;
1;
String.fromCodePoint.name;
'fromCodePoint';
String.propertyIsEnumerable('fromCodePoint');
false;
String.fromCodePoint('');
'\0';
String.fromCodePoint();
'';
String.fromCodePoint(-0);
'\0';
String.fromCodePoint(0);
'\0';
String.fromCodePoint(0x1D306);
'\uD834\uDF06';
String.fromCodePoint(0x1D306, 0x61, 0x1D307);
'\uD834\uDF06a\uD834\uDF07';
String.fromCodePoint(0x61, 0x62, 0x1D307);
'ab\uD834\uDF07';
String.fromCodePoint(false);
'\0';
String.fromCodePoint(null);
'\0';

(function () {
  String.fromCodePoint('_');
})();

RangeError;

(function () {
  String.fromCodePoint('+Infinity');
})();

RangeError;

(function () {
  String.fromCodePoint('-Infinity');
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
  String.fromCodePoint(Infinity);
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
// str_fromCodePoint_one_arg (single argument, creates an inline string)

String.fromCodePoint(0x31);
'1';
String.fromCodePoint(0x31, 0x32);
'12';
String.fromCodePoint(0x31, 0x32, 0x33);
'123';
String.fromCodePoint(0x31, 0x32, 0x33, 0x34);
'1234';
String.fromCodePoint(0x31, 0x32, 0x33, 0x34, 0x35);
'12345';
String.fromCodePoint(0x31, 0x32, 0x33, 0x34, 0x35, 0x36);
'123456';
reportCompare(0, 0, "ok");
