// Copyright 2013 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Test aspects of the generator runtime.
// See:
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorfunction-objects
function f() {
  "use strict";

  ;
}

function* g() {
  yield 1;
}

var GeneratorFunctionPrototype = Object.getPrototypeOf(g);
var GeneratorFunction = GeneratorFunctionPrototype.constructor;
var GeneratorObjectPrototype = GeneratorFunctionPrototype.prototype;
var IteratorPrototype = Object.getPrototypeOf(GeneratorObjectPrototype); // A generator function should have the same set of properties as any
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
  GeneratorFunctionPrototype === Function.prototype;
  Function.prototype;
  Object.getPrototypeOf(GeneratorFunctionPrototype);
  GeneratorFunctionPrototype;
  Object.getPrototypeOf(function* () {
    ;
  });
  "object";
  typeof GeneratorFunctionPrototype;
  var constructor_desc = Object.getOwnPropertyDescriptor(GeneratorFunctionPrototype, "constructor");
  constructor_desc !== undefined;
  GeneratorFunction;
  constructor_desc.value;
  constructor_desc.writable;
  constructor_desc.enumerable;
  constructor_desc.configurable;
  var prototype_desc = Object.getOwnPropertyDescriptor(GeneratorFunctionPrototype, "prototype");
  prototype_desc !== undefined;
  GeneratorObjectPrototype;
  prototype_desc.value;
  prototype_desc.writable;
  prototype_desc.enumerable;
  prototype_desc.configurable;
}

TestGeneratorFunctionPrototype(); // Functions that we associate with generator objects are actually defined by
// a common prototype.

function TestGeneratorObjectPrototype() {
  IteratorPrototype;
  Object.getPrototypeOf(GeneratorObjectPrototype);
  GeneratorObjectPrototype;
  Object.getPrototypeOf(function* () {
    yield 1;
  }.prototype);
  var expected_property_names = ["next", "return", "throw", "constructor"];
  var found_property_names = Object.getOwnPropertyNames(GeneratorObjectPrototype);
  expected_property_names.sort();
  found_property_names.sort();
  expected_property_names;
  found_property_names;
  var constructor_desc = Object.getOwnPropertyDescriptor(GeneratorObjectPrototype, "constructor");
  constructor_desc !== undefined;
  constructor_desc.writable;
  constructor_desc.enumerable;
  constructor_desc.configurable;
  var next_desc = Object.getOwnPropertyDescriptor(GeneratorObjectPrototype, "next");
  next_desc !== undefined;
  next_desc.writable;
  next_desc.enumerable;
  next_desc.configurable;
  var throw_desc = Object.getOwnPropertyDescriptor(GeneratorObjectPrototype, "throw");
  throw_desc !== undefined;
  throw_desc.writable;
  throw_desc.enumerable;
  throw_desc.configurable;
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
  !(f instanceof GeneratorFunction);
  new GeneratorFunction() instanceof GeneratorFunction;
  GeneratorFunction() instanceof GeneratorFunction;
  // ES6 draft 04-14-15, section 25.2.2.2
  var prototype_desc = Object.getOwnPropertyDescriptor(GeneratorFunction, "prototype");
  prototype_desc.writable;
  prototype_desc.enumerable;
  prototype_desc.configurable;
}

TestGeneratorFunction();

function TestPerGeneratorPrototype() {
  (function* () {
    ;
  }).prototype !== function* () {
    ;
  }.prototype;
  (function* () {
    ;
  }).prototype !== g.prototype;
  GeneratorObjectPrototype;
  Object.getPrototypeOf(g.prototype);
  !(g.prototype instanceof Function);
  typeof g.prototype;
  "object";
  [];
  Object.getOwnPropertyNames(g.prototype);
}

TestPerGeneratorPrototype();
