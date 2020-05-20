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
1;
String.prototype.endsWith.length;
var testString = "Hello World";
testString.endsWith("");
testString.endsWith("World");
testString.endsWith("world");
testString.endsWith("Hello World!");
testString.endsWith(null);
testString.endsWith(undefined);
testString.endsWith();
"null".endsWith(null);
"undefined".endsWith(undefined);
var georgianUnicodeString = "\u10D0\u10D1\u10D2\u10D3\u10D4\u10D5\u10D6\u10D7";
georgianUnicodeString.endsWith(georgianUnicodeString);
georgianUnicodeString.endsWith("\u10D4\u10D5\u10D6\u10D7");
georgianUnicodeString.endsWith("\u10D0");
"String.prototype.endsWith.call(null, 'test')";
TypeError;
"String.prototype.endsWith.call(null, null)";
TypeError;
"String.prototype.endsWith.call(undefined, undefined)";
TypeError;
"String.prototype.endsWith.apply(null, ['test'])";
TypeError;
"String.prototype.endsWith.apply(null, [null])";
TypeError;
"String.prototype.endsWith.apply(undefined, [undefined])";
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
    s.endsWith(v);
    e.msg;
    String.prototype.endsWith.call(v, v);
    e.msg;
    String.prototype.endsWith.apply(v, [v]);
    e.msg;
  }
}

testNonStringValues();

var CustomType = function (value) {
  this.endsWith = String.prototype.endsWith;

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
    o.endsWith(v);
    e.msg;
  }
}

testCutomType(); // Test cases found in FF

"abc".endsWith("abc");
"abcd".endsWith("bcd");
"abc".endsWith("c");
"abc".endsWith("abcd");
"abc".endsWith("bbc");
"abc".endsWith("b");
"abc".endsWith("abc", 3);
"abc".endsWith("bc", 3);
"abc".endsWith("a", 3);
"abc".endsWith("bc", 3);
"abc".endsWith("a", 1);
"abc".endsWith("abc", 1);
"abc".endsWith("b", 2);
"abc".endsWith("d", 2);
"abc".endsWith("dcd", 2);
"abc".endsWith("a", 42);
"abc".endsWith("bc", Infinity);
"abc".endsWith("a", Infinity);
"abc".endsWith("bc", undefined);
"abc".endsWith("bc", -43);
"abc".endsWith("bc", -Infinity);
"abc".endsWith("bc", NaN);
// Test cases taken from
// https://github.com/mathiasbynens/String.prototype.endsWith/blob/master/tests/tests.js
Object.prototype[1] = 2; // try to break `arguments[1]`

