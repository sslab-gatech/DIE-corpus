//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Compares the value set by interpreter with the jitted code
// need to run with -mic:1 -off:simplejit -off:jitloopbody -off:inline -off:globopt:1.18-1.30
// Run locally with -trace:memop -trace:bailout to help find bugs
var x = new Array(100);

for (let i = 0; i < 100; i++) {
  x[i] = i;
}

var y = new Array(100);

for (let i = 0; i < 100; i++) {
  y[i] = i;
}

var z = new Array(100);

for (let i = 0; i < 100; i++) {
  z[i] = i;
}

var u = new Array(100);

for (let i = 0; i < 100; i++) {
  u[i] = i;
}

function testBasic(a, src) {
  for (let i = 0; i < 100; i++) {
    a[i] = src[i];
  }
}

testBasic(x, y);

function testChangedIndex(a, src) {
  // This is an invalid memcopy
  for (let i = 0; i < 100;) {
    a[i] = src[++i];
  }
}

testChangedIndex(x, y);

function testLdSlot(a) {
  let src = new Array(100);

  for (let i = 0; i < 100; ++i) {
    src[i] = i;
  } // Invalid pattern, src is not considered invariant


  for (let i = 0; i < 100; ++i) {
    a[i] = src[i];
  }
}

testLdSlot(x);

function testReverse(a, src) {
  for (let i = 100; i >= 5; i--) {
    a[i] = src[i];
  }
}

testReverse(x, y);

function testMultipleMemcopy(a, b, c, src) {
  let results = [];

  for (let i = 0; i < 10; i++) {
    a[i] = b[i] = c[i] = src[i];
  }

  results.push([a, b, c]);
}

testMultipleMemcopy(x, y, z, u);

function preIncr(a, src) {
  let ri = -1;

  for (let i = 0; i < 10; ++i) {
    a[++ri] = src[ri];
  }
}

preIncr(x, y);

function testNegativeStartIndex(a, src) {
  for (let i = -50; i < 10; i++) {
    // This should bailout on MemOp because the index will be negative
    a[i] = src[i];
  }
}

testNegativeStartIndex(x, y);

function bug4468518(a, src) {
  let x = 0;

  for (let i = 0; i < 128; i++) {
    let m = src[i];
    x += m;
    a[i] = m;
  }

  return x;
}

bug4468518(x, y);
