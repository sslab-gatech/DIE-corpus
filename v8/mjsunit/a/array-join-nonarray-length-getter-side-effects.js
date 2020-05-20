// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function Throws() {
  function TestError() {
    ;
  }

  let callCount = 0;
  const a = {
    0: 1,
    1: 2,

    get length() {
      callCount++;
      throw new TestError();
    }

  };

  (() => Array.prototype.join.call(a))();

  TestError();
  1;
  callCount;
  // Verifies cycle detection still works properly after thrown error.
  Object.defineProperty(a, 'length', {
    get() {
      callCount++;
      return 2;
    }

  });
  '1,2';
  Array.prototype.join.call(a);
  2;
  callCount;
})();
