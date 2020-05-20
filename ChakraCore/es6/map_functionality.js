//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function getNewMapWith12345() {
  var map = new Map();
  map.set(1, 6);
  map.set(2, 7);
  map.set(3, 8);
  map.set(4, 9);
  map.set(5, 10);
  return map;
}

var globalObject = this;

function t1() {
  // Map is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[MapData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //
  // For IE11 we simply throw if Map() is called as a function instead of in a new expression
  try {
    Map.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Map.call(null);
  } catch (e) {
    ;
  }

  try {
    Map.call(Map.prototype);
  } catch (e) {
    ;
  }
  /*
  var map1 = Map.call(undefined);
  console.log(map1 !== null && map1 !== undefined && map1 !== Map.prototype);
  var map2 = Map.call(Map.prototype);
  console.log(map2 !== null && map2 !== undefined && map2 !== Map.prototype);
  var o = { };
  Object.preventExtensions(o);
  try { Map.call(null); } catch(e) {}
  try { Map.call(o); } catch(e) {}
  */

}

t1();

function t2() {
  var map = new Map();

  try {
    Map.call(map);
  } catch (e) {
    ;
  } // Map is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[MapData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.

  /*
  var obj = {};
  Map.call(obj);
  try { Map.call(obj); } catch(e) {}
  function MyMap() {
  Map.call(this);
  }
  MyMap.prototype = new Map();
  MyMap.prototype.constructor = MyMap;
  var mymap = new MyMap();
  try { Map.call(mymap); } catch(e) {}
  try { MyMap.call(mymap); } catch(e) {}
  */

}

t2();

function t3() {
  var m = new Map([['a', 1], ['b', 2], ['c', 3]]);
  console.log(3, m.size);
  console.log(1, m.get('a'));
  console.log(2, m.get('b'));
  console.log(3, m.get('c'));
  var customIterable = {
    [Symbol.iterator]: function () {
      var i = 1;
      return {
        next: function () {
          return {
            done: i > 8,
            value: [i++, i++]
          };
        }
      };
    }
  };
  m = new Map(customIterable);
  console.log(4, m.size);
  console.log(2, m.get(1));
  console.log(4, m.get(3));
  console.log(6, m.get(5));
  console.log(8, m.get(7));
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
    new Map(123);
  } catch (e) {
    ;
  }

  try {
    new Map({});
  } catch (e) {
    ;
  }

  try {
    new Map(iterableNoIteratorMethod);
  } catch (e) {
    ;
  }

  try {
    new Map(iterableBadIteratorMethod);
  } catch (e) {
    ;
  }

  try {
    new Map(iterableNoIteratorNextMethod);
  } catch (e) {
    ;
  }

  try {
    new Map(iterableBadIteratorNextMethod);
  } catch (e) {
    ;
  }

  try {
    new Map(iterableNoIteratorResultObject);
  } catch (e) {
    ;
  }
}

t4();

