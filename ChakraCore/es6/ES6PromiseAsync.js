//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Promise async tests -- verifies functionality of promise async operations
function echo(str) {
  console.log(str);
}

function getAsyncFulfilledPromise(t, v, fail) {
  fail = fail || false;
  var p = new Promise(function (resolve, reject) {
    if (fail) {
      setTimeout(function () {
        reject(v);
      }, 0);
    } else {
      setTimeout(function () {
        resolve(v);
      }, 0);
    }
  });
  p.then(function (result) {
    echo(t + v + ' success: ' + result);
  }, function (err) {
    echo(t + v + ' failure: ' + err);
  });
  return p;
}

function getAsyncResolvePromise(t, v) {
  return getAsyncFulfilledPromise(t, v, false);
}

function getAsyncRejectPromise(t, v) {
  return getAsyncFulfilledPromise(t, v, true);
} // Copy promise and attempt to call resolve handler twice.
// Since we can only call the Promise.all resolve handlers once, we can tamper with the result value for this promise.


function tamper(p, result, useresult) {
  return Object.assign(p, {
    then(onFulfilled, onRejected) {
      if (useresult) {
        onFulfilled(result);
      } else {
        onFulfilled();
      }

      return Promise.prototype.then.call(this, onFulfilled, onRejected);
    }

  });
}

function t1(index) {
  var promise = new Promise(function (resolve, reject) {
    echo('Test #' + index + ' - Executor function called synchronously');
    resolve('basic:success');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler called with err = ' + err);
  });
}

t1(1);

function t2(index) {
  var promise = new Promise(function (resolve, reject) {
    echo('Test #' + index + ' - Executor function called synchronously');
    reject('basic:error');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler called with err = ' + err);
  });
}

t2(2);

function t3(index) {
  var promise = new Promise(function (resolve, reject) {
    resolve('multithen:success');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #3 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #3 called with err = ' + err);
  });
}

t3(3);

function t4(index) {
  var promise = new Promise(function (resolve, reject) {
    resolve('chain:success1');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
    return new Promise(function (resolve, reject) {
      resolve('chain:success2');
    });
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  }).then(function (result) {
    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
  });
}

t4(4);

function t5(index) {
  var promise = new Promise(function (resolve, reject) {
    throw 'basic:throw';
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler called with err = ' + err);
  });
}

t5(5);

function t6(index) {
  var promise = new Promise(function (resolve, reject) {
    resolve('thenable.get:unused');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
    return {
      get then() {
        throw 'thenable.get:error!';
      }

    };
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  }).then(function (result) {
    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
  });
}

t6(6);

function t6(index) {
  var promise = new Promise(function (resolve, reject) {
    resolve('thenable.call:unused');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
    return {
      then: function () {
        throw 'thenable.call:error!';
      }
    };
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  }).then(function (result) {
    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
  });
}

t6(6);

function t7(index) {
  var promise = new Promise(function (resolve, reject) {
    resolve('success.throw:unused');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
    throw 'success.throw:error';
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  }).then(function (result) {
    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
  });
}

t7(7);

function t7(index) {
  var promise = new Promise(function (resolve, reject) {
    reject('error.throw:unused');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
    throw 'error.throw:error';
  }).then(function (result) {
    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
  });
}

t7(7);

function t8(index) {
  var promise = new Promise(function (resolve, reject) {
    WScript.SetTimeout(function () {
      resolve(promise);
    }, 0);
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler called with err = ' + err);
  });
}

t8(8);

function t9(index) {
  var promise = new Promise(function (resolve, reject) {
    reject('error');
  });
  promise.catch(function (err) {
    echo('Test #' + index + ' - Catch handler called with err = ' + err);
  });
}

t9(9);

function t10(index) {
  var promise = new Promise(function (resolve, reject) {
    reject('error1');
  });
  promise.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
    throw 'error2';
  }).catch(function (err) {
    echo('Test #' + index + ' - Catch handler #2 called with err = ' + err);
  });
}

t10(10);

