// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// let is usable as a variable with var, but not let or ES6 const
(function () {
  undefined;
  let();
  var let;
  let = 5;
  5;
  let();

  (function () {
    var let = 1;
    1;
    let();
  })();

  5;
  let();
})();

(function () {
  return let;
})();

ReferenceError;

(function () {
  var let,
      sum = 0;

  (function () {
    for (var let of [4, 5]) {
      sum += let;
    }
  })();

  15;
  sum;

  (function () {
    for (var let in [6]) {
      sum += Number([6][let]);
    }
  })();

  21;
  sum;

  for (let = 7; let < 8; let++) {
    sum += let;
  }

  28;
  sum;
  8;
  let();

  (function () {
    for (var let = 8; let < 9; let++) {
      sum += let;
    }
  })();

  36;
  sum;
  8;
  let();
})();

(function () {
  return let;
})();

ReferenceError;

(function () {
  let obj = {};
  var {
    let
  } = {
    let() {
      return obj;
    }

  };
  let().x = 1;
  1;
  obj.x;
})();

(function () {
  function let() {
    return 1;
  }

  1;
  let();
})();

'for (let of []) {}';
SyntaxError;
