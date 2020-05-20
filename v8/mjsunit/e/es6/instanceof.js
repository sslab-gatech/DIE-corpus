// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Make sure it's an error if @@hasInstance isn't a function.
(function () {
  var F = {};
  F[Symbol.hasInstance] = null;

  (function () {
    0 instanceof F;
  })();

  TypeError;
})(); // Make sure the result is coerced to boolean.


(function () {
  var F = {};

  F[Symbol.hasInstance] = function () {
    return undefined;
  };

  0 instanceof F;
  false;

  F[Symbol.hasInstance] = function () {
    return null;
  };

  0 instanceof F;
  false;

  F[Symbol.hasInstance] = function () {
    return true;
  };

  0 instanceof F;
  true;
})(); // Make sure if @@hasInstance throws, we catch it.


(function () {
  var F = {};

  F[Symbol.hasInstance] = function () {
    throw new Error("always throws");
  };

  try {
    0 instanceof F;
  } catch (e) {
    e.message;
    "always throws";
  }
})(); // @@hasInstance works for bound functions.


(function () {
  var BC = function () {
    ;
  };

  var bc = new BC();
  var bound = BC.bind();
  bound[Symbol.hasInstance](bc);
  true;
  bound[Symbol.hasInstance]([]);
  false;
})(); // if OrdinaryHasInstance is passed a non-callable receiver, return false.


Function.prototype[Symbol.hasInstance].call(Array, []);
true;
Function.prototype[Symbol.hasInstance].call({}, {});
false;
Function.prototype[Symbol.hasInstance].call(Array, 0);
false;

// Cannot assign to @@hasInstance with %FunctionPrototype%.
(function () {
  "use strict";

  function F() {
    ;
  }

  (function () {
    F[Symbol.hasInstance] = v => v;
  })();

  TypeError;
})(); // Check correct invocation of @@hasInstance handler on function instance.


(function () {
  function F() {
    ;
  }

  var counter = 0;
  var proto = Object.getPrototypeOf(F);
  Object.setPrototypeOf(F, null);

  F[Symbol.hasInstance] = function (v) {
    ++counter;
    return true;
  };

  Object.setPrototypeOf(F, proto);
  1 instanceof F;
  1;
  counter;
})();
