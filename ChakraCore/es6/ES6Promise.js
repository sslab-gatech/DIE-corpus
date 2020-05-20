//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Promise tests -- verifies the API shape and basic functionality
function t1() {
  console.log(Promise !== undefined);
  console.log('function', typeof Promise);
  Object.prototype.toString.call(new Promise(() => {
    ;
  }));
  var descriptor = Object.getOwnPropertyDescriptor(Promise, 'prototype');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('object', typeof descriptor.value);
  var descriptor = Object.getOwnPropertyDescriptor(Promise, 'length');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('number', typeof descriptor.value);
  console.log(1, Promise.length);
  var descriptor = Object.getOwnPropertyDescriptor(Promise, 'all');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('function', typeof descriptor.value);
  console.log(1, Promise.all.length);
  var descriptor = Object.getOwnPropertyDescriptor(Promise, 'race');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('function', typeof descriptor.value);
  console.log(1, Promise.race.length);
  var descriptor = Object.getOwnPropertyDescriptor(Promise, 'reject');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('function', typeof descriptor.value);
  console.log(1, Promise.reject.length);
  var descriptor = Object.getOwnPropertyDescriptor(Promise, 'resolve');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('function', typeof descriptor.value);
  console.log(1, Promise.resolve.length);
}

t1();

function t2() {
  var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, 'constructor');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('function', typeof descriptor.value);
  console.log(1, Promise.prototype.constructor.length);
  var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, 'catch');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('function', typeof descriptor.value);
  console.log(1, Promise.prototype.catch.length);
  console.log("catch", Promise.prototype.catch.name);
  var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, 'then');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('function', typeof descriptor.value);
  console.log(2, Promise.prototype.then.length);
  console.log("then", Promise.prototype.then.name);
  var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, 'finally');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('function', typeof descriptor.value);
  console.log(1, Promise.prototype.finally.length);
  console.log("finally", Promise.prototype.finally.name);
  var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, Symbol.toStringTag);
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  console.log('string', typeof descriptor.value);
  console.log('Promise', Promise.prototype[Symbol.toStringTag]);
}

t2();