function t5() {
  function MyMapImposter() {
    ;
  }

  MyMapImposter.prototype = new Map();
  MyMapImposter.prototype.constructor = MyMapImposter;
  var o = new MyMapImposter();

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
    o.forEach(function (v, k, s) {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    o.get(1);
  } catch (e) {
    ;
  }

  try {
    o.has(1);
  } catch (e) {
    ;
  }

  try {
    o.set(1, 1);
  } catch (e) {
    ;
  }

  try {
    WScript.Echo(o.size);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.clear.call();
  } catch (e) {
    ;
  }

  try {
    Map.prototype.delete.call();
  } catch (e) {
    ;
  }

  try {
    Map.prototype.forEach.call();
  } catch (e) {
    ;
  }

  try {
    Map.prototype.get.call();
  } catch (e) {
    ;
  }

  try {
    Map.prototype.has.call();
  } catch (e) {
    ;
  }

  try {
    Map.prototype.set.call();
  } catch (e) {
    ;
  }

  try {
    Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call();
  } catch (e) {
    ;
  }

  try {
    Map.prototype.clear.call(null);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.delete.call(null, 1);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.forEach.call(null, function (v, k, s) {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    Map.prototype.get.call(null, 1);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.has.call(null, 1);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.set.call(null, 1, 1);
  } catch (e) {
    ;
  }

  try {
    Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call(null);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.clear.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.delete.call(undefined, 1);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.forEach.call(undefined, function (v, k, s) {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    Map.prototype.get.call(undefined, 1);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.has.call(undefined, 1);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.set.call(undefined, 1, 1);
  } catch (e) {
    ;
  }

  try {
    Object.getOwnPropertyDescriptor(Map.prototype, "size").get.call(undefined);
  } catch (e) {
    ;
  }

  var map = new Map();

  try {
    map.forEach(null);
  } catch (e) {
    ;
  }

  try {
    map.forEach(undefined);
  } catch (e) {
    ;
  }

  try {
    map.forEach(true);
  } catch (e) {
    ;
  }

  try {
    map.forEach(10);
  } catch (e) {
    ;
  }

  try {
    map.forEach("hello");
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var map = new Map();
  console.log(map.size === 0);
  map.set(1, null);
  map.set(2, null);
  map.set("Hello", null);
  var o = {};
  map.set(o, null);
  console.log(map.has(1));
  console.log(map.has(2));
  console.log(map.has("Hello"));
  console.log(map.has(o));
  console.log(map.get(1) === null);
  console.log(map.get(2) === null);
  console.log(map.get("Hello") === null);
  console.log(map.get(o) === null);
  console.log(map.size === 4);
  console.log(map.has(0));
  console.log(map.has("goodbye"));
  console.log(map.has(map));
  console.log(map.get(0) === undefined);
  console.log(map.get("goodbye") === undefined);
  console.log(map.get(map) === undefined);
  map.clear();
  console.log(map.size === 0);
  console.log(map.has(1));
  console.log(map.has(2));
  console.log(map.has("Hello"));
  console.log(map.has(o));
  map.set(1, null);
  map.set(2, null);
  map.set("Hello", null);
  map.set(o, null);
  console.log(map.has(1));
  console.log(map.has(2));
  console.log(map.has("Hello"));
  console.log(map.has(o));
  console.log(map.size === 4);
  map.delete(2);
  console.log(map.has(1));
  console.log(map.has(2));
  console.log(map.has("Hello"));
  console.log(map.has(o));
  console.log(map.size === 3);
  map.delete(o);
  map.delete("Hello");
  console.log(map.has(1));
  console.log(map.has(2));
  console.log(map.has("Hello"));
  console.log(map.has(o));
  console.log(map.size === 1);
  map.delete(1);
  console.log(map.has(1));
  console.log(map.size === 0);
  var p = {};
  map.set(1, 10);
  map.set(2, 20);
  map.set("Hello", "World");
  map.set(o, p);
  console.log(map.get(1) === 10);
  console.log(map.get(2) === 20);
  console.log(map.get("Hello") === "World");
  console.log(map.get(o) === p);
  map.set(1, p);
  map.set(2, "World");
  map.set("Hello", 10);
  map.set(o, 20);
  console.log(map.get(1) === p);
  console.log(map.get(2) === "World");
  console.log(map.get("Hello") === 10);
  console.log(map.get(o) === 20);
}

t6();

function t7() {
  var map = new Map();
  console.log(map.has());
  console.log(map.get() === undefined);
  console.log(map.delete());
  map.set();
  console.log(map.has());
  console.log(map.get() === undefined);
  console.log(map.delete());
  console.log(map.has());
  map.set(undefined);
  console.log(map.get() === undefined);
  map.delete(); // and just make sure that setting a value for undefined does in fact return that value and not undefined

  map.set(undefined, 10);
  console.log(map.get() === 10);
}

t7();

function t8() {
  var map = new Map();
  console.log(map.has(1, 2, 3));
  console.log(map.get(1, 2, 3) === undefined);
  console.log(map.delete(1, 2, 3)); // 3 and 4 should be ignored and not added to the map

  map.set(1, 2, 3, 4);
  console.log(map.has(1));
  console.log(map.has(2));
  console.log(map.has(3));
  console.log(map.has(1, 2, 3));
  console.log(map.has(2, 1, 3));
  console.log(map.get(1) === 2);
  console.log(map.get(2) === undefined);
  console.log(map.get(3) === undefined);
  console.log(map.get(1, 3, 4) === 2);
  console.log(map.get(2, 1, 3) === undefined);
  console.log(map.delete(2, 1, 3));
  console.log(map.delete(3, 1));
  console.log(map.delete(1, 2, 3));
}

t8();

function t9() {
  var map = new Map();
  map.set(1);
  console.log(map.delete(2));
  console.log(map.delete(1));
  console.log(map.delete(1));
}

t9();

function t10() {
  var map = new Map();
  map.set(1);
  map.set(1);
  map.set(2);
  map.delete(1);
  map.set(2);
  map.set(1);
  map.set(1);
  map.clear();
  map.set(1, 3);
  console.log(map.get(1) === 3);
  map.set(1, 4);
  console.log(map.get(1) === 4);
  map.set(2, 5);
  console.log(map.get(1) === 4);
  console.log(map.get(2) === 5);
  map.delete(1);
  console.log(map.get(1) === undefined);
  console.log(map.get(2) === 5);
  map.set(2, 6);
  console.log(map.get(2) === 6);
}

t10();

function t11() {
  var map = new Map();
  console.log(map, map.set(1, 2));
  console.log(map, map.set(1, 2));
  console.log(undefined, map.clear());
}

t11();

function t12() {
  var map = new Map();
  map.set(3.14159);
  map.set("hello");
  map.set(8589934592);
  console.log(map.has(3.14159));
  console.log(map.has(3.0 + 0.14159));
  console.log(map.has("hello"));
  console.log(map.has("hel" + "lo"));
  console.log(map.has(8589934592));
  console.log(map.has(65536 + 8589869056));
  map.set(-0, 5);
  console.log(map.has(-0));
  console.log(map.has(+0));
  console.log(5, map.get(-0));
  console.log(5, map.get(+0));
  map.set(0, 10);
  console.log(map.has(-0));
  console.log(map.has(+0));
  console.log(10, map.get(-0));
  console.log(10, map.get(+0));
  map.delete(-0);
  console.log(map.has(-0));
  console.log(map.has(+0));
  map.set(+0, 5);
  console.log(map.has(-0));
  console.log(map.has(+0));
  console.log(5, map.get(-0));
  console.log(5, map.get(+0));
  map.set(-0, 10);
  console.log(map.has(-0));
  console.log(map.has(+0));
  console.log(10, map.get(-0));
  console.log(10, map.get(+0));
  map.delete(0);
  console.log(map.has(-0));
  console.log(map.has(+0));
  map.set(Number.NEGATIVE_INFINITY);
  console.log(map.has(Number.NEGATIVE_INFINITY));
  console.log(map.has(Number.POSITIVE_INFINITY));
  map.set(Infinity);
  console.log(map.has(Number.NEGATIVE_INFINITY));
  console.log(map.has(Number.POSITIVE_INFINITY));
  map.delete(Number.NEGATIVE_INFINITY);
  console.log(map.has(Number.NEGATIVE_INFINITY));
  console.log(map.has(Number.POSITIVE_INFINITY));
  console.log(map.has(NaN));
  map.set(NaN);
  console.log(map.has(NaN));
  console.log(map.has(parseInt("blah")));
  console.log(map.has(Math.sqrt(-1)));
  console.log(map.has(0 * Infinity));
}

t12();

function t13() {
  var map = new Map();
  map.set(1);
  map.forEach(function (val, key, map) {
    console.log(this === globalObject);
  });
  var o = {};
  map.forEach(function (val, key, map) {
    console.log(this === o);
  }, o);
  map.forEach(function (val, key, map) {
    console.log(this.valueOf() === 10);
  }, 10);
}

t13();

function t14() {
  var i = 0;
  var map = getNewMapWith12345();
  var didExecute = false;
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);
    console.log(val == i + 5);
    didExecute = true;
  });
  console.log(didExecute); // a second forEach should start at the beginning again

  i = 0;
  didExecute = false;
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);
    console.log(val == i + 5);
    didExecute = true;
  });
  console.log(didExecute);
  map.clear();
  map.forEach(function (val, key, map) {
    assert.fail("Shouldn't execute; map should be empty");
  });
  map = new Map();
  map.forEach(function (val, key, map) {
    assert.fail("Shouldn't execute; map should be empty");
  });
}

