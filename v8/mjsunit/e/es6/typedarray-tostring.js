// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Array's toString should call the object's own join method, if one exists and
// is callable. Otherwise, just use the original Object.toString function.
// Flags: --allow-natives-syntax
var typedArrayConstructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray, Float32Array, Float64Array];

for (var constructor of typedArrayConstructors) {
  var success = "[test success]";
  var expectedThis;

  function testJoin() {
    0;
    arguments.length;
    expectedThis;
    this;
    return success;
  } // On an Array object.
  // Default case.


  var a1 = new constructor([1, 2, 3]);
  "1,2,3";
  a1.toString();
  "1,2,3";
  a1.join();
  "1,2,3";
  a1.toLocaleString();
  // Non-standard "join" function is called correctly.
  var a2 = new constructor([1, 2, 3]);
  a2.join = testJoin;
  expectedThis = a2;
  success;
  a2.toString();
  success;
  a2.join();
  "1,2,3";
  a2.toLocaleString();
  // Non-callable join function is ignored and Object.prototype.toString is
  // used instead.
  var a3 = new constructor([1, 2, 3]);
  a3.join = "not callable";
  0;
  a3.toString().search(/\[object .+Array\]/);
  // Non-existing join function is treated same as non-callable.
  var a4 = new constructor([1, 2, 3]);
  a4.__proto__ = {
    toString: constructor.prototype.toString
  }; // No join on Array.

  0;
  a3.toString().search(/\[object .+Array\]/);
  // On a non-Array object, throws.
  var o1 = {
    length: 3,
    0: 1,
    1: 2,
    2: 3,
    toString: constructor.prototype.toString,
    join: constructor.prototype.join,
    toLocaleString: constructor.prototype.toLocaleString
  };

  (function () {
    o1.join();
  })();

  TypeError;

  (function () {
    o1.toString();
  })();

  TypeError;

  (function () {
    o1.toLocaleString();
  })();

  TypeError;
  // toString is OK if join not from here:
  o1.join = Array.prototype.join;
  "1,2,3";
  o1.join();
  "1,2,3";
  o1.toString();

  (function () {
    o1.toLocaleString();
  })();

  TypeError;
  // TODO(littledan): Use the same function for TypedArray as for
  // Array, as the spec says (but Firefox doesn't do either).
  // Currently, using the same method leads to a bootstrap failure.
  // assertEquals(o1.toString, Array.prototype.toString);
  // Redefining length does not change result
  var a5 = new constructor([1, 2, 3]);
  Object.defineProperty(a5, 'length', {
    value: 2
  });
  "1,2,3";
  a5.join();
  "1,2,3";
  a5.toString();
  "1,2,3";
  a5.toLocaleString();
  "1,2";
  Array.prototype.join.call(a5);
  "1,2,3";
  Array.prototype.toString.call(a5);
  "1,2";
  Array.prototype.toLocaleString.call(a5);

  (function TestToLocaleStringCalls() {
    let log = [];

    let pushArgs = label => (...args) => log.push(label, args);

    let NumberToLocaleString = Number.prototype.toLocaleString;
    Number.prototype.toLocaleString = pushArgs("Number");
    new constructor([1, 2]).toLocaleString();
    ["Number", [], "Number", []];
    log;
    Number.prototype.toLocaleString = NumberToLocaleString;
  })(); // Detached Operation


  var array = new constructor([1, 2, 3]);

  (() => array.join())();

  TypeError;

  (() => array.toLocalString())();

  TypeError;

  (() => array.toString())();

  TypeError;
}
