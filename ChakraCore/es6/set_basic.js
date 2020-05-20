//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Basic Set tests -- verifies the API shape
function t1() {
  console.log(Set !== undefined);
  var set1 = new Set(); // Set is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[SetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //var set2 = Set();

  console.log(set1 instanceof Set); //assert.isTrue(set2 instanceof Set, "'Set()' should also create a Set object");
  //assert.isTrue(set1 !== set2, "Should be two different Set objects");

  console.log(0, Set.length);
}

t1();

function t2() {
  console.log(Set.prototype.constructor === Set);
  console.log(Set.prototype.hasOwnProperty('add'));
  console.log(Set.prototype.hasOwnProperty('clear'));
  console.log(Set.prototype.hasOwnProperty('delete'));
  console.log(Set.prototype.hasOwnProperty('forEach'));
  console.log(Set.prototype.hasOwnProperty('has'));
  console.log(Set.prototype.hasOwnProperty('size'));
  console.log(Set.prototype.add.length === 1);
  console.log(Set.prototype.clear.length === 0);
  console.log(Set.prototype.delete.length === 1);
  console.log(Set.prototype.forEach.length === 1);
  console.log(Set.prototype.has.length === 1);
  console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size').get !== undefined);
  console.log(Object.getOwnPropertyDescriptor(Set.prototype, 'size').set === undefined);
}

t2();

function t3() {
  var set1 = new Set(); // Set is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[SetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //var set2 = Set();

  console.log(Object.getPrototypeOf(set1) === Set.prototype); //assert.isTrue(Object.getPrototypeOf(set2) === Set.prototype, "'Set()' should set the prototype of the returned object to Set.prototype");
}

t3();

function t4() {
  var set = new Set();
  console.log("[object Set]", '' + set);
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

  var set = new Set();
  console.log(countEnumerableProperties(Set.prototype) == 0);
  console.log(countEnumerableProperties(set) == 0);
  set.foo = 10;
  set.bar = 'hello';
  console.log(countEnumerableProperties(set) == 2);
  console.log(set.foo === 10);
  console.log(set.bar === 'hello');
  delete set.foo;
  console.log(countEnumerableProperties(set) == 1);
  console.log(set.foo === undefined);
}

t5();

function t6() {
  // Set is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[SetData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //
  // For IE11 we simply throw if Set() is called as a function instead of in a new expression
  try {
    Set.call();
  } catch (e) {
    ;
  }

  try {
    Set.call({});
  } catch (e) {
    ;
  }

  try {
    Set.call(123);
  } catch (e) {
    ;
  }

  try {
    Set.call("hello");
  } catch (e) {
    ;
  }

  function MySet() {
    Set.call(this);
  }

  MySet.prototype = new Set();
  MySet.prototype.constructor = MySet;

  try {
    var mymap = new MySet();
  } catch (e) {
    ;
  }
}

t6();
