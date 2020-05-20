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
function assertPrototypeOf(func, expected) {
  expected;
  Object.getPrototypeOf(func);
}

(function () {
  Object.getPrototypeOf(undefined);
})();

TypeError;

(function () {
  Object.getPrototypeOf(null);
})();

TypeError;

function F() {
  ;
}

;
var y = new F();
y;
F.prototype;
F();
Function.prototype;
({
  x: 5
});
Object.prototype;
({
  x: 5,
  __proto__: null
});
null;
[1, 2];
Array.prototype;
1;
Number.prototype;
true;
Boolean.prototype;
false;
Boolean.prototype;
'str';
String.prototype;
Symbol();
Symbol.prototype;
var errorFunctions = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];

for (var f of errorFunctions) {
  f;
  Error;
  new f();
  f.prototype;
} // Builtin constructors.


var functions = [Array, ArrayBuffer, Boolean, // DataView,
Date, Error, // Float32Array, prototype is %TypedArray%
// Float64Array,
Function, // Int16Array,
// Int32Array,
// Int8Array,
Map, Number, Object, // Promise,
RegExp, Set, String, // Symbol, not constructible
// Uint16Array,
// Uint32Array,
// Uint8Array,
// Uint8ClampedArray,
WeakMap, WeakSet];

for (var f of functions) {
  f;
  Function.prototype;
  new f();
  f.prototype;
}

var p = new Promise(function () {
  ;
});
p;
Promise.prototype;
var dv = new DataView(new ArrayBuffer());
dv;
DataView.prototype;
