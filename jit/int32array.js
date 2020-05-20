//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function oneTest(a) {
  a[1] = 0x80000000;
  a[5] = 10;
  print(a[5]);

  if (Object.getOwnPropertyDescriptor(a, 100000) != undefined) {
    print('FAIL');
  }

  try {
    var pro = Int32Array.prototype;
    print(pro.toString());
    print("prototype is");
    printObj(pro);
  } catch (e) {
    print("constructor is");
    printObj(Int32Array);
  }

  print("object is");
  printObj(a);
  a[20] = 20;
  a.foo = 'bar';
  print("object after expando is");
  printObj(a);
  print("");
}

print("test1");
var test1 = new Int32Array(9);
oneTest(test1);
print("test2");
var test2 = new Int32Array(0);
oneTest(test2);
print("test3");
var arrayBuffer = new ArrayBuffer(32);
var test3 = new Int32Array(arrayBuffer);
oneTest(test3);
print("test4");
var test4 = new Int32Array(arrayBuffer, 4);
oneTest(test4);
print("test5");
var test5 = new Int32Array(arrayBuffer, 4, 6);
oneTest(test5);
print("test6");
var mybuffer = test1.buffer;
print(mybuffer);
var test6 = new Int32Array(mybuffer);
oneTest(test6);
print("test7");
var test7 = new Int32Array(test1.buffer, 4);
oneTest(test7);
print("test8");
var test8 = new Int32Array(test1.buffer, 4, 6);
oneTest(test8);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
print("test9");
var test9 = new Int32Array(arr);
oneTest(test9);
print("test9.1");
printObj(test1);
test9.set(test1);
oneTest(test9);
print("test9.2");
test9.set(test5);
oneTest(test9);
print("test10");

try {
  var test10 = new Int32Array({});
  oneTest(test10);
} catch (e) {
  print("succeed with catching" + e);
}

print("test11");

try {
  var test11 = new Int32Array('abcdefg');
  oneTest(test11);
} catch (e) {
  print("succeed with catching" + e);
}

print("test11.1");
var test111 = new Int32Array(new String('abcdefg'));
oneTest(test111);
print("test12");
var test12 = new Int32Array(0);
oneTest(test12);
print("test13");
var test13 = new Int32Array(arrayBuffer, 0);
oneTest(test13);
print("test14");

try {
  var test14 = new Int32Array(arrayBuffer, 0, 0);
  oneTest(test14);
} catch (e) {
  print("succeed with catching" + e);
}

print("test15");

try {
  var test15 = new Int32Array(arrayBuffer, 0, 40);
  oneTest(test15);
} catch (e) {
  print("succeed with catching" + e);
}

print("test16");

try {
  var test16 = new Int32Array(arrayBuffer, 40, 4);
  oneTest(test16);
} catch (e) {
  print("succeed with catching" + e);
}

print("test17");
var test17 = test5.subarray(0);
printObj(test17);
print("test18");
var test17 = test5.subarray(0, undefined);
printObj(test17);
print("test19");
var test18 = test5.subarray(4);
printObj(test18);
print("test20");
var test19 = test5.subarray(0, 3);
printObj(test19);
print("test21");
print(Int32Array.prototype[10]);
print(Int32Array.prototype[-1]);
print(Int32Array.prototype[2]);
Int32Array.prototype[2] = 10;
print(Int32Array.prototype[2]);
print("test22");
testSetWithInt(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
testSetWithFloat(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
testSetWithObj(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
print("test22 JIT");
testSetWithInt(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
testSetWithFloat(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
testSetWithObj(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
print("test23");
testIndexValueForSet(new Int32Array(5));
print("test23 JIT");
testIndexValueForSet(new Int32Array(5));
print("test24");
var test24 = new Int32Array(arrayBuffer, 4, undefined);
oneTest(test24); //-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function printObj(obj) {
  print(obj.toString());

  for (i in obj) {
    print(i + " == " + obj[i]);
  }

  ;
  print("byteLength = " + obj.byteLength);
}

function verifyThrow(func, obj) {
  var hasThrown = false;
  var result;

  try {
    result = func(obj);
  } catch (e) {
    print("SUCCEEDED: get expected exception " + e.description);
    hasThrown = true;
  }

  if (!hasThrown) {
    print("FAILED: didn't get exception");
  }
}

function verifyNoThrow(func, obj) {
  var hasThrown = false;
  var result;

  try {
    result = func(obj);
  } catch (e) {
    print("FAILED: get exception " + e.description);
    hasThrown = true;
  }

  return result;
}

function setIntValue(typedArray, valueToSet) {
  ;
}

function setFloat32Value(typedArray, valueToSet) {
  ;
}

function setFloat64Value(typedArray) {
  ;
}

function testSetWithObj(startIndex, endIndex, typedArray, typedArrayForFloatIndex, typedArrayForStringIndex) {
  var count = 0;
  valueToSet = {
    valueOf: function () {
      print(count);
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
    print(typedArray[i]);
    print(typedArrayForFloatIndex[i + 0.892834]);
    print(typedArrayForStringIndex[i + "s"]);
  }

  print(typedArray[-0]);
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
    print(typedArray[i]);
    print(typedArrayForFloatIndex[i + 0.892834]);
    print(typedArrayForStringIndex[i + "s"]);
  }

  print(typedArray[-0]);
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
    print(typedArray[i]);
    print(typedArrayForFloatIndex[i + 0.892834]);
    print(typedArrayForStringIndex[i + "s"]);
  }

  print(typedArray[-0]);
}

function testIndexValueForSet(typedArray) {
  var count = 5;
  var obj = {
    valueOf: function () {
      print(count++);
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
      print('***testing index ' + i + ' : "' + testIndex + '"');
    } else {
      print('***testing index ' + i + ' : ' + testIndex);
    }

    typedArray[testIndex] = obj;
    print(typedArray[testIndex]);
  }
}
