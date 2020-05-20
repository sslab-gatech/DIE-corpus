//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function getNewSetWith12345() {
  var set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);
  set.add(4);
  set.add(5);
  return set;
}

var globalObject = this;

function t1() {
  // Set is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[SetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //
  // For IE11 we simply throw if Set() is called as a function instead of in a new expression
  try {
    Set.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Set.call(null);
  } catch (e) {
    ;
  }

  try {
    Set.call(Set.prototype);
  } catch (e) {
    ;
  }
  /*
  var set1 = Set.call(undefined);
  console.log(set1 !== null && set1 !== undefined && set1 !== Set.prototype);
  var set2 = Set.call(Set.prototype);
  console.log(set2 !== null && set2 !== undefined && set2 !== Set.prototype);
  var o = { };
  Object.preventExtensions(o);
  try { Set.call(null); } catch(e) {}
  try { Set.call(o); } catch(e) {}
  */

}

t1();

function t2() {
  var set = new Set();

  try {
    Set.call(set);
  } catch (e) {
    ;
  } // Set is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[SetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.

  /*
  var obj = {};
  Set.call(obj);
  try { Set.call(obj); } catch(e) {}
  function MySet() {
  Set.call(this);
  }
  MySet.prototype = new Set();
  MySet.prototype.constructor = MySet;
  var myset = new MySet();
  try { Set.call(myset); } catch(e) {}
  try { MySet.call(myset); } catch(e) {}
  */

}

t2();

function t3() {
  var s = new Set(['a', 'b', 'c']);
  console.log(3, s.size);
  console.log(s.has('a'));
  console.log(s.has('b'));
  console.log(s.has('c'));
  var customIterable = {
    [Symbol.iterator]: function () {
      var i = 1;
      return {
        next: function () {
          return {
            done: i > 4,
            value: i++ * 2
          };
        }
      };
    }
  };
  s = new Set(customIterable);
  console.log(4, s.size);
  console.log(s.has(2));
  console.log(s.has(4));
  console.log(s.has(6));
  console.log(s.has(8));
}

t3();

function t4() {
  var iterableNoIteratorMethod = {
    [Symbol.iterator]: 123
  };
  var iterableBadIteratorMethod = {
    [Symbol.iterator]: function () {
      ;
    }
  };
  var iterableNoIteratorNextMethod = {
    [Symbol.iterator]: function () {
      return {};
    }
  };
  var iterableBadIteratorNextMethod = {
    [Symbol.iterator]: function () {
      return {
        next: 123
      };
    }
  };
  var iterableNoIteratorResultObject = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          ;
        }
      };
    }
  };

  try {
    new Set(123);
  } catch (e) {
    ;
  }

  try {
    new Set({});
  } catch (e) {
    ;
  }

  try {
    new Set(iterableNoIteratorMethod);
  } catch (e) {
    ;
  }

  try {
    new Set(iterableBadIteratorMethod);
  } catch (e) {
    ;
  }

  try {
    new Set(iterableNoIteratorNextMethod);
  } catch (e) {
    ;
  }

  try {
    new Set(iterableBadIteratorNextMethod);
  } catch (e) {
    ;
  }

  try {
    new Set(iterableNoIteratorResultObject);
  } catch (e) {
    ;
  }
}

t4();

