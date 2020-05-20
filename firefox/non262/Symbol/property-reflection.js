/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Basic tests for standard Object APIs interacting with symbols.
// Object.defineProperty
function F() {
  ;
}

var f = new F();
Object.defineProperty(f, Symbol.for("name"), {
  configurable: true,
  value: "eff"
});
"name" in f;
false;
"Symbol(name)" in f;
false;
Symbol.for("name") in f;
true;
f[Symbol.for("name")];
"eff";

// Object.defineProperties
function D() {
  ;
}

var descs = new D();
var s1 = Symbol("s1");
var hits = 0;
descs[s1] = {
  get: () => hits++,
  set: undefined,
  enumerable: true,
  configurable: true
};
var s2 = Symbol("s2");
descs[s2] = {
  value: {},
  writable: true,
  enumerable: false,
  configurable: true
};
var s3 = Symbol("s3");
D.prototype[s3] = {
  value: "FAIL"
};
Object.defineProperties(f, descs);
f;
s1 in f;
true;
f[s1];
0;
hits;
1;
s2 in f;
true;
f[s2];
descs[s2].value;
s3 in f;
false;
// Object.create
var n = Object.create({}, descs);
s1 in n;
true;
n[s1];
1;
hits;
2;
s2 in n;
true;
n[s2];
descs[s2].value;
s3 in n;
false;
// Object.getOwnPropertyDescriptor
var desc = Object.getOwnPropertyDescriptor(n, s1);
desc;
descs[s1];
desc.get;
descs[s1].get;
desc = Object.getOwnPropertyDescriptor(n, s2);
desc;
descs[s2];
desc.value;
descs[s2].value;
descs.hasOwnProperty(s1);
true;
descs.hasOwnProperty(s2);
true;
descs.hasOwnProperty(s3);
false;
[].hasOwnProperty(Symbol.iterator);
false;
Array.prototype.hasOwnProperty(Symbol.iterator);
true;
n.propertyIsEnumerable(s1);
true;
n.propertyIsEnumerable(s2);
false;
n.propertyIsEnumerable(s3);
false;
D.prototype.propertyIsEnumerable(s3);
true;
descs.propertyIsEnumerable(s3);
false;
// inherited properties are not considered
// Object.preventExtensions
var obj = {};
obj[s1] = 1;
Object.preventExtensions(obj);
obj;

(function () {
  "use strict";

  obj[s2] = 2;
})();

TypeError;
obj[s2] = 2; // still no effect

s2 in obj;
false;
Object.isSealed(obj);
false;
Object.isFrozen(obj);
false;
delete obj[s1];
true;
Object.isSealed(obj);
true;
Object.isFrozen(obj);
true;
obj = {};
obj[s1] = 1;
Object.preventExtensions(obj);
Object.defineProperty(obj, s1, {
  configurable: false
}); // still writable

Object.isSealed(obj);
true;
Object.isFrozen(obj);
false;
obj[s1] = 2;
obj[s1];
2;
Object.defineProperty(obj, s1, {
  writable: false
});
Object.isFrozen(obj);
true;
// Object.seal, Object.freeze
var obj = {};
obj[s1] = 1;
Object.seal(obj);
desc = Object.getOwnPropertyDescriptor(obj, s1);
desc.configurable;
false;
desc.writable;
true;
Object.freeze(obj);
Object.getOwnPropertyDescriptor(obj, s1).writable;
false;
// Object.setPrototypeOf purges caches for symbol-keyed properties.
var proto = {};
proto[s1] = 1;
Object.defineProperty(proto, s2, {
  get: () => 2,
  set: v => undefined
});
var obj = Object.create(proto);
var last1, last2;
var N = 9;

for (var i = 0; i < N; i++) {
  last1 = obj[s1];
  last2 = obj[s2];
  obj[s2] = "marker";

  if (i === N - 2) {
    Object.setPrototypeOf(obj, {});
  }
}

last1;
undefined;
last2;
undefined;
obj.hasOwnProperty(s2);
true;
obj[s2];
"marker";

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
