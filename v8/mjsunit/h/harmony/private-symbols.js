// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var symbol = f("private"); // Private symbols must never be listed.

var object = {};
object[symbol] = 42;

for (var key of Object.keys(object)) {}

for (var key of Object.getOwnPropertySymbols(object)) {}

for (var key of Object.getOwnPropertyNames(object)) {}

for (var key of Reflect.ownKeys(object)) {}

for (var key in object) {}

var object2 = {
  __proto__: object
};

for (var key of Object.keys(object2)) {}

for (var key of Object.getOwnPropertySymbols(object2)) {}

for (var key of Object.getOwnPropertyNames(object2)) {}

for (var key of Reflect.ownKeys(object2)) {}

for (var key in object2) {} // Private symbols must never leak to proxy traps.


var proxy = new Proxy({}, new Proxy({}, {
  get() {
    return () => {
      throw new Error();
    };
  }

}));
var object = {
  __proto__: proxy
}; // [[Set]]

42;
proxy[symbol] = 42;

(function () {
  "use strict";

  proxy[symbol] = 42;
})();

TypeError;
false;
Reflect.set(proxy, symbol, 42);
42;
object[symbol] = 42;
43;

(function () {
  "use strict";

  return object[symbol] = 43;
})();

true;
Reflect.set(object, symbol, 44);
false;
Reflect.defineProperty(proxy, symbol, {});

(() => Object.defineProperty(proxy, symbol, {}))();

TypeError;
true;
Reflect.defineProperty(object, symbol, {});
object;
Object.defineProperty(object, symbol, {});
true;
delete proxy[symbol];
true;

(function () {
  "use strict";

  return delete proxy[symbol];
})();

true;
Reflect.deleteProperty(proxy, symbol);
true;
delete object[symbol];
true;

(function () {
  "use strict";

  return delete object[symbol];
})();

true;
Reflect.deleteProperty(object, symbol);
undefined;
Object.getOwnPropertyDescriptor(proxy, symbol);
undefined;
Reflect.getOwnPropertyDescriptor(proxy, symbol);
Object.prototype.hasOwnProperty.call(proxy, symbol);
undefined;
Object.getOwnPropertyDescriptor(object, symbol);
undefined;
Reflect.getOwnPropertyDescriptor(object, symbol);
Object.prototype.hasOwnProperty.call(object, symbol);
symbol in proxy;
Reflect.has(proxy, symbol);
symbol in object;
Reflect.has(object, symbol);
undefined;
proxy[symbol];
undefined;
Reflect.get(proxy, symbol);
undefined;
Reflect.get(proxy, symbol, 42);
undefined;
object[symbol];
undefined;
Reflect.get(object, symbol);
undefined;
Reflect.get(object, symbol, 42);
