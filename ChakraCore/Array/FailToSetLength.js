//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Some of the Array.prototype built-in functions set the length property of the array object and
// should throw a TypeError if setting the length property fails. Tests in this file verify that
// we throw TypeError when we're supposed to.
// See BLUE: 559834 for more details
var obj = {
  0: 0,
  1: 1,

  get length() {
    return 2;
  }

};
Array.prototype.pop.call(obj);
Array.prototype.push.call(obj, 2);
Array.prototype.shift.call(obj);
Array.prototype.unshift.call(obj, 2);
Array.prototype.splice.call(obj, 0, 1);
var obj = {
  0: 0,
  1: 1,

  get length() {
    return 0;
  }

};
Array.prototype.pop.call(obj);
Array.prototype.push.call(obj, 2);
Array.prototype.shift.call(obj);
Array.prototype.unshift.call(obj, 2);
Array.prototype.splice.call(obj, 0, 1);
var obj = {
  0: 0,
  1: 1
};
Object.defineProperty(obj, "length", {
  value: 2,
  writable: false,
  configurable: false
});
Array.prototype.pop.call(obj);
Array.prototype.push.call(obj, 2);
Array.prototype.shift.call(obj);
Array.prototype.unshift.call(obj, 2);
Array.prototype.splice.call(obj, 0, 1);
var proto = {};
var obj = {
  0: 1,
  1: 1,
  2: 1,
  3: -109,
  length: 4
};
obj.__proto__ = proto;
Object.defineProperty(proto, "4", {
  configurable: true,
  get: function () {
    return 31;
  }
});
Array.prototype.unshift.call(obj, 200, 201, 202);
Array.prototype.push.call(obj, 200);
