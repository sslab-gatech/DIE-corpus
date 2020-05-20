// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Do not read out the prototype from a cross-realm object.
__proto__ = {};
__proto__ = new Proxy({}, {
  getPrototypeOf() {}

}); // Test that the instannceof check works in optimized code.

test();
test();
test();
test();
__proto__ = {};
__proto__ = new Proxy({}, {
  get(t, p, r) {}

});
__proto__ = {};
__proto__.__proto__ = new Proxy({}, {
  getPrototypeOf() {}

}); // 2-level proxy indirection

__proto__ = {};
__proto__ = new Proxy({}, new Proxy({}, {
  get() {}

}));
