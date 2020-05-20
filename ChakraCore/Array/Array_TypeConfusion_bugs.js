//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//Note: see function  ArraySpliceHelper of JavascriptArray.cpp
WScript = {
  _jscGC: gc,
  _jscLoad: load,
  _jscPrint: print,
  _jscQuit: quit
};

function test() {
  var arr1 = [0xdead, 0xbabe, 0xdead, 0xbabe];

  class MyArray extends Uint32Array {}

  Object.defineProperty(MyArray, Symbol.species, {
    value: function () {
      return arr1;
    }
  });
  var float_val = 0xdaddeadbabe * 4.9406564584124654E-324;
  var test = [float_val, float_val, float_val, float_val];
  test.length = 0x1000;
  test.__proto__ = new MyArray(0);
  var res = Array.prototype.slice.apply(test, []); // OOB write

  print(0x1000 == res.length);
  print(float_val == res[0]);
  print(float_val == res[1]);
  print(float_val == res[2]);
  print(float_val == res[3]);
  print(undefined == res[4]);
  print(undefined == res[0xfff]);
}

test();
test();
test();

function test() {
  var arr1 = [0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe];

  class MyArray extends Uint32Array {}

  Object.defineProperty(MyArray, Symbol.species, {
    value: function () {
      return arr1;
    }
  });
  var float_val = 0xdaddeadbabe * 4.9406564584124654E-324;
  var test = [{}];
  delete test[0];
  test.length = 0x1000;
  var src = [float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val, float_val];
  test.__proto__ = src;
  test.__proto__.__proto__ = new MyArray(0); //this will write 0xfffc0daddeadbabe to [arr1] + 0x1D8

  var res = Array.prototype.slice.apply(test, []);
  print(0x1000 == res.length);
  print(float_val == res[0]);
  print(float_val == res[1]);
  print(float_val == res[2]);
  print(float_val == res[src.length - 1]);
  print(undefined == res[src.length]);
  print(undefined == res[0xfff]);
}

test();
test();
test();

function test() {
  var arr = [1, 2]; //Our species function will get called during chakra!Js::JavascriptArray::SliceHelper<unsigned int>

  Object.defineProperty(arr.constructor, Symbol.species, {
    value: function () {
      //change 'arr' from TypeIds_NativeIntArray to TypeIds_Array
      arr[0] = WScript; //return a TypeIds_NativeIntArray so we can read back out the 64 bit pointer as two 32bit ints.

      return [];
    }
  }); //trigger the bug and retrieve a TypeIds_NativeIntArray array containing a pointer.

  var brr = arr.slice();
  print(2 == brr.length);
  print(WScript == brr[0]);
  print(2 == brr[1]);
}

test();
test();
test();

function test() {
  var arr1 = [0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe, 0xdead, 0xbabe];
  var float_val = 0xdaddeadbabe * 4.9406564584124654E-324;
  var test = [float_val, float_val, float_val, float_val];
  delete test[0];
  delete test[1];
  delete test[2];
  var res = Array.from.apply(function () {
    return arr1;
  }, [test]);
  print(4 == res.length);
  print(undefined == res[0]);
  print(undefined == res[1]);
  print(undefined == res[2]);
  print(float_val == res[3]);
  print(['1', '2', '3'] == Array.from.apply(() => new Array(), ["123"]));
  print([1, 2, 3] == Array.from.apply(() => new Array(), [{
    "0": 1,
    "1": 2,
    "2": 3,
    "length": 3
  }]));
}

test();
test();
test();

function test() {
  var brr = Array.of.call(() => [1, 2, 3, 4], WScript, // supply 2 copies of target so the brr array will have a length of 2 and we can read the 64bit pointer.
  WScript);
  print(2 == brr.length);
  print(WScript == brr[0]);
  print(WScript == brr[1]);
  print(undefined == brr[2]);
  print(undefined == brr[3]);
}

test();
test();
test();

function test() {
  var arr = [1, 2];
  Object.defineProperty(arr.constructor, Symbol.species, {
    value: function () {
      return [];
    }
  }); //The value returned from our callback is directly set into the array whose type we create via the species.

  var brr = arr.map(function (v) {
    if (v == 1) {
      return WScript;
    }
  });
  print(2 == brr.length);
  print(WScript == brr[0]);
  print(undefined == brr[1]);
}

test();
test();
test();

function test() {
  //create a TypeIds_Array holding two 64 bit values (The same amount of space for four 32 bit values).
  var arr = [WScript, WScript]; //Our species function will get called during chakra!Js::JavascriptArray::EntrySplice

  Object.defineProperty(arr.constructor, Symbol.species, {
    value: function () {
      //return a TypeIds_NativeIntArray so we can read back out a 64 bit pointer as two 32bit ints.
      return [1, 2, 3, 4];
    }
  }); //trigger the bug and retrieve a TypeIds_NativeIntArray array containing a pointer. The helper
  //method ArraySegmentSpliceHelper<Var> will directly copy over the TypeIds_Array segment data
  //into the TypeIds_NativeIntArray segment.

  var brr = arr.splice(0, 2);
  print(2 == brr.length);
  print(WScript == brr[0]);
  print(WScript == brr[1]);
  print(undefined == brr[2]);
  print(undefined == brr[3]);
}

test();
test();
test();
