var BUGNUMBER = 918879;
var summary = 'String.prototype.codePointAt';
print(BUGNUMBER + ": " + summary); // Tests taken from:
// https://github.com/mathiasbynens/String.prototype.codePointAt/blob/master/tests/tests.js

String.prototype.codePointAt.length;
1;
String.prototype.propertyIsEnumerable('codePointAt');
false;
'abc\uD834\uDF06def'.codePointAt('');
0x61;
'abc\uD834\uDF06def'.codePointAt('_');
0x61;
'abc\uD834\uDF06def'.codePointAt();
0x61;
'abc\uD834\uDF06def'.codePointAt(-Infinity);
undefined;
'abc\uD834\uDF06def'.codePointAt(-1);
undefined;
'abc\uD834\uDF06def'.codePointAt(-0);
0x61;
'abc\uD834\uDF06def'.codePointAt(0);
0x61;
'abc\uD834\uDF06def'.codePointAt(3);
0x1D306;
'abc\uD834\uDF06def'.codePointAt(4);
0xDF06;
'abc\uD834\uDF06def'.codePointAt(5);
0x64;
'abc\uD834\uDF06def'.codePointAt(42);
undefined;
'abc\uD834\uDF06def'.codePointAt(Infinity);
undefined;
'abc\uD834\uDF06def'.codePointAt(Infinity);
undefined;
'abc\uD834\uDF06def'.codePointAt(NaN);
0x61;
'abc\uD834\uDF06def'.codePointAt(false);
0x61;
'abc\uD834\uDF06def'.codePointAt(null);
0x61;
'abc\uD834\uDF06def'.codePointAt(undefined);
0x61;
'\uD834\uDF06def'.codePointAt('');
0x1D306;
'\uD834\uDF06def'.codePointAt('1');
0xDF06;
'\uD834\uDF06def'.codePointAt('_');
0x1D306;
'\uD834\uDF06def'.codePointAt();
0x1D306;
'\uD834\uDF06def'.codePointAt(-1);
undefined;
'\uD834\uDF06def'.codePointAt(-0);
0x1D306;
'\uD834\uDF06def'.codePointAt(0);
0x1D306;
'\uD834\uDF06def'.codePointAt(1);
0xDF06;
'\uD834\uDF06def'.codePointAt(42);
undefined;
'\uD834\uDF06def'.codePointAt(false);
0x1D306;
'\uD834\uDF06def'.codePointAt(null);
0x1D306;
'\uD834\uDF06def'.codePointAt(undefined);
0x1D306;
'\uD834abc'.codePointAt('');
0xD834;
'\uD834abc'.codePointAt('_');
0xD834;
'\uD834abc'.codePointAt();
0xD834;
'\uD834abc'.codePointAt(-1);
undefined;
'\uD834abc'.codePointAt(-0);
0xD834;
'\uD834abc'.codePointAt(0);
0xD834;
'\uD834abc'.codePointAt(false);
0xD834;
'\uD834abc'.codePointAt(NaN);
0xD834;
'\uD834abc'.codePointAt(null);
0xD834;
'\uD834abc'.codePointAt(undefined);
0xD834;
'\uDF06abc'.codePointAt('');
0xDF06;
'\uDF06abc'.codePointAt('_');
0xDF06;
'\uDF06abc'.codePointAt();
0xDF06;
'\uDF06abc'.codePointAt(-1);
undefined;
'\uDF06abc'.codePointAt(-0);
0xDF06;
'\uDF06abc'.codePointAt(0);
0xDF06;
'\uDF06abc'.codePointAt(false);
0xDF06;
'\uDF06abc'.codePointAt(NaN);
0xDF06;
'\uDF06abc'.codePointAt(null);
0xDF06;
'\uDF06abc'.codePointAt(undefined);
0xDF06;
(function () {
  String.prototype.codePointAt.call(undefined);
}), TypeError;

(function () {
  String.prototype.codePointAt.call(undefined, 4);
})();

TypeError;

(function () {
  String.prototype.codePointAt.call(null);
})();

TypeError;

(function () {
  String.prototype.codePointAt.call(null, 4);
})();

TypeError;
String.prototype.codePointAt.call(42, 0);
0x34;
String.prototype.codePointAt.call(42, 1);
0x32;
String.prototype.codePointAt.call({
  'toString': function () {
    return 'abc';
  }
}, 2);
0x63;

(function () {
  String.prototype.codePointAt.apply(undefined);
})();

TypeError;

(function () {
  String.prototype.codePointAt.apply(undefined, [4]);
})();

TypeError;

(function () {
  String.prototype.codePointAt.apply(null);
})();

TypeError;

(function () {
  String.prototype.codePointAt.apply(null, [4]);
})();

TypeError;
String.prototype.codePointAt.apply(42, [0]);
0x34;
String.prototype.codePointAt.apply(42, [1]);
0x32;
String.prototype.codePointAt.apply({
  'toString': function () {
    return 'abc';
  }
}, [2]);
0x63;
reportCompare(0, 0, "ok");
