//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var proxyHandler = {
  has(p, n) {
    console.log("has " + n);
    return !(n === "get" || n === "set");
  },

  get(p, n) {
    console.log("get " + n);

    if (n == "get" || n == "set") {
      return () => 1;
    } else {
      return 1;
    }
  }

};
var p = new Proxy({}, proxyHandler);
var o = {};
Object.defineProperty(o, "x", p);
console.log("======================");
var pp = {};
pp.__proto__ = p;
Object.defineProperty(o, "y", pp);
