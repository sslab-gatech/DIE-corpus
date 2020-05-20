//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(WeakMap !== undefined);
  var wm1 = new WeakMap(); // WeakMap is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakMapData]] property on it.
  // var wm2 = WeakMap();

  console.log(wm1 instanceof WeakMap); //assert.isTrue(wm2 instanceof WeakMap, "'WeakMap()' should also create a WeakMap object");
  //assert.isTrue(wm1 !== wm2, "Should be two different WeakMap objects");

  console.log(0, WeakMap.length);
}

t1();

function t2() {
  console.log(WeakMap.prototype.constructor === WeakMap);
  console.log(WeakMap.prototype.hasOwnProperty('delete'));
  console.log(WeakMap.prototype.hasOwnProperty('get'));
  console.log(WeakMap.prototype.hasOwnProperty('has'));
  console.log(WeakMap.prototype.hasOwnProperty('set'));
  console.log(WeakMap.prototype.delete.length === 1);
  console.log(WeakMap.prototype.get.length === 1);
  console.log(WeakMap.prototype.has.length === 1);
  console.log(WeakMap.prototype.set.length === 2);
}

t2();

function t3() {
  var wm1 = new WeakMap(); // WeakMap is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakMapData]] property on it.
  // var wm2 = WeakMap();

  console.log(Object.getPrototypeOf(wm1) === WeakMap.prototype); //assert.isTrue(Object.getPrototypeOf(wm2) === WeakMap.prototype, "'WeakMap()' should set the prototype of the returned object to WeakMap.prototype");
}

t3();

function t4() {
  var wm = new WeakMap();
  console.log("[object WeakMap]", '' + wm);
}

t4();

function t5() {
  function countEnumerableProperties(o) {
    var count = 0;

    for (p in o) {
      count += 1;
    }

    return count;
  }

  var wm = new WeakMap();
  console.log(countEnumerableProperties(WeakMap.prototype) == 0);
  console.log(countEnumerableProperties(wm) == 0);
  wm.foo = 10;
  wm.bar = 'hello';
  console.log(countEnumerableProperties(wm) == 2);
  console.log(wm.foo === 10);
  console.log(wm.bar === 'hello');
  delete wm.foo;
  console.log(countEnumerableProperties(wm) == 1);
  console.log(wm.foo === undefined);
}

t5();

function t6() {
  // WeakMap is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakMapData]] property on it.
  //
  // For IE11 we simply throw if WeakMap() is called as a function instead of in a new expression
  try {
    WeakMap.call();
  } catch (e) {
    ;
  }

  try {
    WeakMap.call({});
  } catch (e) {
    ;
  }

  try {
    WeakMap.call(123);
  } catch (e) {
    ;
  }

  try {
    WeakMap.call("hello");
  } catch (e) {
    ;
  }

  function MyWeakMap() {
    WeakMap.call(this);
  }

  MyWeakMap.prototype = new WeakMap();
  MyWeakMap.prototype.constructor = MyWeakMap;

  try {
    var mymap = new MyWeakMap();
  } catch (e) {
    ;
  }
}

t6();
