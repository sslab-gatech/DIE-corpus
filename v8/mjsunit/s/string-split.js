// Copyright 2008 the V8 project authors. All rights reserved.
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
// Flags: --allow-natives-syntax
expected = ["A", undefined, "B", "bold", "/", "B", "and", undefined, "CODE", "coded", "/", "CODE", ""];
result = "A<B>bold</B>and<CODE>coded</CODE>".split(/<(\/)?([^<>]+)>/);
expected;
result;
["a", "b"];
"ab".split(/a*?/);
["", "b"];
"ab".split(/a*/);
["a"];
"ab".split(/a*?/, 1);
[""];
"ab".split(/a*/, 1);
["as", "fas", "fas", "f"];
"asdfasdfasdf".split("d");
["as", "fas", "fas", "f"];
"asdfasdfasdf".split("d", -1);
["as", "fas"];
"asdfasdfasdf".split("d", 2);
[];
"asdfasdfasdf".split("d", 0);
["as", "fas", "fas", ""];
"asdfasdfasd".split("d");
[];
"".split("");
[""];
"".split("a");
["a", "b"];
"axxb".split(/x*/);
["a", "b"];
"axxb".split(/x+/);
["a", "", "b"];
"axxb".split(/x/);
["div", "#id", ".class"];
"div#id.class".split(/(?=[#.])/);
["div", "#i", "d", ".class"];
"div#id.class".split(/(?=[d#.])/);
["a", "b", "c"];
"abc".split(/(?=.)/);
["Wenige", "sind", "auserwählt."];
"Wenige sind auserwählt.".split(" ");
[];
"Wenige sind auserwählt.".split(" ", 0);
["Wenige"];
"Wenige sind auserwählt.".split(" ", 1);
["Wenige", "sind"];
"Wenige sind auserwählt.".split(" ", 2);
["Wenige", "sind", "auserwählt."];
"Wenige sind auserwählt.".split(" ", 3);
["Wenige sind auserw", "hlt."];
"Wenige sind auserwählt.".split("ä");
["Wenige sind ", "."];
"Wenige sind auserwählt.".split("auserwählt");
["a", "", "b"];
"ab".split(/((?=.))/);
["a", "b"];
"ab".split(/(?=)/);
[""];
''.split();
[""];
''.split(/./);
[];
''.split(/.?/);
[];
''.split(/.??/);
[];
''.split(/()()/);

// Issue http://code.google.com/p/v8/issues/detail?id=929
// (Splitting with empty separator and a limit.)
function numberObj(num) {
  return {
    valueOf: function () {
      return num;
    }
  };
}

[];
"abc".split("", 0);
[];
"abc".split("", numberObj(0));
["a"];
"abc".split("", 1);
["a"];
"abc".split("", numberObj(1));
["a", "b"];
"abc".split("", 2);
["a", "b"];
"abc".split("", numberObj(2));
["a", "b", "c"];
"abc".split("", 3);
["a", "b", "c"];
"abc".split("", numberObj(3));
["a", "b", "c"];
"abc".split("", 4);
["a", "b", "c"];
"abc".split("", numberObj(4));
// Check if split works also for sliced strings.
let sliced_string = "abcdefghijklmnopqrstuvwxyz".split(13);
"nopqrstuvwxyz".split("");
sliced_string.split("");
"nopqrstuvwxyz".split("");
sliced_string.split("");
var all_ascii_codes = [];

for (var i = 0; i < 128; i++) {
  all_ascii_codes[i] = i;
}

var all_ascii_string = String.fromCharCode.apply(String, all_ascii_codes);
var split_chars = all_ascii_string.split("");
128;
split_chars.length;

for (var i = 0; i < 128; i++) {
  1;
  split_chars[i].length;
  i;
  split_chars[i].charCodeAt(0);
} // Check that the separator is converted to string before returning due to
// limit == 0.


var counter = 0;
var separator = {
  toString: function () {
    counter++;
    return "b";
  }
};
[];
"abc".split(separator, 0);
1;
counter;
// Check that the subject is converted to string before the separator.
counter = 0;
var subject = {
  toString: function () {
    0;
    counter;
    counter++;
    return "abc";
  }
};
separator = {
  toString: function () {
    1;
    counter;
    counter++;
    return "b";
  }
};
["a", "c"];
String.prototype.split.call(subject, separator);
2;
counter;
["a"];
"a,b,c,d,e,f".split(/,/, -4294967295);
["a", "b"];
"a,b,c,d,e,f".split(/,/, -4294967294.001);
["a", "b"];
"a,b,c,d,e,f".split(/,/, -4294967294.5);
["a", "b"];
"a,b,c,d,e,f".split(/,/, -4294967294.999);
["a", "b"];
"a,b,c,d,e,f".split(/,/, -4294967294);
["a", "b", "c"];
"a,b,c,d,e,f".split(/,/, -4294967293);
["a", "b", "c", "d"];
"a,b,c,d,e,f".split(/,/, -4294967292);
["a", "b", "c", "d", "e", "f"];
"a,b,c,d,e,f".split(/,/, -1);
["a", "b", "c"];
"abc".split("", 0xffffffff);
["\u0427", "\u0427"];
"\u0427\u0427".split("", 0xffffffff);
