// Copyright 2013 the V8 project authors. All rights reserved.
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
String.prototype.includes.length;
var s = 'a';
s.includes(null);
s.includes(undefined);
s.includes();
var reString = "asdf[a-z]+(asdf)?";
reString.includes("[a-z]+");
reString.includes("(asdf)?");
// Random greek letters
var twoByteString = "\u039a\u0391\u03a3\u03a3\u0395"; // Test single char pattern

twoByteString.includes("\u039a");
"Lamda";
twoByteString.includes("\u0391");
"Alpha";
twoByteString.includes("\u03a3");
"First Sigma";
twoByteString.includes("\u03a3", 3);
"Second Sigma";
twoByteString.includes("\u0395");
"Epsilon";
twoByteString.includes("\u0392");
"Not beta";
twoByteString.includes("\u039a\u0391");
"lambda Alpha";
twoByteString.includes("\u0391\u03a3");
"Alpha Sigma";
twoByteString.includes("\u03a3\u03a3");
"Sigma Sigma";
twoByteString.includes("\u03a3\u0395");
"Sigma Epsilon";
twoByteString.includes("\u0391\u03a3\u0395");
"Not Alpha Sigma Epsilon";
twoByteString.includes("\u0395");
"String.prototype.includes.call(null, 'test')";
TypeError;
"String.prototype.includes.call(null, null)";
TypeError;
"String.prototype.includes.call(undefined, undefined)";
TypeError;
"String.prototype.includes.apply(null, ['test'])";
TypeError;
"String.prototype.includes.apply(null, [null])";
TypeError;
"String.prototype.includes.apply(undefined, [undefined])";
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
var i = 0;
var l = TEST_INPUT.length;

for (; i < l; i++) {
  var e = TEST_INPUT[i];
  var v = e.val;
  var s = String(v);
  s.includes(v);
  e.msg;
  String.prototype.includes.call(v, v);
  e.msg;
  String.prototype.includes.apply(v, [v]);
  e.msg;
} // Test cases found in FF


"abc".includes("a");
"abc".includes("b");
"abc".includes("abc");
"abc".includes("bc");
"abc".includes("d");
"abc".includes("abcd");
"abc".includes("ac");
"abc".includes("abc", 0);
"abc".includes("bc", 0);
"abc".includes("de", 0);
"abc".includes("bc", 1);
"abc".includes("c", 1);
"abc".includes("a", 1);
"abc".includes("abc", 1);
"abc".includes("c", 2);
"abc".includes("d", 2);
"abc".includes("dcd", 2);
"abc".includes("a", 42);
"abc".includes("a", Infinity);
"abc".includes("ab", -43);
"abc".includes("cd", -42);
"abc".includes("ab", -Infinity);
"abc".includes("cd", -Infinity);
"abc".includes("ab", NaN);
"abc".includes("cd", NaN);
"xyzzy".includes("zy\0", 2);
var dots = Array(10000).join(".");
dots.includes("\x01", 10000);
dots.includes("\0", 10000);
var myobj = {
  toString: function () {
    return "abc";
  },
  includes: String.prototype.includes
};
myobj.includes("abc");
myobj.includes("cd");
var gotStr = false;
var gotPos = false;
myobj = {
  toString: function () {
    gotPos;
    gotStr = true;
    return "xyz";
  },
  includes: String.prototype.includes
};
"foo[a-z]+(bar)?".includes("[a-z]+");
true;
"'foo[a-z]+(bar)?'.includes(/[a-z]+/)";
TypeError;
"'foo/[a-z]+/(bar)?'.includes(/[a-z]+/)";
TypeError;
"foo[a-z]+(bar)?".includes("(bar)?");
true;
"'foo[a-z]+(bar)?'.includes(/(bar)?/)";
TypeError;
"'foo[a-z]+/(bar)?/'.includes(/(bar)?/)";
TypeError;
"String.prototype.includes.call({ 'toString': function() { " + "throw RangeError(); } }, /./)";
RangeError;
"String.prototype.includes.call({ 'toString': function() { " + "return 'abc'; } }, /./)";
TypeError;
"String.prototype.includes.apply({ 'toString': function() { " + "throw RangeError(); } }, [/./])";
RangeError;
"String.prototype.includes.apply({ 'toString': function() { " + "return 'abc'; } }, [/./])";
TypeError;
// includes does its brand checks with Symbol.match
var re = /./;

(function () {
  "".includes(re);
})();

TypeError;
re[Symbol.match] = false;
false;
"".includes(re);