String.prototype.endsWith.length;
1;
String.prototype.propertyIsEnumerable("endsWith");
false;
"undefined".endsWith();
true;
"undefined".endsWith(undefined);
true;
"undefined".endsWith(null);
false;
"null".endsWith();
false;
"null".endsWith(undefined);
false;
"null".endsWith(null);
true;
"abc".endsWith();
false;
"abc".endsWith("");
true;
"abc".endsWith("\0");
false;
"abc".endsWith("c");
true;
"abc".endsWith("b");
false;
"abc".endsWith("ab");
false;
"abc".endsWith("bc");
true;
"abc".endsWith("abc");
true;
"abc".endsWith("bcd");
false;
"abc".endsWith("abcd");
false;
"abc".endsWith("bcde");
false;
"abc".endsWith("", NaN);
true;
"abc".endsWith("\0", NaN);
false;
"abc".endsWith("c", NaN);
false;
"abc".endsWith("b", NaN);
false;
"abc".endsWith("ab", NaN);
false;
"abc".endsWith("bc", NaN);
false;
"abc".endsWith("abc", NaN);
false;
"abc".endsWith("bcd", NaN);
false;
"abc".endsWith("abcd", NaN);
false;
"abc".endsWith("bcde", NaN);
false;
"abc".endsWith("", false);
true;
"abc".endsWith("\0", false);
false;
"abc".endsWith("c", false);
false;
"abc".endsWith("b", false);
false;
"abc".endsWith("ab", false);
false;
"abc".endsWith("bc", false);
false;
"abc".endsWith("abc", false);
false;
"abc".endsWith("bcd", false);
false;
"abc".endsWith("abcd", false);
false;
"abc".endsWith("bcde", false);
false;
"abc".endsWith("", undefined);
true;
"abc".endsWith("\0", undefined);
false;
"abc".endsWith("c", undefined);
true;
"abc".endsWith("b", undefined);
false;
"abc".endsWith("ab", undefined);
false;
"abc".endsWith("bc", undefined);
true;
"abc".endsWith("abc", undefined);
true;
"abc".endsWith("bcd", undefined);
false;
"abc".endsWith("abcd", undefined);
false;
"abc".endsWith("bcde", undefined);
false;
"abc".endsWith("", null);
true;
"abc".endsWith("\0", null);
false;
"abc".endsWith("c", null);
false;
"abc".endsWith("b", null);
false;
"abc".endsWith("ab", null);
false;
"abc".endsWith("bc", null);
false;
"abc".endsWith("abc", null);
false;
"abc".endsWith("bcd", null);
false;
"abc".endsWith("abcd", null);
false;
"abc".endsWith("bcde", null);
false;
"abc".endsWith("", -Infinity);
true;
"abc".endsWith("\0", -Infinity);
false;
"abc".endsWith("c", -Infinity);
false;
"abc".endsWith("b", -Infinity);
false;
"abc".endsWith("ab", -Infinity);
false;
"abc".endsWith("bc", -Infinity);
false;
"abc".endsWith("abc", -Infinity);
false;
"abc".endsWith("bcd", -Infinity);
false;
"abc".endsWith("abcd", -Infinity);
false;
"abc".endsWith("bcde", -Infinity);
false;
"abc".endsWith("", -1);
true;
"abc".endsWith("\0", -1);
false;
"abc".endsWith("c", -1);
false;
"abc".endsWith("b", -1);
false;
"abc".endsWith("ab", -1);
false;
"abc".endsWith("bc", -1);
false;
"abc".endsWith("abc", -1);
false;
"abc".endsWith("bcd", -1);
false;
"abc".endsWith("abcd", -1);
false;
"abc".endsWith("bcde", -1);
false;
"abc".endsWith("", -0);
true;
"abc".endsWith("\0", -0);
false;
"abc".endsWith("c", -0);
false;
"abc".endsWith("b", -0);
false;
"abc".endsWith("ab", -0);
false;
"abc".endsWith("bc", -0);
false;
"abc".endsWith("abc", -0);
false;
"abc".endsWith("bcd", -0);
false;
"abc".endsWith("abcd", -0);
false;
"abc".endsWith("bcde", -0);
false;
"abc".endsWith("", +0);
true;
"abc".endsWith("\0", +0);
false;
"abc".endsWith("c", +0);
false;
"abc".endsWith("b", +0);
false;
"abc".endsWith("ab", +0);
false;
"abc".endsWith("bc", +0);
false;
"abc".endsWith("abc", +0);
false;
"abc".endsWith("bcd", +0);
false;
"abc".endsWith("abcd", +0);
false;
"abc".endsWith("bcde", +0);
false;
"abc".endsWith("", 1);
true;
"abc".endsWith("\0", 1);
false;
"abc".endsWith("c", 1);
false;
"abc".endsWith("b", 1);
false;
"abc".endsWith("ab", 1);
false;
"abc".endsWith("bc", 1);
false;
"abc".endsWith("abc", 1);
false;
"abc".endsWith("bcd", 1);
false;
"abc".endsWith("abcd", 1);
false;
"abc".endsWith("bcde", 1);
false;
"abc".endsWith("", 2);
true;
"abc".endsWith("\0", 2);
false;
"abc".endsWith("c", 2);
false;
"abc".endsWith("b", 2);
true;
"abc".endsWith("ab", 2);
true;
"abc".endsWith("bc", 2);
false;
"abc".endsWith("abc", 2);
false;
"abc".endsWith("bcd", 2);
false;
"abc".endsWith("abcd", 2);
false;
"abc".endsWith("bcde", 2);
false;
"abc".endsWith("", +Infinity);
true;
"abc".endsWith("\0", +Infinity);
false;
"abc".endsWith("c", +Infinity);
true;
"abc".endsWith("b", +Infinity);
false;
"abc".endsWith("ab", +Infinity);
false;
"abc".endsWith("bc", +Infinity);
true;
"abc".endsWith("abc", +Infinity);
true;
"abc".endsWith("bcd", +Infinity);
false;
"abc".endsWith("abcd", +Infinity);
false;
"abc".endsWith("bcde", +Infinity);
false;
"abc".endsWith("", true);
true;
"abc".endsWith("\0", true);
false;
"abc".endsWith("c", true);
false;
"abc".endsWith("b", true);
false;
"abc".endsWith("ab", true);
false;
"abc".endsWith("bc", true);
false;
"abc".endsWith("abc", true);
false;
"abc".endsWith("bcd", true);
false;
"abc".endsWith("abcd", true);
false;
"abc".endsWith("bcde", true);
false;
"abc".endsWith("", "x");
true;
"abc".endsWith("\0", "x");
false;
"abc".endsWith("c", "x");
false;
"abc".endsWith("b", "x");
false;
"abc".endsWith("ab", "x");
false;
"abc".endsWith("bc", "x");
false;
"abc".endsWith("abc", "x");
false;
"abc".endsWith("bcd", "x");
false;
"abc".endsWith("abcd", "x");
false;
"abc".endsWith("bcde", "x");
false;
"[a-z]+(bar)?".endsWith("(bar)?");
true;

