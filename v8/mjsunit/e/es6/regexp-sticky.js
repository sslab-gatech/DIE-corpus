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
var re = /foo.bar/;
!!"foo*bar".match(re);
!!"..foo*bar".match(re);
var plain = /foobar/;
!!"foobar".match(plain);
!!"..foobar".match(plain);
var sticky = /foo.bar/y;
!!"foo*bar".match(sticky);
7;
sticky.lastIndex;
!!"..foo*bar".match(sticky);
var stickyplain = /foobar/y;
!!"foobarfoobar".match(stickyplain);
6;
stickyplain.lastIndex;
!!"foobarfoobar".match(stickyplain);
12;
stickyplain.lastIndex;
!!"..foobarfoobar".match(stickyplain);
var global = /foo.bar/g;
global.test("foo*bar");
global.test("..foo*bar");
global.lastIndex = 0;
global.test("..foo*bar");
var plainglobal = /foobar/g;
plainglobal.test("foobar");
plainglobal.test("foobar");
plainglobal.lastIndex = 0;
plainglobal.test("foobar");
var stickyglobal = /foo.bar/gy;
stickyglobal.test("foo*bar");
7;
stickyglobal.lastIndex;
stickyglobal.test("..foo*bar");
stickyglobal.lastIndex = 0;
stickyglobal.test("..foo*bar");
stickyglobal.lastIndex = 2;
stickyglobal.test("..foo*bar");
9;
stickyglobal.lastIndex;
var stickyplainglobal = /foobar/yg;
stickyplainglobal.sticky;
stickyplainglobal.sticky = false;
stickyplainglobal.test("foobar");
6;
stickyplainglobal.lastIndex;
stickyplainglobal.test("..foobar");
stickyplainglobal.lastIndex = 0;
stickyplainglobal.test("..foobar");
stickyplainglobal.lastIndex = 2;
stickyplainglobal.test("..foobar");
8;
stickyplainglobal.lastIndex;
"/foo.bar/gy";
"" + stickyglobal;
"/foo.bar/g";
"" + global;
stickyglobal.sticky;
stickyglobal.sticky = false;
stickyglobal.sticky;
var stickyglobal2 = new RegExp("foo.bar", "gy");
stickyglobal2.test("foo*bar");
7;
stickyglobal2.lastIndex;
stickyglobal2.test("..foo*bar");
stickyglobal2.lastIndex = 0;
stickyglobal2.test("..foo*bar");
stickyglobal2.lastIndex = 2;
stickyglobal2.test("..foo*bar");
9;
stickyglobal2.lastIndex;
"/foo.bar/gy";
"" + stickyglobal2;
stickyglobal2.sticky;
stickyglobal2.sticky = false;
stickyglobal2.sticky;
sticky.lastIndex = -1; // Causes sticky regexp to fail fast

sticky.test("..foo.bar");
0;
sticky.lastIndex;
sticky.lastIndex = -1; // Causes sticky regexp to fail fast

!!sticky.exec("..foo.bar");
0;
sticky.lastIndex;
// ES6 draft says: Even when the y flag is used with a pattern, ^ always
// matches only at the beginning of Input, or (if Multiline is true) at the
// beginning of a line.
var hat = /^foo/y;
hat.lastIndex = 2;
hat.test("..foo");
var mhat = /^foo/my;
mhat.lastIndex = 2;
mhat.test("..foo");
mhat.lastIndex = 2;
mhat.test(".\nfoo");
// Check that we don't apply incorrect optimization to sticky regexps that
// are anchored at end.
var stickyanchored = /bar$/y;
stickyanchored.test("foobar");
stickyanchored.lastIndex = 3;
stickyanchored.test("foobar");
