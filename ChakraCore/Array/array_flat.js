//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testFlat(input, output, depth) {
  print(output == Array.prototype.flat.call(input, depth));
}

function testFlatMap(input, output, mappingFunction, thisArg) {
  print(output == Array.prototype.flatMap.call(input, mappingFunction, thisArg));
}

Array.prototype.flat.name;
Array.prototype.flatMap.name;
Array.prototype.flat.length;
Array.prototype.flatMap.length;
testFlat([2, 3, [4, 5]], [2, 3, 4, 5]);
testFlat([2, 3, [4, [5, 6]]], [2, 3, 4, [5, 6]]);
testFlat([2, 3, [4, [5, 6]]], [2, 3, 4, 5, 6], 2);
testFlat([], []);
testFlat([[], [], 1], [1]);
const typedArr = new Int32Array(3);
const typedArr2 = new Int32Array(3);
typedArr[0] = 5;
typedArr[1] = 6;
typedArr[2] = 3;
typedArr2[0] = 5;
typedArr2[1] = 6;
typedArr2[2] = 3;
testFlat(typedArr, typedArr2);
testFlatMap([2, 3, 4, 5], [2, 4, 3, 6, 4, 8, 5, 10], function (a) {
  return [a, a * 2];
});
const thisArg = {
  count: 0
};
testFlatMap([2, 3, 4], [2, 3, 3, 4, 4, 5], function (a) {
  this.count += a;
  return [a, a + 1];
}, thisArg);
testFlatMap([2, 3, 4], [[2], [3], [4]], function (a) {
  return [[a]];
});
print(thisArg.count);
[2, 3].flatMap("Not Callable")[(2, 3)].flatMap(class NotCallable {});
testFlatMap([2, 3], [null, null], function () {
  return [this];
}, null);
testFlatMap([2, 3], [undefined, undefined], function () {
  return [this];
}, undefined);
testFlatMap([2, 3], [undefined, undefined], function () {
  return [this];
});
testFlatMap([2, 3], ["", ""], function () {
  return [this];
}, "");
testFlatMap([2, 3], ["Test", "Test"], function () {
  return [this];
}, "Test");
const boo = {};
testFlatMap([2, 3], [boo, boo], function () {
  return [this];
}, boo);
let getCount = 0,
    hasCount = 0;
const handler = {
  get: function (t, p, r) {
    ++getCount;
    return Reflect.get(t, p, r);
  },
  has: function (t, p, r) {
    ++hasCount;
    return Reflect.has(t, p, r);
  }
};
const prox = new Proxy([2, [3, 5]], handler);
testFlat(prox, [2, 3, 5]);
print(4, getCount); // length and constructor are also accessed hence count 2 higher than length

print(2, hasCount);
const prox2 = new Proxy([2, 3, 5], handler);
testFlatMap(prox2, [2, 4, 3, 6, 5, 10], function (a) {
  return [a, a * 2];
});
print(9, getCount); // length and constructor are also accessed hence count 2 higher than length

print(5, hasCount);
Array.prototype.flat.call(null);
Array.prototype.flat.call(undefined);
Array.prototype.flatMap.call(null);
Array.prototype.flatMap.call(undefined);
