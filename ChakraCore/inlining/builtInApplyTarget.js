//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function foo(arr) {
  print(Math.min.apply(Math, arr));
  print(Math.max.apply(Math, arr));
  print();
}

var arr = [{}, 3, 3.4,, new Array()];
var intArr = [1, 2, 3, 4, 5];
var floatArr = [1.2, 2.3, 3.4, 4.5, 5.6];
foo(arr);
foo(arr);
print("Testing int array");
foo(intArr); //missing value

len = intArr.length;
intArr[len + 1] = 0;
foo(intArr);
intArr.length = len; //converting to float array

intArr[3] = 0.5;
foo(intArr); //with a NaN element

intArr.push(Number.NaN);
foo(intArr);
print("Testing float array");
foo(floatArr); //missing value

len = floatArr.length;
floatArr[len + 1] = 0.45;
foo(floatArr);
floatArr.length = len;
floatArr.push(0.5);
foo(floatArr); //with undefined (will convert the array)

floatArr.push(undefined);
foo(floatArr);