function t5() {
  function MySetImposter() {
    ;
  }

  MySetImposter.prototype = new Set();
  MySetImposter.prototype.constructor = MySetImposter;
  var o = new MySetImposter();

  try {
    o.add(1);
  } catch (e) {
    ;
  }

  try {
    o.clear();
  } catch (e) {
    ;
  }

  try {
    o.delete(1);
  } catch (e) {
    ;
  }

  try {
    o.forEach(function (k, v, s) {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    o.has(1);
  } catch (e) {
    ;
  }

  try {
    WScript.Echo(o.size);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.add.call();
  } catch (e) {
    ;
  }

  try {
    Set.prototype.clear.call();
  } catch (e) {
    ;
  }

  try {
    Set.prototype.delete.call();
  } catch (e) {
    ;
  }

  try {
    Set.prototype.forEach.call();
  } catch (e) {
    ;
  }

  try {
    Set.prototype.has.call();
  } catch (e) {
    ;
  }

  try {
    Object.getOwnPropertyDescriptor(Set.prototype, "size").get.call();
  } catch (e) {
    ;
  }

  try {
    Set.prototype.add.call(null, 1);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.clear.call(null);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.delete.call(null, 1);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.forEach.call(null, function (k, v, s) {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    Set.prototype.has.call(null, 1);
  } catch (e) {
    ;
  }

  try {
    Object.getOwnPropertyDescriptor(Set.prototype, "size").get.call(null);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.add.call(undefined, 1);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.clear.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.delete.call(undefined, 1);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.forEach.call(undefined, function (k, v, s) {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    Set.prototype.has.call(undefined, 1);
  } catch (e) {
    ;
  }

  try {
    Object.getOwnPropertyDescriptor(Set.prototype, "size").get.call(undefined);
  } catch (e) {
    ;
  }

  var set = new Set();

  try {
    set.forEach(null);
  } catch (e) {
    ;
  }

  try {
    set.forEach(undefined);
  } catch (e) {
    ;
  }

  try {
    set.forEach(true);
  } catch (e) {
    ;
  }

  try {
    set.forEach(10);
  } catch (e) {
    ;
  }

  try {
    set.forEach("hello");
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var set = new Set();
  console.log(set.size === 0);
  set.add(1);
  set.add(2);
  set.add("Hello");
  var o = {};
  set.add(o);
  console.log(set.has(1));
  console.log(set.has(2));
  console.log(set.has("Hello"));
  console.log(set.has(o));
  console.log(set.size === 4);
  console.log(set.has(0));
  console.log(set.has("goodbye"));
  console.log(set.has(set));
  set.clear();
  console.log(set.size === 0);
  console.log(set.has(1));
  console.log(set.has(2));
  console.log(set.has("Hello"));
  console.log(set.has(o));
  set.add(1);
  set.add(2);
  set.add("Hello");
  set.add(o);
  console.log(set.has(1));
  console.log(set.has(2));
  console.log(set.has("Hello"));
  console.log(set.has(o));
  console.log(set.size === 4);
  set.delete(2);
  console.log(set.has(1));
  console.log(set.has(2));
  console.log(set.has("Hello"));
  console.log(set.has(o));
  console.log(set.size === 3);
  set.delete(o);
  set.delete("Hello");
  console.log(set.has(1));
  console.log(set.has(2));
  console.log(set.has("Hello"));
  console.log(set.has(o));
  console.log(set.size === 1);
  set.delete(1);
  console.log(set.has(1));
  console.log(set.size === 0);
}

t6();

function t7() {
  var set = new Set();
  console.log(set.has());
  console.log(set.delete());
  set.add();
  console.log(set.has());
  console.log(set.delete());
}

t7();

function t8() {
  var set = new Set();
  console.log(set.has(1, 2, 3));
  console.log(set.delete(1, 2, 3)); // 2 and 3 should be ignored and not added to the set

  set.add(1, 2, 3);
  console.log(set.has(1));
  console.log(set.has(2));
  console.log(set.has(3));
  console.log(set.has(1, 2, 3));
  console.log(set.has(2, 1, 3));
  console.log(set.delete(2, 1, 3));
  console.log(set.delete(3, 1));
  console.log(set.delete(1, 2, 3));
}

t8();

function t9() {
  var set = new Set();
  set.add(1);
  console.log(set.delete(2));
  console.log(set.delete(1));
  console.log(set.delete(1));
}

t9();

function t10() {
  var set = new Set();
  set.add(1);
  set.add(1);
  set.add(2);
  set.delete(1);
  set.add(2);
  set.add(1);
  set.add(1);
}

t10();

function t11() {
  var set = new Set();
  console.log(set, set.add(1));
  console.log(set, set.add(1));
  console.log(undefined, set.clear());
}

t11();

function t12() {
  var set = new Set();
  set.add(3.14159);
  set.add("hello");
  set.add(8589934592);
  console.log(set.has(3.14159));
  console.log(set.has(3.0 + 0.14159));
  console.log(set.has("hello"));
  console.log(set.has("hel" + "lo"));
  console.log(set.has(8589934592));
  console.log(set.has(65536 + 8589869056));
  set.add(-0);
  console.log(set.has(-0));
  console.log(set.has(+0));
  set.add(0);
  console.log(set.has(-0));
  console.log(set.has(+0));
  set.delete(-0);
  console.log(set.has(-0));
  console.log(set.has(+0));
  set.add(+0);
  console.log(set.has(-0));
  console.log(set.has(+0));
  set.add(-0);
  console.log(set.has(-0));
  console.log(set.has(+0));
  set.delete(0);
  console.log(set.has(-0));
  console.log(set.has(+0));
  set.add(Number.NEGATIVE_INFINITY);
  console.log(set.has(Number.NEGATIVE_INFINITY));
  console.log(set.has(Number.POSITIVE_INFINITY));
  set.add(Infinity);
  console.log(set.has(Number.NEGATIVE_INFINITY));
  console.log(set.has(Number.POSITIVE_INFINITY));
  set.delete(Number.NEGATIVE_INFINITY);
  console.log(set.has(Number.NEGATIVE_INFINITY));
  console.log(set.has(Number.POSITIVE_INFINITY));
  console.log(set.has(NaN));
  set.add(NaN);
  console.log(set.has(NaN));
  console.log(set.has(parseInt("blah")));
  console.log(set.has(Math.sqrt(-1)));
  console.log(set.has(0 * Infinity));
}

t12();

function t13() {
  var set = new Set();
  set.add(1);
  set.forEach(function (key, val, set) {
    console.log(this === globalObject);
  });
  var o = {};
  set.forEach(function (key, val, set) {
    console.log(this === o);
  }, o);
  set.forEach(function (key, val, set) {
    console.log(this.valueOf() === 10);
  }, 10);
}

t13();

function t14() {
  var i = 0;
  var set = getNewSetWith12345();
  var didExecute = false;
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);
    didExecute = true;
  });
  console.log(didExecute); // a second forEach should start at the beginning again

  i = 0;
  didExecute = false;
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);
    didExecute = true;
  });
  console.log(didExecute);
  set.clear();
  set.forEach(function (key, val, set) {
    assert.fail("Shouldn't execute; set should be empty");
  });
  set = new Set();
  set.forEach(function (key, val, set) {
    assert.fail("Shouldn't execute; set should be empty");
  });
}

t14();

function t15() {
  var i = 0;
  var set = getNewSetWith12345();
  var didExecute = false;
  set.forEach(function (key, val, set) {
    set.delete(val);
    i += 1;
    console.log(val == i);
    didExecute = true;
  });
  console.log(didExecute);
  set.forEach(function (key, val, set) {
    assert.fail("Shouldn't execute; set should be empty");
  });
  i = 0;
  set = getNewSetWith12345();
  didExecute = false;
  set.forEach(function (key, val, set) {
    if (val >= 3) {
      set.delete(val - 2);
    }

    i += 1;
    console.log(val == i);
    didExecute = true;
  });
  console.log(didExecute);
  i = 3;
  didExecute = false;
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);
    didExecute = true;
  });
  console.log(didExecute);
}

