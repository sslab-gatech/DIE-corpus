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
// Test that we can set function prototypes to non-object values.  The
// prototype used for instances in that case should be the initial
// object prototype.  ECMA-262 13.2.2.
function TestNonObjectPrototype(value) {
  function F() {
    ;
  }

  ;
  F.prototype = value;
  var f = new F();
  value;
  F.prototype;
  Object.prototype;
  f.__proto__;
  // Test that map transitions don't break anything.
  F.property = "value";
  value;
  F.prototype;
}

var values = [123, "asdf", true];
values.forEach(TestNonObjectPrototype); // Test moving between non-object and object values.

function F() {
  ;
}

;
var f = new F();
f.__proto__;
F.prototype;
F.prototype = 42;
f = new F();
Object.prototype;
f.__proto__;
42;
F.prototype;
F.prototype = {
  a: 42
};
f = new F();
42;
F.prototype.a;
f.__proto__;
F.prototype;

// Test that the fast case optimizations can handle non-functions,
// functions with no prototypes (yet), non-object prototypes,
// functions without initial maps, and the fully initialized
// functions.
function GetPrototypeOf(f) {
  return f.prototype;
}

; // Seed the GetPrototypeOf function to enable the fast case
// optimizations.

var p = GetPrototypeOf(GetPrototypeOf); // Check that getting the prototype of a tagged integer works.

typeof GetPrototypeOf(1) == 'undefined';

function NoPrototypeYet() {
  ;
}

var p = GetPrototypeOf(NoPrototypeYet);
NoPrototypeYet.prototype;
p;

function NonObjectPrototype() {
  ;
}

NonObjectPrototype.prototype = 42;
42;
GetPrototypeOf(NonObjectPrototype);

function NoInitialMap() {
  ;
}

var p = NoInitialMap.prototype;
p;
GetPrototypeOf(NoInitialMap);
F.prototype;
GetPrototypeOf(F);
87;
GetPrototypeOf({
  prototype: 87
});
// Check the prototype is not enumerable, as per ES5 section 15.3.5.2.  Note
// that this is in difference to ES3, which specified that function instances
// would have enumerable prototypes (section 15.3.5.2 also).
var foo = new Function("return x");
var result = "";

for (var n in foo) {
  result += n;
}

result;
"";
f = new Function('return 1;');
var desc = Object.getOwnPropertyDescriptor(f, "prototype");
desc.configurable;
desc.enumerable;
desc.writable;
f = Function('return 1;');
var desc = Object.getOwnPropertyDescriptor(f, "prototype");
desc.configurable;
desc.enumerable;
desc.writable;

f = function () {
  return 1;
};

var desc = Object.getOwnPropertyDescriptor(f, "prototype");
desc.configurable;
desc.enumerable;
desc.writable;
