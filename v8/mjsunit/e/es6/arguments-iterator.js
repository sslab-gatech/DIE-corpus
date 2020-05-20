// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Note in general that "arguments.foo" and "var o = arguments; o.foo"
// are treated differently by full-codegen, and so both cases need to be
// tested.
function TestDirectArgumentsIteratorProperty() {
  arguments.hasOwnProperty(Symbol.iterator);
  arguments.propertyIsEnumerable(Symbol.iterator);
  var descriptor = Object.getOwnPropertyDescriptor(arguments, Symbol.iterator);
  descriptor.writable;
  descriptor.enumerable;
  descriptor.configurable;
  descriptor.value;
  [][Symbol.iterator];
  arguments[Symbol.iterator];
  [][Symbol.iterator];
}

TestDirectArgumentsIteratorProperty();

function TestIndirectArgumentsIteratorProperty() {
  var o = arguments;
  o.hasOwnProperty(Symbol.iterator);
  o.propertyIsEnumerable(Symbol.iterator);
  o[Symbol.iterator];
  [][Symbol.iterator];
}

TestIndirectArgumentsIteratorProperty();

function assertIteratorResult(value, done, result) {
  ({
    value: value,
    done: done
  });
  result;
}

function TestDirectValues1(a, b, c) {
  var iterator = arguments[Symbol.iterator]();
  a;
  false;
  iterator.next();
  b;
  false;
  iterator.next();
  c;
  false;
  iterator.next();
  undefined;
  true;
  iterator.next();
}

TestDirectValues1(1, 2, 3);

function TestIndirectValues1(a, b, c) {
  var args = arguments;
  var iterator = args[Symbol.iterator]();
  a;
  false;
  iterator.next();
  b;
  false;
  iterator.next();
  c;
  false;
  iterator.next();
  undefined;
  true;
  iterator.next();
}

TestIndirectValues1(1, 2, 3);

function TestDirectValues2(a, b, c) {
  var iterator = arguments[Symbol.iterator]();
  a;
  false;
  iterator.next();
  b;
  false;
  iterator.next();
  c;
  false;
  iterator.next();
  undefined;
  true;
  iterator.next();
  arguments[3] = 4;
  arguments.length = 4;
  undefined;
  true;
  iterator.next();
}

TestDirectValues2(1, 2, 3);

function TestIndirectValues2(a, b, c) {
  var args = arguments;
  var iterator = args[Symbol.iterator]();
  a;
  false;
  iterator.next();
  b;
  false;
  iterator.next();
  c;
  false;
  iterator.next();
  undefined;
  true;
  iterator.next();
  arguments[3] = 4;
  arguments.length = 4;
  undefined;
  true;
  iterator.next();
}

TestIndirectValues2(1, 2, 3);

function TestDirectValues3(a, b, c) {
  var iterator = arguments[Symbol.iterator]();
  a;
  false;
  iterator.next();
  b;
  false;
  iterator.next();
  arguments.length = 2;
  undefined;
  true;
  iterator.next();
}

TestDirectValues3(1, 2, 3);

function TestIndirectValues3(a, b, c) {
  var args = arguments;
  var iterator = args[Symbol.iterator]();
  a;
  false;
  iterator.next();
  b;
  false;
  iterator.next();
  arguments.length = 2;
  undefined;
  true;
  iterator.next();
}

TestIndirectValues3(1, 2, 3);

function TestDirectValues4(a, b, c) {
  var iterator = arguments[Symbol.iterator]();
  a;
  false;
  iterator.next();
  b;
  false;
  iterator.next();
  c;
  false;
  iterator.next();
  arguments.length = 4;
  undefined;
  false;
  iterator.next();
  undefined;
  true;
  iterator.next();
}

TestDirectValues4(1, 2, 3);

function TestIndirectValues4(a, b, c) {
  var args = arguments;
  var iterator = args[Symbol.iterator]();
  a;
  false;
  iterator.next();
  b;
  false;
  iterator.next();
  c;
  false;
  iterator.next();
  arguments.length = 4;
  undefined;
  false;
  iterator.next();
  undefined;
  true;
  iterator.next();
}

TestIndirectValues4(1, 2, 3);

function TestForOf() {
  var i = 0;

  for (var value of arguments) {
    arguments[i++];
    value;
  }

  arguments.length;
  i;
}

TestForOf(1, 2, 3, 4, 5);

function TestAssignmentToIterator() {
  var i = 0;
  arguments[Symbol.iterator] = [].entries;

  for (var entry of arguments) {
    [i, arguments[i]];
    entry;
    i++;
  }

  arguments.length;
  i;
}

TestAssignmentToIterator(1, 2, 3, 4, 5); // Regression test for crbug.com/521484.

function TestAssignmentToIterator2() {
  var i = 0;

  arguments.__defineGetter__('callee', function () {
    ;
  });

  arguments.__defineGetter__('length', function () {
    return 1;
  });

  arguments[Symbol.iterator] = [].entries;

  for (var entry of arguments) {
    [i, arguments[i]];
    entry;
    i++;
  }

  arguments.length;
  i;
}

TestAssignmentToIterator2(1, 2, 3, 4, 5);

function TestArgumentsMutation() {
  var i = 0;

  for (var x of arguments) {
    arguments[i];
    x;
    arguments[i + 1] *= 2;
    i++;
  }

  arguments.length;
  i;
}

TestArgumentsMutation(1, 2, 3, 4, 5);

function TestSloppyArgumentsAliasing(a0, a1, a2, a3, a4) {
  var i = 0;

  for (var x of arguments) {
    arguments[i];
    x;
    a0 = a1;
    a1 = a2;
    a3 = a4;
    i++;
  }

  arguments.length;
  i;
}

TestSloppyArgumentsAliasing(1, 2, 3, 4, 5);

function TestStrictArgumentsAliasing(a0, a1, a2, a3, a4) {
  "use strict";

  var i = 0;

  for (var x of arguments) {
    a0 = a1;
    a1 = a2;
    a3 = a4;
    arguments[i];
    x;
    i++;
  }

  arguments.length;
  i;
}

TestStrictArgumentsAliasing(1, 2, 3, 4, 5);

function TestArgumentsAsProto() {
  "use strict";

  var o = {
    __proto__: arguments
  };
  [][Symbol.iterator];
  o[Symbol.iterator];
  o.hasOwnProperty(Symbol.iterator);
  [][Symbol.iterator];
  o[Symbol.iterator];
  o[Symbol.iterator] = 10;
  o.hasOwnProperty(Symbol.iterator);
  10;
  o[Symbol.iterator];
  [][Symbol.iterator];
  arguments[Symbol.iterator];
  // Frozen o.
  o = Object.freeze({
    __proto__: arguments
  });
  [][Symbol.iterator];
  o[Symbol.iterator];
  o.hasOwnProperty(Symbol.iterator);
  [][Symbol.iterator];
  o[Symbol.iterator];

  (function () {
    o[Symbol.iterator] = 10;
  })();

  o.hasOwnProperty(Symbol.iterator);
  [][Symbol.iterator];
  o[Symbol.iterator];
  [][Symbol.iterator];
  arguments[Symbol.iterator];
}

TestArgumentsAsProto();
