//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property
function t1() {
  var c = [];
  c[0] = 1;
  c[4294967294] = 2;
  Object.defineProperty(Array, Symbol.species, {
    enumerable: false,
    configurable: true,
    writable: true
  });
  c === c.slice(0);
}

t1();

function t2() {
  var arr = [1, 2, 3, 4, 5, 6];
  arr.constructor = null;
  arr.x = 1;

  try {
    Array.prototype.splice.call(arr, 0, 3);
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  function test() {
    CollectGarbage();
    var n = [];

    for (var i = 0; i < 0x10; i++) {
      n.push([0x12345678, 0x12345678, 0x12345678, 0x12345678]);
    }

    class fake extends Object {
      static get [Symbol.species]() {
        return function () {
          return n[5];
        };
      }

    }

    var f = function (a) {
      return a;
    };

    var x = ["fluorescence", 0, 0, 0x41414141];
    var y = new Proxy(x, {
      get: function (t, p, r) {
        return p == "constructor" ? fake : x[p];
      }
    }); // oob write

    Array.prototype.map.apply(y, [f]);

    for (var i = 0; i < 0x10; i++) {
      n[i][0] = 0x42424242;
    }
  }

  test();
}

t3();
