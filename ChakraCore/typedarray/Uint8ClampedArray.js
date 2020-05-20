//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(undefined, Uint8ClampedArray);
  console.log(Uint8ClampedArray.hasOwnProperty("BYTES_PER_ELEMENT"));
  console.log(1, Uint8ClampedArray.BYTES_PER_ELEMENT);
  var descriptor = Object.getOwnPropertyDescriptor(Uint8ClampedArray, 'BYTES_PER_ELEMENT');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t1();

function t2() {
  var descriptor = Object.getOwnPropertyDescriptor(Uint8ClampedArray, 'prototype');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log(Uint8ClampedArray.prototype.hasOwnProperty("set"));
  console.log(Uint8ClampedArray.prototype.hasOwnProperty("subarray"));
  console.log(Uint8ClampedArray.prototype.set.length === 2);
  console.log(Uint8ClampedArray.prototype.subarray.length === 2);
}

t2();

function t3() {
  var arr = new Uint8ClampedArray(100);
  arr[0] = 0;
  arr[1] = 0.0;
  arr[2] = -1;
  arr[3] = -1.0;
  arr[4] = 254;
  arr[5] = 255;
  arr[6] = 256;
  arr[7] = 257;
  arr[8] = 254.0;
  arr[9] = 254.4;
  arr[10] = 254.5;
  arr[11] = 254.6;
  arr[12] = 254.9999;
  arr[13] = 255.0;
  arr[14] = 255.5;
  arr[15] = 256.0;
  arr[16] = 2000;
  arr[17] = 2000.0;
  arr[18] = 99999999999999999999999;
  arr[19] = -99999999999999999999999;
  arr[20] = 1.5;
  arr[21] = 253.5;
  arr[22] = 1.4999;
  arr[23] = 0.33333 * 3;
  arr[24] = 0.33333 * 3 + 0.5;
  arr[25] = -20000.0;
  arr[26] = -20000;
  arr[27] = false;
  arr[28] = true;
  arr[29] = "256.0";
  arr[30] = "-256.0";
  arr[31] = undefined;
  arr[32] = null;
  arr[33] = NaN;
  arr[34] = Number.NEGATIVE_INFINITY;
  arr[35] = -Number.MAX_VALUE * 2;
  arr[36] = Number.POSITIVE_INFINITY;
  arr[37] = Number.MAX_VALUE * 2;
  arr[38] = 0.5;
  arr[39] = 1.5;
  arr[40] = 2.5;
  arr[41] = 3.5;
  arr[42] = 4.5;
  arr[43] = 10.5;
  arr[44] = 11.5;
  console.log(0, arr[0]);
  console.log(0, arr[1]);
  console.log(0, arr[2]);
  console.log(0, arr[3]);
  console.log(254, arr[4]);
  console.log(255, arr[5]);
  console.log(255, arr[6]);
  console.log(255, arr[7]);
  console.log(254, arr[8]);
  console.log(254, arr[9]);
  console.log(254, arr[10]);
  console.log(255, arr[11]);
  console.log(255, arr[12]);
  console.log(255, arr[13]);
  console.log(255, arr[14]);
  console.log(255, arr[15]);
  console.log(255, arr[16]);
  console.log(255, arr[17]);
  console.log(255, arr[18]);
  console.log(0, arr[19]);
  console.log(2, arr[20]);
  console.log(254, arr[21]);
  console.log(1, arr[22]);
  console.log(1, arr[23]);
  console.log(1, arr[24]);
  console.log(0, arr[25]);
  console.log(0, arr[26]);
  console.log(0, arr[27]);
  console.log(1, arr[28]);
  console.log(255, arr[29]);
  console.log(0, arr[30]);
  console.log(0, arr[31]);
  console.log(0, arr[32]);
  console.log(0, arr[33]);
  console.log(0, arr[34]);
  console.log(0, arr[35]);
  console.log(255, arr[36]);
  console.log(255, arr[37]);
  console.log(0, arr[38]);
  console.log(2, arr[39]);
  console.log(2, arr[40]);
  console.log(4, arr[41]);
  console.log(4, arr[42]);
  console.log(10, arr[43]);
  console.log(12, arr[44]);
}

t3();

function t4() {
  var arr = new Uint8ClampedArray(100);
  console.log("[object Uint8ClampedArray]", arr.toString(), 'arr.toString == "[object Uint8ClampedArray]"');
}

t4();

