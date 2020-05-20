// Copyright 2014 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
"abc".startsWith("a", Infinity);
1;
String.prototype.startsWith.length;
var testString = "Hello World";
testString.startsWith("");
testString.startsWith("Hello");
testString.startsWith("hello");
testString.startsWith("Hello World!");
testString.startsWith(null);
testString.startsWith(undefined);
testString.startsWith();
"null".startsWith(null);
"undefined".startsWith(undefined);
var georgianUnicodeString = "\u10D0\u10D1\u10D2\u10D3\u10D4\u10D5\u10D6\u10D7";
georgianUnicodeString.startsWith(georgianUnicodeString);
georgianUnicodeString.startsWith("\u10D0\u10D1\u10D2");
georgianUnicodeString.startsWith("\u10D8");
"String.prototype.startsWith.call(null, 'test')";
TypeError;
"String.prototype.startsWith.call(null, null)";
TypeError;
"String.prototype.startsWith.call(undefined, undefined)";
TypeError;
"String.prototype.startsWith.apply(null, ['test'])";
TypeError;
"String.prototype.startsWith.apply(null, [null])";
TypeError;
"String.prototype.startsWith.apply(undefined, [undefined])";
TypeError;
var TEST_INPUT = [{
  msg: "Empty string",
  val: ""
}, {
  msg: "Number 1234.34",
  val: 1234.34
}, {
  msg: "Integer number 0",
  val: 0
}, {
  msg: "Negative number -1",
  val: -1
}, {
  msg: "Boolean true",
  val: true
}, {
  msg: "Boolean false",
  val: false
}, {
  msg: "Empty array []",
  val: []
}, {
  msg: "Empty object {}",
  val: {}
}, {
  msg: "Array of size 3",
  val: new Array(3)
}];

function testNonStringValues() {
  var i = 0;
  var l = TEST_INPUT.length;

  for (; i < l; i++) {
    var e = TEST_INPUT[i];
    var v = e.val;
    var s = String(v);
    s.startsWith(v);
    e.msg;
    String.prototype.startsWith.call(v, v);
    e.msg;
    String.prototype.startsWith.apply(v, [v]);
    e.msg;
  }
}

testNonStringValues();

var CustomType = function (value) {
  this.startsWith = String.prototype.startsWith;

  this.toString = function () {
    return String(value);
  };
};

function testCutomType() {
  var i = 0;
  var l = TEST_INPUT.length;

  for (; i < l; i++) {
    var e = TEST_INPUT[i];
    var v = e.val;
    var o = new CustomType(v);
    o.startsWith(v);
    e.msg;
  }
}

testCutomType(); // Test cases found in FF

"abc".startsWith("abc");
"abcd".startsWith("abc");
"abc".startsWith("a");
"abc".startsWith("abcd");
"abc".startsWith("bcde");
"abc".startsWith("b");
"abc".startsWith("abc", 0);
"abc".startsWith("bc", 0);
"abc".startsWith("bc", 1);
"abc".startsWith("c", 1);
"abc".startsWith("abc", 1);
"abc".startsWith("c", 2);
"abc".startsWith("d", 2);
"abc".startsWith("dcd", 2);
"abc".startsWith("a", 42);
"abc".startsWith("a", Infinity);
"abc".startsWith("a", NaN);
"abc".startsWith("b", NaN);
"abc".startsWith("ab", -43);
"abc".startsWith("ab", -Infinity);
"abc".startsWith("bc", -42);
"abc".startsWith("bc", -Infinity);
// Test cases taken from
// https://github.com/mathiasbynens/String.prototype.startsWith/blob/master/tests/tests.js
Object.prototype[1] = 2; // try to break `arguments[1]`

