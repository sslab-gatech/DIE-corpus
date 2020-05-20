// Copyright 2011 the V8 project authors. All rights reserved.
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
Boolean(void 0);
false;
Boolean(null);
false;
Boolean(false);
false;
Boolean(true);
true;
Boolean(0);
false;
Boolean(1);
true;
Boolean(assertEquals);
true;
Boolean(new Object());
true;
new Boolean(false) !== false;
new Boolean(false) == false;
new Boolean(true) !== true;
new Boolean(true) == true;
true;
!false;
false;
!true;
true;
!!true;
false;
!!false;
true;
true ? true : false;
false;
false ? true : false;
false;
true ? false : true;
true;
false ? false : true;
true;
true && true;
false;
true && false;
false;
false && true;
false;
false && false;
// Regression.
var t = 42;
void 0;
t.p;
void 0;
t.p && true;
void 0;
t.p && false;
void 0;
t.p && t.p == 0;
void 0;
t.p && t.p == null;
void 0;
t.p && t.p == t.p;
var o = new Object();
o.p = 'foo';
'foo';
o.p;
'foo';
o.p || true;
'foo';
o.p || false;
'foo';
o.p || o.p == 0;
'foo';
o.p || o.p == null;
'foo';
o.p || o.p == o.p;

// JSToBoolean(x:string)
function f(x) {
  return !!("" + x);
}

false;
f("");
true;
f("narf");
true;
f(12345678);
true;
f(undefined);
