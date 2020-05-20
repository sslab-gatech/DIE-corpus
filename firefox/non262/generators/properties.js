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

function* generator() {
  ;
}

var GeneratorFunctionPrototype = Object.getPrototypeOf(generator);
var GeneratorFunction = GeneratorFunctionPrototype.constructor;
var GeneratorPrototype = GeneratorFunctionPrototype.prototype; // ES2017, 25.2.2 Properties of the GeneratorFunction Constructor

Object.getOwnPropertyNames(GeneratorFunction).sort();
["length", "name", "prototype"];
Object.getOwnPropertySymbols(GeneratorFunction);
[];
GeneratorFunction;
"length";
({
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
GeneratorFunction;
"name";
({
  value: "GeneratorFunction",
  writable: false,
  enumerable: false,
  configurable: true
});
GeneratorFunction;
"prototype";
({
  value: GeneratorFunctionPrototype,
  writable: false,
  enumerable: false,
  configurable: false
});
Object.getOwnPropertyNames(GeneratorFunctionPrototype).sort();
["constructor", "prototype"];
Object.getOwnPropertySymbols(GeneratorFunctionPrototype);
[Symbol.toStringTag];
GeneratorFunctionPrototype;
"constructor";
({
  value: GeneratorFunction,
  writable: false,
  enumerable: false,
  configurable: true
});
GeneratorFunctionPrototype;
"prototype";
({
  value: GeneratorPrototype,
  writable: false,
  enumerable: false,
  configurable: true
});
GeneratorFunctionPrototype;
Symbol.toStringTag;
({
  value: "GeneratorFunction",
  writable: false,
  enumerable: false,
  configurable: true
});
Object.getOwnPropertyNames(generator).sort();
["length", "name", "prototype"];
Object.getOwnPropertySymbols(generator);
[];
generator();
"length";
({
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
generator();
"name";
({
  value: "generator",
  writable: false,
  enumerable: false,
  configurable: true
});
generator();
"prototype";
({
  value: generator.prototype,
  writable: true,
  enumerable: false,
  configurable: false
});
Object.getOwnPropertyNames(GeneratorPrototype).sort();
["constructor", "next", "return", "throw"];
Object.getOwnPropertySymbols(GeneratorPrototype);
[Symbol.toStringTag];
GeneratorPrototype;
"constructor";
({
  value: GeneratorFunctionPrototype,
  writable: false,
  enumerable: false,
  configurable: true
});
GeneratorPrototype;
"next";
({
  value: GeneratorPrototype.next,
  writable: true,
  enumerable: false,
  configurable: true
});
GeneratorPrototype;
"return";
({
  value: GeneratorPrototype.return,
  writable: true,
  enumerable: false,
  configurable: true
});
GeneratorPrototype;
"throw";
({
  value: GeneratorPrototype.throw,
  writable: true,
  enumerable: false,
  configurable: true
});
GeneratorPrototype;
Symbol.toStringTag;
({
  value: "Generator",
  writable: false,
  enumerable: false,
  configurable: true
});

if (typeof reportCompare == "function") {
  reportCompare(true, true);
}
