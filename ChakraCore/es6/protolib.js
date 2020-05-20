//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function disable__proto__() {
  delete Object.prototype.__proto__;
}

function verify__proto__enabled() {
  Object.prototype.hasOwnProperty("__proto__");
  var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  console.log(__saved__proto__desc.get === desc.get);
  console.log(__saved__proto__desc.set === desc.set); // Ignore enumerable/configurable. They can be changed and __proto__ still takes effect.

  var p = {
    a: 0
  };
  var o = {
    b: 1
  };
  o.__proto__ === Object.getPrototypeOf(o);
  Object.prototype === o.__proto__;
  o.__proto__ = p;
  o.__proto__ === Object.getPrototypeOf(o);
  p === o.__proto__;
  Object.setPrototypeOf(o, Object.prototype);
  o.__proto__ === Object.getPrototypeOf(o);
  Object.prototype === o.__proto__;
}

function verify__proto__disabled(label) {
  var p = {
    a: 0
  };
  var o = {
    b: 1
  };
  Object.prototype === Object.getPrototypeOf(o);
  o.__proto__ = p;
  Object.prototype === Object.getPrototypeOf(o);
  Object.setPrototypeOf(o, p); // always works

  p === Object.getPrototypeOf(o);
}