(function () {
  "[a-z]+(bar)?".endsWith(/(bar)?/);
})();

TypeError;
"[a-z]+(bar)?".endsWith("[a-z]+", 6);
true;

(function () {
  "[a-z]+(bar)?".endsWith(/(bar)?/);
})();

TypeError;

(function () {
  "[a-z]+/(bar)?/".endsWith(/(bar)?/);
})();

TypeError;
// http://mathiasbynens.be/notes/javascript-unicode#poo-test
var string = "I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9";
string.endsWith("");
true;
string.endsWith("\xF1t\xEBr");
false;
string.endsWith("\xF1t\xEBr", 5);
true;
string.endsWith("\xE0liz\xE6");
false;
string.endsWith("\xE0liz\xE6", 16);
true;
string.endsWith("\xF8n\u2603\uD83D\uDCA9");
true;
string.endsWith("\xF8n\u2603\uD83D\uDCA9", 23);
true;
string.endsWith("\u2603");
false;
string.endsWith("\u2603", 21);
true;
string.endsWith("\uD83D\uDCA9");
true;
string.endsWith("\uD83D\uDCA9", 23);
true;

(function () {
  String.prototype.endsWith.call(undefined);
})();

TypeError;

(function () {
  String.prototype.endsWith.call(undefined, "b");
})();

TypeError;

(function () {
  String.prototype.endsWith.call(undefined, "b", 4);
})();

TypeError;

(function () {
  String.prototype.endsWith.call(null);
})();

TypeError;

(function () {
  String.prototype.endsWith.call(null, "b");
})();

TypeError;

(function () {
  String.prototype.endsWith.call(null, "b", 4);
})();

TypeError;
String.prototype.endsWith.call(42, "2");
true;
String.prototype.endsWith.call(42, "4");
false;
String.prototype.endsWith.call(42, "b", 4);
false;
String.prototype.endsWith.call(42, "2", 1);
false;
String.prototype.endsWith.call(42, "2", 4);
true;
String.prototype.endsWith.call({
  "toString": function () {
    return "abc";
  }
}, "b", 0);
false;
String.prototype.endsWith.call({
  "toString": function () {
    return "abc";
  }
}, "b", 1);
false;
String.prototype.endsWith.call({
  "toString": function () {
    return "abc";
  }
}, "b", 2);
true;

(function () {
  String.prototype.endsWith.call({
    "toString": function () {
      throw RangeError();
    }
  }, /./);
})();

RangeError;

(function () {
  String.prototype.endsWith.call({
    "toString": function () {
      return "abc";
    }
  }, /./);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(undefined);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(undefined, ["b"]);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(undefined, ["b", 4]);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(null);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(null, ["b"]);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(null, ["b", 4]);
})();

TypeError;
String.prototype.endsWith.apply(42, ["2"]);
true;
String.prototype.endsWith.apply(42, ["4"]);
false;
String.prototype.endsWith.apply(42, ["b", 4]);
false;
String.prototype.endsWith.apply(42, ["2", 1]);
false;
String.prototype.endsWith.apply(42, ["2", 4]);
true;
String.prototype.endsWith.apply({
  "toString": function () {
    return "abc";
  }
}, ["b", 0]);
false;
String.prototype.endsWith.apply({
  "toString": function () {
    return "abc";
  }
}, ["b", 1]);
false;
String.prototype.endsWith.apply({
  "toString": function () {
    return "abc";
  }
}, ["b", 2]);
true;

(function () {
  String.prototype.endsWith.apply({
    "toString": function () {
      throw RangeError();
    }
  }, [/./]);
})();

RangeError;

(function () {
  String.prototype.endsWith.apply({
    "toString": function () {
      return "abc";
    }
  }, [/./]);
})();

TypeError;
// endsWith does its brand checks with Symbol.match
var re = /./;

(function () {
  "".startsWith(re);
})();

TypeError;
re[Symbol.match] = false;
false;
"".startsWith(re);
