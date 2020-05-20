// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test loading existent and nonexistent properties from dictionary
// mode objects.
function SlowObject() {
  this.foo = 1;
  this.bar = 2;
  this.qux = 3;
  this.z = 4;
  delete this.qux;
}

function SlowObjectWithBaz() {
  var o = new SlowObject();
  o.baz = 4;
  return o;
}

function Load(o) {
  return o.baz;
}

for (var i = 0; i < 10; i++) {
  var o1 = new SlowObject();
  var o2 = SlowObjectWithBaz();
  undefined;
  Load(o1);
  4;
  Load(o2);
} // Test objects getting optimized as fast prototypes.


function SlowPrototype() {
  this.foo = 1;
}

SlowPrototype.prototype.bar = 2;
SlowPrototype.prototype.baz = 3;
SlowPrototype.prototype.z = 4;
delete SlowPrototype.prototype.baz;
var slow_proto = new SlowPrototype(); // ICs make prototypes fast.

function ic() {
  return slow_proto.bar;
}

ic();
ic(); // Prototypes stay fast even after deleting properties.

var fast_proto = new SlowPrototype();
