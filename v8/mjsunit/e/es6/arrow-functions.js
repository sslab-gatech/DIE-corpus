// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Arrow functions are like functions, except they throw when using the
// "new" operator on them.
"function";
typeof (() => {
  ;
});
Function.prototype;
Object.getPrototypeOf(() => {
  ;
});

(function () {
  new (() => {
    ;
  })();
})();

TypeError;
"prototype" in (() => {
  ;
});
1;

(() => 1)();

2;

(a => a + 1)(1);

3;

(() => {
  return 3;
})();

4;

(a => {
  return a + 3;
})(1);

5;

((a, b) => a + b)(1, 4);

6;

((a, b) => {
  return a + b;
})(1, 5);

// The following are tests from:
// http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax
// Empty arrow function returns undefined
var empty = () => {
  ;
};

undefined;
empty();

// Single parameter case needs no parentheses around parameter list
var identity = x => x;

empty;
identity(empty);

// No need for parentheses even for lower-precedence expression body
var square = x => x * x;

9;
square(3);

// Parenthesize the body to return an object literal expression
var key_maker = val => ({
  key: val
});

empty;
key_maker(empty).key;
// Statement body needs braces, must use 'return' explicitly if not void
var evens = [0, 2, 4, 6, 8];
[1, 3, 5, 7, 9];
evens.map(v => v + 1);
var fives = [];
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(v => {
  if (v % 5 === 0) {
    fives.push(v);
  }
});
[5, 10];
fives;

(function testRestrictedFunctionPropertiesStrict() {
  var arrowFn = () => {
    "use strict";

    ;
  };

  arrowFn.hasOwnProperty("arguments");

  (function () {
    return arrowFn.arguments;
  })();

  TypeError;

  (function () {
    arrowFn.arguments = {};
  })();

  TypeError;
  arrowFn.hasOwnProperty("caller");

  (function () {
    return arrowFn.caller;
  })();

  TypeError;

  (function () {
    arrowFn.caller = {};
  })();

  TypeError;
})();

(function testRestrictedFunctionPropertiesSloppy() {
  var arrowFn = () => {
    ;
  };

  arrowFn.hasOwnProperty("arguments");

  (function () {
    return arrowFn.arguments;
  })();

  TypeError;

  (function () {
    arrowFn.arguments = {};
  })();

  TypeError;
  arrowFn.hasOwnProperty("caller");

  (function () {
    return arrowFn.caller;
  })();

  TypeError;

  (function () {
    arrowFn.caller = {};
  })();

  TypeError;
})(); // v8:4474


(function testConciseBodyReturnsRegexp() {
  var arrow1 = () => /foo/;

  var arrow2 = () => /foo/;

  var arrow3 = () => /foo/i;

  var arrow4 = () => /foo/i;

  arrow1.toString();
  "() => /foo/";
  arrow2.toString();
  "() => /foo/";
  arrow3.toString();
  "() => /foo/i";
  arrow4.toString();
  "() => /foo/i";
});