function t3() {
  try {
    Promise.call();
  } catch (e) {
    ;
  }

  try {
    Promise.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.call(null);
  } catch (e) {
    ;
  }

  try {
    Promise.call({});
  } catch (e) {
    ;
  }

  try {
    new Promise();
  } catch (e) {
    ;
  }

  try {
    new Promise(undefined);
  } catch (e) {
    ;
  }

  try {
    new Promise(null);
  } catch (e) {
    ;
  }

  try {
    new Promise({});
  } catch (e) {
    ;
  }

  var promise = new Promise(function () {
    ;
  });

  try {
    Promise.call(promise);
  } catch (e) {
    ;
  }

  try {
    Promise.call(promise, undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.call(promise, null);
  } catch (e) {
    ;
  }

  try {
    Promise.call(promise, {});
  } catch (e) {
    ;
  }

  try {
    Promise.call(promise, function () {
      ;
    });
  } catch (e) {
    ;
  }
}

t3();

function t4() {
  try {
    Promise.prototype.then.call();
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.then.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.then.call(null);
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.then.call({});
  } catch (e) {
    ;
  }
}

t4();

function t5() {
  try {
    Promise.prototype.catch.call();
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.catch.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.catch.call(null);
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.catch.call({});
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.catch.call({
      then: undefined
    });
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.catch.call({
      then: null
    });
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.catch.call({
      then: {}
    });
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.catch.call({
      get then() {
        throw new TypeError('error!');
      }

    });
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.catch.call({
      then: function () {
        throw new TypeError('error!');
      }
    });
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  try {
    Promise.prototype.finally.call();
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.finally.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.finally.call(null);
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.finally.call({});
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.finally.call({
      then: undefined
    });
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.finally.call({
      then: null
    });
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.finally.call({
      then: {}
    });
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.finally.call({
      get then() {
        throw new TypeError('error!');
      }

    });
  } catch (e) {
    ;
  }

  try {
    Promise.prototype.finally.call({
      then: function () {
        throw new TypeError('error!');
      }
    });
  } catch (e) {
    ;
  }
}

t6();

function t7() {
  try {
    Promise.resolve.call();
  } catch (e) {
    ;
  }

  try {
    Promise.resolve.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.resolve.call(null);
  } catch (e) {
    ;
  }

  try {
    Promise.resolve.call({});
  } catch (e) {
    ;
  }

  try {
    Promise.resolve.call(Math.sin);
  } catch (e) {
    ;
  }
}

t7();

function t8() {
  try {
    Promise.reject.call();
  } catch (e) {
    ;
  }

  try {
    Promise.reject.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.reject.call(null);
  } catch (e) {
    ;
  }

  try {
    Promise.reject.call({});
  } catch (e) {
    ;
  }

  try {
    Promise.reject.call(Math.sin);
  } catch (e) {
    ;
  }
}

t8();

function t9() {
  try {
    Promise.race.call();
  } catch (e) {
    ;
  }

  try {
    Promise.race.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.race.call(null);
  } catch (e) {
    ;
  }

  try {
    Promise.race.call({});
  } catch (e) {
    ;
  }

  try {
    Promise.race.call(Math.sin);
  } catch (e) {
    ;
  }
}

t9();

function t10() {
  try {
    Promise.all.call();
  } catch (e) {
    ;
  }

  try {
    Promise.all.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Promise.all.call(null);
  } catch (e) {
    ;
  }

  try {
    Promise.all.call({});
  } catch (e) {
    ;
  }

  try {
    Promise.all.call(Math.sin);
  } catch (e) {
    ;
  }
}

t10();

function t11() {
  var p = new Promise(function (resolve, reject) {
    ;
  });
  p.constructor = undefined;

  try {
    p.then(function (result) {
      ;
    }, function (err) {
      ;
    });
  } catch (e) {
    ;
  }
}

t11();

function t12() {
  let x = new Promise(function (resolve, reject) {
    ;
  });
  console.log(x === Promise.resolve(x));
  let xConstructor = {
    foo: 'my constructor'
  };
  x.constructor = xConstructor;
  console.log(x === Promise.resolve.call(xConstructor, x));
  console.log(x === Promise.resolve(x));
}

t12();

function t13() {
  var resolveFunction = undefined;
  var rejectFunction = undefined;
  new Promise(function (resolve, reject) {
    resolveFunction = resolve;
    rejectFunction = reject;
  });
  console.log(resolveFunction === undefined);
  console.log(rejectFunction === undefined);
  console.log(1, resolveFunction.length);
  console.log('function', typeof resolveFunction);
  console.log(Object.isExtensible(resolveFunction));
  console.log(Object.getPrototypeOf(resolveFunction), Function.prototype);

  try {
    new resolveFunction();
  } catch (e) {
    ;
  }

  console.log(Object.prototype.hasOwnProperty.call(resolveFunction, "prototype"));
  console.log(Object.prototype.hasOwnProperty.call(resolveFunction, "name"));
  console.log(1, rejectFunction.length);
  console.log('function', typeof rejectFunction);
  console.log(Object.isExtensible(rejectFunction));
  console.log(Object.getPrototypeOf(rejectFunction), Function.prototype);

  try {
    new rejectFunction();
  } catch (e) {
    ;
  }

  console.log(Object.prototype.hasOwnProperty.call(rejectFunction, "prototype"));
  console.log(Object.prototype.hasOwnProperty.call(rejectFunction, "name"));
}

t13();

function t14() {
  let isCalled = false;
  let p = new Promise(function (resolve, reject) {
    resolve();
  });

  p.then = function (resolve, reject) {
    console.log(1, resolve.length);
    console.log('function', typeof resolve);
    console.log(1, reject.length);
    console.log('function', typeof reject);
    isCalled = true;
  };

  Promise.all([p]);
  console.log(isCalled);
}

t14();

function t15() {
  let isCalled = false;
  let p = new Promise(function (resolve, reject) {
    resolve();
  });

  let test_ctor = function (executor) {
    console.log(this instanceof test_ctor);
    console.log(2, executor.length);
    console.log('function', typeof executor);
    isCalled = true;
    executor(function () {
      ;
    }, function () {
      ;
    });
  };

  Promise.resolve.call(test_ctor, p);
  console.log(isCalled);
}

t15();

function t16() {
  var resolveElementFunction = undefined;
  var rejectElementFunction = undefined;
  var thenable = {
    then: function (fulfill, reject) {
      resolveElementFunction = fulfill;
      rejectElementFunction = reject;
    }
  };

  function myResolveFunction() {
    throw 'should not call this function';
  }

  function myRejectFunction() {
    throw 'should not call this function';
  }

  function NotPromise(executor) {
    executor(myResolveFunction, myRejectFunction);
  }

  NotPromise.resolve = function (v) {
    return v;
  };

  Promise.all.call(NotPromise, [thenable]);
  console.log(resolveElementFunction === undefined);
  console.log(rejectElementFunction === undefined);
  console.log(myResolveFunction === resolveElementFunction);
  console.log(myRejectFunction, rejectElementFunction);
  console.log(1, resolveElementFunction.length);
  console.log('function', typeof resolveElementFunction);
  console.log(Object.isExtensible(resolveElementFunction));
  console.log(Object.getPrototypeOf(resolveElementFunction), Function.prototype);

  try {
    new resolveElementFunction();
  } catch (e) {
    ;
  }

  console.log(Object.prototype.hasOwnProperty.call(resolveElementFunction, "prototype"));
  console.log(Object.prototype.hasOwnProperty.call(resolveElementFunction, "name"));
}

t16();

function t17() {
  var executorFunction = undefined;

  function NotPromise2(executor) {
    executorFunction = executor;
    executor(() => {
      ;
    }, () => {
      ;
    });
  }

  Promise.resolve.call(NotPromise2);
  console.log(executorFunction === undefined);
  console.log(2, executorFunction.length);
  console.log('function', typeof executorFunction);
  console.log(Object.isExtensible(executorFunction));
  console.log(Object.getPrototypeOf(executorFunction), Function.prototype);

  try {
    new executorFunction();
  } catch (e) {
    ;
  }

  console.log(Object.prototype.hasOwnProperty.call(executorFunction, "prototype"));
  console.log(Object.prototype.hasOwnProperty.call(executorFunction, "name"));
}

t17();

function t18() {
  try {
    Promise.resolve.call(function (executor) {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    Promise.resolve.call(function (executor) {
      executor();
      executor();
    });
  } catch (e) {
    ;
  }

  try {
    Promise.resolve.call(function (executor) {
      executor('string', 12345);
      executor();
    });
  } catch (e) {
    ;
  }

  try {
    Promise.resolve.call(function (executor) {
      executor(undefined, () => {
        ;
      });
      executor();
    });
  } catch (e) {
    ;
  }

  try {
    Promise.resolve.call(function (executor) {
      try {
        executor(() => {
          ;
        }, undefined);
      } catch (e) {
        ;
      }

      executor();
    });
  } catch (e) {
    ;
  }

  try {
    var isCalled = false;
    Promise.resolve.call(function (executor) {
      try {
        executor(() => {
          isCalled = true;
        }, () => {
          throw 'not called';
        });
      } catch (e) {
        ;
      }

      executor();
    });
    console.log(isCalled);
  } catch (e) {
    ;
  }
}

t18();

function t19() {
  var promise = new Promise(function (resolve) {
    resolve(42);
  });

  var FakePromise1 = function (exec) {
    exec(function () {
      ;
    }, function () {
      ;
    });
  };

  promise.constructor = FakePromise1;

  var FakePromise2 = function (exec) {
    exec(function () {
      ;
    }, function () {
      ;
    });
  };

  Object.defineProperty(FakePromise1, Symbol.species, {
    value: FakePromise2
  });
  console.log(promise.then(function () {
    ;
  }) instanceof FakePromise2);
}

t19();

function t20(index) {
  var calledThen = false;
  var p = new Promise(function () {
    ;
  });

  p.then = function () {
    calledThen = true;
  };

  p.finally("test");
  console.log(calledThen);
}

t20(20);

function t21(index) {
  class TestPromise extends Promise {
    then(a, b) {
      this.first = a;
      this.second = b;
      this.argCount = arguments.length;
    }

  }

  var p = new TestPromise(function () {
    ;
  });
  p.finally(function () {
    ;
  });
  console.log(p.first.name, "");
  console.log(p.first.length, 1);
  console.log(p.second.name, "");
  console.log(p.second.length, 1);
  console.log(p.argCount, 2);
}

t21(21);

function t22(index) {
  class TestPromise extends Promise {
    then(a, b) {
      this.first = a;
      this.second = b;
      this.argCount = arguments.length;
    }

  }

  let p = new TestPromise(r => r());
  p.finally("not callable");
  console.log(p.first, "not callable");
  console.log(p.second, "not callable");
}

t22(22);

function t23(index) {
  let final = Promise.prototype.finally;

  try {
    final.call(new Number(5), "test");
  } catch (e) {
    ;
  }

  try {
    final.call(new Array(5), "test");
  } catch (e) {
    ;
  }

  try {
    final.call(new Object(5), "test");
  } catch (e) {
    ;
  }

  try {
    final.call(5, "test");
  } catch (e) {
    ;
  }

  try {
    final.call({
      a: 5,
      b: 6,
      c: 7
    }, "test");
  } catch (e) {
    ;
  }

  try {
    final.call([2, 3, 4], "test");
  } catch (e) {
    ;
  }

  try {
    final.call("test", "test");
  } catch (e) {
    ;
  }

  try {
    final.call(new String("test"), "test");
  } catch (e) {
    ;
  }
}

t23(23);

function t24(index) {
  let count = 0;

  class TestPromise extends Promise {
    then(a, b) {
      ++count;

      try {
        a();
      } catch (e) {
        ;
      }

      if (count == 1) {
        try {
          b();
        } catch (e) {
          ;
        }
      }
    }

  }

  new TestPromise(function () {
    ;
  }).finally(() => {
    ;
  });
}

t24(24);

function t25() {
  class MyPromise extends Promise {}

  var myPromise = new MyPromise(function (resolve, reject) {
    resolve(42);
  });
  var thenPromise = myPromise.then(function () {
    ;
  });
  var catchPromise = myPromise.catch(function () {
    ;
  });
  var finallyPromise = myPromise.finally(function () {
    ;
  });
  console.log(thenPromise instanceof MyPromise);
  console.log(catchPromise instanceof MyPromise);
  console.log(finallyPromise instanceof MyPromise);
  console.log(MyPromise.race([]) instanceof MyPromise);
  console.log(MyPromise.all([]) instanceof MyPromise);
  console.log(MyPromise.resolve(42) instanceof MyPromise);
  console.log(MyPromise.reject(42) instanceof MyPromise);
}

t25();