String.prototype.startsWith.length;
1;
String.prototype.propertyIsEnumerable("startsWith");
false;
"undefined".startsWith();
true;
"undefined".startsWith(undefined);
true;
"undefined".startsWith(null);
false;
"null".startsWith();
false;
"null".startsWith(undefined);
false;
"null".startsWith(null);
true;
"abc".startsWith();
false;
"abc".startsWith("");
true;
"abc".startsWith("\0");
false;
"abc".startsWith("a");
true;
"abc".startsWith("b");
false;
"abc".startsWith("ab");
true;
"abc".startsWith("bc");
false;
"abc".startsWith("abc");
true;
"abc".startsWith("bcd");
false;
"abc".startsWith("abcd");
false;
"abc".startsWith("bcde");
false;
"abc".startsWith("", NaN);
true;
"abc".startsWith("\0", NaN);
false;
"abc".startsWith("a", NaN);
true;
"abc".startsWith("b", NaN);
false;
"abc".startsWith("ab", NaN);
true;
"abc".startsWith("bc", NaN);
false;
"abc".startsWith("abc", NaN);
true;
"abc".startsWith("bcd", NaN);
false;
"abc".startsWith("abcd", NaN);
false;
"abc".startsWith("bcde", NaN);
false;
"abc".startsWith("", false);
true;
"abc".startsWith("\0", false);
false;
"abc".startsWith("a", false);
true;
"abc".startsWith("b", false);
false;
"abc".startsWith("ab", false);
true;
"abc".startsWith("bc", false);
false;
"abc".startsWith("abc", false);
true;
"abc".startsWith("bcd", false);
false;
"abc".startsWith("abcd", false);
false;
"abc".startsWith("bcde", false);
false;
"abc".startsWith("", undefined);
true;
"abc".startsWith("\0", undefined);
false;
"abc".startsWith("a", undefined);
true;
"abc".startsWith("b", undefined);
false;
"abc".startsWith("ab", undefined);
true;
"abc".startsWith("bc", undefined);
false;
"abc".startsWith("abc", undefined);
true;
"abc".startsWith("bcd", undefined);
false;
"abc".startsWith("abcd", undefined);
false;
"abc".startsWith("bcde", undefined);
false;
"abc".startsWith("", null);
true;
"abc".startsWith("\0", null);
false;
"abc".startsWith("a", null);
true;
"abc".startsWith("b", null);
false;
"abc".startsWith("ab", null);
true;
"abc".startsWith("bc", null);
false;
"abc".startsWith("abc", null);
true;
"abc".startsWith("bcd", null);
false;
"abc".startsWith("abcd", null);
false;
"abc".startsWith("bcde", null);
false;
"abc".startsWith("", -Infinity);
true;
"abc".startsWith("\0", -Infinity);
false;
"abc".startsWith("a", -Infinity);
true;
"abc".startsWith("b", -Infinity);
false;
"abc".startsWith("ab", -Infinity);
true;
"abc".startsWith("bc", -Infinity);
false;
"abc".startsWith("abc", -Infinity);
true;
"abc".startsWith("bcd", -Infinity);
false;
"abc".startsWith("abcd", -Infinity);
false;
"abc".startsWith("bcde", -Infinity);
false;
"abc".startsWith("", -1);
true;
"abc".startsWith("\0", -1);
false;
"abc".startsWith("a", -1);
true;
"abc".startsWith("b", -1);
false;
"abc".startsWith("ab", -1);
true;
"abc".startsWith("bc", -1);
false;
"abc".startsWith("abc", -1);
true;
"abc".startsWith("bcd", -1);
false;
"abc".startsWith("abcd", -1);
false;
"abc".startsWith("bcde", -1);
false;
"abc".startsWith("", -0);
true;
"abc".startsWith("\0", -0);
false;
"abc".startsWith("a", -0);
true;
"abc".startsWith("b", -0);
false;
"abc".startsWith("ab", -0);
true;
"abc".startsWith("bc", -0);
false;
"abc".startsWith("abc", -0);
true;
"abc".startsWith("bcd", -0);
false;
"abc".startsWith("abcd", -0);
false;
"abc".startsWith("bcde", -0);
false;
"abc".startsWith("", +0);
true;
"abc".startsWith("\0", +0);
false;
"abc".startsWith("a", +0);
true;
"abc".startsWith("b", +0);
false;
"abc".startsWith("ab", +0);
true;
"abc".startsWith("bc", +0);
false;
"abc".startsWith("abc", +0);
true;
"abc".startsWith("bcd", +0);
false;
"abc".startsWith("abcd", +0);
false;
"abc".startsWith("bcde", +0);
false;
"abc".startsWith("", 1);
true;
"abc".startsWith("\0", 1);
false;
"abc".startsWith("a", 1);
false;
"abc".startsWith("b", 1);
true;
"abc".startsWith("ab", 1);
false;
"abc".startsWith("bc", 1);
true;
"abc".startsWith("abc", 1);
false;
"abc".startsWith("bcd", 1);
false;
"abc".startsWith("abcd", 1);
false;
"abc".startsWith("bcde", 1);
false;
"abc".startsWith("", +Infinity);
true;
"abc".startsWith("\0", +Infinity);
false;
"abc".startsWith("a", +Infinity);
false;
"abc".startsWith("b", +Infinity);
false;
"abc".startsWith("ab", +Infinity);
false;
"abc".startsWith("bc", +Infinity);
false;
"abc".startsWith("abc", +Infinity);
false;
"abc".startsWith("bcd", +Infinity);
false;
"abc".startsWith("abcd", +Infinity);
false;
"abc".startsWith("bcde", +Infinity);
false;
"abc".startsWith("", true);
true;
"abc".startsWith("\0", true);
false;
"abc".startsWith("a", true);
false;
"abc".startsWith("b", true);
true;
"abc".startsWith("ab", true);
false;
"abc".startsWith("bc", true);
true;
"abc".startsWith("abc", true);
false;
"abc".startsWith("bcd", true);
false;
"abc".startsWith("abcd", true);
false;
"abc".startsWith("bcde", true);
false;
"abc".startsWith("", "x");
true;
"abc".startsWith("\0", "x");
false;
"abc".startsWith("a", "x");
true;
"abc".startsWith("b", "x");
false;
"abc".startsWith("ab", "x");
true;
"abc".startsWith("bc", "x");
false;
"abc".startsWith("abc", "x");
true;
"abc".startsWith("bcd", "x");
false;
"abc".startsWith("abcd", "x");
false;
"abc".startsWith("bcde", "x");
false;
"[a-z]+(bar)?".startsWith("[a-z]+");
true;

