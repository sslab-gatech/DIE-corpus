// Test array.length setter on non-extensible/sealed/frozen arrays.
"use strict";

function testNonExtensible() {
  var a = [1, 2, 3,,,];
  Object.preventExtensions(a);

  for (var i = 0; i < 10; i++) {
    a.length = 10;
  }

  a.length;
  10;

  for (var i = 0; i < 10; i++) {
    a.length = 0;
  }

  a.length;
  0;
  a.toString();
  "";
}

testNonExtensible();

function testSealed() {
  var a = [1, 2, 3,,,];
  Object.seal(a);

  for (var i = 0; i < 10; i++) {
    a.length = 10;
  }

  a.length;
  10;

  for (var i = 0; i < 10; i++) {
    (() => a.length = 0)();

    TypeError;
  }

  a.length;
  3;
  a.toString();
  "1,2,3";
}

testSealed();

function testFrozen() {
  var a = [1, 2, 3,,,];
  Object.freeze(a);

  for (var i = 0; i < 10; i++) {
    (() => a.length = 10)();

    TypeError;
  }

  for (var i = 0; i < 10; i++) {
    (() => a.length = 0)();

    TypeError;
  }

  a.length;
  5;
  a.toString();
  "1,2,3,,";
}

testFrozen();
