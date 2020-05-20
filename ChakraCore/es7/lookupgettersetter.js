//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  // Object.prototype.__lookupGetter__ -> [[GetOwnProperty]]
  // Object.prototype.__lookupGetter__ -> [[GetPrototypeOf]]
  var gopd = [];
  var gpo = false;
  var p = new Proxy({}, {
    getPrototypeOf: function (o) {
      gpo = true;
      return Object.getPrototypeOf(o);
    },
    getOwnPropertyDescriptor: function (o, v) {
      gopd.push(v);
      return Object.getOwnPropertyDescriptor(o, v);
    }
  });

  Object.prototype.__lookupGetter__.call(p, "foo");

  console.log(1, gopd.length);
  console.log("foo", gopd[0]);
  console.log(gpo);
}

t1();

function t2() {
  // Object.prototype.__lookupSetter__ -> [[GetOwnProperty]]
  // Object.prototype.__lookupSetter__ -> [[GetPrototypeOf]]
  var gopd = [];
  var gpo = false;
  var p = new Proxy({}, {
    getPrototypeOf: function (o) {
      gpo = true;
      return Object.getPrototypeOf(o);
    },
    getOwnPropertyDescriptor: function (o, v) {
      gopd.push(v);
      return Object.getOwnPropertyDescriptor(o, v);
    }
  });

  Object.prototype.__lookupSetter__.call(p, "foo");

  console.log(1, gopd.length);
  console.log("foo", gopd[0]);
  console.log(gpo);
}

t2();