(function () {
  "[a-z]+(bar)?".startsWith(/[a-z]+/);
})();

TypeError;
"[a-z]+(bar)?".startsWith("(bar)?", 6);
true;

(function () {
  "[a-z]+(bar)?".startsWith(/(bar)?/);
})();

TypeError;

(function () {
  "[a-z]+/(bar)?/".startsWith(/(bar)?/);
})();

TypeError;
// http://mathiasbynens.be/notes/javascript-unicode#poo-test
var string = "I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9";
string.startsWith("");
true;
string.startsWith("\xF1t\xEBr");
false;
string.startsWith("\xF1t\xEBr", 1);
true;
string.startsWith("\xE0liz\xE6");
false;
string.startsWith("\xE0liz\xE6", 11);
true;
string.startsWith("\xF8n\u2603\uD83D\uDCA9");
false;
string.startsWith("\xF8n\u2603\uD83D\uDCA9", 18);
true;
string.startsWith("\u2603");
false;
string.startsWith("\u2603", 20);
true;
string.startsWith("\uD83D\uDCA9");
false;
string.startsWith("\uD83D\uDCA9", 21);
true;

(function () {
  String.prototype.startsWith.call(undefined);
})();

TypeError;

(function () {
  String.prototype.startsWith.call(undefined, "b");
})();

TypeError;

(function () {
  String.prototype.startsWith.call(undefined, "b", 4);
})();

TypeError;

(function () {
  String.prototype.startsWith.call(null);
})();

TypeError;

(function () {
  String.prototype.startsWith.call(null, "b");
})();

TypeError;

(function () {
  String.prototype.startsWith.call(null, "b", 4);
})();

TypeError;
String.prototype.startsWith.call(42, "2");
false;
String.prototype.startsWith.call(42, "4");
true;
String.prototype.startsWith.call(42, "b", 4);
false;
String.prototype.startsWith.call(42, "2", 1);
true;
String.prototype.startsWith.call(42, "2", 4);
false;
String.prototype.startsWith.call({
  "toString": function () {
    return "abc";
  }
}, "b", 0);
false;
String.prototype.startsWith.call({
  "toString": function () {
    return "abc";
  }
}, "b", 1);
true;
String.prototype.startsWith.call({
  "toString": function () {
    return "abc";
  }
}, "b", 2);
false;

(function () {
  String.prototype.startsWith.call({
    "toString": function () {
      throw RangeError();
    }
  }, /./);
})();

RangeError;

(function () {
  String.prototype.startsWith.call({
    "toString": function () {
      return "abc";
    }
  }, /./);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(undefined);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(undefined, ["b"]);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(undefined, ["b", 4]);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(null);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(null, ["b"]);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(null, ["b", 4]);
})();

TypeError;
String.prototype.startsWith.apply(42, ["2"]);
false;
String.prototype.startsWith.apply(42, ["4"]);
true;
String.prototype.startsWith.apply(42, ["b", 4]);
false;
String.prototype.startsWith.apply(42, ["2", 1]);
true;
String.prototype.startsWith.apply(42, ["2", 4]);
false;
String.prototype.startsWith.apply({
  "toString": function () {
    return "abc";
  }
}, ["b", 0]);
false;
String.prototype.startsWith.apply({
  "toString": function () {
    return "abc";
  }
}, ["b", 1]);
true;
String.prototype.startsWith.apply({
  "toString": function () {
    return "abc";
  }
}, ["b", 2]);
false;

(function () {
  String.prototype.startsWith.apply({
    "toString": function () {
      throw RangeError();
    }
  }, [/./]);
})();

RangeError;

(function () {
  String.prototype.startsWith.apply({
    "toString": function () {
      return "abc";
    }
  }, [/./]);
})();

TypeError;
// startsWith does its brand checks with Symbol.match
var re = /./;

(function () {
  "".startsWith(re);
})();

TypeError;
re[Symbol.match] = false;
false;
"".startsWith(re);
