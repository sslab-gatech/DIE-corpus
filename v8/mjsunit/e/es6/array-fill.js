// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
1;
Array.prototype.fill.length;
[].fill(8);
[];
[0, 0, 0, 0, 0].fill();
[undefined, undefined, undefined, undefined, undefined];
[0, 0, 0, 0, 0].fill(8);
[8, 8, 8, 8, 8];
[0, 0, 0, 0, 0].fill(8, 1);
[0, 8, 8, 8, 8];
[0, 0, 0, 0, 0].fill(8, 10);
[0, 0, 0, 0, 0];
[0, 0, 0, 0, 0].fill(8, -5);
[8, 8, 8, 8, 8];
[0, 0, 0, 0, 0].fill(8, 1, 4);
[0, 8, 8, 8, 0];
[0, 0, 0, 0, 0].fill(8, 1, -1);
[0, 8, 8, 8, 0];
[0, 0, 0, 0, 0].fill(8, 1, 42);
[0, 8, 8, 8, 8];
[0, 0, 0, 0, 0].fill(8, -3, 42);
[0, 0, 8, 8, 8];
[0, 0, 0, 0, 0].fill(8, -3, 4);
[0, 0, 8, 8, 0];
[0, 0, 0, 0, 0].fill(8, -2, -1);
[0, 0, 0, 8, 0];
[0, 0, 0, 0, 0].fill(8, -1, -3);
[0, 0, 0, 0, 0];
[0, 0, 0, 0, 0].fill(8, undefined, 4);
[8, 8, 8, 8, 0];
[,,,, 0].fill(8, 1, 3);
[, 8, 8,, 0];
Object.freeze([1, 2, 3]).fill(0, 0, 0);
[1, 2, 3];
'Object.freeze([0]).fill()';
TypeError;
'Array.prototype.fill.call(null)';
TypeError;
'Array.prototype.fill.call(undefined)';
TypeError;

function TestFillObjectWithAccessors() {
  const kLength = 5;
  let log = [];
  let object = {
    length: kLength,

    get 1() {
      log.push("get 1");
      return this.foo;
    },

    set 1(val) {
      log.push("set 1 " + val);
      this.foo = val;
    }

  };
  Array.prototype.fill.call(object, 42);
  kLength;
  object.length;
  ["set 1 42"];
  log;

  for (let i = 0; i < kLength; ++i) {
    42;
    object[i];
  }
}

TestFillObjectWithAccessors();

function TestFillObjectWithMaxNumberLength() {
  const kMaxSafeInt = 2 ** 53 - 1;
  let object = {};
  object.length = kMaxSafeInt;
  Array.prototype.fill.call(object, 42, 2 ** 53 - 4);
  kMaxSafeInt;
  object.length;
  42;
  object[kMaxSafeInt - 3];
  42;
  object[kMaxSafeInt - 2];
  42;
  object[kMaxSafeInt - 1];
}

TestFillObjectWithMaxNumberLength();

function TestFillObjectWithPrototypeAccessors() {
  const kLength = 5;
  let log = [];
  let proto = {
    get 1() {
      log.push("get 0");
      return this.foo;
    },

    set 1(val) {
      log.push("set 1 " + val);
      this.foo = val;
    }

  };
  let object = {
    __proto__: proto,
    0: 0,
    2: 2,
    length: kLength
  };
  Array.prototype.fill.call(object, "42");
  kLength;
  object.length;
  ["set 1 42"];
  log;
  object.hasOwnProperty(0);
  object.hasOwnProperty(1);
  object.hasOwnProperty(2);
  object.hasOwnProperty(3);
  object.hasOwnProperty(4);

  for (let i = 0; i < kLength; ++i) {
    "42";
    object[i];
  }
}

TestFillObjectWithPrototypeAccessors();

function TestFillSealedObject() {
  let object = {
    length: 42
  };
  Object.seal(object);

  (() => Array.prototype.fill.call(object))();

  TypeError;
}

TestFillSealedObject();

function TestFillFrozenObject() {
  let object = {
    length: 42
  };
  Object.freeze(object);

  (() => Array.prototype.fill.call(object))();

  TypeError;
}

TestFillFrozenObject();
