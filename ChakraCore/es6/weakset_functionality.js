//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  // WeakSet is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakSetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //
  try {
    WeakSet.call(undefined);
  } catch (e) {
    ;
  }

  try {
    WeakSet.call(null);
  } catch (e) {
    ;
  }

  try {
    WeakSet.call(WeakSet.prototype);
  } catch (e) {
    ;
  }
  /*
  var weakset1 = WeakSet.call(undefined);
  console.log(weakset1 !== null && weakset1 !== undefined && weakset1 !== WeakSet.prototype);
  var weakset2 = WeakSet.call(WeakSet.prototype);
  console.log(weakset2 !== null && weakset2 !== undefined && weakset2 !== WeakSet.prototype);
  var o = { };
  Object.preventExtensions(o);
  try { WeakSet.call(null); } catch(e) {}
  try { WeakSet.call(o); } catch(e) {}
  */

}

t1();

function t2() {
  var weakset = new WeakSet();

  try {
    WeakSet.call(weakset);
  } catch (e) {
    ;
  } // WeakSet is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakSetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.

  /*
  var obj = {};
  WeakSet.call(obj);
  try { WeakSet.call(obj); } catch(e) {}
  function MyWeakSet() {
  WeakSet.call(this);
  }
  MyWeakSet.prototype = new WeakSet();
  MyWeakSet.prototype.constructor = MyWeakSet;
  var myweakset = new MyWeakSet();
  try { WeakSet.call(myweakset); } catch(e) {}
  try { MyWeakSet.call(myweakset); } catch(e) {}
  */

}

t2();

function t3() {
  var keys = [{}, {}, {}, {}];
  var ws = new WeakSet([keys[0], keys[1], keys[2]]);
  console.log(ws.has(keys[0]));
  console.log(ws.has(keys[1]));
  console.log(ws.has(keys[2]));
  var customIterable = {
    [Symbol.iterator]: function () {
      var i = 0;
      return {
        next: function () {
          return {
            done: i > 3,
            value: keys[i++]
          };
        }
      };
    }
  };
  ws = new WeakSet(customIterable);
  console.log(ws.has(keys[0]));
  console.log(ws.has(keys[1]));
  console.log(ws.has(keys[2]));
  console.log(ws.has(keys[3]));
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
    new WeakSet(123);
  } catch (e) {
    ;
  }

  try {
    new WeakSet({});
  } catch (e) {
    ;
  }

  try {
    new WeakSet(iterableNoIteratorMethod);
  } catch (e) {
    ;
  }

  try {
    new WeakSet(iterableBadIteratorMethod);
  } catch (e) {
    ;
  }

  try {
    new WeakSet(iterableNoIteratorNextMethod);
  } catch (e) {
    ;
  }

  try {
    new WeakSet(iterableBadIteratorNextMethod);
  } catch (e) {
    ;
  }

  try {
    new WeakSet(iterableNoIteratorResultObject);
  } catch (e) {
    ;
  }
}

t4();

