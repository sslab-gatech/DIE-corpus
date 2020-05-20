//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(WeakSet !== undefined);
  var ws1 = new WeakSet(); // WeakSet is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakSetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //var ws2 = WeakSet();

  console.log(ws1 instanceof WeakSet); //assert.isTrue(ws2 instanceof WeakSet, "'WeakSet()' should also create a WeakSet object");
  //assert.isTrue(ws1 !== ws2, "Should be two different WeakSet objects");

  console.log(0, WeakSet.length);
}

t1();

function t2() {
  console.log(WeakSet.prototype.constructor === WeakSet);
  console.log(WeakSet.prototype.hasOwnProperty('add'));
  console.log(WeakSet.prototype.hasOwnProperty('delete'));
  console.log(WeakSet.prototype.hasOwnProperty('has'));
  console.log(WeakSet.prototype.add.length === 1);
  console.log(WeakSet.prototype.delete.length === 1);
  console.log(WeakSet.prototype.has.length === 1);
}

t2();

function t3() {
  var ws1 = new WeakSet(); // WeakSet is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakSetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //var ws2 = WeakSet();

  console.log(Object.getPrototypeOf(ws1) === WeakSet.prototype); //assert.isTrue(Object.getPrototypeOf(ws2) === WeakSet.prototype, "'WeakSet()' should set the prototype of the returned object to WeakSet.prototype");
}

t3();

function t4() {
  var ws = new WeakSet();
  console.log("[object WeakSet]", '' + ws);
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

  var ws = new WeakSet();
  console.log(countEnumerableProperties(WeakSet.prototype) == 0);
  console.log(countEnumerableProperties(ws) == 0);
  ws.foo = 10;
  ws.bar = 'hello';
  console.log(countEnumerableProperties(ws) == 2);
  console.log(ws.foo === 10);
  console.log(ws.bar === 'hello');
  delete ws.foo;
  console.log(countEnumerableProperties(ws) == 1);
  console.log(ws.foo === undefined);
}

t5();

function t6() {
  // WeakSet is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[WeakSetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //
  // For IE11 we simply throw if WeakSet() is called as a function instead of in a new expression
  try {
    WeakSet.call();
  } catch (e) {
    ;
  }

  try {
    WeakSet.call({});
  } catch (e) {
    ;
  }

  try {
    WeakSet.call(123);
  } catch (e) {
    ;
  }

  try {
    WeakSet.call("hello");
  } catch (e) {
    ;
  }

  function MyWeakSet() {
    WeakSet.call(this);
  }

  MyWeakSet.prototype = new WeakSet();
  MyWeakSet.prototype.constructor = MyWeakSet;

  try {
    var mymap = new MyWeakSet();
  } catch (e) {
    ;
  }
}

t6();
