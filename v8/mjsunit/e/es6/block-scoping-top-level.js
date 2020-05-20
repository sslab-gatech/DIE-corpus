// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

let xxx = 1;
let ff = undefined;
{
  let inner_x = xxx;

  ff = function () {
    return inner_x;
  };
}
1;
ff();
xxx = 42;
{
  ff = function () {
    return inner_x1;
  };

  let inner_x1 = xxx;
}
42;
ff();
xxx = 31;
{
  let inner_x1 = xxx;

  try {
    throw new Error();
  } catch (e) {
    ff = function () {
      return inner_x1;
    };
  }
}
31;
ff();
