//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  // WeakMap is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakMapData]] property on it.
  //
  // For IE11 we simply throw if WeakMap() is called as a function instead of in a new expression
  try {
    WeakMap.call(undefined);
  } catch (e) {
    ;
  }

  try {
    WeakMap.call(null);
  } catch (e) {
    ;
  }

  try {
    WeakMap.call(WeakMap.prototype);
  } catch (e) {
    ;
  }
  /*
  var weakmap1 = WeakMap.call(undefined);
  console.log(weakmap1 !== null && weakmap1 !== undefined && weakmap1 !== WeakMap.prototype);
  var weakmap2 = WeakMap.call(WeakMap.prototype);
  console.log(weakmap2 !== null && weakmap2 !== undefined && weakmap2 !== WeakMap.prototype);
  var o = { };
  Object.preventExtensions(o);
  try { WeakMap.call(null); } catch(e) {}
  try { WeakMap.call(o); } catch(e) {}
  */

}

t1();

function t2() {
  var weakmap = new WeakMap();

  try {
    WeakMap.call(weakmap);
  } catch (e) {
    ;
  } // WeakMap is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakMapData]] property on it.

  /*
  var obj = {};
  WeakMap.call(obj);
  try { WeakMap.call(obj); } catch(e) {}
  function MyWeakMap() {
  WeakMap.call(this);
  }
  MyWeakMap.prototype = new WeakMap();
  MyWeakMap.prototype.constructor = MyWeakMap;
  var myweakmap = new MyWeakMap();
  try { WeakMap.call(myweakmap); } catch(e) {}
  try { MyWeakMap.call(myweakmap); } catch(e) {}
  */

}

t2();

function t3() {
  var keys = [{}, {}, {}, {}];
  var wm = new WeakMap([[keys[0], 1], [keys[1], 2], [keys[2], 3]]);
  console.log(1, wm.get(keys[0]));
  console.log(2, wm.get(keys[1]));
  console.log(3, wm.get(keys[2]));
  var customIterable = {
    [Symbol.iterator]: function () {
      var i = 0;
      return {
        next: function () {
          return {
            done: i > 3,
            value: [keys[i], ++i * 2]
          };
        }
      };
    }
  };
  wm = new WeakMap(customIterable);
  console.log(2, wm.get(keys[0]));
  console.log(4, wm.get(keys[1]));
  console.log(6, wm.get(keys[2]));
  console.log(8, wm.get(keys[3]));
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
    new WeakMap(123);
  } catch (e) {
    ;
  }

  try {
    new WeakMap({});
  } catch (e) {
    ;
  }

  try {
    new WeakMap(iterableNoIteratorMethod);
  } catch (e) {
    ;
  }

  try {
    new WeakMap(iterableBadIteratorMethod);
  } catch (e) {
    ;
  }

  try {
    new WeakMap(iterableNoIteratorNextMethod);
  } catch (e) {
    ;
  }

  try {
    new WeakMap(iterableBadIteratorNextMethod);
  } catch (e) {
    ;
  }

  try {
    new WeakMap(iterableNoIteratorResultObject);
  } catch (e) {
    ;
  }
}

t4();

