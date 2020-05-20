//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES7 Object Prototype object has an immutable [[Prototype]] internal slot
// See: 19.1.3 Properties of the Object Prototype Object
// See: 9.4.7 Immutable Prototype Exotic Objects
function t1() {
  var objectPrototypeObject = Object.getPrototypeOf(Object.prototype);
  var b = Object.create(null);

  try {
    Object.prototype.__proto__ = b;
  } catch (e) {
    ;
  }

  console.log(objectPrototypeObject, Object.prototype.__proto__, "Object.prototype.__proto__ is unchanged");
  console.log(objectPrototypeObject, Object.getPrototypeOf(Object.prototype), "Object.getPrototypeOf(Object.prototype) is unchanged");
}

t1();

function t2() {
  var objectPrototypeObject = Object.getPrototypeOf(Object.prototype);
  var b = Object.create(null);

  try {
    Object.setPrototypeOf(Object.prototype, b);
  } catch (e) {
    ;
  }

  console.log(objectPrototypeObject, Object.prototype.__proto__, "Object.prototype.__proto__ is unchanged");
  console.log(objectPrototypeObject, Object.getPrototypeOf(Object.prototype), "Object.getPrototypeOf(Object.prototype) is unchanged");
}

t2();
