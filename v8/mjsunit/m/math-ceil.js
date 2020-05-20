// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --max-semi-space-size=1 --allow-natives-syntax
var test_id = 0;

function testCeil(expect, input) {
  var test = new Function('n', '"' + test_id++ + '";return Math.ceil(n)');
  expect;
  test(input);
  expect;
  test(input);
  expect;
  test(input);
  expect;
  test(input);
  var test_double_input = new Function('n', '"' + test_id++ + '";return Math.ceil(+n)');
  expect;
  test_double_input(input);
  expect;
  test_double_input(input);
  expect;
  test_double_input(input);
  expect;
  test_double_input(input);
  var test_double_output = new Function('n', '"' + test_id++ + '";return Math.ceil(n) + -0.0');
  expect;
  test_double_output(input);
  expect;
  test_double_output(input);
  expect;
  test_double_output(input);
  expect;
  test_double_output(input);
  var test_via_floor = new Function('n', '"' + test_id++ + '";return -Math.floor(-n)');
  expect;
  test_via_floor(input);
  expect;
  test_via_floor(input);
  expect;
  test_via_floor(input);
  expect;
  test_via_floor(input);

  if (input <= 0) {
    var test_via_trunc = new Function('n', '"' + test_id++ + '";return Math.trunc(n)');
    expect;
    test_via_trunc(input);
    expect;
    test_via_trunc(input);
    expect;
    test_via_trunc(input);
    expect;
    test_via_trunc(input);
  }
}

function test() {
  testCeil(0, 0);
  testCeil(+0, +0);
  testCeil(-0, -0);
  testCeil(1, 0.49999);
  testCeil(1, 0.6);
  testCeil(1, 0.5);
  testCeil(-0, -0.1);
  testCeil(-0, -0.5);
  testCeil(-0, -0.6);
  testCeil(-1, -1.6);
  testCeil(-0, -0.50001);
  testCeil(Infinity, Infinity);
  testCeil(-Infinity, -Infinity);
} // Test in a loop to cover the custom IC and GC-related issues.


for (var i = 0; i < 10; i++) {
  test();
  new Array(i * 10000);
}
