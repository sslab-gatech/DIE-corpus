//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var maxPushArgs = 3; // Maximum number of arguments to push supported by this test case.  Cannot be greater than 6.

for (var b = 0; b <= 1; b++) {
  var isArray = b === 0;

  for (var i = 1; i <= maxPushArgs; i++) {
    var testType = isArray ? "Array" : "Object";
    print(testType + " Test " + i);
    var a = Create(isArray);
    print("Pushing...");
    PushArgs(a, i, "Bef");
    Output(a, i);
    print("Pushing...");
    PushArgs(a, 1, "Aft");
    Output(a, i + 1);
  }
}

function Create(isArray) {
  var arr;

  if (isArray) {
    arr = [];
  } else {
    arr = {};
    arr.push = Array.prototype.push;
    arr.length = 4294967294;
  }

  arr[0] = "Value0";
  arr[1] = "Value1";
  arr[2] = "Value2";
  arr[4294967293] = "Value4294967293";
  return arr;
}

function PushArgs(arr, num, prefix) {
  if (num < 1 || num > maxPushArgs) {
    print("FAIL");
    return;
  }

  try {
    if (num === 1) {
      arr.push(prefix + "1");
    } else {
      if (num === 2) {
        arr.push(prefix + "1", prefix + "2");
      } else {
        if (num === 3) {
          arr.push(prefix + "1", prefix + "2", prefix + "3");
        }
      }
    }

    print("No exception");
  } catch (e) {
    print(e.name + ": " + e.message);
  }
}

function Output(arr, numPushed) {
  if (numPushed > maxPushArgs) {
    print("FAIL");
    return;
  }

  print("Length is: " + arr.length);
  OutputIndex(arr, 0);
  OutputIndex(arr, 1);
  OutputIndex(arr, 2);

  for (var i = 0; i <= numPushed; i++) {
    var index = "429496729" + (3 + i); // Does not work if maxPushArgs > 6

    OutputIndex(arr, index);
  }
}

function OutputIndex(arr, index) {
  var v = arr[index];

  if (v == undefined) {
    v = "UNDEFINED";
  }

  print(index + ": " + v);
} //implicit calls


function foo() {
  var obj = {};
  Object.prototype.push = Array.prototype.push;
  var x;
  Object.defineProperty(obj, "length", {
    get: function () {
      x = true;
      return 5;
    }
  });
  x = false;

  try {
    var len = obj.push(1);
  } catch (e) {
    print('caught exception calling push');
  }

  print(x);
  return len;
}

print(foo());

function bar() {
  var a = Number();
  Number.prototype.push = Array.prototype.push;
  a.push(1);
}

bar();

function test0(arr) {
  for (var __loopvar4 = 0; __loopvar4 < 2; __loopvar4++) {
    arr.length--;
    arr.push(3);
  }

  return arr.length;
}

print("ary.length = " + test0(new Array(10)));

function popTest() {
  [,].pop();
}

;
print(popTest());
