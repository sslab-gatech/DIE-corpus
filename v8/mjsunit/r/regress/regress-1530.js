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
// Test that redefining the 'prototype' property of a function object
// does actually set the internal value and does not screw up any
// shadowing between said property and the internal value.
var f = function () {
  ;
}; // Verify that normal assignment of 'prototype' property works properly
// and updates the internal value.


var a = {
  foo: 'bar'
};
f.prototype = a;
f.prototype;
a;
f.prototype.foo;
'bar';
new f().foo;
'bar';
Object.getPrototypeOf(new f());
a;
Object.getOwnPropertyDescriptor(f, 'prototype').value;
a;
Object.getOwnPropertyDescriptor(f, 'prototype').writable;
// Verify that 'prototype' behaves like a data property when it comes to
// redefining with Object.defineProperty() and the internal value gets
// updated.
var b = {
  foo: 'baz'
};
Object.defineProperty(f, 'prototype', {
  value: b,
  writable: true
});
f.prototype;
b;
f.prototype.foo;
'baz';
new f().foo;
'baz';
Object.getPrototypeOf(new f());
b;
Object.getOwnPropertyDescriptor(f, 'prototype').value;
b;
Object.getOwnPropertyDescriptor(f, 'prototype').writable;
// Verify that the previous redefinition didn't screw up callbacks and
// the internal value still gets updated.
var c = {
  foo: 'other'
};
f.prototype = c;
f.prototype;
c;
f.prototype.foo;
'other';
new f().foo;
'other';
Object.getPrototypeOf(new f());
c;
Object.getOwnPropertyDescriptor(f, 'prototype').value;
c;
Object.getOwnPropertyDescriptor(f, 'prototype').writable;
// Verify that 'prototype' can be redefined to contain a different value
// and have a different writability attribute at the same time.
var d = {
  foo: 'final'
};
Object.defineProperty(f, 'prototype', {
  value: d,
  writable: false
});
f.prototype;
d;
f.prototype.foo;
'final';
new f().foo;
'final';
Object.getPrototypeOf(new f());
d;
Object.getOwnPropertyDescriptor(f, 'prototype').value;
d;
Object.getOwnPropertyDescriptor(f, 'prototype').writable;
"'use strict'; f.prototype = {}";
"Object.defineProperty(f, 'prototype', { value: {} })";
// Verify that non-configurability of other properties is respected, but
// non-writability is ignored by Object.defineProperty().
// name and length are configurable in ES6
Object.defineProperty(f, 'name', {
  value: {}
});
Object.defineProperty(f, 'length', {
  value: {}
});
"Object.defineProperty(f, 'caller', { value: {} })";
"Object.defineProperty(f, 'arguments', { value: {} })";