t15();

function t16() {
  var i = 1;
  var set = getNewSetWith12345();
  var didExecute = false;
  set.forEach(function (key, val, set) {
    console.log(val == i);
    set.delete(val + 1);
    i += 2;
    didExecute = true;
  });
  console.log(didExecute);
  didExecute = false;
  set.forEach(function (key, val, set) {
    console.log(val == 1);
    set.delete(3);
    set.delete(5);
    didExecute = true;
  });
  console.log(didExecute);
  didExecute = false;
  set.forEach(function (key, val, set) {
    console.log(val == 1);
    set.delete(1);
    didExecute = true;
  });
  console.log(didExecute);
  set.forEach(function (key, val, set) {
    assert.fail("Shouldn't execute, set should be empty");
  });
  set = getNewSetWith12345();
  i = 0;
  didExecute = false;
  set.forEach(function (key, val, set) {
    set.delete(6 - val);
    i += 1;
    console.log(val == i && val <= 3);
    didExecute = true;
  });
  console.log(didExecute);
  i = 0;
  didExecute = false;
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i && val <= 2);
    didExecute = true;
  });
  console.log(didExecute);
}

t16();

function t17() {
  var i = 0;
  var set = new Set();
  set.add(1);
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);

    if (val < 20) {
      set.add(val + 1);
    }
  });
  console.log(i == 20);
  i = 0;
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);

    if (val < 20) {
      set.add(val + 1);
    }
  });
  console.log(i == 20);
}

