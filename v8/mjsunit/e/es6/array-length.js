// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Test array functions do not cause infinite loops when length is negative,
// max_value, etc.
// ArrayToString
var o = {
  length: Number.MIN_VALUE
};
var result = Array.prototype.toString.call(o);
"[object Object]";
result;
// ArrayToLocaleString
var o = {
  length: Number.MIN_VALUE
};
var result = Array.prototype.toLocaleString.call(o);
"";
result;
// ArrayJoin
var o = {
  length: Number.MIN_VALUE
};
var result = Array.prototype.join.call(o);
0;
result.length;
// ArrayPush
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.push.call(o, 1);
1;
o.length;
1;
o[0];
var o = {
  length: Number.MAX_VALUE
};

(() => Array.prototype.push.call(o, 1))();

TypeError;
// ArrayPop
var o = {
  length: 0
};
Array.prototype.pop.call(o);
0;
o.length;
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.pop.call(o);
0;
o.length;
var o = {
  length: Number.MAX_VALUE
};
Array.prototype.pop.call(o);
o.length;
Number.MAX_SAFE_INTEGER - 1;
// ArrayReverse
var o = {
  0: 'foo',
  length: Number.MIN_VALUE
};
var result = Array.prototype.reverse.call(o);
'object';
typeof result;
Number.MIN_VALUE;
result.length;
Number.MIN_VALUE;
o.length;
// ArrayShift
var o = {
  0: "foo",
  length: Number.MIN_VALUE
};
var result = Array.prototype.shift.call(o);
undefined;
result;
0;
o.length;
// ArrayUnshift
var o = {
  length: 0
};
Array.prototype.unshift.call(o);
0;
o.length;
var o = {
  length: 0
};
Array.prototype.unshift.call(o, 'foo');
'foo';
o[0];
1;
o.length;
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.unshift.call(o);
0;
o.length;
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.unshift.call(o, 'foo');
'foo';
o[0];
1;
o.length;
// ArraySplice
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.splice.call(o);
0;
o.length;
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.splice.call(o, 0, 10, ['foo']);
['foo'];
o[0];
1;
o.length;
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.splice.call(o, -1);
0;
o.length;
var o = {
  length: Number.MAX_SAFE_INTEGER
};
Array.prototype.splice.call(o, -1);
Number.MAX_SAFE_INTEGER - 1;
o.length;
// ArraySlice
var o = {
  length: Number.MIN_VALUE
};
var result = Array.prototype.slice.call(o);
0;
result.length;
var o = {
  length: Number.MIN_VALUE
};
var result = Array.prototype.slice.call(o, Number.MAX_VALUE);
0;
result.length;
var o = {
  length: Number.MAX_VALUE
};
var result = Array.prototype.slice.call(o, Number.MAX_VALUE - 1);
0;
result.length;
// ArrayIndexOf
var o = {
  length: Number.MIN_VALUE
};
var result = Array.prototype.indexOf.call(o);
-1;
result;
var o = {
  length: Number.MAX_SAFE_INTEGER
};
o[Number.MAX_SAFE_INTEGER - 1] = "foo";
var result = Array.prototype.indexOf.call(o, "foo", Number.MAX_SAFE_INTEGER - 2);
Number.MAX_SAFE_INTEGER - 1;
result;
var o = {
  length: Number.MAX_SAFE_INTEGER
};
o[Number.MAX_SAFE_INTEGER - 1] = "foo";
var result = Array.prototype.indexOf.call(o, "foo", -1);
Number.MAX_SAFE_INTEGER - 1;
result;
// ArrayLastIndexOf
var o = {
  length: Number.MIN_VALUE
};
var result = Array.prototype.lastIndexOf.call(o);
-1;
result;
var o = {
  length: Number.MAX_SAFE_INTEGER
};
o[Number.MAX_SAFE_INTEGER - 1] = "foo";
var result = Array.prototype.lastIndexOf.call(o, "foo", Number.MAX_SAFE_INTEGER);
Number.MAX_SAFE_INTEGER - 1;
result;
var o = {
  length: Number.MAX_SAFE_INTEGER
};
o[Number.MAX_SAFE_INTEGER - 1] = "foo";
var result = Array.prototype.lastIndexOf.call(o, "foo", -1);
Number.MAX_SAFE_INTEGER - 1;
result;

// ArrayFilter
var func = function (v) {
  return v;
};

var o = {
  length: Number.MIN_VALUE
};
Array.prototype.filter.call(o, func);
Number.MIN_VALUE;
o.length;
// ArrayForEach
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.forEach.call(o, func);
Number.MIN_VALUE;
o.length;
// ArraySome
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.some.call(o, func);
Number.MIN_VALUE;
o.length;
// ArrayEvery
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.every.call(o, func);
Number.MIN_VALUE;
o.length;
// ArrayMap
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.map.call(o, func);
Number.MIN_VALUE;
o.length;
// ArrayReduce
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.reduce.call(o, func, 0);
Number.MIN_VALUE;
o.length;
// ArrayReduceRight
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.reduceRight.call(o, func, 0);
Number.MIN_VALUE;
o.length;
// ArrayFill
var o = {
  length: Number.MIN_VALUE
};
Array.prototype.fill(o, 0);
Number.MIN_VALUE;
o.length;
