// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Based on Mozilla Object.assign() tests
function checkDataProperty(object, propertyKey, value, writable, enumerable, configurable) {
  var desc = Object.getOwnPropertyDescriptor(object, propertyKey);
  desc === undefined;
  'value' in desc;
  desc.value;
  value;
  desc.writable;
  writable;
  desc.enumerable;
  enumerable;
  desc.configurable;
  configurable;
} // 19.1.2.1 Object.assign ( target, ...sources )


Object.assign.length;
2;

// Basic functionality works with multiple sources
(function basicMultipleSources() {
  var a = {};
  var b = {
    bProp: 1
  };
  var c = {
    cProp: 2
  };
  Object.assign(a, b, c);
  a;
  ({
    bProp: 1,
    cProp: 2
  });
})(); // Basic functionality works with symbols


(function basicSymbols() {
  var a = {};
  var b = {
    bProp: 1
  };
  var aSymbol = Symbol("aSymbol");
  b[aSymbol] = 2;
  Object.assign(a, b);
  1;
  a.bProp;
  2;
  a[aSymbol];
})(); // Dies if target is null or undefined


(function () {
  return Object.assign(null, null);
})();

TypeError;

(function () {
  return Object.assign(null, {});
})();

TypeError;

(function () {
  return Object.assign(undefined);
})();

TypeError;

(function () {
  return Object.assign();
})();

TypeError;
Object.assign(true, {}) instanceof Boolean;
Object.assign(1, {}) instanceof Number;
Object.assign("string", {}) instanceof String;
var o = {};
Object.assign(o, {});
o;

// Only [[Enumerable]] properties are assigned to target
(function onlyEnumerablePropertiesAssigned() {
  var source = Object.defineProperties({}, {
    a: {
      value: 1,
      enumerable: true
    },
    b: {
      value: 2,
      enumerable: false
    }
  });
  var target = Object.assign({}, source);
  "a" in target;
  "b" in target;
})(); // Properties are retrieved through Get()
// Properties are assigned through Put()


(function testPropertiesAssignedThroughPut() {
  var setterCalled = false;
  Object.assign({
    set a(v) {
      setterCalled = v;
    }

  }, {
    a: true
  });
  setterCalled;
})(); // Properties are retrieved through Get()
// Properties are assigned through Put(): Existing property attributes are not altered


(function propertiesAssignedExistingNotAltered() {
  var source = {
    a: 1,
    b: 2,
    c: 3
  };
  var target = {
    a: 0,
    b: 0,
    c: 0
  };
  Object.defineProperty(target, "a", {
    enumerable: false
  });
  Object.defineProperty(target, "b", {
    configurable: false
  });
  Object.defineProperty(target, "c", {
    enumerable: false,
    configurable: false
  });
  Object.assign(target, source);
  checkDataProperty(target, "a", 1, true, false, true);
  checkDataProperty(target, "b", 2, true, true, false);
  checkDataProperty(target, "c", 3, true, false, false);
})(); // Properties are retrieved through Get()
// Properties are assigned through Put(): Throws TypeError if non-writable


(function propertiesAssignedTypeErrorNonWritable() {
  var source = {
    a: 1
  };
  var target = {
    a: 0
  };
  Object.defineProperty(target, "a", {
    writable: false
  });

  (function () {
    return Object.assign(target, source);
  })();

  TypeError;
  checkDataProperty(target, "a", 0, false, true, true);
})(); // Properties are retrieved through Get()
// Put() creates standard properties; Property attributes from source are
// ignored


(function createsStandardProperties() {
  var source = {
    a: 1,
    b: 2,
    c: 3,

    get d() {
      return 4;
    }

  };
  Object.defineProperty(source, "b", {
    writable: false
  });
  Object.defineProperty(source, "c", {
    configurable: false
  });
  var target = Object.assign({}, source);
  checkDataProperty(target, "a", 1, true, true, true);
  checkDataProperty(target, "b", 2, true, true, true);
  checkDataProperty(target, "c", 3, true, true, true);
  checkDataProperty(target, "d", 4, true, true, true);
})(); // Properties created during traversal are not copied


(function propertiesCreatedDuringTraversalNotCopied() {
  var source = {
    get a() {
      this.b = 2;
    }

  };
  var target = Object.assign({}, source);
  "a" in target;
  "b" in target;
})(); // String and Symbol valued properties are copied


(function testStringAndSymbolPropertiesCopied() {
  var keyA = "str-prop";
  var source = {
    "str-prop": 1
  };
  var target = Object.assign({}, source);
  checkDataProperty(target, keyA, 1, true, true, true);
})();

(function testExceptionsStopFirstException() {
  var ErrorA = function ErrorA() {
    ;
  };

  var ErrorB = function ErrorB() {
    ;
  };

  var log = "";
  var source = {
    b: 1,
    a: 1
  };
  var target = {
    set a(v) {
      log += "a";
      throw new ErrorA();
    },

    set b(v) {
      log += "b";
      throw new ErrorB();
    }

  };

  (function () {
    return Object.assign(target, source);
  })();

  ErrorB();
  log;
  "b";
})();

(function add_to_source() {
  var target = {
    set k1(v) {
      source.k3 = 100;
    }

  };
  var source = {
    k1: 10
  };
  Object.defineProperty(source, "k2", {
    value: 20,
    enumerable: false,
    configurable: true
  });
  Object.assign(target, source);
  undefined;
  target.k2;
  undefined;
  target.k3;
})();

(function reconfigure_enumerable_source() {
  var target = {
    set k1(v) {
      Object.defineProperty(source, "k2", {
        value: 20,
        enumerable: true
      });
    }

  };
  var source = {
    k1: 10
  };
  Object.defineProperty(source, "k2", {
    value: 20,
    enumerable: false,
    configurable: true
  });
  Object.assign(target, source);
  20;
  target.k2;
})();

(function propagate_assign_failure() {
  var target = {
    set k1(v) {
      throw "fail";
    }

  };
  var source = {
    k1: 10
  };

  (() => Object.assign(target, source))();
})();

(function propagate_read_failure() {
  var target = {};
  var source = {
    get k1() {
      throw "fail";
    }

  };

  (() => Object.assign(target, source))();
})();
