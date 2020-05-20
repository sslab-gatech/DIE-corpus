// Copyright 2010 the V8 project authors. All rights reserved.
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
// Test the SameValue and SameValueZero internal methods.
var obj1 = {
  x: 10,
  y: 11,
  z: "test"
};
var obj2 = {
  x: 10,
  y: 11,
  z: "test"
}; // Object.is() uses the SameValue algorithm.

var sameValue = Object.is; // Set#has() uses the SameValueZero algorithm.

var sameValueZero = (x, y) => new Set([x]).has(y); // Calls SameValue and SameValueZero and checks that their results match.


function sameValueBoth(a, b) {
  var result = sameValue(a, b);
  result === sameValueZero(a, b);
  return result;
} // Calls SameValue and SameValueZero and checks that their results don't match.


function sameValueZeroOnly(a, b) {
  var result = sameValueZero(a, b);
  result && !sameValue(a, b);
  return result;
}

sameValueBoth(0, 0);
sameValueBoth(+0, +0);
sameValueBoth(-0, -0);
sameValueBoth(1, 1);
sameValueBoth(2, 2);
sameValueBoth(-1, -1);
sameValueBoth(0.5, 0.5);
sameValueBoth(true, true);
sameValueBoth(false, false);
sameValueBoth(NaN, NaN);
sameValueBoth(null, null);
sameValueBoth("foo", "foo");
sameValueBoth(obj1, obj1);
sameValueBoth();
sameValueBoth(undefined, undefined);
sameValueBoth(0, 1);
sameValueBoth("foo", "bar");
sameValueBoth(obj1, obj2);
sameValueBoth(true, false);
sameValueBoth(obj1, true);
sameValueBoth(obj1, "foo");
sameValueBoth(obj1, 1);
sameValueBoth(obj1, undefined);
sameValueBoth(obj1, NaN);
sameValueBoth(undefined, true);
sameValueBoth(undefined, "foo");
sameValueBoth(undefined, 1);
sameValueBoth(undefined, obj1);
sameValueBoth(undefined, NaN);
sameValueBoth(NaN, true);
sameValueBoth(NaN, "foo");
sameValueBoth(NaN, 1);
sameValueBoth(NaN, obj1);
sameValueBoth(NaN, undefined);
sameValueBoth("foo", true);
sameValueBoth("foo", 1);
sameValueBoth("foo", obj1);
sameValueBoth("foo", undefined);
sameValueBoth("foo", NaN);
sameValueBoth(true, 1);
sameValueBoth(true, obj1);
sameValueBoth(true, undefined);
sameValueBoth(true, NaN);
sameValueBoth(true, "foo");
sameValueBoth(1, true);
sameValueBoth(1, obj1);
sameValueBoth(1, undefined);
sameValueBoth(1, NaN);
sameValueBoth(1, "foo");
sameValueBoth("1", 1);
sameValueBoth("true", true);
sameValueBoth("false", false);
sameValueBoth("undefined", undefined);
sameValueBoth("NaN", NaN);
sameValueZeroOnly(+0, -0);
sameValueZeroOnly(-0, +0);