function t5() {
  function MyWeakMapImposter() {
    ;
  }

  MyWeakMapImposter.prototype = new WeakMap();
  MyWeakMapImposter.prototype.constructor = MyWeakMapImposter;
  var o = new MyWeakMapImposter();

  try {
    o.delete(o);
  } catch (e) {
    ;
  }

  try {
    o.get(o);
  } catch (e) {
    ;
  }

  try {
    o.has(o);
  } catch (e) {
    ;
  }

  try {
    o.set(o, o);
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.delete.call();
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.get.call();
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.has.call();
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.set.call();
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.delete.call(null, o);
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.get.call(null, o);
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.has.call(null, o);
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.set.call(null, o, o);
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.delete.call(undefined, o);
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.get.call(undefined, o);
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.has.call(undefined, o);
  } catch (e) {
    ;
  }

  try {
    WeakMap.prototype.set.call(undefined, o, o);
  } catch (e) {
    ;
  }

  var weakmap = new WeakMap();

  try {
    weakmap.set(null, o);
  } catch (e) {
    ;
  }

  try {
    weakmap.set(undefined, o);
  } catch (e) {
    ;
  }

  try {
    weakmap.set(true, o);
  } catch (e) {
    ;
  }

  try {
    weakmap.set(10, o);
  } catch (e) {
    ;
  }

  try {
    weakmap.set("hello", o);
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var weakmap = new WeakMap();
  console.log(weakmap.get(null) === undefined);
  console.log(weakmap.get(undefined) === undefined);
  console.log(weakmap.get(true) === undefined);
  console.log(weakmap.get(10) === undefined);
  console.log(weakmap.get("hello") === undefined);
  console.log(weakmap.has(null));
  console.log(weakmap.has(undefined));
  console.log(weakmap.has(true));
  console.log(weakmap.has(10));
  console.log(weakmap.has("hello"));
  console.log(weakmap.delete(null));
  console.log(weakmap.delete(undefined));
  console.log(weakmap.delete(true));
  console.log(weakmap.delete(10));
  console.log(weakmap.delete("hello"));
  var booleanObject = new Boolean(true);
  var numberObject = new Number(10);
  var stringObject = new String("hello");
  weakmap.set(booleanObject, null);
  weakmap.set(numberObject, null);
  weakmap.set(stringObject, null);
  console.log(weakmap.get(true) === undefined);
  console.log(weakmap.get(10) === undefined);
  console.log(weakmap.get("hello") === undefined);
  console.log(weakmap.has(true));
  console.log(weakmap.has(10));
  console.log(weakmap.has("hello"));
  console.log(weakmap.delete(true));
  console.log(weakmap.delete(10));
  console.log(weakmap.delete("hello"));
}

t6();

function t7() {
  var weakmap = new WeakMap();
  var o = {};
  var p = {};
  var q = {};
  weakmap.set(o, 10);
  weakmap.set(p, o);
  weakmap.set(q, q);
  console.log(weakmap.has(o));
  console.log(weakmap.has(p));
  console.log(weakmap.has(q));
  console.log(weakmap.has(weakmap));
  console.log(weakmap.has({}));
  console.log(weakmap.get(o) === 10);
  console.log(weakmap.get(p) === o);
  console.log(weakmap.get(q) === q);
  console.log(weakmap.get(weakmap) === undefined);
  console.log(weakmap.get({}) === undefined);
  console.log(weakmap.delete(p));
  console.log(weakmap.has(o));
  console.log(weakmap.has(p));
  console.log(weakmap.has(q));
  console.log(weakmap.delete(p));
  console.log(weakmap.delete(o));
  console.log(weakmap.delete(q));
  console.log(weakmap.has(o));
  console.log(weakmap.has(p));
  console.log(weakmap.has(q));
}

t7();

function t8() {
  var weakmap = new WeakMap();
  console.log(weakmap.has());
  console.log(weakmap.get() === undefined);
  console.log(weakmap.delete());

  try {
    weakmap.set();
  } catch (e) {
    ;
  }
}

t8();

function t9() {
  var weakmap = new WeakMap();
  var o = {};
  var p = {};
  var q = {};
  console.log(weakmap.has(o, p, q));
  console.log(weakmap.get(o, p, q) === undefined);
  console.log(weakmap.delete(o, p, q));
  weakmap.set(o, p, q);
  console.log(weakmap.has(o));
  console.log(weakmap.has(p));
  console.log(weakmap.has(q));
  console.log(weakmap.has(o, p, q));
  console.log(weakmap.has(o, q, p));
  console.log(weakmap.has(p, o));
  console.log(weakmap.get(o) === p);
  console.log(weakmap.get(p) === undefined);
  console.log(weakmap.get(q) === undefined);
  console.log(weakmap.get(o, p, q) === p);
  console.log(weakmap.get(o, q, p) === p);
  console.log(weakmap.get(p, o) === undefined);
  console.log(weakmap.delete(p, o, q));
  console.log(weakmap.delete(q, o));
  console.log(weakmap.delete(o, p, q));
}

t9();

function t10() {
  var weakmap = new WeakMap();
  var o = {};
  var p = {};
  weakmap.set(o, p);
  console.log(weakmap.delete(p));
  console.log(weakmap.delete(o));
  console.log(weakmap.delete(o));
}

t10();

function t11() {
  var weakmap = new WeakMap();
  var o = {};
  var p = {};
  weakmap.set(o);
  weakmap.set(o);
  weakmap.set(p);
  weakmap.delete(o);
  weakmap.set(p);
  weakmap.set(o);
  weakmap.set(o);
  weakmap.delete(o);
  weakmap.delete(p);
  weakmap.set(o, 3);
  console.log(weakmap.get(o) === 3);
  weakmap.set(o, 4);
  console.log(weakmap.get(o) === 4);
  weakmap.set(p, 5);
  console.log(weakmap.get(o) === 4);
  console.log(weakmap.get(p) === 5);
  weakmap.delete(o);
  console.log(weakmap.get(o) === undefined);
  console.log(weakmap.get(p) === 5);
  weakmap.set(p, 6);
  console.log(weakmap.get(p) === 6);
}

t11();

function t12() {
  var weakmap = new WeakMap();
  var o = {};
  console.log(weakmap, weakmap.set(o, o));
  console.log(weakmap, weakmap.set(o, o));
}

t12();

function t13() {
  var wm1 = new WeakMap();
  var wm2 = new WeakMap();
  var wm3 = new WeakMap();
  var o = {};
  var p = {};
  var q = {};
  wm1.set(o, o);
  wm1.set(p, q);
  wm2.set(q, o);
  console.log(wm1.has(o));
  console.log(wm2.has(o));
  console.log(wm3.has(o));
  console.log(wm1.get(o) === o);
  console.log(wm2.get(o) === undefined);
  console.log(wm3.get(o) === undefined);
  console.log(wm1.has(p));
  console.log(wm2.has(q));
  console.log(wm1.has(q));
  console.log(wm2.has(p));
  console.log(wm3.has(p));
  console.log(wm3.has(q));
  console.log(wm1.get(p) === q);
  console.log(wm2.get(q) === o);
  console.log(wm1.get(q) === undefined);
  console.log(wm2.get(p) === undefined);
  console.log(wm3.get(p) === undefined);
  console.log(wm3.get(q) === undefined);
  wm3.set(p, o);
  wm3.set(q, p);
  console.log(wm3.has(p));
  console.log(wm3.has(q));
  console.log(wm1.has(p));
  console.log(wm2.has(p));
  console.log(wm1.has(q));
  console.log(wm2.has(q));
  console.log(wm1.delete(p));
  console.log(wm1.has(p));
  console.log(wm3.has(p));
  wm3.delete(p);
  wm3.delete(q);
  console.log(wm3.has(p));
  console.log(wm3.has(q));
  console.log(wm1.has(o));
  console.log(wm2.has(q));
}

t13();

function t14() {
  var weakmap = new WeakMap();
  var n = new Number(1);
  var b = new Boolean(2);
  var s = new String("Hi");
  /*
  Fast DOM and HostDispatch objects are tested in the mshtml test weakmap_DOMkey.html
  WinRT objects are still an open issue; they are CustomExternalObjects so they work,
  but they are proxied and the proxies are not kept alive by the outside object, only
  by internal JS references.  Further, allowing objects to be linked to the lifetime
  of a WinJS object can cause cycles between JS GC objects and WinRT COM ref counted
  objects, which are not deducible by the GC.  Therefore using WinRT objects with
  WeakMap is prone to subtle easy to make memory leak bugs.
  var fd = new FastDOM();
  var hd = new HostDispatch();
  var wrt = new WinRT();
  */

  var ab = new ArrayBuffer(32);
  weakmap.set(n, 1);
  weakmap.set(b, 2);
  weakmap.set(s, 3);
  weakmap.set(ab, 4);
  console.log(weakmap.has(n));
  console.log(weakmap.has(b));
  console.log(weakmap.has(s));
  console.log(weakmap.has(ab));
  console.log(weakmap.get(n) === 1);
  console.log(weakmap.get(b) === 2);
  console.log(weakmap.get(s) === 3);
  console.log(weakmap.get(ab) === 4);
  console.log(weakmap.delete(n));
  console.log(weakmap.delete(b));
  console.log(weakmap.delete(s));
  console.log(weakmap.delete(ab));
  console.log(weakmap.has(n));
  console.log(weakmap.has(b));
  console.log(weakmap.has(s));
  console.log(weakmap.has(ab));
}

t14();

function t15() {
  var wm = new WeakMap();
  var sealedObj = Object.seal({});
  var frozenObj = Object.freeze({});
  wm.set(sealedObj, 1248);
  wm.set(frozenObj, 3927);
  console.log(wm.has(sealedObj));
  console.log(wm.has(frozenObj));
  console.log(1248, wm.get(sealedObj));
  console.log(3927, wm.get(frozenObj));
  var wm2 = new WeakMap();
  console.log(wm2.has(sealedObj));
  console.log(wm2.has(frozenObj));
  wm2.set(sealedObj, 42);
  wm2.set(frozenObj, 68);
  console.log(wm2.has(sealedObj));
  console.log(wm2.has(frozenObj));
  console.log(wm.has(sealedObj));
  console.log(wm.has(frozenObj));
  wm.delete(sealedObj);
  wm2.delete(frozenObj);
  console.log(wm2.has(sealedObj));
  console.log(wm2.has(frozenObj));
  console.log(wm.has(sealedObj));
  console.log(wm.has(frozenObj));
}

t15();
