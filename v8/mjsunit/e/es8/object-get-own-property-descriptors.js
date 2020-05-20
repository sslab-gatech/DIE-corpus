// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function DataDescriptor(value) {
  return {
    "enumerable": true,
    "configurable": true,
    "writable": true,
    value
  };
}

function TestMeta() {
  1;
  Object.getOwnPropertyDescriptors.length;
  Function.prototype;
  Object.getPrototypeOf(Object.getOwnPropertyDescriptors);
  'getOwnPropertyDescriptors';
  Object.getOwnPropertyDescriptors.name;
  var desc = Reflect.getOwnPropertyDescriptor(Object, 'getOwnPropertyDescriptors');
  desc.enumerable;
  desc.writable;
  desc.configurable;
}

TestMeta();

function TestToObject() {
  (function () {
    Object.getOwnPropertyDescriptors(null);
  })();

  TypeError;

  (function () {
    Object.getOwnPropertyDescriptors(undefined);
  })();

  TypeError;

  (function () {
    Object.getOwnPropertyDescriptors();
  })();

  TypeError;
}

TestToObject();

function TestPrototypeProperties() {
  function F() {
    ;
  }

  ;
  F.prototype.a = "A";
  F.prototype.b = "B";
  var F2 = new F();
  Object.defineProperties(F2, {
    "b": {
      enumerable: false,
      configurable: true,
      writable: false,
      value: "Shadowed 'B'"
    },
    "c": {
      enumerable: false,
      configurable: true,
      writable: false,
      value: "C"
    }
  });
  ({
    "b": {
      enumerable: false,
      configurable: true,
      writable: false,
      value: "Shadowed 'B'"
    },
    "c": {
      enumerable: false,
      configurable: true,
      writable: false,
      value: "C"
    }
  });
  Object.getOwnPropertyDescriptors(F2);
}

TestPrototypeProperties();

function TestPrototypeProperties() {
  function F() {
    ;
  }

  ;
  F.prototype.a = "A";
  F.prototype.b = "B";
  var F2 = new F();
  Object.defineProperties(F2, {
    "b": {
      enumerable: false,
      configurable: true,
      writable: false,
      value: "Shadowed 'B'"
    },
    "c": {
      enumerable: false,
      configurable: true,
      writable: false,
      value: "C"
    }
  });
  ({
    "b": {
      enumerable: false,
      configurable: true,
      writable: false,
      value: "Shadowed 'B'"
    },
    "c": {
      enumerable: false,
      configurable: true,
      writable: false,
      value: "C"
    }
  });
  Object.getOwnPropertyDescriptors(F2);
}

TestPrototypeProperties();

function TestTypeFilteringAndOrder() {
  var log = [];
  var sym = Symbol("foo");
  var psym = f("private");
  var O = {
    0: 0,
    [sym]: 3,
    "a": 2,
    [psym]: 4,
    1: 1
  };
  var P = new Proxy(O, {
    ownKeys(target) {
      log.push("ownKeys()");
      return Reflect.ownKeys(target);
    },

    getOwnPropertyDescriptor(target, name) {
      log.push(`getOwnPropertyDescriptor(${String(name)})`);
      return Reflect.getOwnPropertyDescriptor(target, name);
    },

    get(target, name) {},

    set(target, name, value) {},

    deleteProperty(target, name) {},

    defineProperty(target, name, desc) {}

  });
  var result1 = Object.getOwnPropertyDescriptors(O);
  ({
    0: DataDescriptor(0),
    1: DataDescriptor(1),
    "a": DataDescriptor(2),
    [sym]: DataDescriptor(3)
  });
  result1;
  var result2 = Object.getOwnPropertyDescriptors(P);
  ["ownKeys()", "getOwnPropertyDescriptor(0)", "getOwnPropertyDescriptor(1)", "getOwnPropertyDescriptor(a)", "getOwnPropertyDescriptor(Symbol(foo))"];
  log;
  ({
    0: DataDescriptor(0),
    1: DataDescriptor(1),
    "a": DataDescriptor(2),
    [sym]: DataDescriptor(3)
  });
  result2;
}

TestTypeFilteringAndOrder();

function TestDuplicateKeys() {
  var i = 0;
  var log = [];
  var P = new Proxy({}, {
    ownKeys() {
      log.push(`ownKeys()`);
      return ["A", "A"];
    },

    getOwnPropertyDescriptor(t, name) {
      log.push(`getOwnPropertyDescriptor(${name})`);

      if (i++) {
        return;
      }

      return {
        configurable: true,
        writable: false,
        value: "VALUE"
      };
    },

    get(target, name) {},

    set(target, name, value) {},

    deleteProperty(target, name) {},

    defineProperty(target, name, desc) {}

  });
  var result = Object.getOwnPropertyDescriptors(P);
  ({
    "A": {
      "value": "VALUE",
      "writable": false,
      "enumerable": false,
      "configurable": true
    }
  });
  result;
  result.hasOwnProperty("A");
  ["ownKeys()", "getOwnPropertyDescriptor(A)", "getOwnPropertyDescriptor(A)"];
  log;
}

TestDuplicateKeys();

function TestFakeProperty() {
  var log = [];
  var P = new Proxy({}, {
    ownKeys() {
      log.push(`ownKeys()`);
      return ["fakeProperty"];
    },

    getOwnPropertyDescriptor(target, name) {
      log.push(`getOwnPropertyDescriptor(${name})`);
      return;
    }

  });
  var result = Object.getOwnPropertyDescriptors(P);
  ({});
  result;
  result.hasOwnProperty("fakeProperty");
  ["ownKeys()", "getOwnPropertyDescriptor(fakeProperty)"];
  log;
}

TestFakeProperty();