function t5() {
  function MyWeakSetImposter() {
    ;
  }

  MyWeakSetImposter.prototype = new WeakSet();
  MyWeakSetImposter.prototype.constructor = MyWeakSetImposter;
  var o = new MyWeakSetImposter();

  try {
    o.add(o);
  } catch (e) {
    ;
  }

  try {
    o.delete(o);
  } catch (e) {
    ;
  }

  try {
    o.has(o);
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.add.call();
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.delete.call();
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.has.call();
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.add.call(null, o);
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.delete.call(null, o);
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.has.call(null, o);
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.add.call(undefined, o);
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.delete.call(undefined, o);
  } catch (e) {
    ;
  }

  try {
    WeakSet.prototype.has.call(undefined, o);
  } catch (e) {
    ;
  }

  var weakset = new WeakSet();

  try {
    weakset.add(null);
  } catch (e) {
    ;
  }

  try {
    weakset.add(undefined);
  } catch (e) {
    ;
  }

  try {
    weakset.add(true);
  } catch (e) {
    ;
  }

  try {
    weakset.add(10);
  } catch (e) {
    ;
  }

  try {
    weakset.add("hello");
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var weakset = new WeakSet();
  console.log(weakset.has(null));
  console.log(weakset.has(undefined));
  console.log(weakset.has(true));
  console.log(weakset.has(10));
  console.log(weakset.has("hello"));
  console.log(weakset.delete(null));
  console.log(weakset.delete(undefined));
  console.log(weakset.delete(true));
  console.log(weakset.delete(10));
  console.log(weakset.delete("hello"));
  var booleanObject = new Boolean(true);
  var numberObject = new Number(10);
  var stringObject = new String("hello");
  weakset.add(booleanObject);
  weakset.add(numberObject);
  weakset.add(stringObject);
  console.log(weakset.has(true));
  console.log(weakset.has(10));
  console.log(weakset.has("hello"));
  console.log(weakset.delete(true));
  console.log(weakset.delete(10));
  console.log(weakset.delete("hello"));
}

t6();

function t7() {
  var weakset = new WeakSet();
  var o = {};
  var p = {};
  var q = {};
  weakset.add(o);
  weakset.add(p);
  weakset.add(q);
  console.log(weakset.has(o));
  console.log(weakset.has(p));
  console.log(weakset.has(q));
  console.log(weakset.has(weakset));
  console.log(weakset.has({}));
  console.log(weakset.delete(p));
  console.log(weakset.has(o));
  console.log(weakset.has(p));
  console.log(weakset.has(q));
  console.log(weakset.delete(p));
  console.log(weakset.delete(o));
  console.log(weakset.delete(q));
  console.log(weakset.has(o));
  console.log(weakset.has(p));
  console.log(weakset.has(q));
}

t7();

function t8() {
  var weakset = new WeakSet();

  try {
    weakset.add();
  } catch (e) {
    ;
  }

  console.log(weakset.has());
  console.log(weakset.delete());
}

t8();

function t9() {
  var weakset = new WeakSet();
  var o = {};
  var p = {};
  var q = {};
  console.log(weakset.has(o, p, q));
  console.log(weakset.delete(o, p, q));
  weakset.add(o, p, q);
  console.log(weakset.has(o));
  console.log(weakset.has(p));
  console.log(weakset.has(q));
  console.log(weakset.has(o, p, q));
  console.log(weakset.has(o, q, p));
  console.log(weakset.has(p, o));
  console.log(weakset.delete(p, o, q));
  console.log(weakset.delete(q, o));
  console.log(weakset.delete(o, p, q));
}

t9();

function t10() {
  var weakset = new WeakSet();
  var o = {};
  var p = {};
  weakset.add(o);
  console.log(weakset.delete(p));
  console.log(weakset.delete(o));
  console.log(weakset.delete(o));
}

t10();

function t11() {
  var weakset = new WeakSet();
  var o = {};
  var p = {};
  weakset.add(o);
  weakset.add(o);
  weakset.add(p);
  weakset.delete(o);
  weakset.add(p);
  weakset.add(o);
  weakset.add(o);
  weakset.delete(o);
  weakset.delete(p);
  weakset.add(o);
  console.log(weakset.has(o));
  weakset.add(o);
  console.log(weakset.has(o));
  weakset.add(p);
  console.log(weakset.has(o));
  console.log(weakset.has(p));
  weakset.delete(o);
  console.log(weakset.has(o));
  console.log(weakset.has(p));
  weakset.add(p);
  console.log(weakset.has(p));
}

t11();

function t12() {
  var weakset = new WeakSet();
  var o = {};
  console.log(weakset, weakset.add(o));
  console.log(weakset, weakset.add(o));
}

t12();

function t13() {
  var ws1 = new WeakSet();
  var ws2 = new WeakSet();
  var ws3 = new WeakSet();
  var o = {};
  var p = {};
  var q = {};
  ws1.add(o);
  ws1.add(p);
  ws2.add(q);
  console.log(ws1.has(o));
  console.log(ws2.has(o));
  console.log(ws3.has(o));
  console.log(ws1.has(p));
  console.log(ws2.has(q));
  console.log(ws1.has(q));
  console.log(ws2.has(p));
  console.log(ws3.has(p));
  console.log(ws3.has(q));
  ws3.add(p);
  ws3.add(q);
  console.log(ws3.has(p));
  console.log(ws3.has(q));
  console.log(ws1.has(p));
  console.log(ws2.has(p));
  console.log(ws1.has(q));
  console.log(ws2.has(q));
  console.log(ws1.delete(p));
  console.log(ws1.has(p));
  console.log(ws3.has(p));
  ws3.delete(p);
  ws3.delete(q);
  console.log(ws3.has(p));
  console.log(ws3.has(q));
  console.log(ws1.has(o));
  console.log(ws2.has(q));
}

t13();

function t14() {
  var weakset = new WeakSet();
  var n = new Number(1);
  var b = new Boolean(2);
  var s = new String("Hi");
  /*
  Fast DOM and HostDispatch objects are tested in the mshtml test weakset_DOMkey.html
  WinRT objects are still an open issue; they are CustomExternalObjects so they work,
  but they are proxied and the proxies are not kept alive by the outside object, only
  by internal JS references.  Further, allowing objects to be linked to the lifetime
  of a WinJS object can cause cycles between JS GC objects and WinRT COM ref counted
  objects, which are not deducible by the GC.  Therefore using WinRT objects with
  WeakSet is prone to subtle easy to make memory leak bugs.
  var fd = new FastDOM();
  var hd = new HostDispatch();
  var wrt = new WinRT();
  */

  var ab = new ArrayBuffer(32);
  weakset.add(n);
  weakset.add(b);
  weakset.add(s);
  weakset.add(ab);
  console.log(weakset.has(n));
  console.log(weakset.has(b));
  console.log(weakset.has(s));
  console.log(weakset.has(ab));
  console.log(weakset.delete(n));
  console.log(weakset.delete(b));
  console.log(weakset.delete(s));
  console.log(weakset.delete(ab));
  console.log(weakset.has(n));
  console.log(weakset.has(b));
  console.log(weakset.has(s));
  console.log(weakset.has(ab));
}

t14();
