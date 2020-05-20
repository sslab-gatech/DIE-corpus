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

/**
 * @fileoverview Check that the global escape and unescape functions work
 * right.
 */
// Section B.2.1 of ECMAScript 3
var unescaped = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@*_+-./"; // Check the unescape chars are not escaped

unescaped;
escape(unescaped);
"%20/%20";
escape(" / ");
"%000";
escape("\0" + "0");
"A%20B%u1234%00%20C";
escape(String.fromCharCode(0x41, 0x20, 0x42, 0x1234, 0, 0x20, 0x43));
"%u0123";
escape(String.fromCharCode(0x123));
"%uABCD";
escape(String.fromCharCode(0xabcd));
"%AB";
escape(String.fromCharCode(0xab));
"%0A";
escape("\n");

// Check first 1000 chars individually for escaped/not escaped
for (var i = 0; i < 1000; i++) {
  var s = String.fromCharCode(i);

  if (unescaped.indexOf(s, 0) == -1) {
    s == escape(s);
  } else {
    s == escape(s);
  }
} // Check all chars up to 1000 in groups of 10 using unescape as a check


for (var i = 0; i < 1000; i += 10) {
  var s = String.fromCharCode(i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9);
  s;
  unescape(escape(s));
} // Benchmark


var example = "Now is the time for all good men to come to the aid of the party.";
example = example + String.fromCharCode(267, 0x1234, 0x6667, 0xabcd);
example = example + " The quick brown fox jumps over the lazy dog.";
example = example + String.fromCharCode(171, 172, 173, 174, 175, 176, 178, 179);

for (var i = 0; i < 3000; i++) {
  example;
  unescape(escape(example));
} // Check unescape can cope with upper and lower case


unescape("%41%4A%4a");
"AJJ";
"%U1234";
unescape("%U1234");
"%";
unescape("%");
"%4";
unescape("%4");
"%u";
unescape("%u");
"%u4";
unescape("%u4");
"%u44";
unescape("%u44");
"%u444";
unescape("%u444");
"%4z";
unescape("%4z");
"%uzzzz";
unescape("%uzzzz");
"%u4zzz";
unescape("%u4zzz");
"%u44zz";
unescape("%u44zz");
"%u444z";
unescape("%u444z");
"%4<";
unescape("%4<");
"%u<<<<";
unescape("%u<<<<");
"%u4<<<";
unescape("%u4<<<");
"%u44<<";
unescape("%u44<<");
"%u444<";
unescape("%u444<");
"foo%4<";
unescape("foo%4<");
"foo%u<<<<";
unescape("foo%u<<<<");
"foo%u4<<<";
unescape("foo%u4<<<");
"foo%u44<<";
unescape("foo%u44<<");
"foo%u444<";
unescape("foo%u444<");
"foo%4<bar";
unescape("foo%4<bar");
"foo%u<<<<bar";
unescape("foo%u<<<<bar");
"foo%u4<<<bar";
unescape("foo%u4<<<bar");
"foo%u44<<bar";
unescape("foo%u44<<bar");
"foo%u444<bar";
unescape("foo%u444<bar");
"% ";
unescape("%%20");
"%% ";
unescape("%%%20");
// Unescape stress
var eexample = escape(example);

for (var i = 1; i < 3000; i++) {
  example;
  unescape(eexample);
}