t14();

function t15() {
  var i = 0;
  var map = getNewMapWith12345();
  var didExecute = false;
  map.forEach(function (val, key, map) {
    map.delete(key);
    i += 1;
    console.log(key == i);
    console.log(val == i + 5);
    didExecute = true;
  });
  console.log(didExecute);
  map.forEach(function (val, key, map) {
    assert.fail("Shouldn't execute; map should be empty");
  });
  i = 0;
  map = getNewMapWith12345();
  didExecute = false;
  map.forEach(function (val, key, map) {
    if (key >= 3) {
      map.delete(key - 2);
    }

    i += 1;
    console.log(key == i);
    console.log(val == i + 5);
    didExecute = true;
  });
  console.log(didExecute);
  i = 3;
  didExecute = false;
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);
    console.log(val == i + 5);
    didExecute = true;
  });
  console.log(didExecute);
}

t15();

function t16() {
  var i = 1;
  var map = getNewMapWith12345();
  var didExecute = false;
  map.forEach(function (val, key, map) {
    console.log(key == i);
    console.log(val == i + 5);
    map.delete(key + 1);
    i += 2;
    didExecute = true;
  });
  console.log(didExecute);
  didExecute = false;
  map.forEach(function (val, key, map) {
    console.log(key == 1);
    console.log(val == 6);
    map.delete(3);
    map.delete(5);
    didExecute = true;
  });
  console.log(didExecute);
  didExecute = false;
  map.forEach(function (val, key, map) {
    console.log(key == 1);
    console.log(val == 6);
    map.delete(1);
    didExecute = true;
  });
  console.log(didExecute);
  map.forEach(function (val, key, map) {
    assert.fail("Shouldn't execute, map should be empty");
  });
  map = getNewMapWith12345();
  i = 0;
  didExecute = false;
  map.forEach(function (val, key, map) {
    map.delete(6 - key);
    i += 1;
    console.log(key == i && key <= 3);
    console.log(val == i + 5 && val <= 8);
    didExecute = true;
  });
  console.log(didExecute);
  i = 0;
  didExecute = false;
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i && key <= 2);
    console.log(val == i + 5 && val <= 7);
    didExecute = true;
  });
  console.log(didExecute);
}

