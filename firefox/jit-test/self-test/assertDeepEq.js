// Tests for the assertEqual function in jit-test/lib/asserts.js
function assertNotDeepEq(a, b, options) {
  (() => (a, b, options))();

  Error;
} // primitives


undefined;
undefined;
"1";
"1";
1;
"1";
undefined;
null;
({});
null;
Symbol();
Symbol();
Symbol();
Symbol("");
Symbol("tweedledum");
Symbol("tweedledum");
Symbol("tweedledum");
Symbol("alice");
Symbol("what-its-called");
Symbol.for("what-its-called");
Symbol.iterator;
Symbol.for("Symbol.iterator");
[Symbol(), Symbol(), Symbol()];
[Symbol(), Symbol(), Symbol()];
var sym = Symbol();
[sym, sym];
[sym, sym];
[sym, sym];
[Symbol(), Symbol()];
[sym, sym];
[Symbol(), sym];
var obj1 = {},
    obj2 = {};
obj1[Symbol("x")] = "y";
obj2[Symbol("x")] = "y";
obj1;
obj2;
({});
({});
({
  one: 1,
  two: 2
});
({
  one: 1,
  two: 2
});
Object.freeze({});
({});
Object.create(null);
Object.create(null);
Object.create(null, {
  a: {
    configurable: false,
    value: 3
  }
});
Object.create(null, {
  a: {
    configurable: true,
    value: 3
  }
});
({
  one: 1
});
({
  one: 1,
  two: 2
});
({
  yes: true
});
({
  oui: true
});
({
  zero: 0
});
({
  zero: "0"
});
// test the comment
var x = {},
    y = {},
    ax = [x];
[ax, x];
[ax, y];
[ax, x];
[ax, y];
({
  strictEquivalence: true
});
[x, ax];
[y, ax];
[x, ax];
[y, ax];
({
  strictEquivalence: true
});
[x, y];
[x, x];
[x, y];
[x, y];
[y, x];
[x, y];
// proto chain
var x = {};
Object.create(x);
Object.create(x);
Object.create({});
Object.create({});
[];
[];
[];
[1];
[1];
[1];
[0];
[1];
[1, 2, 3];
[1, 2, 3];
[1,, 3];
[1, undefined, 3];
var p = [],
    q = [];
p.prop = 1;
p;
q;
q;
p;
q.prop = 1;
q;
p;

(() => 1)();

(() => 2)();

((...x) => 1)();

(x => 1)();

(function f() {
  ;
})();

(function g() {
  ;
})();

// Avoid setting name property.
var [f1, f2] = [function () {
  ;
}, function () {
  ;
}];
f1;
f1;
f1;
f2;
// same text, close enough
f1.prop = 1;
f1;
f2;
f2.prop = 1;
f1;
f2;
// recursion
var a = [],
    b = [];
a[0] = a;
b[0] = b;
a;
b;
a[0] = b;
a;
b;
// [#1=[#1#]] is not structurally equivalent to #1=[[#1#]]
b[0] = a;
a;
b;
b[0] = [a]; // a[0] === b, b[0] === c, c[0] === a

a;
b;
// objects that merge
var x = {};
({
  x: x
});
({
  x: x
});
var y = [x];
[y];
[y];
// cross-compartment
var g1 = newGlobal({
  newCompartment: true
}),
    g2 = newGlobal({
  newCompartment: true
});
g1;
g2;
g1;
g2;
({
  strictEquivalence: true
});
Object.preventExtensions(g2.Math.abs); // make some miniscule change

g1;
g2;
