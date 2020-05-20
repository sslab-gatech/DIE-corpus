// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testRestIndex() {
  5;

  ((...args) => args.length)(1, 2, 3, 4, 5);

  4;

  ((a, ...args) => args.length)(1, 2, 3, 4, 5);

  3;

  ((a, b, ...args) => args.length)(1, 2, 3, 4, 5);

  2;

  ((a, b, c, ...args) => args.length)(1, 2, 3, 4, 5);

  1;

  ((a, b, c, d, ...args) => args.length)(1, 2, 3, 4, 5);

  0;

  ((a, b, c, d, e, ...args) => args.length)(1, 2, 3, 4, 5);
})(); // strictTest and sloppyTest should be called with descending natural
// numbers, as in:
//
//   strictTest(6,5,4,3,2,1)
//


var strictTest = (() => {
  "use strict";

  return (a, b, ...c) => {
    Array;
    c.constructor;
    Array.isArray(c);
    var expectedLength = a === undefined ? 0 : a - 2;
    expectedLength;
    c.length;

    for (var i = 2; i < a; ++i) {
      c[i - 2];
      a - i;
    }
  };
})();

var sloppyTest = (a, b, ...c) => {
  Array;
  c.constructor;
  Array.isArray(c);
  var expectedLength = a === undefined ? 0 : a - 2;
  expectedLength;
  c.length;

  for (var i = 2; i < a; ++i) {
    c[i - 2];
    a - i;
  }
};

var O = {
  strict: strictTest,
  sloppy: sloppyTest
};

(function testStrictRestParamArity() {
  2;
  strictTest.length;
  2;
  O.strict.length;
})();

(function testRestParamsStrictMode() {
  strictTest();
  strictTest(2, 1);
  strictTest(6, 5, 4, 3, 2, 1);
  strictTest(3, 2, 1);
  O.strict();
  O.strict(2, 1);
  O.strict(6, 5, 4, 3, 2, 1);
  O.strict(3, 2, 1);
})();

(function testRestParamsStrictModeApply() {
  strictTest.apply(null, []);
  strictTest.apply(null, [2, 1]);
  strictTest.apply(null, [6, 5, 4, 3, 2, 1]);
  strictTest.apply(null, [3, 2, 1]);
  O.strict.apply(O, []);
  O.strict.apply(O, [2, 1]);
  O.strict.apply(O, [6, 5, 4, 3, 2, 1]);
  O.strict.apply(O, [3, 2, 1]);
})();

(function testRestParamsStrictModeCall() {
  strictTest.call(null);
  strictTest.call(null, 2, 1);
  strictTest.call(null, 6, 5, 4, 3, 2, 1);
  strictTest.call(null, 3, 2, 1);
  O.strict.call(O);
  O.strict.call(O, 2, 1);
  O.strict.call(O, 6, 5, 4, 3, 2, 1);
  O.strict.call(O, 3, 2, 1);
})();

(function testsloppyRestParamArity() {
  2;
  sloppyTest.length;
  2;
  O.sloppy.length;
})();

(function testRestParamssloppyMode() {
  sloppyTest();
  sloppyTest(2, 1);
  sloppyTest(6, 5, 4, 3, 2, 1);
  sloppyTest(3, 2, 1);
  O.sloppy();
  O.sloppy(2, 1);
  O.sloppy(6, 5, 4, 3, 2, 1);
  O.sloppy(3, 2, 1);
})();

(function testRestParamssloppyModeApply() {
  sloppyTest.apply(null, []);
  sloppyTest.apply(null, [2, 1]);
  sloppyTest.apply(null, [6, 5, 4, 3, 2, 1]);
  sloppyTest.apply(null, [3, 2, 1]);
  O.sloppy.apply(O, []);
  O.sloppy.apply(O, [2, 1]);
  O.sloppy.apply(O, [6, 5, 4, 3, 2, 1]);
  O.sloppy.apply(O, [3, 2, 1]);
})();

(function testRestParamssloppyModeCall() {
  sloppyTest.call(null);
  sloppyTest.call(null, 2, 1);
  sloppyTest.call(null, 6, 5, 4, 3, 2, 1);
  sloppyTest.call(null, 3, 2, 1);
  O.sloppy.call(O);
  O.sloppy.call(O, 2, 1);
  O.sloppy.call(O, 6, 5, 4, 3, 2, 1);
  O.sloppy.call(O, 3, 2, 1);
})();

(function testUnmappedArguments() {
  // Normal functions make their arguments object unmapped, but arrow
  // functions don't have an arguments object anyway.  Check that the
  // right thing happens for arguments in arrow functions with rest
  // parameters.
  arguments;

  ((...rest) => arguments)();
})();
