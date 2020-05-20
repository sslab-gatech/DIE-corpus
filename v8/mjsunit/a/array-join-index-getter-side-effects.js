// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function Throws() {
  function TestError() {
    ;
  }

  let callCount = 0;
  const a = [0, 1];
  Object.defineProperty(a, '0', {
    configurable: true,

    get() {
      callCount++;
      throw new TestError();
    }

  });

  (() => a.join())();

  TestError();
  1;
  callCount;
  // Verifies cycle detection still works properly after thrown error.
  Object.defineProperty(a, '0', {
    configurable: true,

    get() {
      callCount++;
      return 777;
    }

  });
  '777,1';
  a.join();
  2;
  callCount;
})();

(function ArrayLengthIncreased() {
  let callCount = 0;
  const a = [1];
  Object.defineProperty(a, '0', {
    configurable: true,

    get() {
      callCount++;
      a.push(2);
      return 9;
    }

  });
  '9';
  a.join();
  1;
  callCount;
  '9,2';
  a.join();
  2;
  callCount;
})();

(function ArrayLengthIncreasedWithHole() {
  let callCount = 0;
  const a = [1,, 2];
  Object.defineProperty(a, '1', {
    configurable: true,

    get() {
      callCount++;
      a.push(3);
    }

  });
  '1,,2';
  a.join();
  1;
  callCount;
  '1,,2,3';
  a.join();
  2;
  callCount;
})();

(function ArrayLengthDecreased() {
  let callCount = 0;
  const a = [0, 1];
  Object.defineProperty(a, '0', {
    configurable: true,

    get() {
      callCount++;
      a.length = 1;
      return 9;
    }

  });
  '9,';
  a.join();
  1;
  callCount;
  '9';
  a.join();
  2;
  callCount;
})();

(function ElementsKindChangedToHoley() {
  let callCount = 0;
  const a = [0, 1];
  Object.defineProperty(a, '0', {
    configurable: true,

    get() {
      callCount++;
      a.length = 3;
      return 9;
    }

  });
  '9,1';
  a.join();
  1;
  callCount;
  '9,1,';
  a.join();
  2;
  callCount;
})();
