//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  [WeakMap, Map].forEach(function (ctor) {
    var target = {};
    let p = new Proxy(target, {});
    let map = new ctor();
    map.set(p, 101);
    console.log(map.get(p), 101);
    p.x = 20;
    console.log(target.x, 20);
  });
}

t1();

function t2() {
  [WeakMap, Map].forEach(function (ctor) {
    var target = {};
    let p = new Proxy(target, {});
    let map = new ctor();
    map.set(p, 101);
    console.log(map.get(p), 101);
    map.delete(p);
    console.log(map.get(p), undefined);
    map.set(p, 102);
    console.log(map.get(p), 102);
    p.x = 20;
    console.log(target.x, 20);
  });
}

t2();

function t3() {
  var target = {};
  var handler = {};
  var getOwnPropertyDescriptorCalled = false;

  handler['defineProperty'] = function () {
    assert.fail("This function will not be called as 'getOwnPropertyDescriptor' will add accessor");
  };

  handler['getOwnPropertyDescriptor'] = function (t, property) {
    getOwnPropertyDescriptorCalled = true;
    Object.defineProperty(t, 'abc', {
      set: function () {
        ;
      }
    });
    return Reflect.getOwnPropertyDescriptor(t, property);
  };

  var proxy = new Proxy(target, handler);
  proxy.abc = undefined;
  console.log(getOwnPropertyDescriptorCalled);
}

t3();

function t4() {
  var target = {};
  var handler = {};
  var getOwnPropertyDescriptorCalled = false;

  handler['defineProperty'] = function () {
    assert.fail("This function will not be called as 'getOwnPropertyDescriptor' will add property with writable false");
  };

  handler['getOwnPropertyDescriptor'] = function (t, property) {
    getOwnPropertyDescriptorCalled = true;
    Object.defineProperty(t, 'abc', {
      value: 1,
      writable: false
    });
    return Reflect.getOwnPropertyDescriptor(t, property);
  };

  var proxy = new Proxy(target, handler);
  proxy.abc = undefined;
  console.log(getOwnPropertyDescriptorCalled);
}

t4();

function t5() {
  var target = {};
  var handler = {};
  var definePropertyCalled = false;
  var getOwnPropertyDescriptorCalled = false;

  handler['defineProperty'] = function () {
    definePropertyCalled = true;
  };

  handler['getOwnPropertyDescriptor'] = function (t, property) {
    getOwnPropertyDescriptorCalled = true;
    return Reflect.getOwnPropertyDescriptor(t, property);
  };

  var proxy = new Proxy(target, handler);
  proxy.abc = undefined;
  console.log(definePropertyCalled);
  console.log(getOwnPropertyDescriptorCalled);
}

t5();

function t6() {
  var targetCalled = false;

  var func4 = function () {
    targetCalled = true;
  };

  var v0 = new Proxy(func4, {});
  var sc0 = {
    foo: function () {
      var a = undefined;
      v0(a) > 1;
    }
  };
  sc0.v0 = v0;
  sc0.foo();
  console.log(targetCalled);
}

t6();

function t7() {
  try {
    Reflect.set(new Proxy({}, {
      has: function () {
        return true;
      }
    }), 'abc', 0x44444444, new Uint32Array());
  } catch (e) {
    ;
  }

  try {
    Reflect.set(new Proxy({}, {
      has: function () {
        return true;
      }
    }), 'abc', 0x44444444, new Uint32Array());
  } catch (e) {
    ;
  }

  var obj1 = Object.create(new Proxy({}, {}));
  obj1[Symbol.species] = 0;
}

t7();

function t8() {
  var trapCalled = false;

  var func4 = function () {
    ;
  };

  var handler = {
    apply: function (a, b, c) {
      trapCalled = true;
    }
  };
  var v0 = new Proxy(func4, handler);
  var sc0 = {
    foo: function () {
      var a = undefined;
      v0(a) > 1;
    }
  };
  sc0.v0 = v0;
  sc0.foo();
  console.log(trapCalled);
}

t8();

function t9() {
  var trapCalled = false;
  var handler = {
    getPrototypeOf: function (a, b) {
      trapCalled = true;
      obj.revoke();
      return {};
    }
  };
  var obj = Proxy.revocable({}, handler);
  Object.getPrototypeOf(obj.proxy);
  console.log(trapCalled);
}

t9();

function t10() {
  var trapCalled = false;
  var handler = {
    setPrototypeOf: function (a, b) {
      trapCalled = true;
      obj.revoke();
      return true;
    }
  };
  var obj = Proxy.revocable({}, handler);
  var ret = Object.setPrototypeOf(obj.proxy, {});
  console.log(trapCalled);
}

t10();

function t11() {
  var trapCalled = false;
  var handler = {
    isExtensible: function (a, b) {
      trapCalled = true;
      obj.revoke();
      return true;
    }
  };
  var obj = Proxy.revocable({}, handler);
  var ret = Object.isExtensible(obj.proxy);
  console.log(trapCalled);
}

t11();

function t12() {
  var trapCalled = false;
  var handler = {
    preventExtensions: function (a, b) {
      trapCalled = true;
      obj.revoke();
    }
  };
  var obj = Proxy.revocable({}, handler);

  try {
    Object.preventExtensions(obj.proxy);
  } catch (e) {
    ;
  }

  console.log(trapCalled);
}

t12();

function t13() {
  var trapCalled = false;
  var handler = {
    getOwnPropertyDescriptor: function (a, b, c) {
      trapCalled = true;
      obj.revoke();
    }
  };
  var obj = Proxy.revocable({}, handler);
  Object.getOwnPropertyDescriptor(obj.proxy, 'a');
  console.log(trapCalled);
}

t13();

