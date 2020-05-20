// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
////////////////////////////////////////////////////////////////////////////////
// (Auxiliaries)
"use strict";

var global = this;
var sym = Symbol("gaga");
var objects = [{}, [], function () {
  ;
}, function () {
  return arguments;
}(), function () {
  'use strict';

  return arguments;
}(), Object(1), Object(true), Object('bla'), new Date(), new RegExp(), new Set(), new Map(), new WeakMap(), new WeakSet(), new ArrayBuffer(10), new Int32Array(5), Object, Function, Date, RegExp, global];

function prepare(target) {
  target["bla"] = true;
  target[4] = 42;
  target[sym] = "foo";
  target["noconf"] = 43;
  Object.defineProperty(target, "noconf", {
    configurable: false
  });
  Object.defineProperty(target, "nowrite", {
    writable: false,
    configurable: true,
    value: 44
  });
  Object.defineProperty(target, "getter", {
    get: function () {
      return this.bla;
    },
    configurable: true
  });
  Object.defineProperty(target, "setter", {
    set: function (x) {
      this.gaga = x;
    },
    configurable: true
  });
  Object.defineProperty(target, "setter2", {
    set: function (x) {
      ;
    },
    configurable: true
  });
} ////////////////////////////////////////////////////////////////////////////////
// Reflect.get


(function testReflectGetArity() {
  2;
  Reflect.get.length;
})();

(function testReflectGetOnNonObject() {
  (function () {
    Reflect.get();
  })();

  TypeError;

  (function () {
    Reflect.get(42, "bla");
  })();

  TypeError;

  (function () {
    Reflect.get(null, "bla");
  })();

  TypeError;
})();

(function testReflectGetKeyConversion() {
  var target = {
    bla: 42
  };
  var a = {
    [Symbol.toPrimitive]: function () {
      return "bla";
    }
  };
  var b = {
    [Symbol.toPrimitive]: function () {
      throw "gaga";
    }
  };
  42;
  Reflect.get(target, a);

  (function () {
    Reflect.get(target, b);
  })();

  "gaga";
})();

(function testReflectGetOnObject() {
  var receiver = {
    bla: false
  };

  for (let target of objects) {
    prepare(target);
    true;
    Reflect.get(target, "bla");
    true;
    Reflect.get(target, "bla", target);
    true;
    Reflect.get(target, "bla", receiver);
    42;
    Reflect.get(target, 4);
    42;
    Reflect.get(target, 4, target);
    42;
    Reflect.get(target, 4, receiver);
    42;
    Reflect.get(target, "4");
    42;
    Reflect.get(target, "4", target);
    42;
    Reflect.get(target, "4", receiver);
    "foo";
    Reflect.get(target, sym);
    "foo";
    Reflect.get(target, sym, target);
    "foo";
    Reflect.get(target, sym, receiver);
    43;
    Reflect.get(target, "noconf");
    43;
    Reflect.get(target, "noconf", target);
    43;
    Reflect.get(target, "noconf", receiver);
    true;
    Reflect.get(target, "getter");
    true;
    Reflect.get(target, "getter", target);
    false;
    Reflect.get(target, "getter", receiver);
    undefined;
    Reflect.get(target, "setter");
    undefined;
    Reflect.get(target, "setter", target);
    undefined;
    Reflect.get(target, "setter", receiver);
    undefined;
    Reflect.get(target, "foo");
    undefined;
    Reflect.get(target, "foo", target);
    undefined;
    Reflect.get(target, "foo", receiver);
    undefined;
    Reflect.get(target, 666);
    undefined;
    Reflect.get(target, 666, target);
    undefined;
    Reflect.get(target, 666, receiver);
    let proto = target.__proto__;
    target.__proto__ = {
      get foo() {
        return this.bla;
      }

    };
    true;
    Reflect.get(target, "foo");
    true;
    Reflect.get(target, "foo", target);
    false;
    Reflect.get(target, "foo", receiver);
    target.__proto__ = proto;
  }
})(); ////////////////////////////////////////////////////////////////////////////////
// Reflect.set


(function testReflectSetArity() {
  3;
  Reflect.set.length;
})();

(function testReflectSetOnNonObject() {
  (function () {
    Reflect.set();
  })();

  TypeError;

  (function () {
    Reflect.set(42, "bla");
  })();

  TypeError;

  (function () {
    Reflect.set(null, "bla");
  })();

  TypeError;
})();

(function testReflectSetKeyConversion() {
  var target = {};
  var a = {
    [Symbol.toPrimitive]: function () {
      return "bla";
    }
  };
  var b = {
    [Symbol.toPrimitive]: function () {
      throw "gaga";
    }
  };
  Reflect.set(target, a, 42);
  42;
  target.bla;

  (function () {
    Reflect.set(target, b, 42);
  })();

  "gaga";
})();

