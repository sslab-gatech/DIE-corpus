//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  Object.seal(Object.prototype);
  Object.freeze(Object.prototype);
}

t1();

function t3() {
  function getDescString(desc) {
    var set = [];

    for (var name in desc) {
      set.push(name + ": " + desc[name]);
    }

    return '{' + set.join(", ") + '}';
  }

  function testDesc(desc, keepEnabled) {
    var expr = 'Object.defineProperty(Object.prototype, "__proto__", ' + getDescString(desc) + ')';

    for (var name in desc) {
      console.log("" + desc[name]);
    }
  }

  var ATTR_NAMES = ["enumerable", "configurable"];
  var DEF_DESC = {
    enumerable: false,
    configurable: true
  }; // Test any attr missing

  for (var n = 0; n < 3; n++) {
    var desc = {};

    for (var i = 0; i < 2; i++) {
      if (n & 1 << i) {
        var name = ATTR_NAMES[i];
        desc[name] = DEF_DESC[name];
      }
    }

    testDesc(desc, true); // Now these don't disable __proto__
  } // Test any attr diff


  ATTR_NAMES.forEach(function (attr) {
    var desc = {
      enumerable: false,
      configurable: true
    };
    desc[attr] = !desc[attr];
    testDesc(desc, true); // Now these don't disable __proto__
  });
  testDesc({
    enumerable: false,
    configurable: true
  }, true); // But will be disabled if we change to value, or change setter

  testDesc({
    value: 234,
    writable: true,
    enumerable: false,
    configurable: true
  });
  testDesc({
    set: function () {
      return "custom setter";
    },
    enumerable: false,
    configurable: true
  });
}

t3();

function t4() {
  var oldDesc = Object.__proto__;
  var p = {
    p: 12
  };
  var p2 = {
    p2: 23
  };
  var o = {
    o: 34
  };
  console.log(Object.prototype, o.__proto__);
  o.__proto__ = p;
  console.log(p, Object.getPrototypeOf(o)); // Replace the setter

  Object.defineProperty(Object.prototype, "__proto__", {
    set: function () {
      ;
    }
  });
  console.log(p, o.__proto__);
  o.__proto__ = p2; // This does not work

  console.log(p, o.__proto__);
  Object.setPrototypeOf(o, p2); // But this works

  console.log(p2, o.__proto__); // Replace the getter

  Object.defineProperty(Object.prototype, "__proto__", {
    get: function () {
      return 123;
    }
  });
  console.log(123, o.__proto__);
  console.log(p2, Object.getPrototypeOf(o));
  Object.setPrototypeOf(o, p);
  console.log(123, o.__proto__);
  console.log(p, Object.getPrototypeOf(o)); // Restore

  Object.defineProperty(Object.prototype, "__proto__", {
    get: oldDesc.get,
    set: oldDesc.set
  });
  console.log(p, o.__proto__);
}

t4();
