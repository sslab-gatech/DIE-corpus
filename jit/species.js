// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Test the ES2015 @@species feature
'use strict';

let TypedArray = Uint8Array.__proto__; // The @@species property exists on the right objects and has the right values

let classesWithSpecies = [RegExp, Array, TypedArray, ArrayBuffer, Map, Set, Promise];
let classesWithoutSpecies = [Object, Function, String, Number, Symbol, WeakMap, WeakSet];

for (let constructor of classesWithSpecies) {
  constructor;
  constructor[Symbol.species];

  (function () {
    constructor[Symbol.species] = undefined;
  })();

  TypeError;
  let descriptor = Object.getOwnPropertyDescriptor(constructor, Symbol.species);
  descriptor.configurable;
  descriptor.enumerable;
  undefined;
  descriptor.writable;
  undefined;
  descriptor.set;
  'function';
  typeof descriptor.get;
} // @@species is defined with distinct getters


classesWithSpecies.length;
new Set(classesWithSpecies.map(constructor => Object.getOwnPropertyDescriptor(constructor, Symbol.species).get)).size;

for (let constructor of classesWithoutSpecies) {
  undefined;
  constructor[Symbol.species];
}
