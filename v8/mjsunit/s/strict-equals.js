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
var n = null;
var u = void 0;
null === null;
null === n;
n === null;
n === n;
null === void 0;
void 0 === null;
u === null;
null === u;
n === u;
u === n;
void 0 === void 0;
u === u;
u === void 0;
void 0 === u;
'foo' === 'foo';
'bar' === 'foo';
'foo' === new String('foo');
new String('foo') === new String('foo');
var s = new String('foo');
s === s;
s === null;
s === void 0;
'foo' === null;
'foo' === 7;
'foo' === true;
'foo' === void 0;
'foo' === {};
({}) === {};
var x = {};
x === x;
x === null;
x === 7;
x === true;
x === void 0;
x === {};
true === true;
false === false;
false === true;
true === false;
true === new Boolean(true);
true === new Boolean(false);
false === new Boolean(true);
false === new Boolean(false);
true === 0;
true === 1;
0 === 0;
-0 === -0;
-0 === 0;
0 === -0;
0 === new Number(0);
1 === new Number(1);
4.2 === 4.2;
4.2 === Number(4.2);
