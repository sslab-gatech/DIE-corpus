//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Object.prototype.toLocaleString tests for ES6 behaviors
var toLocaleString = Object.prototype.toLocaleString;

try {
  toLocaleString.call();
  toLocaleString.call(undefined);
  toLocaleString.call(null);
} catch (e) {
  ;
}

var o = {
  toString: 'non-object'
};
toLocaleString.call(o);

try {
  o = {
    get toString() {
      throw TypeError('get toString');
    }

  };
  toLocaleString.call(o);
} catch (e) {
  ;
}

o = {
  get toString() {
    return 'non-object';
  }

};
toLocaleString.call(o);
o = Object.create(null); // o doesn't have Object.prototype.toString

toLocaleString.call(o);

try {
  o = {
    toString() {
      print(o, this, "This argument passed to toString function should be the same object passed to toLocaleString");
      throw TypeError('toString');
    }

  };
  toLocaleString.call(o);
} catch (e) {
  ;
}

(function () {
  'use strict';

  Boolean.prototype.toString = function () {
    return typeof this;
  }; // we will walk up to here from Object(true) before we find Object.prototype.toString


  print('boolean', true.toLocaleString(), "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call the function we added to Boolean#toString");
  print('boolean', toLocaleString.call(false), "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call the function we added to Boolean#toString - even if we apply/call it");
  print('5', toLocaleString.call(5), "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call Object#toString(5)");
  Object.defineProperty(Boolean.prototype, "toString", {
    get: function () {
      return () => typeof this;
    }
  });
  print('boolean', true.toLocaleString(), "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call the function we added to Boolean#toString");
  print('boolean', toLocaleString.call(false), "Calling Object#toLocaleString with a primitive this argument performs ToObject(this).toString.call(this) which will call the function we added to Boolean#toString - even if we apply/call it");
})();
