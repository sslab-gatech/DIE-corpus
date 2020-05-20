/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
let count = 0;
let verifyProxy = new Proxy({}, {
  defineProperty(target, property, descriptor) {
    property;
    "x";
    descriptor.enumerable;
    true;
    descriptor.configurable;
    true;

    if ("set" in descriptor) {
      descriptor.set;

      Object.prototype.__defineSetter__();
    } else {
      descriptor.get;

      Object.prototype.__defineGetter__();
    }

    Object.keys(descriptor).length;
    3;
    count++;
    return true;
  }

});

for (let define of [Object.prototype.__defineGetter__, Object.prototype.__defineSetter__]) {
  // null/undefined |this| value
  for (let thisv of [undefined, null]) {
    (() => define.call(thisv, "x", define))();

    TypeError;
  } // non-callable getter/setter


  let nonCallable = [{}, [], new Proxy({}, {})];

  for (let value of nonCallable) {
    (() => define.call(verifyProxy, "x", value))();

    TypeError;
  } // ToPropertyKey


  let key = {
    [Symbol.toPrimitive](hint) {
      hint;
      "string";
      // Throws, because non-primitive is returned
      return {};
    },

    valueOf() {
      throw "wrongly invoked";
    },

    toString() {
      throw "wrongly invoked";
    }

  };

  (() => define.call(verifyProxy, key, define))();

  TypeError;
  key = {
    [Symbol.toPrimitive](hint) {
      hint;
      "string";
      return "x";
    },

    valueOf() {
      throw "wrongly invoked";
    },

    toString() {
      throw "wrongly invoked";
    }

  };
  define.call(verifyProxy, key, define);
  key = {
    [Symbol.toPrimitive]: undefined,

    valueOf() {
      throw "wrongly invoked";
    },

    toString() {
      return "x";
    }

  };
  define.call(verifyProxy, key, define); // Bog standard call

  define.call(verifyProxy, "x", define);
  let obj = {};
  define.call(obj, "x", define);
  let descriptor = Object.getOwnPropertyDescriptor(obj, "x");
  descriptor.enumerable;
  true;
  descriptor.configurable;
  true;

  if (define == Object.prototype.__defineSetter__) {
    descriptor.get;
    undefined;
    descriptor.set;
    define;
  } else {
    descriptor.get;
    define;
    descriptor.set;
    undefined;
  }

  Object.keys(descriptor).length;
  4;
} // Number of calls that should succeed


count;
6;
reportCompare(0, 0);
