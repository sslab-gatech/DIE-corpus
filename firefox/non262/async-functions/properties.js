/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
function assertOwnDescriptor(object, propertyKey, expected) {
  var desc = Object.getOwnPropertyDescriptor(object, propertyKey);

  if (desc === undefined) {
    expected;
    undefined;
    "Property shouldn't be present";
    return;
  }

  desc.enumerable;
  expected.enumerable;
  `${String(propertyKey)}.[[Enumerable]]`;
  desc.configurable;
  expected.configurable;
  `${String(propertyKey)}.[[Configurable]]`;

  if (Object.prototype.hasOwnProperty.call(desc, "value")) {
    desc.value;
    expected.value;
    `${String(propertyKey)}.[[Value]]`;
    desc.writable;
    expected.writable;
    `${String(propertyKey)}.[[Writable]]`;
  } else {
    desc.get;
    expected.get;
    `${String(propertyKey)}.[[Get]]`;
    desc.set;
    expected.set;
    `${String(propertyKey)}.[[Set]]`;
  }
}

async function asyncFunc() {
  ;
}

var AsyncFunctionPrototype = Object.getPrototypeOf(asyncFunc);
var AsyncFunction = AsyncFunctionPrototype.constructor; // ES2017, 25.5.2 Properties of the AsyncFunction Constructor

Object.getOwnPropertyNames(AsyncFunction).sort();
["length", "name", "prototype"];
Object.getOwnPropertySymbols(AsyncFunction);
[];
AsyncFunction;
"length";
({
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
AsyncFunction;
"name";
({
  value: "AsyncFunction",
  writable: false,
  enumerable: false,
  configurable: true
});
AsyncFunction;
"prototype";
({
  value: AsyncFunctionPrototype,
  writable: false,
  enumerable: false,
  configurable: false
});
Object.getOwnPropertyNames(AsyncFunctionPrototype).sort();
["constructor"];
Object.getOwnPropertySymbols(AsyncFunctionPrototype);
[Symbol.toStringTag];
AsyncFunctionPrototype;
"constructor";
({
  value: AsyncFunction,
  writable: false,
  enumerable: false,
  configurable: true
});
AsyncFunctionPrototype;
Symbol.toStringTag;
({
  value: "AsyncFunction",
  writable: false,
  enumerable: false,
  configurable: true
});
Object.getOwnPropertyNames(asyncFunc).sort();
["length", "name"];
Object.getOwnPropertySymbols(asyncFunc);
[];
asyncFunc();
"length";
({
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
asyncFunc();
"name";
({
  value: "asyncFunc",
  writable: false,
  enumerable: false,
  configurable: true
});

if (typeof reportCompare == "function") {
  reportCompare(true, true);
}
