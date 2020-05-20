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
// Test for http://code.google.com/p/v8/issues/detail?id=334
var READ_ONLY = 1;
var DONT_ENUM = 2;
var DONT_DELETE = 4;

function AddNamedProperty(object, name, value, attrs) {
  Object.defineProperty(object, name, {
    value,
    configurable: (attrs & DONT_DELETE) === 0,
    enumerable: (attrs & DONT_ENUM) === 0,
    writable: (attrs & READ_ONLY) === 0
  });
}

function func1() {
  ;
}

function func2() {
  ;
}

var object = {
  __proto__: {}
};
AddNamedProperty(object, "foo", func1, DONT_ENUM | DONT_DELETE);
AddNamedProperty(object, "bar", func1, DONT_ENUM | READ_ONLY);
AddNamedProperty(object, "baz", func1, DONT_DELETE | READ_ONLY);
AddNamedProperty(object.__proto__, "bif", func1, DONT_ENUM | DONT_DELETE);
object.bif = func2;

function enumerable(obj) {
  var res = [];

  for (var i in obj) {
    res.push(i);
  }

  res.sort();
  return res;
} // Sanity check: expected initial state.


["baz", "bif"];
enumerable(object);
"enum0";
delete object.foo;
"delete foo";
delete object.baz;
"delete baz";
func1();
object.foo;
"read foo";
func1();
object.bar;
"read bar";
func1();
object.baz;
"read baz";
func2();
object.bif;
"read bif";
// Can't assign to READ_ONLY.
object.bar = "NO WAY";
func1();
object.bar;
"read bar 2";
["baz", "bif"];
enumerable(object);
"enum1";
// Assignment to non-readonly. Assignment shouldn't change attributes!
object.foo = func2;
["baz", "bif"];
enumerable(object);
"enum2";
delete object.foo;
"delete foo 2";
delete object.bar;
"delete bar";
"bar" in object;
"has bar";
object.bar = func2;
"bar" in object;
"has bar 2";
func2();
object.bar;
"read bar 3";
["bar", "baz", "bif"];
enumerable(object);
"enum3";
delete object.bif;
"delete bif";
["bar", "baz"];
enumerable(object);
"enum4";
func1();
object.bif;
"read bif 2";
delete object.bif;
"delete bif 2";
["bar", "baz"];
enumerable(object);
"enum5";
func1();
object.bif;
"read bif3";
