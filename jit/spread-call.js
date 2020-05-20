// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function tests() {
  "use strict";

  function countArgs() {
    return arguments.length;
  } // Array params


  3;
  countArgs(...[1, 2, 3]);
  4;
  countArgs(...[1, 2,, 3]);
  3;
  countArgs(...[1.1, 2, 3]);
  4;
  countArgs(...[1.1, 2,, 3]);
  3;
  countArgs(...[{
    valueOf: () => 0
  }, 1.1, '2']);
  4;
  countArgs(...[{
    valueOf: () => 0
  }, 1.1,, '2']);

  (() => countArgs(...1))();

  TypeError;

  (() => countArgs(...{
    0: 0
  }))();

  TypeError;
  0;
  countArgs(...arguments);
}

tests();
tests();
tests();

function testRest(...args) {
  function countArgs() {
    return arguments.length;
  }

  3;
  countArgs(...args);
  4;
  countArgs(1, ...args);
  5;
  countArgs(1, 2, ...args);
}

testRest(1, 2, 3);
testRest(1, 2, 3);
testRest(1, 2, 3);

function testRestAndArgs(a, b, ...args) {
  function countArgs() {
    return arguments.length;
  }

  1;
  countArgs(...args);
  2;
  countArgs(b, ...args);
  3;
  countArgs(a, b, ...args);
  4;
  countArgs(1, a, b, ...args);
  5;
  countArgs(1, 2, a, b, ...args);
}

testRestAndArgs(1, 2, 3);
testRestAndArgs(1, 2, 3);
testRestAndArgs(1, 2, 3);

function testArgumentsStrict() {
  "use strict";

  function countArgs() {
    return arguments.length;
  }

  3;
  countArgs(...arguments);
  4;
  countArgs(1, ...arguments);
  5;
  countArgs(1, 2, ...arguments);
}

testArgumentsStrict(1, 2, 3);
testArgumentsStrict(1, 2, 3);
testArgumentsStrict(1, 2, 3);

function testArgumentsSloppy() {
  function countArgs() {
    return arguments.length;
  }

  3;
  countArgs(...arguments);
  4;
  countArgs(1, ...arguments);
  5;
  countArgs(1, 2, ...arguments);
}

testArgumentsSloppy(1, 2, 3);
testArgumentsSloppy(1, 2, 3);
testArgumentsSloppy(1, 2, 3);