function t5() {
  var arr = new Uint8ClampedArray([0, 1, 2, 3, 4, 5]);
  console.log(arr, arr.subarray(0, arr.length), 'arr.subarray(0,arr.length) == arr');
  console.log([], arr.subarray(0, 0), 'arr.subarray(0,0) == []');
  console.log([1], arr.subarray(1, 2), 'arr.subarray(1,2) == [1]');
  console.log([], arr.subarray(3, 2), 'arr.subarray(3,2) == []');
  console.log([1, 2, 3], arr.subarray(1, 4), 'arr.subarray(1,4) == [1,2,3]');

  try {
    arr.subarray();
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var arr = new Uint8ClampedArray([0, 1, 2, 3, 4, 5]);
  var dst = new Uint8ClampedArray(10);
  dst.set(arr);
  console.log([0, 1, 2, 3, 4, 5, 0, 0, 0, 0], dst, 'dst.set(arr) == [0,1,2,3,4,5,0,0,0,0]');
  var dst = new Uint8ClampedArray(10);
  dst.set(arr, 0);
  console.log([0, 1, 2, 3, 4, 5, 0, 0, 0, 0], dst, 'dst.set(arr,0) == [0,1,2,3,4,5,0,0,0,0]');
  var dst = new Uint8ClampedArray(10);
  dst.set(arr, 4);
  console.log([0, 0, 0, 0, 0, 1, 2, 3, 4, 5], dst, 'dst.set(arr,4) == [0,0,0,0,0,1,2,3,4,5]');

  try {
    arr.set();
  } catch (e) {
    ;
  }

  try {
    new Uint8ClampedArray(3).set(arr);
  } catch (e) {
    ;
  }

  try {
    new Uint8ClampedArray(3).set(arr, 0);
  } catch (e) {
    ;
  }

  try {
    new Uint8ClampedArray(3).set(arr, 10);
  } catch (e) {
    ;
  }

  try {
    new Uint8ClampedArray(3).set(arr, 10);
  } catch (e) {
    ;
  }
}

t6();

function testSetWithObj(startIndex, endIndex, typedArray, typedArrayForFloatIndex, typedArrayForStringIndex) {
  var count = 0;
  valueToSet = {
    valueOf: function () {
      console.log(count);
      return count++;
    }
  };

  for (var i = startIndex; i < endIndex; i++) {
    typedArray[-0] = valueToSet;
    typedArray[i] = valueToSet;
    typedArrayForFloatIndex[i + 0.892834] = valueToSet;
    typedArrayForStringIndex[i + "s"] = valueToSet;
  }

  for (var i = startIndex; i < endIndex; i++) {
    console.log(typedArray[i]);
    console.log(typedArrayForFloatIndex[i + 0.892834]);
    console.log(typedArrayForStringIndex[i + "s"]);
  }

  console.log(typedArray[-0]);
}

function testSetWithFloat(startIndex, endIndex, typedArray, typedArrayForFloatIndex, typedArrayForStringIndex) {
  var count = 0;

  for (var i = startIndex; i < endIndex; i++) {
    typedArray[-0] = Math.sqrt(i);
    typedArray[i] = Math.sqrt(i);
    typedArrayForFloatIndex[i + 0.892834] = Math.sqrt(i);
    typedArrayForStringIndex[i + "s"] = Math.sqrt(i);
  }

  for (var i = startIndex; i < endIndex; i++) {
    console.log(typedArray[i]);
    console.log(typedArrayForFloatIndex[i + 0.892834]);
    console.log(typedArrayForStringIndex[i + "s"]);
  }

  console.log(typedArray[-0]);
}

function testSetWithInt(startIndex, endIndex, typedArray, typedArrayForFloatIndex, typedArrayForStringIndex) {
  var count = 0;

  for (var i = startIndex; i < endIndex; i++) {
    typedArray[-0] = 5;
    typedArray[i] = 5;
    typedArrayForFloatIndex[i + 0.892834] = 5;
    typedArrayForStringIndex[i + "s"] = 5;
  }

  for (var i = startIndex; i < endIndex; i++) {
    console.log(typedArray[i]);
    console.log(typedArrayForFloatIndex[i + 0.892834]);
    console.log(typedArrayForStringIndex[i + "s"]);
  }

  console.log(typedArray[-0]);
}

function testIndexValueForSet(typedArray) {
  var count = 5;
  var obj = {
    valueOf: function () {
      console.log(count++);
      return count;
    }
  };
  var testIndices = [0, "0", -0, // sets index 0
  "-0", -2, "-2", 1073741823, "1073741823", 1, "1", 2147483648
  /*2 ^ 31*/
  , "2147483648"
  /*"2 ^ 31"*/
  , 2147483647
  /*(2 ^ 31) - 1*/
  , "2147483647"
  /* "(2 ^ 31) - 1"*/
  , 4294967296
  /*2 ^ 32*/
  , "4294967296"
  /*"2 ^ 32"*/
  , 4294967295
  /*(2 ^ 32) - 1*/
  , "4294967295"
  /*(2 ^ 32) - 1*/
  , 1.5, "1.5", "a",
  /* doesn't call ToNumber(obj) */
  1.0000000000000000000000000e+9, "1.0000000000000000000000000e-9", 1 / "a",
  /* NaN */
  1 / 0, -1 / 0, (1 / 0).toString(), (-1 / 0).toString()];

  for (var i = 0; i < testIndices.length; i++) {
    var testIndex = testIndices[i];

    if (typeof testIndex === "string") {
      console.log('***testing index ' + i + ' : "' + testIndex + '"');
    } else {
      console.log('***testing index ' + i + ' : ' + testIndex);
    }

    typedArray[testIndex] = obj;
    console.log(typedArray[testIndex]);
  }
}

console.log("test2");
testSetWithInt(-1, 2, new Uint8ClampedArray(3), new Uint8ClampedArray(3), new Uint8ClampedArray(3));
testSetWithFloat(-1, 2, new Uint8ClampedArray(3), new Uint8ClampedArray(3), new Uint8ClampedArray(3));
testSetWithObj(-1, 2, new Uint8ClampedArray(3), new Uint8ClampedArray(3), new Uint8ClampedArray(3));
console.log("test2 JIT");
testSetWithInt(-1, 2, new Uint8ClampedArray(3), new Uint8ClampedArray(3), new Uint8ClampedArray(3));
testSetWithFloat(-1, 2, new Uint8ClampedArray(3), new Uint8ClampedArray(3), new Uint8ClampedArray(3));
testSetWithObj(-1, 2, new Uint8ClampedArray(3), new Uint8ClampedArray(3), new Uint8ClampedArray(3));
console.log("test3");
testIndexValueForSet(new Uint8ClampedArray(5));
console.log("test3 JIT");
testIndexValueForSet(new Uint8ClampedArray(5));
