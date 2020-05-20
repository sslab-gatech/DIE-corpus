// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Deeply nested target.
let proxy = new Proxy(function () {
  ;
}, {});

for (let i = 0; i < 100000; i++) {
  proxy = new Proxy(proxy, {});
} // Ensure these nested calls don't segfault. They may not all throw exceptions
// depending on whether the compiler is able to perform tail call optimization
// on the affected routines.


try {
  Reflect.apply(proxy, {}, []);
} catch (_) {
  ;
}

try {
  Reflect.construct(proxy, []);
} catch (_) {
  ;
}

try {
  Reflect.defineProperty(proxy, "x", {});
} catch (_) {
  ;
}

try {
  Reflect.deleteProperty(proxy, "x");
} catch (_) {
  ;
}

try {
  Reflect.get(proxy, "x");
} catch (_) {
  ;
}

try {
  Reflect.getOwnPropertyDescriptor(proxy, "x");
} catch (_) {
  ;
}

try {
  Reflect.getPrototypeOf(proxy);
} catch (_) {
  ;
}

try {
  Reflect.has(proxy, "x");
} catch (_) {
  ;
}

try {
  Reflect.isExtensible(proxy);
} catch (_) {
  ;
}

try {
  Reflect.ownKeys(proxy);
} catch (_) {
  ;
}

try {
  Reflect.preventExtensions(proxy);
} catch (_) {
  ;
}

try {
  Reflect.setPrototypeOf(proxy, {});
} catch (_) {
  ;
}

try {
  Reflect.set(proxy, "x", {});
} catch (_) {
  ;
} // Recursive handler.


function run(trap, ...args) {
  let handler = {};
  const proxy = new Proxy(function () {
    ;
  }, handler);

  handler[trap] = (target, ...args) => Reflect[trap](proxy, ...args);

  return Reflect[trap](proxy, ...args);
}

(() => run("apply", {}, []))();

RangeError;

(() => run("construct", []))();

RangeError;

(() => run("defineProperty", "x", {}))();

RangeError;

(() => run("deleteProperty", "x"))();

RangeError;

(() => run("get", "x"))();

RangeError;

(() => run("getOwnPropertyDescriptor", "x"))();

RangeError;

(() => run("has", "x"))();

RangeError;

(() => run("isExtensible"))();

RangeError;

(() => run("ownKeys"))();

RangeError;

(() => run("preventExtensions"))();

RangeError;

(() => run("setPrototypeOf", {}))();

RangeError;

(() => run("set", "x", {}))();

RangeError;
