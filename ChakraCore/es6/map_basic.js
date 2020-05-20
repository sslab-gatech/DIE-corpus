//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(Map !== undefined);
  var map1 = new Map(); // Map is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[MapData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //var map2 = Map();

  console.log(map1 instanceof Map); //assert.isTrue(map2 instanceof Map, "'Map()' should also create a Map object");
  //assert.isTrue(map1 !== map2, "Should be two different Map objects");

  console.log(0, Map.length);
}

t1();

function t2() {
  console.log(Map.prototype.constructor === Map);
  console.log(Map.prototype.hasOwnProperty('clear'));
  console.log(Map.prototype.hasOwnProperty('delete'));
  console.log(Map.prototype.hasOwnProperty('forEach'));
  console.log(Map.prototype.hasOwnProperty('get'));
  console.log(Map.prototype.hasOwnProperty('has'));
  console.log(Map.prototype.hasOwnProperty('set'));
  console.log(Map.prototype.hasOwnProperty('size'));
  console.log(Map.prototype.clear.length === 0);
  console.log(Map.prototype.delete.length === 1);
  console.log(Map.prototype.forEach.length === 1);
  console.log(Map.prototype.get.length === 1);
  console.log(Map.prototype.has.length === 1);
  console.log(Map.prototype.set.length === 2);
  console.log(Object.getOwnPropertyDescriptor(Map.prototype, "size").get !== undefined);
  console.log(Object.getOwnPropertyDescriptor(Map.prototype, "size").set === undefined);
}

t2();

function t3() {
  var map1 = new Map(); // Map is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[MapData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //var map2 = Map();

  console.log(Object.getPrototypeOf(map1) === Map.prototype); //assert.isTrue(Object.getPrototypeOf(map2) === Map.prototype, "'Map()' should set the prototype of the returned object to Map.prototype");
}

t3();

function t4() {
  var map = new Map();
  console.log("[object Map]", '' + map);
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

  var map = new Map();
  console.log(countEnumerableProperties(Map.prototype) == 0);
  console.log(countEnumerableProperties(map) == 0);
  map.foo = 10;
  map.bar = 'hello';
  console.log(countEnumerableProperties(map) == 2);
  console.log(map.foo === 10);
  console.log(map.bar === 'hello');
  delete map.foo;
  console.log(countEnumerableProperties(map) == 1);
  console.log(map.foo === undefined);
}

t5();

function t6() {
  // Map is no longer allowed to be called as a function unless the object it is given
  // for its this argument already has the [[MapData]] property on it.
  // TODO: When we implement @@create support, update this test to reflect it.
  //
  // For IE11 we simply throw if Map() is called as a function instead of in a new expression
  try {
    Map.call();
  } catch (e) {
    ;
  }

  try {
    Map.call({});
  } catch (e) {
    ;
  }

  try {
    Map.call(123);
  } catch (e) {
    ;
  }

  try {
    Map.call("hello");
  } catch (e) {
    ;
  }

  function MyMap() {
    Map.call(this);
  }

  MyMap.prototype = new Map();
  MyMap.prototype.constructor = MyMap;

  try {
    var mymap = new MyMap();
  } catch (e) {
    ;
  }
}

t6();