t17();

function t18() {
  var i = 0;
  var set = getNewSetWith12345();
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);

    if (val == 1) {
      set.clear();
    }
  });
  console.log(i == 1);
  i = 0;
  set = getNewSetWith12345();
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);

    if (val == 2) {
      set.clear();
    }
  });
  console.log(i == 2);
  i = 0;
  set = getNewSetWith12345();
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);

    if (val == 3) {
      set.clear();
    }
  });
  console.log(i == 3);
  i = 0;
  set = getNewSetWith12345();
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);

    if (val == 4) {
      set.clear();
    }
  });
  console.log(i == 4);
  i = 0;
  set = getNewSetWith12345();
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);

    if (val == 5) {
      set.clear();
    }
  });
  console.log(i == 5);
  console.log(set.size == 0);
}

t18();

function t19() {
  var i = 0;
  var didExecute = false;
  var set = getNewSetWith12345();
  set.forEach(function (key, val, set) {
    if (val == 3) {
      set.delete(2);
      set.delete(1);
      set.add(1);
      set.add(2);
    }

    i += 1;
    console.log(val == i);

    if (val == 5) {
      i = 0;
    }

    didExecute = true;
  });
  console.log(didExecute);
  i = 2;
  didExecute = false;
  set.forEach(function (key, val, set) {
    i += 1;
    console.log(val == i);

    if (val == 5) {
      i = 0;
    }

    didExecute = true;
  });
  console.log(didExecute);
}

t19();

function t20() {
  var set = new Set();
  set.add(1);
  set.add(2);
  var vals = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  var i = 0;
  set.forEach(function (key, val, set) {
    if (i < 9) {
      if (val == 1) {
        set.delete(1);
        set.add(2);
      } else {
        if (val == 2) {
          set.delete(2);
          set.add(1);
        }
      }
    }

    console.log(val == vals[i]);
    i += 1;
  });
  console.log(i == 10);
}

t20();

function t21() {
  var set = new Set();
  set.add(-0);
  set.forEach(function (val, key, set) {
    // do not use assert.areEqual(-0, ...) because it compares -0 and +0 as equal
    console.log(+Infinity === 1 / key && key === 0);
  });
}

t21();

function t22() {
  var func3 = function () {
    ;
  };

  try {
    Array()(func3(...new Set([func3, func3])));
  } catch (e) {
    ;
  }
}

t22();

function t23() {
  var set = new Set();
  set.add(1);
  console.log(set.has(1));
  var value = 1.1;
  value -= 0.1; // value is now 1.0, a double, rather than an int

  console.log(set.has(value));
}

t22();
