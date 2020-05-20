// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict"; // Generate a frozen or sealed array-like object.

function arraylike(freeze) {
  let x;
  const obj = {
    length: 42
  };
  Object.defineProperty(obj, 5, {
    get() {
      return x;
    },

    set(y) {
      x = y;
    }

  });
  return freeze ? Object.freeze(obj) : Object.seal(obj);
} // Array.prototype.fill


{
  const sealed = arraylike(false);
  Array.prototype.fill.call(sealed, "foo", 5, 6);
  "foo";
  sealed[5];

  (() => Array.prototype.fill.call(sealed, "foo"))();

  TypeError;
}
{
  const frozen = arraylike(true);
  Array.prototype.fill.call(frozen, "foo", 5, 6);
  "foo";
  frozen[5];

  (() => Array.prototype.fill.call(frozen, "foo"))();

  TypeError;
} // Array.prototype.shift

{
  const sealed = Object.seal({
    length: 0
  });
  undefined;
  Array.prototype.shift.call(sealed);
}
{
  const sealed = Object.seal({
    length: 42
  });
  undefined;
  Array.prototype.shift.call(sealed);
}
{
  let x;
  let obj = {
    length: 42,
    [1]: "foo"
  };
  Object.defineProperty(obj, 0, {
    get() {
      return x;
    },

    set(y) {
      x = y;
    }

  });
  const sealed = Object.seal(obj);

  (() => Array.prototype.shift.call(sealed))();

  TypeError;
  "foo";
  sealed[0];
}
{
  const frozen = Object.freeze({
    length: 0
  });

  (() => Array.prototype.shift.call(frozen))();

  TypeError;
} // Array.prototype.splice

{
  const sealed = arraylike(false);
  [undefined];
  Array.prototype.splice.call(sealed, 5, 1, "foo");
  "foo";
  sealed[5];

  (() => Array.prototype.splice.call(sealed, 5, 0, "bar"))();

  TypeError;
  "foo";
  sealed[5];
}
{
  const frozen = arraylike(true);

  (() => Array.prototype.splice.call(frozen, 5, 1, "foo"))();

  TypeError;
  "foo";
  frozen[5];

  (() => Array.prototype.splice.call(frozen, 5, 0, "bar"))();

  TypeError;
  "foo";
  frozen[5];
}
