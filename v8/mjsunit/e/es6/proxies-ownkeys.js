// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var target = {
  "target_one": 1
};
target.__proto__ = {
  "target_proto_two": 2
};
var handler = {
  ownKeys: function (target) {
    return ["foo", "bar"];
  }
};
var proxy = new Proxy(target, handler); // Simple case.

["foo", "bar"];
Reflect.ownKeys(proxy);
// Test interesting steps of the algorithm:
// Step 6: Fall through to target.[[OwnPropertyKeys]] if the trap is undefined.
handler.ownKeys = undefined;
["target_one"];
Reflect.ownKeys(proxy);

// Step 7: Throwing traps don't crash.
handler.ownKeys = function (target) {
  throw 1;
};

"Reflect.ownKeys(proxy)";
// Step 8: CreateListFromArrayLike error cases:
// Returning a non-Object throws.
var keys = 1;

handler.ownKeys = function (target) {
  return keys;
};

"Reflect.ownKeys(proxy)";
TypeError;
keys = "string";
"Reflect.ownKeys(proxy)";
TypeError;
keys = Symbol("foo");
"Reflect.ownKeys(proxy)";
TypeError;
keys = null;
"Reflect.ownKeys(proxy)";
TypeError;
// "length" property is honored.
keys = {
  0: "a",
  1: "b",
  2: "c"
};
keys.length = 0;
[];
Reflect.ownKeys(proxy);
keys.length = 1;
["a"];
Reflect.ownKeys(proxy);
keys.length = 3;
["a", "b", "c"];
Reflect.ownKeys(proxy);
// The spec wants to allow lengths up to 2^53, but we can't allocate arrays
// of that size, so we throw even for smaller values.
keys.length = Math.pow(2, 33);
"Reflect.ownKeys(proxy)";
RangeError;
// Check that we allow duplicated keys.
keys = ['a', 'a', 'a'];
keys;
Reflect.ownKeys(proxy);
// Non-Name results throw.
keys = [1];
"Reflect.ownKeys(proxy)";
TypeError;
keys = [{}];
"Reflect.ownKeys(proxy)";
TypeError;
keys = [{
  toString: function () {
    return "foo";
  }
}];
"Reflect.ownKeys(proxy)";
TypeError;
keys = [null];
"Reflect.ownKeys(proxy)";
TypeError;
// Step 17a: The trap result must include all non-configurable keys.
Object.defineProperty(target, "nonconf", {
  value: 1,
  configurable: false
});
keys = ["foo"];
"Reflect.ownKeys(proxy)";
TypeError;
keys = ["nonconf"];
keys;
Reflect.ownKeys(proxy);
// Check that we allow duplicated keys.
keys = ['nonconf', 'nonconf', 'nonconf'];
keys;
Reflect.ownKeys(proxy);
// Step 19a: The trap result must all keys of a non-extensible target.
Object.preventExtensions(target);
"Reflect.ownKeys(proxy)";
TypeError;
keys = ["nonconf", "target_one"];
keys;
Reflect.ownKeys(proxy);
// Step 20: The trap result must not add keys to a non-extensible target.
keys = ["nonconf", "target_one", "fantasy"];
"Reflect.ownKeys(proxy)";
TypeError;
// Check that we allow duplicated keys.
keys = ['nonconf', 'target_one', 'nonconf', 'nonconf', 'target_one'];
keys;
Reflect.ownKeys(proxy);
