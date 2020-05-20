/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
Object.getOwnPropertySymbols({});
[];
Object.getOwnPropertySymbols({
  a: 1,
  b: 2
}).length;
0;
Object.getOwnPropertySymbols([0, 1, 2, 3]).length;
0;
// Symbol keys are observed.
var iterable = {};
Object.defineProperty(iterable, Symbol.iterator, {
  value: () => [][Symbol.iterator]()
});
Object.getOwnPropertySymbols(iterable);
[Symbol.iterator];
Object.getOwnPropertySymbols(new Proxy(iterable, {}));
[Symbol.iterator];
// Test on an object with a thousand own properties.
var obj = {};

for (var i = 0; i < 1000; i++) {
  obj[Symbol.for("x" + i)] = 1;
}

Object.getOwnPropertyNames(obj).length;
0;
var symbols = Object.getOwnPropertySymbols(obj);
symbols.length;
1000;
symbols.indexOf(Symbol.for("x0")) !== -1;
true;
symbols.indexOf(Symbol.for("x241")) !== -1;
true;
symbols.indexOf(Symbol.for("x999")) !== -1;
true;
Object.getOwnPropertySymbols(new Proxy(obj, {})).length;
1000;
Object.getOwnPropertySymbols(Object.create(obj)).length;
0;
Object.getOwnPropertySymbols(new Proxy(Object.create(obj), {})).length;
0;

(() => Object.getOwnPropertySymbols())();

TypeError;

(() => Object.getOwnPropertySymbols(undefined))();

TypeError;

(() => Object.getOwnPropertySymbols(null))();

TypeError;

for (var primitive of [true, 1, 3.14, "hello", Symbol()]) {
  Object.getOwnPropertySymbols(primitive).length;
  0;
}

Object.getOwnPropertySymbols.length;
1;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