function t11(index) {
  var promise = new Promise(function (resolve, reject) {
    reject('error1');
  });
  promise.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
    return 'ok';
  }).then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
    throw 'error2';
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  }).catch(function (err) {
    echo('Test #' + index + ' - Catch handler #2 called with err = ' + err);
  });
}

t11(11);

function t12(index) {
  var promise = new Promise(function (resolve, reject) {
    resolve('success');
  });
  promise.then(undefined, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  }).then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
  });
}

t12(12);

function t13(index) {
  var promise = new Promise(function (resolve, reject) {
    reject('failure');
  });
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, undefined).then(function (result) {
    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
  }, undefined).catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
}

t13(13);

function t14(index) {
  var promise = Promise.resolve('resolved promise result');
  promise.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  });
}

t14(14);

function t15(index) {
  var promise = Promise.resolve(42);
  var wrappedPromise = Promise.resolve(promise);

  if (promise !== wrappedPromise) {
    echo('Test #' + index + ' - Promise.resolve returns a new promise object!');
  }
}

t15(15);

function t16(index) {
  var promise = Promise.reject('rejected promise result');
  promise.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
}

t16(16);

function t17(index) {
  var promise = Promise.reject(42);
  var wrappedPromise = Promise.reject(promise);

  if (promise === wrappedPromise) {
    echo('Test #' + index + ' - Promise.reject does not return a new promise object!');
  }
}

t17(17);

function t18(index) {
  var objectWithNonObjectIterator = {
    [Symbol.iterator]: 123
  };
  var p = Promise.race(objectWithNonObjectIterator);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
}

t18(18);

function t19(index) {
  var _resolve = Promise.resolve;
  Promise.resolve = undefined;
  var p = Promise.race([Promise.reject(42)]);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
  Promise.resolve = _resolve;
}

t19(19);

function t20(index) {
  var _resolve = Promise.resolve;

  Promise.resolve = function () {
    return undefined;
  };

  var p = Promise.race([Promise.reject(42)]);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
  Promise.resolve = _resolve;
}

t20(20);

function t21(index) {
  var _resolve = Promise.resolve;

  Promise.resolve = function () {
    return {};
  };

  var p = Promise.race([Promise.reject(42)]);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
  Promise.resolve = _resolve;
}

t21(21);

function t22(index) {
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          throw new TypeError('failure inside iterator');
        }
      };
    }
  };
  var p = Promise.race(objectWithIterator);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
}

t22(22);

function t23(index) {
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        i: 0,
        next: function () {
          if (this.i > 2) {
            throw new TypeError('failure inside iterator');
          }

          this.i++;
          return {
            done: this.i == 5,
            value: Promise.resolve('resolved promise completion #' + this.i)
          };
        }
      };
    }
  };
  var p = Promise.race(objectWithIterator);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t23(23);

function t24(index) {
  var promises = [new Promise(function () {
    ;
  }), Promise.resolve('first promise'), Promise.resolve('second promise'), Promise.reject('third promise')];
  var p = Promise.race(promises);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t24(24);

function t25(index) {
  var promises = [new Promise(function () {
    ;
  }), getAsyncResolvePromise('Test #' + index + ' - ', 'p1'), getAsyncResolvePromise('Test #' + index + ' - ', 'p2'), getAsyncRejectPromise('Test #' + index + ' - ', 'p3')];
  var p = Promise.race(promises);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t25(25);

function t26(index) {
  var promises = [new Promise(function () {
    ;
  }), getAsyncRejectPromise('Test #' + index + ' - ', 'p1'), getAsyncResolvePromise('Test #' + index + ' - ', 'p2'), getAsyncResolvePromise('Test #' + index + ' - ', 'p3')];
  var p = Promise.race(promises);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t26(26);

function t27(index) {
  var promises = ['first promise value', 42, new TypeError('some error')];
  var p = Promise.race(promises);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t27(27);

function t28(index) {
  var objectWithNonObjectIterator = {
    [Symbol.iterator]: 123
  };
  var p = Promise.all(objectWithNonObjectIterator);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
}

t28(28);

function t29(index) {
  var _resolve = Promise.resolve;
  Promise.resolve = undefined;
  var p = Promise.all([Promise.reject(42)]);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
  Promise.resolve = _resolve;
}

t29(29);

function t30(index) {
  var _resolve = Promise.resolve;

  Promise.resolve = function () {
    return undefined;
  };

  var p = Promise.all([Promise.reject(42)]);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
  Promise.resolve = _resolve;
}

t30(30);

function t31(index) {
  var _resolve = Promise.resolve;

  Promise.resolve = function () {
    return {};
  };

  var p = Promise.all([Promise.reject(42)]);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
  Promise.resolve = _resolve;
}

t31(31);

function t32(index) {
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          throw new TypeError('failure inside iterator');
        }
      };
    }
  };
  var p = Promise.all(objectWithIterator);
  p.catch(function (err) {
    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
  });
}

