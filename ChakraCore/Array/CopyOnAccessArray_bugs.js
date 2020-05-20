//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//Note: see function  ArraySpliceHelper of JavascriptArray.cpp
var a = [1, 2, 3, 4, 5];
var b = Array.prototype.slice.call(a, 1, 3);
print([2, 3] == b);
var a = [1, 2];
Array.prototype.push.call(a, 1);
print([1, 2, 1] == a);
var a = [1, 2, 3, 4, 5, 6, 7];
print(true == Array.isArray(a));
var a = [2, 1, 3, 4];
Array.prototype.unshift.call(a, 0);
print([0, 2, 1, 3, 4] == a);
var a = [1, 2, 3, 4];
var c = Array.prototype.shift.call(a);
print([2, 3, 4] == a);
print(1 == c);
var a = [1, 2, 3, 4];
var c = Array.prototype.entries.call(a);

for (var e of c) {
  print(e);
}

var a = [1, 2, 3, 4];
var c = Array.prototype.keys.call(a);

for (var e of c) {
  print(e);
}

var a = [1, 2, 3, 4];
Array.prototype.reverse.call(a);
print([4, 3, 2, 1] == a);
var a = [1, 2, 3, 4, 5, 6];
var c = Object.prototype.toString.call(a);
print("[object Array]" == c);
var a = [1, 2, 3, 4, 5, 6];
var c = Object.prototype.hasOwnProperty.call(a, 1);
print(c == true);
var p = new Proxy([0, 0, 0, 0, 0], {});
p.length = 1;
print('0' == p.toString());
var q = new Proxy([0, 0, 0, 0, 0], {});
q[0] = 1;
print('1,0,0,0,0' == q.toString());
