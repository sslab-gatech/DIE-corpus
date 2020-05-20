// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const splice = Array.prototype.splice;
const unshift = Array.prototype.unshift;
{
  let a = {
    length: 2 ** 53 - 1
  };

  (() => unshift.call(a, 42))();

  TypeError;
  unshift.call(a);
  2 ** 53 - 1;
}
{
  let a = {
    length: 2 ** 53 - 1
  };

  (() => splice.call(a, 0, 0, 42))();

  TypeError;
  splice.call(a, 0, 1, 42).length;
  1;
  a[0];
  42;
}
{
  let a = {
    length: 2 ** 53 - 1,
    [Symbol.isConcatSpreadable]: true
  };

  (() => [42].concat(a))();

  TypeError;

  (() => [,].concat(a))();

  TypeError;

  (() => [].concat(42, a))();

  TypeError;
}
