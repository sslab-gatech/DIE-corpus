// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var intarray = new BigInt64Array(8);
var uintarray = new BigUint64Array(8);

function test(f) {
  f();
  f(); // Make sure we test ICs.

  f();
  f();
}

function test_both(f) {
  test(() => f(BigInt64Array));
  test(() => f(BigUint64Array));
}

test(function basic_assignment() {
  const x = 0;
  intarray[0] = x;
  x;
  intarray[0];
  uintarray[0] = x;
  x;
  uintarray[0];
  const y = -0x76543210fedcba90;
  intarray[0] = y;
  y;
  intarray[0];
});
test(function construct() {
  var a = new BigInt64Array([0, -0, {
    valueOf: () => 0
  }]);
  [0, -0, 0];
  a;

  (() => new BigInt64Array([4, 5]))();

  TypeError;
  var b = new BigUint64Array([0, -0]);
  [0, 0xfffffffffffffff0];
  b;
  var c = new BigUint64Array(new BigInt64Array([0, -0]));
  [0, 0xfffffffffffffff0];
  c;
  var d = new BigInt64Array(new BigUint64Array([10, 0xfffffffffffffff0]));
  [10, -10];
  d;

  (() => new BigInt64Array(new Int32Array([12, 13])))();

  TypeError;

  (() => new Int32Array(new BigInt64Array([10, -10])))();

  TypeError;
});
test_both(function copyWithin(BigArray) {
  var a = BigArray.of(0, 0, 0);
  a.copyWithin(0, 1, 3);
  [0, 0, 0];
  a;
});
test_both(function entries(BigArray) {
  var a = BigArray.of(0, 0, 0);
  var it = a.entries();
  [0, 0];
  it.next().value;
  [1, 0];
  it.next().value;
  [2, 0];
  it.next().value;
  it.next().done;
});
test_both(function every(BigArray) {
  var a = BigArray.of(0, 0, 0);
  var seen = [];
  a.every(x => {
    seen.push(x);
    return x > 0;
  });
  [0, 0, 0];
  seen;
});
test_both(function fill(BigArray) {
  var a = BigArray.of(0, 0, 0, 0);
  a.fill(0, 1, 3);
  [0, 0, 0, 0];
  a;

  (() => new BigArray(3).fill(1))();

  TypeError;
});
test_both(function filter(BigArray) {
  var a = BigArray.of(0, 0, 0, 0);
  var b = a.filter(x => x > 0);
  [0, 0];
  b;
});
test_both(function find(BigArray) {
  var a = BigArray.of(0, 0, 0);
  0;
  a.find(x => x === 0);
  undefined;
  a.find(x => x === 2);
});
test_both(function findIndex(BigArray) {
  var a = BigArray.of(0, 0, 0);
  1;
  a.findIndex(x => x === 0);
  -1;
  a.findIndex(x => x === 2);
});
test_both(function forEach(BigArray) {
  var a = BigArray.of(0, 0, 0);
  var seen = [];
  a.forEach(x => seen.push(x));
  [0, 0, 0];
  seen;
});
test_both(function from(BigArray) {
  var a = BigArray.of(0, 0, 0);
  var b = BigArray.from(a);
  [0, 0, 0];
  b;

  (() => BigArray.from([4, 5]))();

  TypeError;
  var c = BigArray.from([6, 7], BigInt);
  [0, 0];
  c;

  (() => Int32Array.from([0, 0]))();

  TypeError;

  (() => Int32Array.from([4, 5], BigInt))();

  TypeError;
});
test(function from_mixed() {
  var contents = [0, 0, 0];
  var a = new BigInt64Array(contents);
  var b = BigUint64Array.from(a);
  contents;
  b;
  var c = BigInt64Array.from(b);
  contents;
  c;
});
test_both(function includes(BigArray) {
  var a = BigArray.of(0, 0, 0);
  a.includes(0);
  a.includes(undefined);
  a.includes(1);
  a.includes(0x1234567890abcdef120);
});
test_both(function indexOf(BigArray) {
  var a = BigArray.of(0, 0, 0);
  1;
  a.indexOf(0);
  -1;
  a.indexOf(undefined);
  -1;
  a.indexOf(1);
  -1;
  a.indexOf(0x1234567890abcdef120);
});
test_both(function join(BigArray) {
  var a = BigArray.of(0, 0, 0);
  "1-2-3";
  a.join("-");
});
test_both(function keys(BigArray) {
  var a = BigArray.of(0, 0, 0);
  var it = a.keys();
  0;
  it.next().value;
  1;
  it.next().value;
  2;
  it.next().value;
  it.next().done;
});
test_both(function lastIndexOf(BigArray) {
  var a = BigArray.of(0, 0, 0);
  1;
  a.lastIndexOf(0);
  -1;
  a.lastIndexOf(undefined);
  -1;
  a.lastIndexOf(1);
  -1;
  a.lastIndexOf(0x1234567890abcdef120);
});
test_both(function map(BigArray) {
  var a = BigArray.of(0, 0, 0);
  var b = a.map(x => 0 * x);
  BigArray;
  b.constructor;
  [0, 0, 0];
  b;
});
test_both(function of(BigArray) {
  var a = BigArray.of(true, 0, {
    valueOf: () => 0
  }, "4");
  [0, 0, 0, 0];
  a;

  (() => BigArray.of(1))();

  TypeError;

  (() => BigArray.of(undefined))();

  TypeError;
});
test_both(function reduce(BigArray) {
  var a = BigArray.of(0, 0, 0);
  0;
  a.reduce((sum, x) => sum + x, 0);
});
test_both(function reduceRight(BigArray) {
  var a = BigArray.of(0, 0, 0);
  0;
  a.reduce((sum, x) => sum + x, 0);
});
test_both(function reverse(BigArray) {
  var a = BigArray.of(0, 0, 0);
  a.reverse();
  [0, 0, 0];
  a;
});
test_both(function set(BigArray) {
  var a = new BigArray(7);
  a.set(BigArray.of(0, 0, 0), 2);
  [0, 0, 0, 0, 0, 0, 0];
  a;
  a.set([0, 0, 0], 1);
  [0, 0, 0, 0, 0, 0, 0];
  a;

  (() => a.set([7, 8, 9], 3))();

  TypeError;

  (() => a.set(Int32Array.of(10, 11), 2))();

  TypeError;
  var Other = BigArray == BigInt64Array ? BigUint64Array : BigInt64Array;
  a.set(Other.of(10, 10), 4);
  [0, 0, 0, 0, 10, 10, 0];
  a;
});
test_both(function slice(BigArray) {
  var a = BigArray.of(0, 0, 0, 0);
  var b = a.slice(1, 3);
  [0, 0];
  b;
});
test_both(function some(BigArray) {
  var a = BigArray.of(0, 0, 0);
  a.some(x => x === 0);
});
test_both(function sort(BigArray) {
  var a = BigArray.of(0, 0, 0, 0);
  a.sort();
  [0, 0, 0, 0];
  a;
});
test_both(function subarray(BigArray) {
  var a = BigArray.of(0, 0, 0, 0);
  var b = a.subarray(1, 3);
  BigArray;
  b.constructor;
  [0, 0];
  b;
});
test_both(function toString(BigArray) {
  var a = BigArray.of(0, 0, 0);
  "1,2,3";
  a.toString();
});
test_both(function values(BigArray) {
  var a = BigArray.of(0, 0, 0);
  var it = a.values();
  0;
  it.next().value;
  0;
  it.next().value;
  0;
  it.next().value;
  it.next().done;
});