t32(32);

function t33(index) {
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        i: 0,
        next: function () {
          if (this.i > 2) {
            throw new TypeError('failure inside iterator');
          }

          this.i++;
          return {
            done: this.i == 5,
            value: Promise.resolve('resolved promise completion #' + this.i)
          };
        }
      };
    }
  };
  var p = Promise.all(objectWithIterator);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t33(33);

function t34(index) {
  var promises = [new Promise(function () {
    ;
  }), Promise.resolve('first promise'), Promise.resolve('second promise'), Promise.reject('third promise')];
  var p = Promise.all(promises);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t34(34);

function t35(index) {
  var promises = [new Promise(function () {
    ;
  }), getAsyncResolvePromise('Test #' + index + ' - ', 'p1'), getAsyncResolvePromise('Test #' + index + ' - ', 'p2'), getAsyncRejectPromise('Test #' + index + ' - ', 'p3')];
  var p = Promise.all(promises);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t35(35);

function t36(index) {
  var promises = [getAsyncResolvePromise('Test #' + index + ' - ', 'p1'), getAsyncResolvePromise('Test #' + index + ' - ', 'p2'), getAsyncResolvePromise('Test #' + index + ' - ', 'p3')];
  var p = Promise.all(promises);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t36(36);

function t37(index) {
  var promises = ['success value 1', 42, new TypeError('an error')];
  var p = Promise.all(promises);
  p.then(function (result) {
    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
  }, function (err) {
    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
  });
}

t37(37);

function t38(index) {
  var thenable = {
    then: function (resolve, reject) {
      echo('Test #' + index + ' - Promise.resolve calls thenable.then');
      Promise.resolve('nested Promise.resolve call').then(function (result) {
        echo('Test #' + index + ' - Promise.resolve call nested within thenable.then = ' + result);
      });
    }
  };
  var promise = Promise.resolve(thenable);
}

t38(38);

function t39(index) {
  var p = new Promise(function (res) {
    res({
      then: function (resolve, reject) {
        echo('Test #' + index + ' - thenable.then resolve = ' + typeof resolve + ' reject = ' + typeof reject);
      }
    });
  });
}

t39(39);

function t40(index) {
  Promise.all([Promise.reject('expected1')]).then(result => echo(`Test #${index} - Success handler #1 called with result = ${result}`)).catch(err => echo(`Test #${index} - Catch handler #1 called with err = ${err}`));
  Promise.all([Promise.reject('expected2'), Promise.resolve('unexpected1')]).then(result => echo(`Test #${index} - Success handler #2 called with result = ${result}`)).catch(err => echo(`Test #${index} - Catch handler #2 called with err = ${err}`));
  Promise.all([Promise.resolve('unexpected2'), Promise.reject('expected3')]).then(result => echo(`Test #${index} - Success handler #3 called with result = ${result}`)).catch(err => echo(`Test #${index} - Catch handler #3 called with err = ${err}`));
}

t40(40);

function t41(index) {
  var promises = [];
  var p = Promise.all(promises);
  p.then(v => {
    echo(`Test #${index} - Success handler #1 called with result = '${v}' (length = ${v.length}) (isArray = ${Array.isArray(v)})`);
  }).catch(err => {
    echo(`Test #${index} - Catch handler called with err = ${err}`);
  });
}

t41(41);

function t42(index) {
  var promises = [tamper(Promise.resolve('success'), 'tampered', true)];
  Promise.all(promises).then(result => {
    echo(`Test #${index} - Success handler called with result = '${result}' (length = ${result.length}) (isArray = ${Array.isArray(result)})`);
  }).catch(err => {
    echo(`Test #${index} - Catch handler called with err = ${err}`);
  });
}

t42(42);

function t43(index) {
  var promises = [tamper(Promise.resolve('success'))];
  Promise.all(promises).then(result => {
    echo(`Test #${index} - Success handler called with result = '${result}' (length = ${result.length}) (isArray = ${Array.isArray(result)})`);
  }).catch(err => {
    echo(`Test #${index} - Catch handler called with err = ${err}`);
  });
}

t43(43);

function t44(index) {
  var promises = [Promise.resolve(0), tamper(Promise.resolve(1)), Promise.resolve(2).then(result => {
    echo(`Test #${index} - Success handler #1a called with result = '${result}' (isArray = ${Array.isArray(result)}) (fulfillCalled = ${fulfillCalled})`);
    return 3;
  }).then(result => {
    echo(`Test #${index} - Success handler #1b called with result = '${result}' (isArray = ${Array.isArray(result)}) (fulfillCalled = ${fulfillCalled})`);
    return 4;
  }).catch(err => {
    echo(`Test #${index} - Catch handler #1 called with err = ${err}`);
  })];
  let fulfillCalled = false;
  Promise.all(promises).then(result => {
    fulfillCalled = true;
    echo(`Test #${index} - Success handler #2 called with result = '${result}' (length = ${result.length}) (isArray = ${Array.isArray(result)}) (fulfillCalled = ${fulfillCalled})`);
  }).catch(err => {
    echo(`Test #${index} - Catch handler #2 called with err = ${err}`);
  });
}

t44(44);

function t45(index) {
  var promises = [Promise.resolve(0), tamper(Promise.resolve(1)), Promise.reject(2)];
  Promise.all(promises).then(result => {
    echo(`Test #${index} - Success handler #1 called with result = '${result}' (length = ${result.length}) (isArray = ${Array.isArray(result)})`);
  }, err => {
    echo(`Test #${index} - Error handler #1 called with err = ${err}`);
  }).catch(err => {
    echo(`Test #${index} - Catch handler #1 called with err = ${err}`);
  });
}

t45(45);

function t46(index) {
  var p = new Promise(function (resolve, reject) {
    resolve('success');
    resolve('failure');
  });
  p.then(res => {
    echo(`Test #${index} - Success handler #1 called with res = '${res}'`);
  }, err => {
    echo(`Test #${index} - Error handler #1 called with err = '${err}'`);
  });
}

t46(46);

function t47(index) {
  var p = new Promise(function (resolve, reject) {
    reject('success');
    reject('failure');
  });
  p.then(res => {
    echo(`Test #${index} - Success handler #1 called with res = '${res}'`);
  }, err => {
    echo(`Test #${index} - Error handler #1 called with err = '${err}'`);
  });
}

t47(47);

function t48(index) {
  var p = new Promise(function (resolve, reject) {
    resolve('success');
    reject('failure');
  });
  p.then(res => {
    echo(`Test #${index} - Success handler #1 called with res = '${res}'`);
  }, err => {
    echo(`Test #${index} - Error handler #1 called with err = '${err}'`);
  });
}

t48(48);

function t49(index) {
  var p = new Promise(function (resolve, reject) {
    reject('success');
    resolve('failure');
  });
  p.then(res => {
    echo(`Test #${index} - Success handler #1 called with res = '${res}'`);
  }, err => {
    echo(`Test #${index} - Error handler #1 called with err = '${err}'`);
  });
}

t49(49);

function t50(index) {
  var p = new Promise(function (resolve, reject) {
    reject('success');
    resolve('failure');
    reject('failure');
  });
  p.then(res => {
    echo(`Test #${index} - Success handler #1 called with res = '${res}'`);
  }, err => {
    echo(`Test #${index} - Error handler #1 called with err = '${err}'`);
  });
}

t50(50);

function t51(index) {
  var p = new Promise(function (resolve, reject) {
    resolve('success');
    reject('failure');
    resolve('failure');
  });
  p.then(res => {
    echo(`Test #${index} - Success handler #1 called with res = '${res}'`);
  }, err => {
    echo(`Test #${index} - Error handler #1 called with err = '${err}'`);
  });
}

t51(51);

function t52(index) {
  var p = Promise.resolve("failure");
  p.finally(arg => {
    if (arg == "failure") {
      echo(`Test #${index} - Failed finally handler called with incorrect parameter = '${arg}'`);
    } else {
      echo(`Test #${index} - Success finally handler called for resolved promise without value`);
    }
  });
}

t52(52);

function t53(index) {
  var p = Promise.reject("failure");
  p.finally(arg => {
    if (arg == "failure") {
      echo(`Test #${index} - Failed finally handler called with incorrect parameter = '${arg}'`);
    } else {
      echo(`Test #${index} - Success finally handler called for rejected promise without value`);
    }
  });
}

t53(53);

function t54(index) {
  var p = Promise.reject("Result");
  var final = p.finally(arg => {
    return "failure";
  });
  final.then(e => {
    echo(`Test #${index} - Failed - wrong status passed through finally`);
  }, e => {
    if (e == "Result") {
      echo(`Test #${index} - Success - Rejected status and value passed through finally`);
    } else {
      echo(`Test #${index} - Failed - wrong value passed through finally`);
    }
  });
}

t54(54);

function t55(index) {
  var p = Promise.resolve("Result");
  var final = p.finally(arg => {
    return "failure";
  });
  final.then(e => {
    if (e == "Result") {
      echo(`Test #${index} - Success - Resolved status and value passed through finally`);
    } else {
      echo(`Test #${index} - Failed - wrong value passed through finally`);
    }
  }, e => {
    echo(`Test #${index} - Failed - wrong status passed through finally`);
  });
}

t55(55);

function t56(index) {
  var p = Promise.reject("Result");
  var final = p.finally("not callable");
  final.then(e => {
    echo(`Test #${index} - Failed - wrong status passed through finally`);
  }, e => {
    if (e == "Result") {
      echo(`Test #${index} - Success - Rejected status and value passed through finally with not callable argument`);
    } else {
      echo(`Test #${index} - Failed - wrong value passed through finally`);
    }
  });
}

t56(56);

function t57(index) {
  var p = Promise.resolve("Result");
  var final = p.finally("not callable");
  final.then(e => {
    if (e == "Result") {
      echo(`Test #${index} - Success - Resolved status and value passed through finally with not callable argument`);
    } else {
      echo(`Test #${index} - Failed - wrong value passed through finally`);
    }
  }, e => {
    echo(`Test #${index} - Failed - wrong status passed through finally`);
  });
}

t57(57);

function t58(index) {
  var p = Promise.resolve("Result");
  var final = p.finally(() => {
    throw "own rejection";
  });
  final.then(e => {
    e => echo(`Test #${index} - Failed - wrong status passed through finally`);
  }, e => {
    if (e == "own rejection") {
      echo(`Test #${index} - Success - own rejection passed through finally`);
    } else {
      echo(`Test #${index} - Failed - wrong result ${e} passed through finally`);
    }
  });
}

t58(58);

function t59(index) {
  var p = Promise.reject("Result");
  var final = p.finally(() => {
    throw "own rejection";
  });
  final.then(e => {
    e => echo(`Test #${index} - Failed - wrong status passed through finally`);
  }, e => {
    if (e == "own rejection") {
      echo(`Test #${index} - Success - own rejection passed through finally`);
    } else {
      echo(`Test #${index} - Failed - wrong result ${e} passed through finally`);
    }
  });
}

t59(59);

function t60(index) {
  let val = -7;
  let resolveFunc;
  const p = new Promise((resolve, reject) => {
    resolveFunc = resolve;
  });
  p.then(() => {
    val = val * 3;
  });
  p.then(() => {
    val = val + 21;
  });
  p.then(() => {
    echo('Test #' + index + ' - val is ' + val + '(Expect 0)');
  });
  resolveFunc();
}

t60(60);
