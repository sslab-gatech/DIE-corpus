// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var typedArrayConstructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray, Float32Array, Float64Array];

function CheckEachTypedArray(fn) {
  typedArrayConstructors.forEach(fn);
}

CheckEachTypedArray(function copyWithinArity(constructor) {
  new constructor([]).copyWithin.length;
  2;
});
CheckEachTypedArray(function copyWithinTargetAndStart(constructor) {
  // works with two arguments
  [4, 5, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3);
  [1, 4, 5, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(1, 3);
  [1, 3, 4, 5, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(1, 2);
  [1, 2, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(2, 2);
});
CheckEachTypedArray(function copyWithinTargetStartAndEnd(constructor) {
  // works with three arguments
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, 4);
  [4, 2, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(1, 3, 4);
  [1, 4, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(1, 2, 4);
  [1, 3, 4, 4, 5];
});
CheckEachTypedArray(function copyWithinNegativeRelativeOffsets(constructor) {
  // works with negative arguments
  [4, 5, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, -2);
  [4, 2, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, -2, -1);
  [1, 3, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3, -2);
  [1, 3, 4, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3, -1);
  [1, 3, 4, 5, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3);
  [1, 2, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(-5, 0);
});
CheckEachTypedArray(function mustBeTypedArray(constructor) {
  // throws on non-TypedArray values
  (function () {
    return constructor.prototype.copyWithin.call(null, 0, 3);
  })();

  TypeError;

  (function () {
    return constructor.prototype.copyWithin.call(undefined, 0, 3);
  })();

  TypeError;

  (function () {
    return constructor.prototype.copyWithin.call(34, 0, 3);
  })();

  TypeError;

  (function () {
    return constructor.prototype.copyWithin.call([1, 2, 3, 4, 5], 0, 3);
  })();

  TypeError;
});
CheckEachTypedArray(function copyWithinStartLessThanTarget(constructor) {
  // test with target > start on 2 arguments
  [1, 2, 3, 1, 2];
  new constructor([1, 2, 3, 4, 5]).copyWithin(3, 0);
  [1, 2, 3, 1, 2];
  new constructor([1, 2, 3, 4, 5]).copyWithin(3, 0, 4);
});
CheckEachTypedArray(function copyWithinNonIntegerRelativeOffsets(constructor) {
  // test on fractional arguments
  [4, 5, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(0.2, 3.9);
});
CheckEachTypedArray(function copyWithinNegativeZeroTarget(constructor) {
  // test with -0
  [4, 5, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(-0, 3);
});
CheckEachTypedArray(function copyWithinTargetOutsideStart(constructor) {
  // test with arguments more than this.length
  [1, 2, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 7);
  [1, 2, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(-7, 0);
});
CheckEachTypedArray(function copyWithinEmptyArray(constructor) {
  // test on empty array
  [];
  new constructor([]).copyWithin(0, 3);
});
CheckEachTypedArray(function copyWithinTargetCutOff(constructor) {
  // test with target range being shorter than end - start
  [1, 2, 2, 3, 4];
  [1, 2, 3, 4, 5].copyWithin(2, 1, 4);
});
CheckEachTypedArray(function copyWithinOverlappingRanges(constructor) {
  // test overlapping ranges
  var arr = [1, 2, 3, 4, 5];
  arr.copyWithin(2, 1, 4);
  [1, 2, 2, 2, 3];
  arr.copyWithin(2, 1, 4);
});
CheckEachTypedArray(function copyWithinDefaultEnd(constructor) {
  // undefined as third argument
  [4, 5, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, undefined);
});
CheckEachTypedArray(function copyWithinLargeArray(constructor) {
  var large = 10000; // test on a large array

  var arr = new constructor(large);
  arr;
  arr.copyWithin(45, 9000);
  var expected = new Array(large); // test on numbers

  for (var i = 0; i < large; i++) {
    arr[i] = Math.random() * 100; // May be cast to an int

    expected[i] = arr[i];

    if (i >= 9000) {
      expected[i - 9000 + 45] = arr[i];
    }
  }

  expected;
  arr.copyWithin(45, 9000);
  large;
  arr.length;
});
CheckEachTypedArray(function copyWithinNullEnd(constructor) {
  // test null on third argument is converted to +0
  [1, 2, 3, 4, 5];
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, null);
});
CheckEachTypedArray(function copyWithinMinusInfinityTarget(constructor) {
  var arr = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var expected = [6, 7, 8, 9, 10, 6, 7, 8, 9, 10];
  expected;
  arr.copyWithin(-Infinity, 5);
  10;
  arr.length;
});
CheckEachTypedArray(function copyWithinPositiveInfinityTarget(constructor) {
  var arr = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expected;
  arr.copyWithin(+Infinity, 5);
  10;
  arr.length;
});
CheckEachTypedArray(function copyWithinMinusInfinityStart(constructor) {
  var arr = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  expected;
  arr.copyWithin(5, -Infinity);
  10;
  arr.length;
});
CheckEachTypedArray(function copyWithinPositiveInfinityStart(constructor) {
  var arr = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expected;
  arr.copyWithin(5, +Infinity);
  10;
  arr.length;
});
CheckEachTypedArray(function copyWithinMinusInfinityEnd(constructor) {
  var arr = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expected;
  arr.copyWithin(5, 0, -Infinity);
  10;
  arr.length;
});
CheckEachTypedArray(function copyWithinPositiveInfinityEnd(constructor) {
  var arr = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  expected;
  arr.copyWithin(5, 0, +Infinity);
  10;
  arr.length;
});
CheckEachTypedArray(function parametersNotCalledIfDetached(constructor) {
  var tmp = {
    [Symbol.toPrimitive]() {
      "Parameter should not be processed when " + "array.[[ViewedArrayBuffer]] is detached.";
      return 0;
    }

  };
  var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  (() => array.copyWithin(tmp, tmp, tmp))();

  TypeError;
  0;
  array.length;
  "array.[[ViewedArrayBuffer]] is detached";
});
