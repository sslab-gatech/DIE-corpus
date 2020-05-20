// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
let testFailed = false;
let testFailure;
(async function () {
  const kNext = 1;
  const kThrow = 2;
  const kReturn = 4;
  const kReturnPrimitive = kReturn | 32;

  function async(iterable, features = kNext, log = []) {
    // Helper to turn a synchronous iterable into an asynchronous iterable,
    // without using the [Async-from-Sync Iterator].
    let it = iterable[Symbol.iterator]();
    let methods = {
      next(sentValue) {
        return new Promise(function (resolve, reject) {
          let {
            value,
            done
          } = it.next(sentValue);
          Promise.resolve(value).then(function (value) {
            log.push('.next() -> resolved ' + value);
            resolve({
              value,
              done
            });
          }, function (value) {
            log.push('.next() -> rejected ' + value);
            reject(value);
          });
        });
      },

      throw(sentValue) {
        return new Promise(function (resolve, reject) {
          let throwMethod = it.throw;

          if (typeof throwMethod !== 'function') {
            log.push('.throw(' + sentValue + ')');
            return reject(sentValue);
          }

          let {
            value,
            done
          } = throwMethod.call(it, sentValue);
          Promise.resolve(value).then(function (value) {
            log.push('.throw() -> resolved ' + value);
            resolve({
              value,
              done
            });
          }, function (value) {
            log.push('.throw() -> rejected ' + value);
            reject(value);
          });
        });
      },

      return(sentValue) {
        return new Promise(function (resolve, reject) {
          let returnMethod = it.return;

          if (typeof returnMethod !== 'function') {
            log.push('.return(' + sentValue + ')');

            if ((features & kReturnPrimitive) === kReturnPrimitive) {
              return resolve(sentValue);
            }

            return resolve({
              value: sentValue,
              done: true
            });
          }

          let {
            value,
            done
          } = returnMethod.call(it, sentValue);
          Promise.resolve(value).then(function (value) {
            log.push('.return() -> resolved ' + value);

            if ((features & kReturnPrimitive) === kReturnPrimitive) {
              return resolve(value);
            }

            resolve({
              value,
              done
            });
          }, function (value) {
            log.push('.return() -> rejected ' + value);
            reject(value);
          });
        });
      }

    };
    return {
      [Symbol.asyncIterator]() {
        log.push('[Symbol.asyncIterator]()');
        return this;
      },

      next: features & kNext ? methods.next : undefined,
      throw: features & kThrow ? methods.throw : undefined,
      return: features & kReturn ? methods.return : undefined
    };
  }

  let testDone;
  let test;

  async function testBindingIdentifierVarDeclarationStatement() {
    let sum = 0;
    testDone = false;

    for await (var value of async([100, 200, 300, 400, 500])) {
      sum += value;
    }

    testDone = true;
    return sum;
  }

  test = testBindingIdentifierVarDeclarationStatement();
  testDone;
  1500;
  await test;
  testDone;

  async function testBindingIdentifierVarDeclarationBlockStatement() {
    let sum = 0;
    testDone = false;

    for await (var value of async([100, 200, 300, 400, 500])) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      sum += value;
    }

    testDone = true;
    return sum;
  }

  test = testBindingIdentifierVarDeclarationBlockStatement();
  testDone;
  1500;
  await test;
  testDone;

  async function testObjectBindingPatternVarDeclarationStatement() {
    let sum = 0,
        keys = [];
    let collection = [{
      key: 'first',
      value: 10
    }, {
      key: undefined,
      value: 20
    }, {
      value: 30
    }, {
      key: 'last',
      value: 40
    }];
    testDone = false;

    for await (var {
      key = 'unknown',
      value
    } of async(collection)) {
      keys.push(key), sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testObjectBindingPatternVarDeclarationStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testObjectBindingPatternVarDeclarationBlockStatement() {
    let sum = 0,
        keys = [];
    let collection = [{
      key: 'first',
      value: 10
    }, {
      key: undefined,
      value: 20
    }, {
      value: 30
    }, {
      key: 'last',
      value: 40
    }];
    testDone = false;

    for await (var {
      key = 'unknown',
      value
    } of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testObjectBindingPatternVarDeclarationBlockStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testArrayBindingPatternVarDeclarationStatement() {
    let sum = 0,
        keys = [];
    let collection = [['first', 10], [undefined, 20], [, 30], ['last', 40]];
    testDone = false;

    for await (var [key = 'unknown', value] of async(collection)) {
      keys.push(key), sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testArrayBindingPatternVarDeclarationStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testArrayBindingPatternVarDeclarationBlockStatement() {
    let sum = 0,
        keys = [];
    let collection = [['first', 10], [undefined, 20], [, 30], ['last', 40]];
    testDone = false;

    for await (var [key = 'unknown', value] of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testArrayBindingPatternVarDeclarationBlockStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  // --------------------------------------------------------------------------
  async function testBindingIdentifierLetDeclarationStatement() {
    let sum = 0;
    testDone = false;

    for await (let value of async([100, 200, 300, 400, 500])) {
      sum += value;
    }

    testDone = true;
    return sum;
  }

  test = testBindingIdentifierLetDeclarationStatement();
  testDone;
  1500;
  await test;
  testDone;

  async function testBindingIdentifierLetDeclarationBlockStatement() {
    let sum = 0;
    testDone = false;

    for await (let value of async([100, 200, 300, 400, 500])) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      sum += value;
    }

    testDone = true;
    return sum;
  }

  test = testBindingIdentifierLetDeclarationBlockStatement();
  testDone;
  1500;
  await test;
  testDone;

  async function testObjectBindingPatternLetDeclarationStatement() {
    let sum = 0,
        keys = [];
    let collection = [{
      key: 'first',
      value: 10
    }, {
      key: undefined,
      value: 20
    }, {
      value: 30
    }, {
      key: 'last',
      value: 40
    }];
    testDone = false;

    for await (let {
      key = 'unknown',
      value
    } of async(collection)) {
      keys.push(key), sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testObjectBindingPatternLetDeclarationStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testObjectBindingPatternLetDeclarationBlockStatement() {
    let sum = 0,
        keys = [];
    let collection = [{
      key: 'first',
      value: 10
    }, {
      key: undefined,
      value: 20
    }, {
      value: 30
    }, {
      key: 'last',
      value: 40
    }];
    testDone = false;

    for await (let {
      key = 'unknown',
      value
    } of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  let threwEarly = false;
  test = testObjectBindingPatternLetDeclarationBlockStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testObjectBindingPatternTDZLetDeclarationStatement() {
    // See https://codereview.chromium.org/1218543003
    let sum = 0;
    testDone = false;
    let value = {
      value: 1
    };

    try {
      for await (let {
        value
      } of async([value])) {
        sum += value;
      }
    } catch (error) {
      threwEarly = true;
      throw {
        sum,
        error,

        toString() {
          return 'TestError';
        }

      };
    }
  }

  test = testObjectBindingPatternTDZLetDeclarationStatement();
  threwEarly;
  'Async function promise should be rejected';

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    0;
    e.sum;
    e.error;
    ReferenceError;
    testDone = true;
  }

  testDone;
  'Awaited promise should be rejected';

  async function testObjectBindingPatternTDZLetDeclarationBlockStatement() {
    // See https://codereview.chromium.org/1218543003
    let sum = 0;
    testDone = false;
    let value = {
      value: 1
    };

    try {
      for await (let {
        value
      } of async([value])) {
        sum += value;
      }
    } catch (error) {
      threwEarly = true;
      throw {
        sum,
        error,

        toString() {
          return 'TestError';
        }

      };
    }
  }

  threwEarly = false;
  test = testObjectBindingPatternTDZLetDeclarationBlockStatement();
  threwEarly;
  'Async function promise should be rejected';

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    0;
    e.sum;
    e.error;
    ReferenceError;
    testDone = true;
  }

  testDone;
  'Awaited promise should be rejected';

  async function testArrayBindingPatternLetDeclarationStatement() {
    let sum = 0,
        keys = [];
    let collection = [['first', 10], [undefined, 20], [, 30], ['last', 40]];
    testDone = false;

    for await (let [key = 'unknown', value] of async(collection)) {
      keys.push(key), sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testArrayBindingPatternLetDeclarationStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testArrayBindingPatternLetDeclarationBlockStatement() {
    let sum = 0,
        keys = [];
    let collection = [['first', 10], [undefined, 20], [, 30], ['last', 40]];
    testDone = false;

    for await (let [key = 'unknown', value] of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testArrayBindingPatternLetDeclarationBlockStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testArrayBindingPatternTDZLetDeclarationStatement() {
    // See https://codereview.chromium.org/1218543003
    let sum = 0;
    testDone = false;
    let value = [1];

    try {
      for await (let [value] of async([value])) {
        sum += value;
      }
    } catch (error) {
      threwEarly = true;
      throw {
        sum,
        error,

        toString() {
          return 'TestError';
        }

      };
    }
  }

  threwEarly = false;
  test = testArrayBindingPatternTDZLetDeclarationStatement();
  threwEarly;
  'Async function promise should be rejected';

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    0;
    e.sum;
    e.error;
    ReferenceError;
    testDone = true;
  }

  testDone;
  'Awaited promise should be rejected';

  async function testArrayBindingPatternTDZLetDeclarationBlockStatement() {
    // See https://codereview.chromium.org/1218543003
    let sum = 0;
    testDone = false;
    let value = [1];

    try {
      for await (let [value] of async([value])) {
        sum += value;
      }
    } catch (error) {
      threwEarly = true;
      throw {
        sum,
        error,

        toString() {
          return 'TestError';
        }

      };
    }
  }

  threwEarly = false;
  test = testArrayBindingPatternTDZLetDeclarationBlockStatement();
  threwEarly;
  'Async function promise should be rejected';

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    0;
    e.sum;
    e.error;
    ReferenceError;
    testDone = true;
  }

  testDone;
  'Awaited promise should be rejected';

  // --------------------------------------------------------------------------
  async function testBindingIdentifierConstDeclarationStatement() {
    let sum = 0;
    testDone = false;

    for await (let value of async([100, 200, 300, 400, 500])) {
      sum += value;
    }

    testDone = true;
    return sum;
  }

  test = testBindingIdentifierConstDeclarationStatement();
  testDone;
  1500;
  await test;
  testDone;

  async function testBindingIdentifierConstDeclarationBlockStatement() {
    let sum = 0;
    testDone = false;

    for await (const value of async([100, 200, 300, 400, 500])) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      sum += value;
    }

    testDone = true;
    return sum;
  }

  test = testBindingIdentifierConstDeclarationBlockStatement();
  testDone;
  1500;
  await test;
  testDone;

  async function testObjectBindingPatternConstDeclarationStatement() {
    let sum = 0,
        keys = [];
    let collection = [{
      key: 'first',
      value: 10
    }, {
      key: undefined,
      value: 20
    }, {
      value: 30
    }, {
      key: 'last',
      value: 40
    }];
    testDone = false;

    for await (const {
      key = 'unknown',
      value
    } of async(collection)) {
      keys.push(key), sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testObjectBindingPatternConstDeclarationStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testObjectBindingPatternConstDeclarationBlockStatement() {
    let sum = 0,
        keys = [];
    let collection = [{
      key: 'first',
      value: 10
    }, {
      key: undefined,
      value: 20
    }, {
      value: 30
    }, {
      key: 'last',
      value: 40
    }];
    testDone = false;

    for await (const {
      key = 'unknown',
      value
    } of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testObjectBindingPatternConstDeclarationBlockStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testObjectBindingPatternTDZConstDeclarationStatement() {
    // See https://codereview.chromium.org/1218543003
    let sum = 0;
    testDone = false;
    const value = {
      value: 1
    };

    try {
      for await (const {
        value
      } of async([value])) {
        sum += value;
      }
    } catch (error) {
      threwEarly = true;
      throw {
        sum,
        error,

        toString() {
          return 'TestError';
        }

      };
    }
  }

  threwEarly = false;
  test = testObjectBindingPatternTDZConstDeclarationStatement();
  threwEarly;
  'Async function promise should be rejected';

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    0;
    e.sum;
    e.error;
    ReferenceError;
    testDone = true;
  }

  testDone;
  'Awaited promise should be rejected';

  async function testObjectBindingPatternTDZConstDeclarationBlockStatement() {
    // See https://codereview.chromium.org/1218543003
    let sum = 0;
    testDone = false;
    const value = {
      value: 1
    };

    try {
      for await (const {
        value
      } of async([value])) {
        sum += value;
      }
    } catch (error) {
      threwEarly = true;
      throw {
        sum,
        error,

        toString() {
          return 'TestError';
        }

      };
    }
  }

  threwEarly = false;
  test = testObjectBindingPatternTDZConstDeclarationBlockStatement();
  threwEarly;
  'Async function promise should be rejected';

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    0;
    e.sum;
    e.error;
    ReferenceError;
    testDone = true;
  }

  testDone;
  'Awaited promise should be rejected';

  async function testArrayBindingPatternConstDeclarationStatement() {
    let sum = 0,
        keys = [];
    let collection = [['first', 10], [undefined, 20], [, 30], ['last', 40]];
    testDone = false;

    for await (const [key = 'unknown', value] of async(collection)) {
      keys.push(key), sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testArrayBindingPatternConstDeclarationStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testArrayBindingPatternConstDeclarationBlockStatement() {
    let sum = 0,
        keys = [];
    let collection = [['first', 10], [undefined, 20], [, 30], ['last', 40]];
    testDone = false;

    for await (const [key = 'unknown', value] of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testArrayBindingPatternLetDeclarationBlockStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 100
  });
  await test;
  testDone;

  async function testArrayBindingPatternTDZConstDeclarationStatement() {
    // See https://codereview.chromium.org/1218543003
    let sum = 0;
    testDone = false;
    const value = [1];

    try {
      for await (const [value] of async([value])) {
        sum += value;
      }
    } catch (error) {
      threwEarly = true;
      throw {
        sum,
        error,

        toString() {
          return 'TestError';
        }

      };
    }
  }

  threwEarly = false;
  test = testArrayBindingPatternTDZConstDeclarationStatement();
  threwEarly;
  'Async function promise should be rejected';

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    0;
    e.sum;
    e.error;
    ReferenceError;
    testDone = true;
  }

  testDone;
  'Awaited promise should be rejected';

  async function testArrayBindingPatternTDZConstDeclarationBlockStatement() {
    // See https://codereview.chromium.org/1218543003
    let sum = 0;
    testDone = false;
    const value = [1];

    try {
      for await (const [value] of async([value])) {
        sum += value;
      }
    } catch (error) {
      threwEarly = true;
      throw {
        sum,
        error,

        toString() {
          return 'TestError';
        }

      };
    }
  }

  threwEarly = false;
  test = testArrayBindingPatternTDZConstDeclarationBlockStatement();
  threwEarly;
  'Async function promise should be rejected';

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    0;
    e.sum;
    e.error;
    ReferenceError;
    testDone = true;
  }

  testDone;
  'Awaited promise should be rejected';

  // --------------------------------------------------------------------------
  async function testBindingIdentifierLHSStatement() {
    let sum = 0;
    let value;
    testDone = false;

    for await (value of async([100, 200, 300, 400, 500])) {
      sum += value;
    }

    testDone = true;
    return sum;
  }

  test = testBindingIdentifierLHSStatement();
  testDone;
  1500;
  await test;
  testDone;

  async function testBindingIdentifierLHSBlockStatement() {
    let sum = 0;
    let value;
    testDone = false;

    for await (value of async([100, 200, 300, 400, 500])) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      sum += value;
    }

    testDone = true;
    return sum;
  }

  test = testBindingIdentifierLHSStatement();
  testDone;
  1500;
  await test;
  testDone;

  async function testObjectBindingPatternLHSStatement() {
    let sum = 0;
    let keys = [];
    let value;
    let key;
    let collection = [{
      key: 'first',
      value: 1
    }, {
      key: undefined,
      value: 2
    }, {
      value: 3
    }, {
      key: 'last',
      value: 4
    }];
    testDone = false;

    for await ({
      key = 'unknown',
      value
    } of async(collection)) {
      keys.push(key), sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testObjectBindingPatternLHSStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 10
  });
  await test;
  testDone;

  async function testObjectBindingPatternLHSBlockStatement() {
    let sum = 0;
    let keys = [];
    let value;
    let key;
    let collection = [{
      key: 'first',
      value: 1
    }, {
      key: undefined,
      value: 2
    }, {
      value: 3
    }, {
      key: 'last',
      value: 4
    }];
    testDone = false;

    for await ({
      key = 'unknown',
      value
    } of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testObjectBindingPatternLHSBlockStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 10
  });
  await test;
  testDone;

  async function testArrayBindingPatternLHSStatement() {
    let sum = 0;
    let keys = [];
    let value;
    let key;
    let collection = [['first', 1], [undefined, 2], [, 3], ['last', 4]];
    testDone = false;

    for await ([key = 'unknown', value] of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testArrayBindingPatternLHSStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 10
  });
  await test;
  testDone;

  async function testArrayBindingPatternLHSBlockStatement() {
    let sum = 0;
    let keys = [];
    let value;
    let key;
    let collection = [{
      key: 'first',
      value: 1
    }, {
      key: undefined,
      value: 2
    }, {
      value: 3
    }, {
      key: 'last',
      value: 4
    }];
    testDone = false;

    for await ({
      key = 'unknown',
      value
    } of async(collection)) {
      'use strict';

      let strict = function () {
        return this === undefined;
      }();

      strict;
      keys.push(key);
      sum += value;
    }

    testDone = true;
    return {
      keys,
      sum
    };
  }

  test = testArrayBindingPatternLHSBlockStatement();
  testDone;
  ({
    keys: ['first', 'unknown', 'unknown', 'last'],
    sum: 10
  });
  await test;
  testDone;

  // --------------------------------------------------------------------------
  async function testBreakStatementReturnMethodNotPresent() {
    let log = [];
    let collection = [1, 2, 3, 4, 5];
    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(collection, kNext, log)) {
      sum += x;

      if (++i === 3) {
        break;
      }
    }

    testDone = true;
    return {
      sum,
      log
    };
  }

  test = testBreakStatementReturnMethodNotPresent();
  testDone;
  ({
    sum: 6,
    log: ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.next() -> resolved 3']
  });
  await test;
  testDone;

  async function testBreakStatementReturnMethodPresent() {
    let log = [];
    let collection = [1, 2, 3, 4, 5];
    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(collection, kNext | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        break;
      }
    }

    testDone = true;
    return {
      sum,
      log
    };
  }

  test = testBreakStatementReturnMethodPresent();
  testDone;
  ({
    sum: 3,
    log: ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return(undefined)']
  });
  await test;
  testDone;

  async function testBreakStatementReturnMethodAwaitIterResult() {
    let log = [];
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();

    sync_iter.return = function () {
      return {
        value: new Promise(function (resolve, reject) {
          Promise.resolve().then(function () {
            resolve('break!');
          });
        }),
        done: true
      };
    };

    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        break;
      }
    }

    testDone = true;
    return {
      sum,
      log
    };
  }

  test = testBreakStatementReturnMethodAwaitIterResult();
  testDone;
  ({
    sum: 3,
    log: ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> resolved break!']
  });
  await test;
  testDone;

  async function testBreakStatementReturnMethodAwaitRejection(log) {
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();
    let sum = 0;

    sync_iter.return = function () {
      return {
        value: new Promise(function (resolve, reject) {
          Promise.resolve().then(function () {
            reject('break! ' + sum);
          });
        }),
        done: true
      };
    };

    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        break;
      }
    }

    return {
      sum,
      log
    };
  }

  let log = [];
  test = testBreakStatementReturnMethodAwaitRejection(log);
  testDone;

  try {
    await test;
  } catch (e) {
    log;
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> rejected break! 3'];
    'break! 3';
    e;
    testDone = true;
  }

  testDone;
  'Promise should be rejected';

  async function testBreakStatementReturnMethodPrimitiveValue(log) {
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();

    sync_iter.return = function () {
      return {
        value: 'break! primitive!',
        done: true
      };
    };

    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturnPrimitive, log)) {
      sum += x;

      if (++i === 2) {
        break;
      }
    }

    return {
      sum,
      log
    };
  }

  log = [];
  test = testBreakStatementReturnMethodPrimitiveValue(log);
  testDone;

  try {
    await test;
  } catch (e) {
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> resolved break! primitive!'];
    log;
    e;
    TypeError;
    testDone = true;
  }

  testDone;
  'Promise should be rejected';

  async function testReturnStatementReturnMethodNotPresent() {
    let log = [];
    let collection = [1, 2, 3, 4, 5];
    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(collection, kNext, log)) {
      sum += x;

      if (++i === 3) {
        testDone = true;
        return {
          sum,
          log
        };
      }
    }
  }

  test = testReturnStatementReturnMethodNotPresent();
  testDone;
  ({
    sum: 6,
    log: ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.next() -> resolved 3']
  });
  await test;
  testDone;

  async function testReturnStatementReturnMethodPresent() {
    let log = [];
    let collection = [1, 2, 3, 4, 5];
    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(collection, kNext | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        testDone = true;
        return {
          sum,
          log
        };
      }
    }
  }

  test = testReturnStatementReturnMethodPresent();
  testDone;
  ({
    sum: 3,
    log: ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return(undefined)']
  });
  await test;
  testDone;

  async function testReturnStatementReturnMethodAwaitIterResult() {
    let log = [];
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();

    sync_iter.return = function () {
      return {
        value: new Promise(function (resolve, reject) {
          Promise.resolve().then(function () {
            testDone = true;
            resolve('return!');
          });
        }),
        done: true
      };
    };

    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        return {
          sum,
          log
        };
      }
    }
  }

  test = testReturnStatementReturnMethodAwaitIterResult();
  testDone;
  ({
    sum: 3,
    log: ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> resolved return!']
  });
  await test;
  testDone;

  async function testReturnStatementReturnMethodAwaitRejection(log) {
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();
    let sum = 0;

    sync_iter.return = function () {
      return {
        value: new Promise(function (resolve, reject) {
          Promise.resolve().then(function () {
            reject('return! ' + sum);
          });
        }),
        done: true
      };
    };

    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        return {
          sum,
          log
        };
      }
    }
  }

  log = [];
  test = testReturnStatementReturnMethodAwaitRejection(log);
  testDone;

  try {
    await test;
  } catch (e) {
    'return! 3';
    e;
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> rejected return! 3'];
    log;
    testDone = true;
  }

  testDone;
  'Promise should be rejected';

  async function testReturnStatementReturnMethodPrimitiveValue(log) {
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();

    sync_iter.return = function () {
      return {
        value: 'return! primitive!',
        done: true
      };
    };

    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturnPrimitive, log)) {
      sum += x;

      if (++i === 2) {
        break;
      }
    }

    return {
      sum,
      log
    };
  }

  log = [];
  test = testReturnStatementReturnMethodPrimitiveValue(log);
  testDone;

  try {
    await test;
  } catch (e) {
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> resolved return! primitive!'];
    log;
    e;
    TypeError;
    testDone = true;
  }

  testDone;
  'Promise should be rejected';

  async function testThrowStatementReturnMethodNotPresent() {
    let log = [];
    let collection = [1, 2, 3, 4, 5];
    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(collection, kNext | kThrow, log)) {
      sum += x;

      if (++i === 3) {
        throw {
          sum,
          log,

          toString() {
            return 'TestError';
          }

        };
      }
    }

    return {
      sum,
      log
    };
  }

  test = testThrowStatementReturnMethodNotPresent();
  testDone;

  try {
    await test;
  } catch (e) {
    'TestError';
    e.toString();
    6;
    e.sum;
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.next() -> resolved 3'];
    e.log;
    testDone = true;
  }

  testDone;
  'Awaited Promise should be rejected';

  async function testThrowStatementReturnMethodPresent() {
    let log = [];
    let collection = [1, 2, 3, 4, 5];
    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(collection, kNext | kThrow | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        throw {
          sum,
          log,

          toString() {
            return 'TestError2';
          }

        };
      }
    }

    return {
      sum,
      log
    };
  }

  test = testThrowStatementReturnMethodPresent();
  testDone;

  try {
    await test;
  } catch (e) {
    'TestError2';
    e.toString();
    3;
    e.sum;
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return(undefined)'];
    e.log;
    testDone = true;
  }

  testDone;
  'Awaited Promise should be rejected';

  async function testThrowStatementReturnMethodAwaitIterResult(log) {
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();

    sync_iter.return = function () {
      return {
        value: new Promise(function (resolve, reject) {
          Promise.resolve().then(function () {
            testDone = true;
            resolve('throw!');
          });
        }),
        done: true
      };
    };

    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        throw 'Boo!!';
      }
    }
  }

  log = [];
  test = testThrowStatementReturnMethodAwaitIterResult(log);
  testDone;

  try {
    await test;
  } catch (e) {
    'Boo!!';
    e;
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> resolved throw!'];
    log;
    testDone = true;
  }

  testDone;
  'Awaited Promise should be rejected';

  async function testThrowStatementReturnMethodAwaitRejection(log) {
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();
    let sum = 0;

    sync_iter.return = function () {
      return {
        value: new Promise(function (resolve, reject) {
          Promise.resolve().then(function () {
            reject('return! ' + sum);
          });
        }),
        done: true
      };
    };

    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturn, log)) {
      sum += x;

      if (++i === 2) {
        throw 'Boo!!';
      }
    }
  }

  log = [];
  test = testThrowStatementReturnMethodAwaitRejection(log);
  testDone;

  try {
    await test;
  } catch (e) {
    'Boo!!';
    e;
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> rejected return! 3'];
    log;
    testDone = true;
  }

  testDone;
  'Promise should be rejected';

  async function testThrowStatementReturnMethodPrimitiveValue(log) {
    let collection = [1, 2, 3, 4, 5];
    let sync_iter = collection[Symbol.iterator]();

    sync_iter.return = function () {
      return {
        value: 'return! primitive!',
        done: true
      };
    };

    let sum = 0;
    let i = 0;
    testDone = false;

    for await (var x of async(sync_iter, kNext | kReturnPrimitive, log)) {
      sum += x;

      if (++i === 2) {
        throw 'Boo!!';
      }
    }
  }

  log = [];
  test = testThrowStatementReturnMethodPrimitiveValue(log);
  testDone;

  try {
    await test;
  } catch (e) {
    ['[Symbol.asyncIterator]()', '.next() -> resolved 1', '.next() -> resolved 2', '.return() -> resolved return! primitive!'];
    log;
    'Boo!!';
    e;
    testDone = true;
  }

  testDone;
  'Promise should be rejected';
})().catch(function (error) {
  testFailed = true;
  testFailure = error;
});

if (testFailed) {
  throw testFailure;
}
