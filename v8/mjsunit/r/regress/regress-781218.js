// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var m = new Map();

function C() {
  ;
} // Make sure slack tracking kicks in and shrinks the default size to prevent
// any further in-object properties.


function f(o) {
  o.x = true;
} // Warm up {f}.


f(new C());
f(new C());
var o = new C(); // We need at least 2 elements in the Map.

m.set({}, 3); // This creates hash code on o.

m.set(o, 1); // Add an out-of-object property.

o.x = true; // Delete the property (so we have no out-of-object properties).

delete o.x; // Ensure that growing the properties backing store in optimized code preserves
// the hash.

f(o);
1;
m.get(o);

// Grow the Map and ensure the object is still found.
for (let i = 0; i < 1000; i++) {
  let object = {};
  m.set(object, object);
  1;
  m.get(o);
}
