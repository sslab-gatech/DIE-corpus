//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  Date.prototype[Symbol.toPrimitive].call({}, 'strin' + 'g');
}

test1();

function test2() {
  Error.__defineGetter__('stackTraceLimit', function () {
    return 1;
  });

  try {
    () => Array.prototype.map.call([]);
  } catch (e) {
    ;
  }
}

test2();

function test3() {
  let arr = [1, 2];
  arr.__proto__ = {
    constructor: {
      [Symbol.species]: function () {
        return new Proxy({}, {
          defineProperty(...args) {
            return Reflect.defineProperty(...args);
          }

        });
      }
    }
  };
  Array.prototype.slice.call(arr);
}

test3();

function test4() {
  let arr = new ArrayBuffer(10);
  arr.constructor = new Proxy(ArrayBuffer, {});
  arr.slice(1, 2);
}

test4();

function test5() {
  let p = new Proxy(Object, {});

  for (let i = 0; i < 20000; ++i) {
    p = new Proxy(p, {});
  }

  try {
    let a = new p();
  } catch (e) {
    ;
  }
}

test5();

function test6() {
  var base = 4294967290;
  var arr = [];

  for (var i = 0; i < 10; i++) {
    arr[base + i] = 100 + i;
  }

  Object.defineProperty(arr, 4294967295, {
    get: function () {
      ;
    },
    set: function (b) {
      ;
    }
  });

  try {
    arr.splice(4294967290, 0, 200, 201, 202, 203, 204, 205, 206);
  } catch (e) {
    ;
  }
}

test6();

function test7() {
  try {
    var sc1 = {
      foo: function () {
        ;
      }
    };
    sc1.foo(...new Array(2 ** 16));
  } catch (e) {
    ;
  }

  try {
    var sc2 = {
      foo: function () {
        ;
      }
    };
    sc2.foo(...new Array(2 ** 16 + 1));
  } catch (e) {
    ;
  }

  try {
    function foo() {
      ;
    }

    Reflect.construct(foo, new Array(2 ** 16 - 3));
  } catch (e) {
    ;
  }

  try {
    function foo() {
      ;
    }

    Reflect.construct(foo, new Array(2 ** 16 - 2));
  } catch (e) {
    ;
  }

  try {
    function foo() {
      ;
    }

    var bar = foo.bind({}, 1);
    new bar(...new Array(2 ** 16 + 1));
  } catch (e) {
    ;
  }
}

test7();

function test8() {
  var p = new Proxy({}, {
    getPrototypeOf: function () {
      console.log("this should not be called");
      return {};
    }
  });
  var obj = {};
  obj.__proto__ = p; // This should not call the getPrototypeOf

  var obj1 = {};
  Object.setPrototypeOf(obj1, p); // This should not call the getPrototypeOf

  var obj2 = {
    __proto__: p
  }; // This should not call the getPrototypeOf
}

test8();

function test9() {
  // This will throw out of stack error
  try {
    () => {
      function foo() {
        function* f() {
          yield foo();
        }

        f().next();
      }

      foo();
    };
  } catch (e) {
    ;
  }
}

test9();
