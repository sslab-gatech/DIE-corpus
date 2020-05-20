//-------------------------------------------------------------------------------------------------------
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

function test1() {
  var intArray = Array(0x100); //[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  var arrayBuffer = new Uint32Array(intArray).buffer;
  var viewStart = 0;
  var viewLength = arrayBuffer.byteLength;
  var view = new DataView(arrayBuffer, viewStart, viewLength);

  for (var i = 0; i <= 8; i++) {
    try {
      print('view.getUint32(-' + i + '): 0x' + view.getUint32(-i).toString(16));
    } catch (e) {
      print(e.message);
    }
  }

  for (var i = 0; i <= 8; i++) {
    try {
      print('view.setUint32(-' + i + '): 0x' + view.setUint32(-i, 10).toString(16));
    } catch (e) {
      print(e.message);
    }
  }
}

function test2() {
  var arrayBuffer = new ArrayBuffer(10);

  try {
    var view1 = new DataView(arrayBuffer, undefined);
  } catch (e) {
    if (e instanceof RangeError) {
      if (e.message !== "DataView constructor argument byteOffset is invalid") {
        print('FAIL');
      }
    } else {
      print('FAIL');
    }
  }

  try {
    var view2 = new DataView(arrayBuffer, 1.5);
  } catch (e) {
    if (e instanceof RangeError) {
      if (e.message !== "DataView constructor argument byteOffset is invalid") {
        print('FAIL');
      }
    } else {
      print('FAIL');
    }
  }

  print('PASS');
}

function test3() {
  var v1 = new DataView(new ArrayBuffer(), 0, 0);
  var v2 = new DataView(new ArrayBuffer(1), 1, 0);
}

function test4() {
  var arrayBuffer = new Uint32Array([0, 1, 2, 3]).buffer;
  var view1 = new DataView(arrayBuffer);
  var view2 = new DataView(arrayBuffer, 0);
  var view3 = new DataView(arrayBuffer, 0, undefined);

  if (view1.byteLength === view2.byteLength && view2.byteLength === view3.byteLength) {
    print('PASS');

    for (var i = 0; i < 4; i++) {
      if (view1.getUint32(i) === view2.getUint32(i) && view2.getUint32(i) === view3.getUint32(i)) {
        print('PASS');
      } else {
        print('FAIL');
        print(view1.getUint32(i));
        print(view2.getUint32(i));
        print(view3.getUint32(i));
      }
    }
  } else {
    print('FAIL');
    print(view1.byteLength);
    print(view2.byteLength);
    print(view3.byteLength);
  }
}

function test5() {
  var dv = new DataView(new ArrayBuffer(0x100000), 1, 0xffffffff);
  print(dv);
}

test1();
test2();
test3();
test4();
test5();