function t14() {
  var trapCalled = false;
  var handler = {
    getOwnPropertyDescriptor: function (a, b, c) {
      trapCalled = true;
      obj.revoke(); // used to cause AV

      a[undefined] = new String();
    }
  };
  var obj = Proxy.revocable({}, handler);
  Object.getOwnPropertyDescriptor(obj.proxy);
  console.log(trapCalled);
}

t14();

function t15() {
  var trapCalled = false;
  var handler = {
    getOwnPropertyDescriptor: function (a, b, c) {
      trapCalled = true;
      let result = Object.getOwnPropertyDescriptor(obj, 'proxy');
      obj.revoke(); // used to cause AV

      return result;
    }
  };
  var obj = Proxy.revocable({}, handler);
  Object.getOwnPropertyDescriptor(obj.proxy);
  console.log(trapCalled);
}

t15();

function t16() {
  var trapCalled = false;
  var handler = {
    get(t, propertyKey) {
      trapCalled = true;

      if (propertyKey === "getOwnPropertyDescriptor") {
        obj.revoke();
      }
    }

  };
  var obj = Proxy.revocable({
    a: 0
  }, new Proxy({}, handler));
  Object.getOwnPropertyDescriptor(obj.proxy, 'a');
  console.log(trapCalled);
}

t16();

function t17() {
  var trapCalled = false;
  var handler = {
    has: function (a, b, c) {
      trapCalled = true;
      obj.revoke();
      return false;
    }
  };
  var obj = Proxy.revocable({}, handler);
  'a' in obj.proxy;
  console.log(trapCalled);
}

t17();

function t18() {
  var trapCalled = false;
  var handler = {
    get: function (a, b, c) {
      trapCalled = true;
      obj.revoke();
      return {};
    }
  };
  var obj = Proxy.revocable({}, handler);
  var ret = obj.proxy.a;
  console.log(trapCalled);
}

t18();

function t19() {
  var trapCalled = false;
  var handler = {
    set: function (a, b, c) {
      trapCalled = true;
      obj.revoke();
      return {};
    }
  };
  var obj = Proxy.revocable({}, handler);
  obj.proxy.a = 10;
  console.log(trapCalled);
}

t19();

function t20() {
  var trapCalled = false;
  var handler = {
    deleteProperty: function (a, b, c) {
      trapCalled = true;
      obj.revoke();
      return {};
    }
  };
  var obj = Proxy.revocable({}, handler);
  delete obj.proxy.a;
  console.log(trapCalled);
}

t20();

function t21() {
  var trapCalled = false;
  var handler = {
    ownKeys: function (a, b, c) {
      trapCalled = true;
      obj.revoke();
      return {};
    }
  };
  var obj = Proxy.revocable({}, handler);
  Object.keys(obj.proxy);
  console.log(trapCalled);
}

t21();

function t22() {
  var keys = ['a'];
  keys[100] = 'b';
  var proxy = new Proxy({
    a: 1,
    b: 2
  }, {
    ownKeys: function () {
      return keys;
    }
  });

  try {
    Object.keys(proxy);
  } catch (e) {
    ;
  }
}

t22();

function t23() {
  var trapCalled = false;
  var handler = {
    get apply() {
      trapCalled = true;
      obj.revoke();
    }

  };
  var obj = Proxy.revocable(() => {
    ;
  }, handler);
  obj.proxy();
  console.log(trapCalled);
}

t23();

function t24() {
  var trapCalled = false;
  var handler = {
    get construct() {
      trapCalled = true;
      obj.revoke();
      return () => {
        return {};
      };
    }

  };
  var obj = Proxy.revocable(function () {
    ;
  }, handler);
  new obj.proxy();
  console.log(trapCalled);
}

t24();

function t25() {
  function parent() {
    this.noTrap = true;
  }

  var proxyNoTrap = new Proxy(parent, {});
  var handler = {
    construct: function () {
      this.other = true;
      return {
        trap: true
      };
    }
  };
  var proxyWithTrap = new Proxy(parent, handler);

  class NoTrap extends proxyNoTrap {
    constructor() {
      super();
      this.own = true;
    }

    a() {
      return true;
    }

  }

  class WithTrap extends proxyWithTrap {
    constructor() {
      super();
      this.own = true;
    }

    a() {
      return true;
    }

  }

  var notrap = new NoTrap();
  console.log(notrap.own);
  console.log(notrap.a());
  console.log(notrap.noTrap);
  var withtrap = new WithTrap();
  console.log(withtrap.own);
  withtrap.a;
  console.log(withtrap.trap);
  withtrap.other;
  withtrap.noTrap;
}

t25();

function t26() {
  function Foo(a) {
    this.x = a;
  }

  var proxy = new Proxy(Foo, {});
  var proxy1 = new Proxy(proxy, {});
  var proxy2 = new Proxy(proxy1, {});
  var obj1 = new proxy2(10);
  console.log(10, obj1.x);
  var obj2 = Reflect.construct(proxy2, [20]);
  console.log(20, obj2.x);
}

t26();

function t27() {
  var proxy = new Proxy({}, {
    ownKeys: function (t) {
      return ["a", "a"];
    }
  });

  try {
    Object.keys(proxy);
  } catch (e) {
    ;
  }
}

t27();

function t28() {
  const desc = {};
  let counter = 0;
  let handler = {
    defineProperty: function (oTarget, sKey, oDesc) {
      return Reflect.defineProperty(oTarget, sKey, oDesc);
    }
  };
  Object.defineProperty(desc, "writable", {
    get: function () {
      ++counter;
      return true;
    }
  });
  Object.defineProperty(new Proxy({}, handler), "test", desc);
  console.log(1, counter);
}

t28();