t16();

function t17() {
  var i = 0;
  var map = new Map();
  map.set(1, 21);
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);
    console.log(val == i + 20);

    if (key < 20) {
      map.set(key + 1, val + 1);
    }
  });
  console.log(i == 20);
  i = 0;
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);

    if (key < 20) {
      map.set(key + 1, i);
    }
  });
  console.log(i == 20);
}

t17();

function t18() {
  var i = 0;
  var map = getNewMapWith12345();
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);

    if (key == 1) {
      map.clear();
    }
  });
  console.log(i == 1);
  i = 0;
  map = getNewMapWith12345();
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);

    if (key == 2) {
      map.clear();
    }
  });
  console.log(i == 2);
  i = 0;
  map = getNewMapWith12345();
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);

    if (key == 3) {
      map.clear();
    }
  });
  console.log(i == 3);
  i = 0;
  map = getNewMapWith12345();
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);

    if (key == 4) {
      map.clear();
    }
  });
  console.log(i == 4);
  i = 0;
  map = getNewMapWith12345();
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);

    if (key == 5) {
      map.clear();
    }
  });
  console.log(i == 5);
  console.log(map.size == 0);
}

t18();

function t19() {
  var i = 0;
  var didExecute = false;
  var map = getNewMapWith12345();
  map.forEach(function (val, key, map) {
    if (key == 3) {
      map.delete(2);
      map.delete(1);
      map.set(1);
      map.set(2);
    }

    i += 1;
    console.log(key == i);

    if (key == 5) {
      i = 0;
    }

    didExecute = true;
  });
  console.log(didExecute);
  i = 2;
  didExecute = false;
  map.forEach(function (val, key, map) {
    i += 1;
    console.log(key == i);

    if (key == 5) {
      i = 0;
    }

    didExecute = true;
  });
  console.log(didExecute);
}

t19();

function t20() {
  var map = new Map();
  map.set(1, 0);
  map.set(2, 1);
  var keys = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  var i = 0;
  map.forEach(function (val, key, map) {
    if (i < 9) {
      if (key == 1) {
        map.delete(1);
        map.set(2, i + 1);
      } else {
        if (key == 2) {
          map.delete(2);
          map.set(1, i + 1);
        }
      }
    }

    console.log(key == keys[i]);
    console.log(val == i);
    i += 1;
  });
  console.log(i == 10);
}

t20();

function t21() {
  var map = new Map();
  map.set(-0);
  map.forEach(function (val, key, map) {
    // do not use assert.areEqual(-0, ...) because it compares -0 and +0 as equal
    console.log(+Infinity === 1 / key && key === 0);
  });
}

t21();

function t22() {
  var map = new Map();
  map.set(1, "test");
  console.log("test", map.get(1));
  var key = 1.1;
  key -= 0.1; // key is now 1.0, a double, rather than an int

  console.log("test", map.get(key));
}

t22();
