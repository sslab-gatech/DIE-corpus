// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
'use strict'; // Without .toJSON method.

undefined;
BigInt.prototype.toJSON;

(() => JSON.stringify(40))();

TypeError;

(() => JSON.stringify(Object(40)))();

TypeError;

// With .toJSON method that returns a string.
BigInt.prototype.toJSON = function () {
  "bigint";
  typeof this;
  return String(this);
};

"\"42\"";
JSON.stringify(40);

BigInt.prototype.toJSON = function () {
  "object";
  typeof this;
  return String(this);
};

"\"42\"";
JSON.stringify(Object(40));

// With .toJSON method that returns a BigInt primitive.
BigInt.prototype.toJSON = function () {
  return this;
};

(() => JSON.stringify(40))();

TypeError;

(() => JSON.stringify(Object(40)))();

TypeError;

// With .toJSON method that returns a BigInt object.
BigInt.prototype.toJSON = function () {
  return Object(this);
};

(() => JSON.stringify(40))();

TypeError;

(() => JSON.stringify(Object(40)))();

TypeError;
// Without .toJSON method but with a replacer returning a string.
delete BigInt.prototype.toJSON;
let replacer;

replacer = function (k, v) {
  "bigint";
  typeof v;
  40 == v;
  return "43";
};

"\"43\"";
JSON.stringify(40, replacer);

replacer = function (k, v) {
  "object";
  typeof v;
  40 == v;
  return "43";
};

"\"43\"";
JSON.stringify(Object(40), replacer);
undefined;
BigInt.prototype.toJSON;

replacer = () => 40;

(() => JSON.stringify(40, replacer))();

TypeError;

(() => JSON.stringify(Object(40), replacer))();

TypeError;
undefined;
BigInt.prototype.toJSON;

replacer = () => Object(40);

(() => JSON.stringify(40, replacer))();

TypeError;

(() => JSON.stringify(Object(40), replacer))();

TypeError;
