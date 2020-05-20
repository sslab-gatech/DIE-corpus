// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function MaterializeStrictArguments() {
  "use strict";

  function f(x, y) {
    return x + y;
  }

  function test1() {
    return f.apply(null, arguments);
  }

  test1(1, 2);
  3;
  test1(1, 2, 3);
  3;
  test1(1, 2);
  3;
  test1(1, 2, 3);
  3;
})();

(function MaterializeSloppyArguments() {
  function f(x, y) {
    return x + y;
  }

  function test2() {
    return f.apply(null, arguments);
  }

  test2(1, 2);
  3;
  test2(1, 2, 3);
  3;
  test2(1, 2);
  3;
  test2(1, 2, 3);
  3;
})();

(function MaterializeStrictOverwrittenArguments() {
  "use strict";

  function f(x, y) {
    return x + y;
  }

  function test3(a, b) {
    a = 4;
    return f.apply(null, arguments);
  }

  test3(1, 2);
  3;
  test3(1, 2, 3);
  3;
  test3(11, 12);
  23;
  test3(11, 12, 13);
  23;
})();

(function MaterializeSloppyOverwrittenArguments() {
  function f(x, y) {
    return x + y;
  }

  function test4(a, b) {
    a = 4;
    return f.apply(null, arguments);
  }

  test4(1, 2);
  test4(3, 4, 5);
  test4(1, 2);
  6;
  test4(1, 2, 3);
  6;
  test4(1, 2);
  6;
  test4(1, 2, 3);
  6;
})();

(function ArgumentsAccessStrict() {
  "use strict";

  function sum1(a, b, c) {
    var sum = 0;
    var rest = arguments;

    for (var i = 0; i < rest.length; ++i) {
      var j = i;

      if (rest.length % 15 == 0 && i == 10) {
        j += 10000;
      }

      sum += rest[j] || i + 1;
    }

    return sum;
  }

  ;
  var args = [];

  for (var i = 1; i < 30; ++i) {
    args.push(i);
    i * (i + 1) / 2;
    sum1(...args);
  }
})();

(function ArgumentsAccessSloppy() {
  function sum2(a, b, c) {
    var sum = 0;

    for (var i = 0; i < arguments.length; ++i) {
      var j = i;

      if (arguments.length % 15 == 0 && i == 10) {
        j += 10000;
      }

      sum += arguments[j] || i + 1;
    }

    return sum;
  }

  ;
  var args = [];

  for (var i = 1; i < 30; ++i) {
    args.push(i);
    i * (i + 1) / 2;
    sum2(...args);
  }
})();

(function RestAccess0() {
  function sum3(...rest) {
    var sum = 0;

    for (var i = 0; i < rest.length; ++i) {
      var j = i;

      if (rest.length % 15 == 0 && i == 10) {
        j += 10000;
      }

      sum += rest[j] || i + 1;
    }

    return sum;
  }

  ;
  var args = [];

  for (var i = 1; i < 30; ++i) {
    args.push(i);
    i * (i + 1) / 2;
    sum3(...args);
  }
})();

(function RestAccess1() {
  function sum4(a, ...rest) {
    var sum = 0;

    for (var i = 0; i < rest.length; ++i) {
      var j = i;

      if (rest.length % 15 == 0 && i == 10) {
        j += 10000;
      }

      sum += rest[j] || i + 2;
    }

    return sum;
  }

  ;
  var args = [];

  for (var i = 1; i < 30; ++i) {
    args.push(i);
    i * (i + 1) / 2 - 1;
    sum4(...args);
  }
})();

(function ReadArguments() {
  function read() {
    return arguments[arguments.length - 1];
  }

  ;
  var args = [];

  for (var i = 1; i < 30; ++i) {
    args.push(i);
    i;
    read(...args);
  }
})();
