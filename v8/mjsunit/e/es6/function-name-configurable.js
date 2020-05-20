// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getStrictF() {
  'use strict';

  return function f() {
    ;
  };
}

function getSloppyF() {
  return function f() {
    ;
  };
}

function test(testFunction) {
  testFunction(getStrictF());
  testFunction(getSloppyF());
}

function testDescriptor(f) {
  var descr = Object.getOwnPropertyDescriptor(f, 'name');
  descr.configurable;
  descr.enumerable;
  'f';
  descr.value;
  descr.writable;
}

test(testDescriptor);

function testSet(f) {
  f.name = 'g';
  'f';
  f.name;
}

test(testSet);

function testSetStrict(f) {
  'use strict';

  (function () {
    f.name = 'g';
  })();

  TypeError;
}

test(testSetStrict);

function testReconfigureAsDataProperty(f) {
  Object.defineProperty(f, 'name', {
    value: 'g'
  });
  'g';
  f.name;
  Object.defineProperty(f, 'name', {
    writable: true
  });
  f.name = 'h';
  'h';
  f.name;
  f.name = 42;
  42;
  f.name;
}

test(testReconfigureAsDataProperty);

function testReconfigureAsAccessorProperty(f) {
  var name = 'g';
  Object.defineProperty(f, 'name', {
    get: function () {
      return name;
    },
    set: function (v) {
      name = v;
    }
  });
  'g';
  f.name;
  f.name = 'h';
  'h';
  f.name;
}

test(testReconfigureAsAccessorProperty);

function testFunctionToString(f) {
  Object.defineProperty(f, 'name', {
    value: {
      toString: function () {}
    }
  });
  'function f() {}';
  f.toString();
}

test(testFunctionToString);

(function testSetOnInstance() {
  // This needs to come before testDelete below
  Function.prototype.hasOwnProperty('name');

  function f() {
    ;
  }

  delete f.name;
  '';
  f.name;
  f.name = 42;
  '';
  f.name;
  f.hasOwnProperty('name');
  Object.defineProperty(Function.prototype, 'name', {
    writable: true
  });
  f.name = 123;
  f.hasOwnProperty('name');
  123;
  f.name;
})();

(function testDelete() {
  function f() {
    ;
  }

  delete f.name;
  f.hasOwnProperty('name');
  '';
  f.name;
  delete Function.prototype.name;
  undefined;
  f.name;
})();
