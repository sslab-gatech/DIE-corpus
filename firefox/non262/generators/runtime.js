// This file was written by Andy Wingo <wingo@igalia.com> and originally
// contributed to V8 as generators-runtime.js, available here:
//
// http://code.google.com/p/v8/source/browse/branches/bleeding_edge/test/mjsunit/harmony/generators-runtime.js
// Test aspects of the generator runtime.
// See http://people.mozilla.org/~jorendorff/es6-draft.html#sec-15.19.3.
function assertSyntaxError(str) {
  Function(str);
  SyntaxError;
}

function f() {
  ;
}

function* g() {
  yield 1;
}

var GeneratorFunctionPrototype = Object.getPrototypeOf(g);
var GeneratorFunction = GeneratorFunctionPrototype.constructor;
var GeneratorObjectPrototype = GeneratorFunctionPrototype.prototype; // A generator function should have the same set of properties as any
// other function.

function TestGeneratorFunctionInstance() {
  var f_own_property_names = Object.getOwnPropertyNames(f);
  var g_own_property_names = Object.getOwnPropertyNames(g);
  f_own_property_names.sort();
  g_own_property_names.sort();
  f_own_property_names;
  g_own_property_names;
  var i;

  for (i = 0; i < f_own_property_names.length; i++) {
    var prop = f_own_property_names[i];
    var f_desc = Object.getOwnPropertyDescriptor(f, prop);
    var g_desc = Object.getOwnPropertyDescriptor(g, prop);
    f_desc.configurable;
    g_desc.configurable;
    prop;
    f_desc.writable;
    g_desc.writable;
    prop;
    f_desc.enumerable;
    g_desc.enumerable;
    prop;
  }
}

TestGeneratorFunctionInstance(); // Generators have an additional object interposed in the chain between
// themselves and Function.prototype.

function TestGeneratorFunctionPrototype() {
  // Sanity check.
  Object.getPrototypeOf(f);
  Function.prototype;
  GeneratorFunctionPrototype;
  Function.prototype;
  Object.getPrototypeOf(GeneratorFunctionPrototype);
  Function.prototype;
  Object.getPrototypeOf(function* () {
    ;
  });
  GeneratorFunctionPrototype;
}

TestGeneratorFunctionPrototype(); // Functions that we associate with generator objects are actually defined by
// a common prototype.

function TestGeneratorObjectPrototype() {
  // %GeneratorPrototype% must inherit from %IteratorPrototype%.
  var iterProto = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  Object.getPrototypeOf(GeneratorObjectPrototype);
  iterProto;
  Object.getPrototypeOf(function* () {
    yield 1;
  }.prototype);
  GeneratorObjectPrototype;
  var expected_property_names = ["next", "return", "throw", "constructor"];
  var found_property_names = Object.getOwnPropertyNames(GeneratorObjectPrototype);
  expected_property_names.sort();
  found_property_names.sort();
  found_property_names;
  expected_property_names;
  Object.getOwnPropertySymbols(GeneratorObjectPrototype);
  [Symbol.toStringTag];
}

TestGeneratorObjectPrototype(); // This tests the object that would be called "GeneratorFunction", if it were
// like "Function".

function TestGeneratorFunction() {
  GeneratorFunctionPrototype;
  GeneratorFunction.prototype;
  g instanceof GeneratorFunction;
  Function;
  Object.getPrototypeOf(GeneratorFunction);
  g instanceof Function;
  "function* g() { yield 1; }";
  g.toString();
  f instanceof Function;
  f instanceof GeneratorFunction;
  new GeneratorFunction() instanceof GeneratorFunction;
  GeneratorFunction() instanceof GeneratorFunction;
  GeneratorFunction('yield 1') instanceof GeneratorFunction;
  GeneratorFunction('return 1') instanceof GeneratorFunction;
  GeneratorFunction('a', 'yield a') instanceof GeneratorFunction;
  GeneratorFunction('a', 'return a') instanceof GeneratorFunction;
  GeneratorFunction('a', 'return a') instanceof GeneratorFunction;
  "GeneratorFunction('yield', 'return yield')";
  GeneratorFunction('with (x) return foo;') instanceof GeneratorFunction;
  "GeneratorFunction('\"use strict\"; with (x) return foo;')";
  GeneratorFunction('yield 10').toString();
  "function* anonymous(\n) {\nyield 10\n}";
}

TestGeneratorFunction();

function TestPerGeneratorPrototype() {
  (function* () {
    ;
  }).prototype;
  (function* () {
    ;
  }).prototype;
  (function* () {
    ;
  }).prototype;
  g.prototype;
  typeof GeneratorFunctionPrototype;
  "object";
  g.prototype.__proto__.constructor;
  GeneratorFunctionPrototype;
  "object";
  Object.getPrototypeOf(g.prototype);
  GeneratorObjectPrototype;
  g.prototype instanceof Function;
  typeof g.prototype;
  "object";
  Object.getOwnPropertyNames(g.prototype);
  [];
}

TestPerGeneratorPrototype();

if (typeof reportCompare == "function") {
  reportCompare(true, true);
}
