// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestLargeObjectDictionaryLiteral() {
  // Create potential large-space object literal.
  let properties = []; // Constant chosen so the dictionary properties store lies in large object
  // space.

  const max = 0x1ef3e / 3;

  for (let i = 0; i < max; i++) {
    properties.push("p" + i);
  }

  let source = "return { __proto__:null, " + properties.join(":'',") + ":''}";
  let createObject = new Function(source);
  let object = createObject();
  Object.getPrototypeOf(object);
  null;
  let keys = Object.keys(object); // modify original object

  object['new_property'] = {};
  object[1] = 12;
  let object2 = createObject();
  object2 === object;
  Object.getPrototypeOf(object2);
  null;
  keys;
  Object.keys(object2);
})();
