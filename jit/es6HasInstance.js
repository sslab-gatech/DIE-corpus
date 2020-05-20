//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Function unit tests
function t1() {
  var F = function (a, b) {
    this.x = a;
    this.y = b;
  };

  var checked = 0;
  Object.defineProperty(F, Symbol.hasInstance, {
    value: function () {
      checked++;
      return true;
    }
  });
  console.log(true, undefined instanceof F);
  console.log(1, checked);
  console.log(true, null instanceof F);
  console.log(2, checked);
  console.log(true, true instanceof F);
  console.log(3, checked);
  console.log(true, false instanceof F);
  console.log(4, checked);
  console.log(true, 0 instanceof F);
  console.log(5, checked);
  console.log(true, 1.5e16 instanceof F);
  console.log(6, checked);
  console.log(true, NaN instanceof F);
  console.log(7, checked);
  console.log(true, '' instanceof F);
  console.log(8, checked);
  console.log(true, 'abc' instanceof F);
  console.log(9, checked);
  console.log(true, {} instanceof F);
  console.log(10, checked);
  console.log(true, function () {
    ;
  } instanceof F);
  console.log(11, checked);
}

t1();

function t2() {
  [{}, {
    0: 1,
    "length": 1
  }, [], [0, 1, 2], ['abc']].forEach(function (item) {
    testInstanceof(item);
  });

  function testInstanceof(O) {
    var checked = 0;
    var oldf = O[Symbol.hasInstance];

    O[Symbol.hasInstance] = function () {
      checked++;
      return true;
    };

    O;
    O[Symbol.hasInstance] = oldf;
    checked = 0;
    var desc = Object.getOwnPropertyDescriptor(O, Symbol.hasInstance);
    Object.defineProperty(O, Symbol.hasInstance, {
      value: function () {
        checked++;
        return true;
      }
    });
    O;
    Object.defineProperty(O, Symbol.hasInstance, desc);

    function assertInstanceOf(O) {
      console.log(true, undefined instanceof O);
      console.log(1, checked);
      console.log(true, null instanceof O);
      console.log(2, checked);
      console.log(true, true instanceof O);
      console.log(3, checked);
      console.log(true, false instanceof O);
      console.log(4, checked);
      console.log(true, 0 instanceof O);
      console.log(5, checked);
      console.log(true, 1.5e16 instanceof O);
      console.log(6, checked);
      console.log(true, NaN instanceof O);
      console.log(7, checked);
      console.log(true, '' instanceof O);
      console.log(8, checked);
      console.log(true, 'abc' instanceof O);
      console.log(9, checked);
      console.log(true, {} instanceof O);
      console.log(10, checked);
      console.log(true, function () {
        ;
      } instanceof O);
      console.log(11, checked);
    }
  }
}

t2();

function t3() {
  var F = function (a, b) {
    this.x = a;
    this.y = b;
  };

  var BoundF = F.bind(1, 2);
  var checked = 0;
  Object.defineProperty(F, Symbol.hasInstance, {
    value: function () {
      checked++;
      return true;
    }
  });
  console.log(true, BoundF instanceof F);
  console.log(1, checked);
  console.log(true, Object.create(BoundF) instanceof F);
  console.log(2, checked);
  console.log(true, new BoundF() instanceof F);
  console.log(3, checked);
  console.log(true, Object.create(F.prototype) instanceof BoundF);
  console.log(true, new F() instanceof BoundF);
}

t3();

function t4() {
  function Foo() {
    ;
  }

  ;
  var checked = 0;
  var checkedString = [];
  Object.defineProperty(Foo, Symbol.hasInstance, {
    value: function () {
      checked++;
      return false;
    }
  });
  var ProxyFoo = new Proxy(Foo, {
    get: function (target, property) {
      checkedString.push(property.toString());
      return Reflect.get(target, property);
    }
  });
  console.log(false, new ProxyFoo() instanceof ProxyFoo);
  console.log(1, checked);
  console.log(['Symbol(Symbol.hasInstance)'], checkedString);
  console.log(false, new ProxyFoo() instanceof Foo);
  console.log(2, checked);
}

t4();

function t5() {
  function Foo() {
    ;
  }

  ;
  var checked = 0;
  var checkedString = [];
  Object.defineProperty(Foo, Symbol.hasInstance, {
    value: function () {
      checked++;
      return false;
    }
  });
  var ProxyFoo = new Proxy(Foo, {
    get: function (target, property) {
      checkedString.push(property.toString());
      return Reflect.get(target, property);
    }
  });
  var BP = ProxyFoo.bind();
  console.log(false, BP instanceof ProxyFoo);
  console.log(1, checked);
  console.log(['bind', 'length', 'name', 'Symbol(Symbol.hasInstance)'], checkedString);
}

t5();