(function testReflectSetOnObject() {
  var receiver = {
    bla: false
  };
  var value = 34234;

  for (let target of objects) {
    prepare(target);
    Reflect.set(target, "bla", value);
    value;
    target.bla;
    prepare(target);
    Reflect.set(target, "bla", value, target);
    value;
    target.bla;
    prepare(target);
    Reflect.set(target, "bla", value, receiver);
    true;
    target.bla;
    value;
    receiver.bla;
    receiver.bla = false;
    prepare(target);
    Reflect.set(target, 4, value);
    value;
    target[4];
    prepare(target);
    Reflect.set(target, 4, value, target);
    value;
    target[4];
    prepare(target);
    Reflect.set(target, 4, value, receiver);
    42;
    target[4];
    value;
    receiver[4];
    delete receiver[4];
    prepare(target);
    Reflect.set(target, sym, value);
    value;
    target[sym];
    prepare(target);
    Reflect.set(target, sym, value, target);
    value;
    target[sym];
    prepare(target);
    Reflect.set(target, sym, value, receiver);
    "foo";
    target[sym];
    value;
    receiver[sym];
    delete receiver[sym];
    prepare(target);
    Reflect.set(target, "noconf", value);
    value;
    target.noconf;
    prepare(target);
    Reflect.set(target, "noconf", value, target);
    value;
    target.noconf;
    prepare(target);
    Reflect.set(target, "noconf", value, receiver);
    43;
    target.noconf;
    value;
    receiver.noconf;
    delete receiver.noconf;
    Reflect.set(target, "setter", value);
    value;
    target.gaga;
    delete target.gaga;
    Reflect.set(target, "setter", value, target);
    value;
    target.gaga;
    delete target.gaga;
    Reflect.set(target, "setter", value, receiver);
    "gaga" in target;
    value;
    receiver.gaga;
    delete receiver.gaga;
    Reflect.set(target, "nowrite", value);
    44;
    target.nowrite;
    Reflect.set(target, "nowrite", value, target);
    44;
    target.nowrite;
    Reflect.set(target, "nowrite", value, receiver);
    44;
    target.nowrite;
    "nowrite" in receiver;
    Reflect.set({}, "nowrite", value, target);
    Reflect.set({}, "unknown", 0, {
      set unknown(x) {
        ;
      }

    });
    Reflect.set(target, "unknown", value, {
      set unknown(x) {
        ;
      }

    });
    Reflect.set(target, "bla", value, {
      set bla(x) {
        ;
      }

    });
    Reflect.set(target, "bla", value, {
      get bla() {
        ;
      }

    });
    Reflect.set({
      set bla(x) {
        ;
      }

    });
    "bla";
    value;
    target;
    Reflect.set({
      get bla() {
        ;
      }

    }, "bla", value, target);
    Reflect.set({}, "bla", value, null);
    Reflect.set({
      bla: 42
    }, "bla", value, null);
    Reflect.set(target, "setter2", value, null);
    Reflect.set(target, "getter", value, null);
    let receiver2 = {};
    Object.defineProperty(receiver2, "bla", {
      configurable: false,
      writable: true,
      value: true
    });
    Object.defineProperty(receiver2, "not_in_target", {
      configurable: false,
      writable: true,
      value: true
    });
    Reflect.set(target, "bla", value, receiver2);
    Reflect.set(target, "not_in_target", value, receiver2);
  }
})();

(function testReflectSetArrayLength() {
  var y = [];
  Object.defineProperty(y, 0, {
    value: 42,
    configurable: false
  });
  Reflect.set(y, 'length', 0);
  Reflect.set(y, 'length', 2);
})(); ////////////////////////////////////////////////////////////////////////////////
// Reflect.has


(function testReflectHasArity() {
  2;
  Reflect.has.length;
})();

(function testReflectHasOnNonObject() {
  (function () {
    Reflect.has();
  })();

  TypeError;

  (function () {
    Reflect.has(42, "bla");
  })();

  TypeError;

  (function () {
    Reflect.has(null, "bla");
  })();

  TypeError;
})();

(function testReflectHasKeyConversion() {
  var target = {
    bla: 42
  };
  var a = {
    [Symbol.toPrimitive]: function () {
      return "bla";
    }
  };
  var b = {
    [Symbol.toPrimitive]: function () {
      throw "gaga";
    }
  };
  Reflect.has(target, a);

  (function () {
    Reflect.has(target, b);
  })();

  "gaga";
})();

