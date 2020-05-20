//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var nextCount = 0;
var returnCount = 0;
var value1 = 1;
var done1 = false;
var iterable = {};
var shouldNextThrow = false;
var shouldReturnThrow = false;

iterable[Symbol.iterator] = function () {
  return {
    next: function () {
      nextCount++;

      if (shouldNextThrow) {
        ;
      }

      return {
        value: value1,
        done: done1
      };
    },
    return: function (value) {
      returnCount++;

      if (shouldReturnThrow) {
        ;
      }

      return {
        done: true
      };
    }
  };
};

var obj = {
  set prop(val) {
    ;
  }

};

function t1() {
  var iterable = {};

  iterable[Symbol.iterator] = function () {
    return {
      next: function () {
        return {
          value: 10,
          done: false
        };
      }
    };
  };

  var [a] = iterable;
  console.log(a, 10);
  var b;
  [b] = iterable;
  console.log(b, 10);
}

t1();

function t2() {
  var returnFnc = undefined;
  var iterable = {};

  iterable[Symbol.iterator] = function () {
    return {
      next: function () {
        return {
          value: 10,
          done: false
        };
      },
      return: returnFnc
    };
  };

  var a;

  try {
    [a] = iterable;
  } catch (e) {
    ;
  }

  try {
    returnFnc = null;
    [a] = iterable;
  } catch (e) {
    ;
  }

  try {
    returnFnc = {};
    [a] = iterable;
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  nextCount = 0;
  returnCount = 0;
  [] = iterable;
  console.log(nextCount, 0);
  console.log(returnCount, 1);
  nextCount = 0;
  returnCount = 0;
  var [] = iterable;
  console.log(nextCount, 0);
  console.log(returnCount, 1);
  nextCount = 0;
  returnCount = 0;
  [,] = iterable;
  console.log(nextCount, 1);
  console.log(returnCount, 1);
  var a;
  nextCount = 0;
  returnCount = 0;
  [a] = iterable;
  console.log(nextCount, 1);
  console.log(returnCount, 1);
}

t3();

function t4() {
  nextCount = 0;
  returnCount = 0;
  [[a]] = [iterable];
  console.log(nextCount, 1);
  console.log(returnCount, 1);
  nextCount = 0;
  returnCount = 0;
  value1 = iterable;
  [a, [a]] = iterable;
  console.log(nextCount, 3);
  console.log(returnCount, 2);
  value1 = 1; // Reset it back

  nextCount = 0;
  returnCount = 0;
  value1 = iterable;
  var [a, [a]] = iterable;
  console.log(nextCount, 3);
  console.log(returnCount, 2);
  value1 = 1; // Reset it back
}

t4();

function t5() {
  nextCount = 0;
  returnCount = 0;
  done1 = true;
  var [a] = iterable;
  console.log(nextCount, 1);
  console.log(returnCount, 0);
  done1 = false;
}

t5();

function t6() {
  nextCount = 0;
  returnCount = 0;

  try {
    [obj.prop] = iterable;
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
  nextCount = 0;
  returnCount = 0;
  value1 = iterable;

  try {
    [k, [obj.prop]] = iterable;
  } catch (e) {
    ;
  }

  console.log(returnCount, 2);
  value1 = 1;
  nextCount = 0;
  returnCount = 0;
  value1 = iterable;

  try {
    [[[[obj.prop]]]] = iterable;
  } catch (e) {
    ;
  }

  console.log(nextCount, 4);
  console.log(returnCount, 4);
  value1 = 1;
  done1 = true;
  nextCount = 0;
  returnCount = 0;

  try {
    [obj.prop] = iterable;
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);
  done1 = false; // Reset it back.
}

t6();

function t7() {
  var nextCount1 = 0;
  var nextCount2 = 0;
  var returnCount1 = 0;
  var returnCount2 = 0;
  var iterable = {};

  iterable[Symbol.iterator] = function () {
    return {
      next: function () {
        nextCount1++;
        return {
          value: iterable2,
          done: false
        };
      },
      return: function () {
        returnCount1++;
        return {
          done: true
        };
      }
    };
  };

  var iterable2 = {};

  iterable2[Symbol.iterator] = function () {
    return {
      next: function () {
        nextCount2++;
        return {
          value: [0],
          done: false
        };
      },
      return: function () {
        returnCount2++;
        return {
          done: true
        };
      }
    };
  };

  nextCount1 = 0;
  nextCount2 = 0;
  returnCount1 = 0;
  returnCount2 = 0;

  try {
    [[obj.prop]] = iterable;
  } catch (e) {
    ;
  }

  console.log(nextCount1, 1);
  console.log(nextCount2, 1);
  console.log(returnCount1, 1);
  console.log(returnCount2, 1);
}

t7();

function t8() {
  shouldNextThrow = true;
  returnCount = 0;

  try {
    var [a] = iterable;
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);

  try {
    [a] = iterable;
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);

  try {
    var [...a] = iterable;
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);

  try {
    [...a] = iterable;
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);
  shouldNextThrow = false;
}

t8();

function t9() {
  var iterable2 = {};

  iterable2[Symbol.iterator] = function () {
    return {
      next: function () {
        return {
          get value() {
            ;
          },

          done: false
        };
      },
      return: function () {
        assert.fail('return should not be called');
        return {};
      }
    };
  };

  try {
    [a] = iterable2;
  } catch (e) {
    ;
  }
}

t9();

function t10() {
  shouldReturnThrow = true;

  try {
    [a] = iterable;
  } catch (e) {
    ;
  }

  shouldReturnThrow = false;
}

t10();

function t11() {
  shouldReturnThrow = true;
  returnCount = 0;

  try {
    [obj.prop] = iterable;
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
  shouldReturnThrow = false;
}

t11();

function t12() {
  var finallyCount = 0;

  function* gf() {
    try {
      yield 1;
      assert.fail('should not reach after yield');
    } finally {
      finallyCount++;
    }

    assert.fail('should not reach after finally');
    ;
  }

  [a] = gf();
  console.log(finallyCount, 1);
  finallyCount = 0;

  try {
    [obj.prop] = gf();
  } catch (e) {
    ;
  }

  console.log(finallyCount, 1);

  function* gf2() {
    yield 1;
    assert.fail('should not reach after yield');
  }

  var returnCount = 0;

  gf2.prototype.return = function () {
    returnCount++;
    return {};
  };

  [a] = gf2();
  console.log(returnCount, 1);

  gf2.prototype.return = function () {
    returnCount++;
  };

  try {
    [a] = gf2();
  } catch (e) {
    ;
  }

  returnCount = 0;

  try {
    [obj.prop] = gf2();
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
}

t12();

function t13() {
  nextCount = 0;
  returnCount = 0;

  (function ([a, b]) {
    ;
  })(iterable);

  console.log(nextCount, 2);
  console.log(returnCount, 1);
  shouldReturnThrow = true;

  try {
    (function ([a, b]) {
      ;
    })(iterable);
  } catch (e) {
    ;
  }

  shouldReturnThrow = false;
}

t13();

function t14() {
  function* gf() {
    yield 1;
    yield 2;
  }

  gf.prototype.return = function () {
    assert.fail('return function should not be called');
  };

  try {
    [...obj.prop] = gf();
  } catch (e) {
    ;
  }
}

t14();

function t15() {
  returnCount = 0;
  shouldNextThrow = true;

  try {
    var [...a] = iterable;
  } catch (e) {
    ;
  }

  try {
    [...a] = iterable;
  } catch (e) {
    ;
  }

  shouldNextThrow = false;
  console.log(returnCount, 0);
}

t15();

function t16() {
  var returnCalled = 0;

  function* innerGen() {
    yield undefined;
    yield 21;
  }

  innerGen.prototype.return = function () {
    returnCalled++;
    return {};
  };

  var x;

  var iter = function* () {
    [x = yield] = innerGen();
  }();

  iter.next();
  var iterationResult = iter.next(10);
  console.log(x, 10);
  console.log(iterationResult.done);
  console.log(returnCalled, 1);
}

t16();

function t17() {
  function* innerGen() {
    yield undefined;
  }

  innerGen.prototype.return = function () {
    ;
  };

  var x;

  var iter = function* () {
    [x = yield] = innerGen();
    assert.fail('Unreachable code');
  }();

  iter.next();

  try {
    iter.return();
  } catch (e) {
    ;
  }
}

t17();

function t18() {
  function* innerGen() {
    yield undefined;
  }

  var returnCalled = 0;

  innerGen.prototype.return = function () {
    returnCalled++;
  };

  var x;

  var iter = function* () {
    [x = yield] = innerGen();
    assert.fail('Unreachable code');
  }();

  iter.next();

  try {
    iter.throw(new Error('Exception from outer throw'));
  } catch (e) {
    ;
  }

  console.log(returnCalled, 1);
}

t18();

function t19() {
  function* innerGen() {
    ;
  }

  var returnCalled = 0;

  innerGen.prototype.return = function () {
    returnCalled++;
    return {};
  };

  var x;

  var iter = function* () {
    [{}[(yield)]] = innerGen();
    assert.fail('Unreachable code');
  }();

  iter.next();
  iter.return();
  console.log(returnCalled, 1);
}

t19();

function t20() {
  function* innerGen() {
    ;
  }

  var returnCalled = 0;

  innerGen.prototype.return = function () {
    returnCalled++;
    return {};
  };

  var x;

  var iter = function* () {
    [...{}[(yield)]] = innerGen();
    assert.fail('Unreachable code');
  }();

  iter.next();
  iter.return();
  console.log(returnCalled, 1);
}

t20();

function t21() {
  returnCount = 0;

  for (i of iterable) {
    break;
  }

  console.log(returnCount, 1);
  returnCount = 0;

  (function () {
    for (i of iterable) {
      return;
    }
  })();

  console.log(returnCount, 1);
  returnCount = 0;

  (function () {
    var loop = true;

    outer2: while (loop) {
      loop = false;

      for (i of iterable) {
        continue outer2;
      }
    }
  })();

  console.log(returnCount, 1);
  returnCount = 0;

  (function () {
    var loop = true;

    outer3: while (loop) {
      loop = false;

      for (i of iterable) {
        break outer3;
      }
    }
  })();

  console.log(returnCount, 1);
  nextCount = 0;
  returnCount = 0;

  try {
    for (i of iterable) {
      (function () {
        ;
      })();
    }
  } catch (e) {
    ;
  }

  console.log(nextCount, 1);
  console.log(returnCount, 1);
}

t21();

function t22() {
  nextCount = 0;
  returnCount = 0; // Creating recursing iterator. the value is another iterator.

  value1 = iterable;

  (function () {
    for (var iter of iterable) {
      for (var iter2 of iter) {
        return;
      }
    }
  })();

  console.log(nextCount, 2);
  console.log(returnCount, 2);
  nextCount = 0;
  returnCount = 0;

  try {
    for (var iter of iterable) {
      for (var iter2 of iter) {
        ;
      }
    }
  } catch (e) {
    ;
  }

  console.log(nextCount, 2);
  console.log(returnCount, 2);
}

t22();

function t23() {
  returnCount = 0;
  done1 = true;

  for (var i of iterable) {
    assert.fail('This will not reach as the .done is marked to true');
  }

  console.log(returnCount, 0);
  done1 = false;
}

t23();

function t24() {
  returnCount = 0;

  try {
    for (obj.prop of iterable) {
      assert.fail('Should not reach here as assigning to obj.prop throws');
    }
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
  returnCount = 0;
  value1 = iterable;

  try {
    for (var iter1 of iterable) {
      for (obj.prop of iter1) {
        assert.fail('Should not reach here as assigning to obj.prop throws');
      }
    }
  } catch (e) {
    ;
  }

  console.log(returnCount, 2);
  value1 = 1;
}

t24();

function t25() {
  returnCount = 0;
  shouldNextThrow = true;

  try {
    for (var i of iterable) {
      ;
    }
  } catch (e) {
    ;
  }

  shouldNextThrow = false;
  console.log(returnCount, 0);
}

t25();

function t26() {
  var iterable2 = {};

  iterable2[Symbol.iterator] = function () {
    return {
      next: function () {
        return {
          get value() {
            ;
          },

          done: false
        };
      },
      return: function () {
        assert.fail('return should not be called');
      }
    };
  };

  try {
    for (var i of iterable2) {
      ;
    }
  } catch (e) {
    ;
  }
}

t26();

function t27() {
  shouldReturnThrow = true;

  try {
    for (var i of iterable) {
      break;
    }
  } catch (e) {
    ;
  }

  shouldReturnThrow = false;
}

t27();

function t28() {
  shouldReturnThrow = true;
  returnCount = 0;

  try {
    for (obj.prop of iterable) {
      break;
    }
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
  shouldReturnThrow = false;
}

t28();

function t29() {
  var finallyCount = 0;

  function* gf() {
    try {
      yield 1;
      assert.fail('Should not reach here after yield');
    } finally {
      finallyCount++;
    }

    assert.fail('Should not reach here after finally');
    ;
  }

  for (var i of gf()) {
    break;
  }

  console.log(finallyCount, 1);
  finallyCount = 0;

  try {
    for (obj.prop of gf()) {
      ;
    }
  } catch (e) {
    ;
  }

  console.log(finallyCount, 1);

  function* gf2() {
    yield 1;
    assert.fail('Should not reach here after yield');
  }

  var returnCount = 0;

  gf2.prototype.return = function () {
    returnCount++;
    return {};
  };

  for (var i of gf2()) {
    break;
  }

  console.log(returnCount, 1);

  gf2.prototype.return = function () {
    returnCount++;
  };

  try {
    for (i of gf2()) {
      break;
    }
  } catch (e) {
    ;
  }

  returnCount = 0;

  try {
    for (obj.prop of gf2()) {
      ;
    }
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
}

t29();

function t30() {
  var returnCalled = 0;

  let innerGen = function* () {
    yield 1;
    yield 2;
  };

  innerGen.prototype.return = function () {
    returnCalled++;
    return {};
  };

  function* gf() {
    yield* innerGen();
  }

  for (var i of gf()) {
    break;
  }

  console.log(returnCalled, 1);
  returnCalled = 0;

  (function () {
    for (var i of gf()) {
      return;
    }
  })();

  console.log(returnCalled, 1);
  returnCalled = 0;

  try {
    for (var i of gf()) {
      ;
    }
  } catch (e) {
    ;
  }

  console.log(returnCalled, 1);
  returnCalled = 0;
  var [x2] = gf();
  console.log(returnCalled, 1);
}

t30();

function t31() {
  var mapFn = function () {
    ;
  };

  returnCount = 0;

  try {
    Array.from(iterable, mapFn);
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
}

t31();

function t32() {
  shouldNextThrow = true;
  returnCount = 0;

  try {
    Array.from(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);
  shouldNextThrow = false;
}

t32();

function t33() {
  var mapFn = function () {
    ;
  };

  returnCount = 0;
  shouldReturnThrow = true;

  try {
    Array.from(iterable, mapFn);
  } catch (e) {
    ;
  }

  shouldReturnThrow = false;
  console.log(returnCount, 1);
}

t33();

function t34() {
  returnCount = 0;

  try {
    new Map(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);

  Map.prototype.set = function () {
    ;
  };

  value1 = [];
  returnCount = 0;

  try {
    new Map(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
  value1 = 1;
}

t34();

function t35() {
  returnCount = 0;
  shouldNextThrow = true;

  try {
    new Map(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);
  shouldNextThrow = false;
}

t35();

function t36() {
  Map.prototype.set = function () {
    ;
  };

  value1 = [];
  returnCount = 0;
  shouldReturnThrow = true;

  try {
    new Map(iterable);
  } catch (e) {
    ;
  }

  shouldReturnThrow = true;
  value1 = 1;
  console.log(returnCount, 1);
}

t36();

function t37() {
  returnCount = 0;

  try {
    new WeakMap(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);

  WeakMap.prototype.set = function () {
    ;
  };

  value1 = [];
  returnCount = 0;

  try {
    new WeakMap(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
  value1 = 1;
}

t37();

function t38() {
  returnCount = 0;
  shouldNextThrow = true;

  try {
    new WeakMap(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);
  shouldNextThrow = false;
}

t38();

function t39() {
  WeakMap.prototype.set = function () {
    ;
  };

  value1 = [];
  returnCount = 0;
  shouldReturnThrow = true;

  try {
    new WeakMap(iterable);
  } catch (e) {
    ;
  }

  shouldReturnThrow = true;
  value1 = 1;
  console.log(returnCount, 1);
}

t39();

function t40() {
  Set.prototype.add = function () {
    ;
  };

  returnCount = 0;

  try {
    new Set(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
}

t40();

function t41() {
  returnCount = 0;
  shouldNextThrow = true;

  try {
    new Set(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);
  shouldNextThrow = false;
}

t41();

function t42() {
  Set.prototype.add = function () {
    ;
  };

  returnCount = 0;
  shouldReturnThrow = true;

  try {
    new Set(iterable);
  } catch (e) {
    ;
  }

  shouldReturnThrow = false;
  console.log(returnCount, 1);
}

t42();

function t43() {
  WeakSet.prototype.add = function () {
    ;
  };

  returnCount = 0;

  try {
    new WeakSet(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 1);
}

t43();

function t44() {
  returnCount = 0;
  shouldNextThrow = true;

  try {
    new WeakSet(iterable);
  } catch (e) {
    ;
  }

  console.log(returnCount, 0);
  shouldNextThrow = false;
}

t44();

function t45() {
  WeakSet.prototype.add = function () {
    ;
  };

  returnCount = 0;
  shouldReturnThrow = true;

  try {
    new WeakSet(iterable);
  } catch (e) {
    ;
  }

  shouldReturnThrow = false;
  console.log(returnCount, 1);
}

t45();

function t46() {
  Promise.resolve = function () {
    ;
  };

  returnCount = 0;
  Promise.all(iterable);
  console.log(returnCount, 1);
}

t46();

function t47() {
  returnCount = 0;
  shouldNextThrow = true;
  Promise.all(iterable);
  shouldNextThrow = false;
  console.log(returnCount, 0);
}

t47();

function t48() {
  Promise.resolve = function () {
    ;
  };

  returnCount = 0;
  shouldReturnThrow = true;
  var p = Promise.all(iterable);
  shouldReturnThrow = false;
  console.log(returnCount, 1);
  p.catch(function (err) {
    console.log(err.message, 'Exception from resolve function');
  });
}

t48();

function t49() {
  Promise.resolve = function () {
    ;
  };

  returnCount = 0;
  Promise.race(iterable);
  console.log(returnCount, 1);
}

t49();

function t50() {
  returnCount = 0;
  shouldNextThrow = true;
  Promise.race(iterable);
  shouldNextThrow = false;
  console.log(returnCount, 0);
}

t50();

function t51() {
  Promise.resolve = function () {
    ;
  };

  returnCount = 0;
  shouldReturnThrow = true;
  var p = Promise.race(iterable);
  shouldReturnThrow = false;
  console.log(returnCount, 1);
  p.catch(function (err) {
    console.log(err.message, 'Exception from resolve function');
  });
}

t51();

function t52() {
  var val = 0;

  function bar(a, b, c) {
    val = b;
  }

  function* foo(d) {
    for (var k of [2, 3]) {
      bar(1, d ? yield : d, k);
    }
  }

  var iter = foo(true);
  iter.next();
  iter.next();
  iter.next(10);
  console.log(val, 10);
}

t52();

function t53() {
  var val = 0;
  var counter = 0;

  function bar(a, b, c) {
    val = b;
  }

  function* foo(d) {
    try {
      try {
        bar(1, d ? yield : d, 11);
      } finally {
        counter++;
      }
    } finally {
      counter++;
    }
  }

  var iter = foo(true);
  iter.next();
  iter.next(10);
  console.log(val, 10);
  console.log(counter, 2);
}

t53();