function t6() {
  [undefined, null, true, false, 'string', Symbol(), 0].forEach(function (item) {
    testInstanceof(item, function () {
      ;
    });
  });

  function testInstanceof(prototypeObj, O) {
    O.prototype = prototypeObj;

    try {
      ({}) instanceof O;
    } catch (e) {
      ;
    }

    try {
      ({
        0: 1,
        "length": 1
      }) instanceof O;
    } catch (e) {
      ;
    }

    try {
      [] instanceof O;
    } catch (e) {
      ;
    }

    try {
      [0, 1, 2] instanceof O;
    } catch (e) {
      ;
    }

    try {
      ['abc'] instanceof O;
    } catch (e) {
      ;
    }

    try {
      (function () {
        ;
      }) instanceof O;
    } catch (e) {
      ;
    }

    try {
      O[Symbol.hasInstance]({});
    } catch (e) {
      ;
    }

    try {
      O[Symbol.hasInstance]({
        0: 1,
        "length": 1
      });
    } catch (e) {
      ;
    }

    try {
      O[Symbol.hasInstance]([]);
    } catch (e) {
      ;
    }

    try {
      O[Symbol.hasInstance]([0, 1, 2]);
    } catch (e) {
      ;
    }

    try {
      O[Symbol.hasInstance](['abc']);
    } catch (e) {
      ;
    }

    try {
      O[Symbol.hasInstance](function () {
        ;
      });
    } catch (e) {
      ;
    }
  }
}

t6();

function t7() {
  [[function () {
    return undefined;
  }, false], [function () {
    return null;
  }, false], [function () {
    return NaN;
  }, false], [function () {
    return 1;
  }, true], [function () {
    return 0;
  }, false], [function () {
    return '';
  }, false], [function () {
    return 'abc';
  }, true], [function () {
    return Symbol();
  }, true], [function () {
    return {};
  }, true]].forEach(function (item) {
    testInstanceof(item[0], item[1], {});
    testInstanceof(item[0], item[1], []);
  });

  function testInstanceof(instOfHandler, expected, O) {
    O[Symbol.hasInstance] = instOfHandler;
    console.log(expected, undefined instanceof O);
    console.log(expected, null instanceof O);
    console.log(expected, true instanceof O);
    console.log(expected, false instanceof O);
    console.log(expected, 0 instanceof O);
    console.log(expected, 1.5e16 instanceof O);
    console.log(expected, NaN instanceof O);
    console.log(expected, '' instanceof O);
    console.log(expected, 'abc' instanceof O);
    console.log(expected, {} instanceof O);
    console.log(expected, function () {
      ;
    } instanceof O);
  }
}

t7();

function t8() {
  var F = function () {
    ;
  };

  [undefined, null, true, false, '', 'abc', Symbol(), Symbol('abc'), 0, 1.5e16, NaN].forEach(function (item) {
    console.log(item instanceof F);
  });
}

t8();

function t9() {
  var desc = Object.getOwnPropertyDescriptor(Function.prototype, Symbol.hasInstance);
  console.log(false, desc.enumerable);
  console.log(false, desc.writable);
  console.log(false, desc.configurable);
  var f = Function.prototype[Symbol.hasInstance];
  console.log(1, f.length);
  desc = Object.getOwnPropertyDescriptor(f, 'length');
  console.log(false, desc.enumerable);
  console.log(false, desc.writable);
  console.log(true, desc.configurable);
  console.log('[Symbol.hasInstance]', f.name);
  desc = Object.getOwnPropertyDescriptor(f, 'name');
  console.log(false, desc.enumerable);
  console.log(false, desc.writable);
  console.log(true, desc.configurable);
  console.log(false, f.call());
  console.log(false, f.call(null));
  console.log(false, f.call(0));
  console.log(false, f.call({}));
}

t9();

function t10() {
  // method 'F' has no 'prototype' property
  var F = Object.getOwnPropertyDescriptor({
    get f() {
      ;
    }

  }, 'f').get;
  Object.defineProperty(F, 'prototype', {
    get: function () {
      throw new Error('Hit prototype');
    }
  });

  try {
    undefined instanceof F;
  } catch (e) {
    ;
  }
}

t10();

function t11() {
  var p = new Proxy({}, {
    getPrototypeOf: function () {
      throw new Error('Hit getPrototypeOf');
    }
  });
  var obj = Object.create(p);
  obj.prototype = {};

  var F = function () {
    ;
  };

  try {
    p instanceof F;
  } catch (e) {
    ;
  }

  try {
    obj instanceof F;
  } catch (e) {
    ;
  }
}

t11();

function t12() {
  var F = function () {
    ;
  };

  var changeHasInstance = function () {
    Object.defineProperty(F, Symbol.hasInstance, {
      value: function (inst) {
        return true;
      }
    });
  };

  function func() {
    return 0 instanceof F;
  }

  var changed = false;

  for (var i = 0; i < 100; i++) {
    var x = func();
    console.log(changed, x);

    if (i == 20) {
      changeHasInstance();
      changed = true;
    }
  }
}

t12();

function t13() {
  var F = function () {
    ;
  };

  var changeHasInstance = function () {
    Object.defineProperty(F, 'prototype', {
      value: Function.prototype
    });
  };

  function func() {
    return function () {
      ;
    } instanceof F;
  }

  var changed = false;

  for (var i = 0; i < 100; i++) {
    var x = func();
    console.log(changed, x);

    if (i == 20) {
      changeHasInstance();
      changed = true;
    }
  }
}

t13();
