//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(Object.hasOwnProperty('values'));
  console.log(Object.hasOwnProperty('entries'));
  console.log(1, Object.values.length);
  console.log(1, Object.entries.length);
  console.log("values", Object.values.name);
  console.log("entries", Object.entries.name);
  var descriptor = Object.getOwnPropertyDescriptor(Object, 'values');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
  descriptor = Object.getOwnPropertyDescriptor(Object, 'entries');
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(descriptor.configurable);
}

t1();

function t3() {
  var a1 = {
    prop1: 10,
    prop2: 20
  };
  var values = Object.values(a1);
  console.log(2, values.length);
  console.log(10, values[0]);
  console.log(20, values[1]);
  var entries = Object.entries(a1);
  console.log(2, entries.length);
  console.log(Array.isArray(entries[0]) && Array.isArray(entries[1]));
  console.log(["prop1", 10], entries[0]);
  console.log(["prop2", 20], entries[1]);
  var a2 = {
    prop3: 30
  };
  a2[2] = 40;
  a2["prop4"] = 50;
  Object.defineProperty(a2, "prop5", {
    value: 60,
    enumerable: true
  });
  Object.defineProperty(a2, "prop6", {
    value: 70,
    enumerable: false
  });
  Object.defineProperty(a2, 'prop7', {
    enumerable: true,
    get: function () {
      return 80;
    }
  });
  var sym = Symbol('prop8');
  a2[sym] = 90;
  values = Object.values(a2);
  console.log(5, values.length);
  console.log([40, 30, 50, 60, 80], values);
  entries = Object.entries(a2);
  console.log(5, entries.length);
  console.log("2,40,prop3,30,prop4,50,prop5,60,prop7,80", entries.toString());
}

t3();

function t4() {
  var obj1 = {
    prop1: 10
  };
  var proxy1 = new Proxy(obj1, {});
  var values = Object.values(proxy1);
  console.log(1, values.length);
  console.log(10, values[0]);
  var entries = Object.entries(proxy1);
  console.log(1, entries.length);
  console.log(["prop1", 10], entries[0]);
  var obj2 = {};
  Object.defineProperty(obj2, "prop2", {
    value: 20,
    enumerable: true
  });
  Object.defineProperty(obj2, "prop3", {
    get: function () {
      return 30;
    },
    enumerable: true
  });
  var proxy2 = new Proxy(obj2, {
    getOwnPropertyDescriptor: function (target, property) {
      return Reflect.getOwnPropertyDescriptor(target, property);
    }
  });
  values = Object.values(proxy2);
  console.log(2, values.length);
  console.log(20, values[0]);
  console.log(30, values[1]);
  entries = Object.entries(proxy2);
  console.log(2, entries.length);
  console.log(["prop2", 20], entries[0]);
  console.log(["prop3", 30], entries[1]);
  var obj3 = {};
  var count = 0;
  var proxy3 = new Proxy(obj3, {
    get: function (target, property, receiver) {
      return count++ * 5;
    },
    getOwnPropertyDescriptor: function (target, property) {
      return {
        configurable: true,
        enumerable: true
      };
    },
    ownKeys: function (target) {
      return ["prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
    }
  });
  values = Object.values(proxy3);
  console.log(2, values.length);
  console.log(0, values[0]);
  console.log(5, values[1]);
  entries = Object.entries(proxy3);
  console.log(2, entries.length);
  console.log(["prop0", 10], entries[0]);
  console.log(["prop1", 15], entries[1]);
}

t4();

function t5() {
  var aDeletesB = {
    get a() {
      delete this.b;
      return 1;
    },

    b: 2
  };
  var values = Object.values(aDeletesB);
  console.log(1, values.length);
  console.log(1, values[0]);
  var aRemovesB = {
    get a() {
      Object.defineProperty(this, 'b', {
        enumerable: false
      });
      return 1;
    },

    b: 2
  };
  values = Object.values(aRemovesB);
  console.log(1, values.length);
  console.log(1, values[0]);
}

t5();

function t6() {
  var aDeletesB = {
    get a() {
      delete this.b;
      return 1;
    },

    b: 2
  };
  var entries = Object.entries(aDeletesB);
  console.log(1, entries.length);
  console.log(['a', 1], entries[0]);
  var aRemovesB = {
    get a() {
      Object.defineProperty(this, 'b', {
        enumerable: false
      });
      return 1;
    },

    b: 2
  };
  entries = Object.entries(aRemovesB);
  console.log(1, entries.length);
  console.log(['a', 1], entries[0]);
}

t6();

function t7() {
  var aAddsB = {};
  Object.defineProperty(aAddsB, "a", {
    get: function () {
      Object.defineProperty(this, 'b', {
        enumerable: true
      });
      return 1;
    },
    enumerable: true
  });
  Object.defineProperty(aAddsB, "b", {
    value: 2,
    configurable: true,
    enumerable: false
  });
  var values = Object.values(aAddsB);
  console.log(2, values.length);
  console.log(1, values[0]);
  console.log(2, values[1]);
}

t7();

function t8() {
  var aAddsB = {};
  Object.defineProperty(aAddsB, "a", {
    get: function () {
      Object.defineProperty(this, 'b', {
        enumerable: true
      });
      return 1;
    },
    enumerable: true
  });
  Object.defineProperty(aAddsB, "b", {
    value: 2,
    configurable: true,
    enumerable: false
  });
  var entries = Object.entries(aAddsB);
  console.log(2, entries.length);
  console.log(['a', 1], entries[0]);
  console.log(['b', 2], entries[1]);
}

t8();
