// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var intArrayConstructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray];
var floatArrayConstructors = [Float32Array, Float64Array];
var typedArrayConstructors = [...intArrayConstructors, ...floatArrayConstructors];

for (var constructor of typedArrayConstructors) {
  1;
  constructor.prototype.fill.length;
  [];
  new constructor([]).fill(8);
  [8, 8, 8, 8, 8];
  new constructor([0, 0, 0, 0, 0]).fill(8);
  [0, 8, 8, 8, 8];
  new constructor([0, 0, 0, 0, 0]).fill(8, 1);
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, 10);
  [8, 8, 8, 8, 8];
  new constructor([0, 0, 0, 0, 0]).fill(8, -5);
  [0, 8, 8, 8, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, 1, 4);
  [0, 8, 8, 8, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, 1, -1);
  [0, 8, 8, 8, 8];
  new constructor([0, 0, 0, 0, 0]).fill(8, 1, 42);
  [0, 0, 8, 8, 8];
  new constructor([0, 0, 0, 0, 0]).fill(8, -3, 42);
  [0, 0, 8, 8, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, -3, 4);
  [0, 0, 0, 8, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, -2, -1);
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, -1, -3);
  [8, 8, 8, 8, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, 0, 4);
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, Infinity);
  [8, 8, 8, 8, 8];
  new constructor([0, 0, 0, 0, 0]).fill(8, -Infinity);
  [8, 8, 8, 8, 8];
  new constructor([0, 0, 0, 0, 0]).fill(8, 0, Infinity);
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill(8, 0, -Infinity);
  'constructor.prototype.fill.call(null)';
  TypeError;
  'constructor.prototype.fill.call(undefined)';
  TypeError;
  'constructor.prototype.fill.call([])';
  TypeError;
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill(false);
  [1, 1, 1, 1, 1];
  new constructor([0, 0, 0, 0, 0]).fill(true);
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill(null);
  [8, 8, 8, 8, 8];
  new constructor([0, 0, 0, 0, 0]).fill("8");
  // Test ToNumber
  var n = 1;
  [1, 1];
  new constructor(2).fill({
    valueOf() {
      return n++;
    }

  });
  2;
  n;
  var s = [];
  var p = new Proxy({}, {
    get(t, k) {
      s.push(k.toString());
      return Reflect.get(t, k);
    }

  });
  new constructor(3).fill(p);
  ["Symbol(Symbol.toPrimitive)", "valueOf", "toString", "Symbol(Symbol.toStringTag)"];
  s;
  // Shadowing length doesn't affect fill, unlike Array.prototype.fill
  var a = new constructor([2, 2]);
  Object.defineProperty(a, 'length', {
    value: 1
  });
  a.fill(3);
  [3, 3];
  [a[0], a[1]];
  Array.prototype.fill.call(a, 4);
  [4, 3];
  [a[0], a[1]];
  // Detached Operation
  var tmp = {
    [Symbol.toPrimitive]() {
      "Parameter should not be processed when " + "array.[[ViewedArrayBuffer]] is detached.";
      return 0;
    }

  };
  var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  (() => array.fill(tmp))();

  TypeError;
}

for (var constructor of intArrayConstructors) {
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill(undefined);
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill();
  [0, 0, 0, 0, 0];
  new constructor([0, 0, 0, 0, 0]).fill("abcd");
}

for (var constructor of floatArrayConstructors) {
  [NaN, NaN, NaN, NaN, NaN];
  new constructor([0, 0, 0, 0, 0]).fill(undefined);
  [NaN, NaN, NaN, NaN, NaN];
  new constructor([0, 0, 0, 0, 0]).fill();
  [NaN, NaN, NaN, NaN, NaN];
  new constructor([0, 0, 0, 0, 0]).fill("abcd");
} // Clamping


[0, 0, 0, 0, 0];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(-10);
[255, 255, 255, 255, 255];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(1000);
[1, 1, 1, 1, 1];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(0.50001);
[0, 0, 0, 0, 0];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(0.50000);
[0, 0, 0, 0, 0];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(0.49999);
[2, 2, 2, 2, 2];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(1.50000);
[2, 2, 2, 2, 2];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(2.50000);
[3, 3, 3, 3, 3];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(2.50001);
[0, 0, 0, 0, 0];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(-Infinity);
[255, 255, 255, 255, 255];
new Uint8ClampedArray([0, 0, 0, 0, 0]).fill(Infinity);