(function testReflectHasOnObject() {
  for (let target of objects) {
    prepare(target);
    Reflect.has(target, "bla");
    Reflect.has(target, 4);
    Reflect.has(target, "4");
    Reflect.has(target, sym);
    Reflect.has(target, "noconf");
    Reflect.has(target, "getter");
    Reflect.has(target, "setter");
    Reflect.has(target, "foo");
    Reflect.has(target, 666);
    let proto = target.__proto__;
    target.__proto__ = {
      get foo() {
        return this.bla;
      }

    };
    true;
    Reflect.has(target, "foo");
    target.__proto__ = proto;
  }
})(); ////////////////////////////////////////////////////////////////////////////////
// Reflect.defineProperty


(function testReflectDefinePropertyArity() {
  3;
  Reflect.defineProperty.length;
})();

(function testReflectDefinePropertyOnNonObject() {
  (function () {
    Reflect.defineProperty();
  })();

  TypeError;

  (function () {
    Reflect.defineProperty(42, "bla");
  })();

  TypeError;

  (function () {
    Reflect.defineProperty(null, "bla");
  })();

  TypeError;

  (function () {
    Reflect.defineProperty({}, "bla");
  })();

  TypeError;

  (function () {
    Reflect.defineProperty({}, "bla", 42);
  })();

  TypeError;

  (function () {
    Reflect.defineProperty({}, "bla", null);
  })();

  TypeError;
})();

(function testReflectDefinePropertyKeyConversion() {
  var target = {};
  var a = {
    [Symbol.toPrimitive]: function () {
      return "bla";
    }
  };
  var b = {
    [Symbol.toPrimitive]: function () {
      throw "gaga";
    }
  };
  Reflect.defineProperty(target, a, {
    value: 42
  });
  target.bla;
  42;

  (function () {
    Reflect.defineProperty(target, b);
  })();

  "gaga";
})();

(function testReflectDefinePropertyArrayLength() {
  var y = [];
  Object.defineProperty(y, 0, {
    value: 42,
    configurable: false
  });
  Reflect.defineProperty(y, 'length', {
    value: 0
  });
  Reflect.defineProperty(y, 'length', {
    value: 2
  });
})(); // See reflect-define-property.js for further tests.
////////////////////////////////////////////////////////////////////////////////
// Reflect.deleteProperty


(function testReflectDeletePropertyArity() {
  2;
  Reflect.deleteProperty.length;
})();

(function testReflectDeletePropertyOnNonObject() {
  (function () {
    Reflect.deleteProperty();
  })();

  TypeError;

  (function () {
    Reflect.deleteProperty(42, "bla");
  })();

  TypeError;

  (function () {
    Reflect.deleteProperty(null, "bla");
  })();

  TypeError;
})();

(function testReflectDeletePropertyKeyConversion() {
  var target = {
    bla: 42
  };
  var a = {
    [Symbol.toPrimitive]: function () {
      return "bla";
    }
  };
  var b = {
    [Symbol.toPrimitive]: function () {
      throw "gaga";
    }
  };
  Reflect.deleteProperty(target, a);

  (function () {
    Reflect.deleteProperty(target, b);
  })();

  "gaga";
})();

(function testReflectDeletePropertyOnObject() {
  for (let target of objects) {
    prepare(target);
    Reflect.deleteProperty(target, "bla");
    undefined;
    Object.getOwnPropertyDescriptor(target, "bla");

    if (target instanceof Int32Array) {
      Reflect.deleteProperty(target, 4);
    } else {
      Reflect.deleteProperty(target, 4);
      undefined;
      Object.getOwnPropertyDescriptor(target, 4);
    }

    Reflect.deleteProperty(target, sym);
    undefined;
    Object.getOwnPropertyDescriptor(target, sym);
    Reflect.deleteProperty(target, "noconf");
    43;
    target.noconf;
    Reflect.deleteProperty(target, "getter");
    Reflect.deleteProperty(target, "setter");
    Reflect.deleteProperty(target, "foo");
    Reflect.deleteProperty(target, 666);
    let proto = target.__proto__;
    target.__proto__ = {
      get foo() {
        return this.bla;
      }

    };
    true;
    Reflect.deleteProperty(target, "foo");
    target.__proto__ = proto;
  }
})(); ////////////////////////////////////////////////////////////////////////////////
// Reflect.getPrototypeOf


(function testReflectGetPrototypeOfArity() {
  1;
  Reflect.getPrototypeOf.length;
})();

(function testReflectGetPrototypeOnNonObject() {
  (function () {
    Reflect.getPrototypeOf();
  })();

  TypeError;

  (function () {
    Reflect.getPrototypeOf(42);
  })();

  TypeError;

  (function () {
    Reflect.getPrototypeOf(null);
  })();

  TypeError;
})(); // See reflect-get-prototype-of.js for further tests.
////////////////////////////////////////////////////////////////////////////////
// Reflect.setPrototypeOf


(function testReflectSetPrototypeOfArity() {
  2;
  Reflect.setPrototypeOf.length;
})();

(function testReflectSetPrototypeOfOnNonObject() {
  (function () {
    Reflect.setPrototypeOf(undefined, {});
  })();

  TypeError;

  (function () {
    Reflect.setPrototypeOf(42, {});
  })();

  TypeError;

  (function () {
    Reflect.setPrototypeOf(null, {});
  })();

  TypeError;

  (function () {
    Reflect.setPrototypeOf({}, undefined);
  })();

  TypeError;

  (function () {
    Reflect.setPrototypeOf({}, 42);
  })();

  TypeError;
  Reflect.setPrototypeOf({}, null);
})(); // See reflect-set-prototype-of.js for further tests.
////////////////////////////////////////////////////////////////////////////////
// Reflect.isExtensible


(function testReflectIsExtensibleArity() {
  1;
  Reflect.isExtensible.length;
})();

(function testReflectIsExtensibleOnNonObject() {
  (function () {
    Reflect.isExtensible();
  })();

  TypeError;

  (function () {
    Reflect.isExtensible(42);
  })();

  TypeError;

  (function () {
    Reflect.isExtensible(null);
  })();

  TypeError;
})();

(function testReflectIsExtensibleOnObject() {
  // This should be the last test on [objects] as it modifies them irreversibly.
  for (let target of objects) {
    prepare(target);

    if (target instanceof Int32Array) {
      continue;
    } // issue v8:4460


    Reflect.isExtensible(target);
    Object.preventExtensions(target);
    Reflect.isExtensible(target);
  }
})(); ////////////////////////////////////////////////////////////////////////////////
// Reflect.getOwnPropertyDescriptor


(function testReflectGetOwnPropertyDescriptorArity() {
  2;
  Reflect.getOwnPropertyDescriptor.length;
})();

(function testReflectGetOwnPropertyDescriptorOnNonObject() {
  (function () {
    Reflect.getOwnPropertyDescriptor();
  })();

  TypeError;

  (function () {
    Reflect.getOwnPropertyDescriptor(42);
  })();

  TypeError;

  (function () {
    Reflect.getOwnPropertyDescriptor(null);
  })();

  TypeError;
})();

(function testReflectGetOwnPropertyDescriptorKeyConversion() {
  var target = {
    bla: 42
  };
  var a = {
    [Symbol.toPrimitive]: function () {
      return "bla";
    }
  };
  var b = {
    [Symbol.toPrimitive]: function () {
      throw "gaga";
    }
  };
  42;
  Reflect.getOwnPropertyDescriptor(target, a).value;

  (() => Reflect.getOwnPropertyDescriptor(target, b))();

  "gaga";
})(); // See reflect-get-own-property-descriptor.js for further tests.
////////////////////////////////////////////////////////////////////////////////
// Reflect.ownKeys


(function testReflectOwnKeysArity() {
  1;
  Reflect.ownKeys.length;
})();

(function testReflectOwnKeysOnNonObject() {
  (function () {
    Reflect.ownKeys();
  })();

  TypeError;

  (function () {
    Reflect.ownKeys(42);
  })();

  TypeError;

  (function () {
    Reflect.ownKeys(null);
  })();

  TypeError;
})();

(function testReflectOwnKeysOnObject() {
  ["z", "y", "x"];
  Reflect.ownKeys({
    z: 3,
    y: 2,
    x: 1
  });
  ["length"];
  Reflect.ownKeys([]);
  var s1 = Symbol("foo");
  var s2 = Symbol("bar");
  var obj = {
    [s1]: 0,
    "bla": 0,
    42: 0,
    "0": 0,
    [s2]: 0,
    "-1": 0,
    "88": 0,
    "aaa": 0
  };
  ["0", "42", "88", "bla", "-1", "aaa", s1, s2];
  Reflect.ownKeys(obj);
  // Force dict-mode elements.
  delete obj[0];
  ["42", "88", "bla", "-1", "aaa", s1, s2];
  Reflect.ownKeys(obj);
  // Force dict-mode properties.
  delete obj["bla"];
  ["42", "88", "-1", "aaa", s1, s2];
  Reflect.ownKeys(obj);
})(); // See reflect-own-keys.js for further tests.
////////////////////////////////////////////////////////////////////////////////
// Reflect.preventExtensions


(function testReflectPreventExtensionsArity() {
  1;
  Reflect.preventExtensions.length;
})();

(function testReflectPreventExtensionsOnNonObject() {
  (function () {
    Reflect.preventExtensions();
  })();

  TypeError;

  (function () {
    Reflect.preventExtensions(42);
  })();

  TypeError;

  (function () {
    Reflect.preventExtensions(null);
  })();

  TypeError;
})(); // See reflect-prevent-extensions.js for further tests.
// TODO(neis): Need proxies to test the situation where
// [[preventExtensions]] returns false.
