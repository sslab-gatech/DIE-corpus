//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Iterators Built-In APIs tests -- verifies the shape and basic behavior of the built-in iterators (Array, String, Map, Set)
function getNewMapWith12345() {
  var map = new Map();
  map.set(1, 6);
  map.set(2, 7);
  map.set(3, 8);
  map.set(4, 9);
  map.set(5, 10);
  return map;
}

function getNewSetWith12345() {
  var set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);
  set.add(4);
  set.add(5);
  return set;
}

function t1() {
  var iteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  console.log(iteratorPrototype.hasOwnProperty(Symbol.iterator));
  console.log(0, iteratorPrototype[Symbol.iterator].length);
}

t1();

function t2() {
  var arrayIteratorPrototype = Object.getPrototypeOf([][Symbol.iterator]());
  var mapIteratorPrototype = Object.getPrototypeOf(new Map()[Symbol.iterator]());
  var setIteratorPrototype = Object.getPrototypeOf(new Set()[Symbol.iterator]());
  var stringIteratorPrototype = Object.getPrototypeOf(""[Symbol.iterator]()); // The only way to get the $IteratorPrototype% object is indirectly so here
  // we just assume array is correct and get it from an array iterator.

  var iteratorPrototype = Object.getPrototypeOf(arrayIteratorPrototype);
  console.log(iteratorPrototype, Object.getPrototypeOf(mapIteratorPrototype));
  console.log(iteratorPrototype, Object.getPrototypeOf(setIteratorPrototype));
  console.log(iteratorPrototype, Object.getPrototypeOf(stringIteratorPrototype));
}

t2();

function t3() {
  console.log(Array.prototype.hasOwnProperty('entries'));
  console.log(Array.prototype.hasOwnProperty('keys'));
  console.log(Array.prototype.hasOwnProperty('values'));
  console.log(Array.prototype.hasOwnProperty(Symbol.iterator));
  console.log(0, Array.prototype.entries.length);
  console.log(0, Array.prototype.keys.length);

  try {
    console.log(0, Array.prototype.values.length);
  } catch (e) {
    ;
  }

  console.log(Array.prototype.values === Array.prototype[Symbol.iterator]);
}

t3();

function t4() {
  console.log(Map.prototype.hasOwnProperty('entries'));
  console.log(Map.prototype.hasOwnProperty('keys'));
  console.log(Map.prototype.hasOwnProperty('values'));
  console.log(Map.prototype.hasOwnProperty(Symbol.iterator));
  console.log(0, Map.prototype.entries.length);
  console.log(0, Map.prototype.keys.length);
  console.log(0, Map.prototype.values.length);
  console.log(Map.prototype.entries === Map.prototype[Symbol.iterator]);
}

t4();

function t5() {
  console.log(Set.prototype.hasOwnProperty('entries'));
  console.log(Set.prototype.hasOwnProperty('keys'));
  console.log(Set.prototype.hasOwnProperty('values'));
  console.log(Set.prototype.hasOwnProperty(Symbol.iterator));
  console.log(0, Set.prototype.entries.length);
  console.log(0, Set.prototype.values.length);
  console.log(Set.prototype.values === Set.prototype.keys);
  console.log(Set.prototype.values === Set.prototype[Symbol.iterator]);
}

t5();

function t6() {
  console.log(String.prototype.hasOwnProperty(Symbol.iterator));
  console.log(String.prototype.hasOwnProperty('entries'));
  console.log(String.prototype.hasOwnProperty('keys'));
  console.log(String.prototype.hasOwnProperty('values'));
}

t6();

function t7() {
  try {
    Array.prototype.entries.call(null);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.entries.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.keys.call(null);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.keys.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.values.call(null);
  } catch (e) {
    ;
  }

  try {
    Array.prototype.values.call(undefined);
  } catch (e) {
    ;
  }
}

t7();

function t8() {
  try {
    Map.prototype.entries.call(null);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.entries.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.entries.call(123);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.entries.call("abc");
  } catch (e) {
    ;
  }

  try {
    Map.prototype.entries.call({});
  } catch (e) {
    ;
  }

  try {
    Map.prototype.entries.call(new Set());
  } catch (e) {
    ;
  }

  try {
    Map.prototype.keys.call(null);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.keys.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.keys.call(123);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.keys.call("abc");
  } catch (e) {
    ;
  }

  try {
    Map.prototype.keys.call({});
  } catch (e) {
    ;
  }

  try {
    Map.prototype.keys.call(new Set());
  } catch (e) {
    ;
  }

  try {
    Map.prototype.values.call(null);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.values.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.values.call(123);
  } catch (e) {
    ;
  }

  try {
    Map.prototype.values.call("abc");
  } catch (e) {
    ;
  }

  try {
    Map.prototype.values.call({});
  } catch (e) {
    ;
  }

  try {
    Map.prototype.values.call(new Set());
  } catch (e) {
    ;
  }
}

t8();

function t9() {
  try {
    Set.prototype.entries.call(null);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.entries.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.entries.call(123);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.entries.call("abc");
  } catch (e) {
    ;
  }

  try {
    Set.prototype.entries.call({});
  } catch (e) {
    ;
  }

  try {
    Set.prototype.entries.call(new Map());
  } catch (e) {
    ;
  }

  try {
    Set.prototype.values.call(null);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.values.call(undefined);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.values.call(123);
  } catch (e) {
    ;
  }

  try {
    Set.prototype.values.call("abc");
  } catch (e) {
    ;
  }

  try {
    Set.prototype.values.call({});
  } catch (e) {
    ;
  }

  try {
    Set.prototype.values.call(new Map());
  } catch (e) {
    ;
  }
}

t9();

function t10() {
  try {
    String.prototype[Symbol.iterator].call(null);
  } catch (e) {
    ;
  }

  try {
    String.prototype[Symbol.iterator].call(undefined);
  } catch (e) {
    ;
  }
}

t10();

function t11() {
  try {
    var aip = Object.getPrototypeOf([].values());
    console.log(aip.hasOwnProperty('next'));
    console.log(aip.hasOwnProperty(Symbol.iterator));
    console.log(aip.hasOwnProperty(Symbol.toStringTag));
    console.log(0, aip.next.length);
    console.log("Array Iterator", aip[Symbol.toStringTag]);
  } catch (e) {
    ;
  }

  try {
    aip.next.call(123);
  } catch (e) {
    ;
  }

  try {
    aip.next.call("o");
  } catch (e) {
    ;
  }

  try {
    aip.next.call({});
  } catch (e) {
    ;
  }
}

t11();

function t12() {
  var mip = Object.getPrototypeOf(new Map().values());
  console.log(mip.hasOwnProperty('next'));
  console.log(mip.hasOwnProperty(Symbol.iterator));
  console.log(mip.hasOwnProperty(Symbol.toStringTag));
  console.log(0, mip.next.length);
  console.log("Map Iterator", mip[Symbol.toStringTag]);

  try {
    mip.next.call(123);
  } catch (e) {
    ;
  }

  try {
    mip.next.call("o");
  } catch (e) {
    ;
  }

  try {
    mip.next.call({});
  } catch (e) {
    ;
  }
}

t12();

function t13() {
  var sip = Object.getPrototypeOf(new Set().values());
  console.log(sip.hasOwnProperty('next'));
  console.log(sip.hasOwnProperty(Symbol.iterator));
  console.log(sip.hasOwnProperty(Symbol.toStringTag));
  console.log(0, sip.next.length);
  console.log("Set Iterator", sip[Symbol.toStringTag]);

  try {
    sip.next.call(123);
  } catch (e) {
    ;
  }

  try {
    sip.next.call("o");
  } catch (e) {
    ;
  }

  try {
    sip.next.call({});
  } catch (e) {
    ;
  }
}

t13();

function t14() {
  var sip = Object.getPrototypeOf(""[Symbol.iterator]());
  console.log(sip.hasOwnProperty('next'));
  console.log(sip.hasOwnProperty(Symbol.iterator));
  console.log(sip.hasOwnProperty(Symbol.toStringTag));
  console.log(0, sip.next.length);
  console.log("String Iterator", sip[Symbol.toStringTag]);

  try {
    sip.next.call(123);
  } catch (e) {
    ;
  }

  try {
    sip.next.call("o");
  } catch (e) {
    ;
  }

  try {
    sip.next.call({});
  } catch (e) {
    ;
  }
}

t14();

function t15() {
  var array = ['a', 'b', 'c', 'd', 'e'];
  var iters = [array.entries(), array.entries(), array.keys(), array.keys(), array.values(), array.values()];

  for (var i = 0; i < iters.length; i++) {
    for (var j = i + 1; j < iters.length; j++) {
      console.log(iters[i] !== iters[j]);
    }
  }

  for (var i = 0; i < iters.length - 1; i++) {
    console.log(Object.getPrototypeOf(iters[i]) === Object.getPrototypeOf(iters[i + 1]));
  }
}

t15();

function t16() {
  var map = getNewMapWith12345();
  var iters = [map.entries(), map.entries(), map.keys(), map.keys(), map.values(), map.values()];

  for (var i = 0; i < iters.length; i++) {
    for (var j = i + 1; j < iters.length; j++) {
      console.log(iters[i] !== iters[j]);
    }
  }

  for (var i = 0; i < iters.length - 1; i++) {
    console.log(Object.getPrototypeOf(iters[i]) === Object.getPrototypeOf(iters[i + 1]));
  }
}

t16();

function t17() {
  var set = new Set();
  set.add('a');
  set.add('b');
  set.add('c');
  set.add('d');
  set.add('e');
  var iters = [set.entries(), set.entries(), set.values(), set.values()];

  for (var i = 0; i < iters.length; i++) {
    for (var j = i + 1; j < iters.length; j++) {
      console.log(iters[i] !== iters[j]);
    }
  }

  for (var i = 0; i < iters.length - 1; i++) {
    console.log(Object.getPrototypeOf(iters[i]) === Object.getPrototypeOf(iters[i + 1]));
  }
}

t17();

function t18() {
  var string = "abcde";
  var iters = [string[Symbol.iterator](), string[Symbol.iterator]()];

  for (var i = 0; i < iters.length; i++) {
    for (var j = i + 1; j < iters.length; j++) {
      console.log(iters[i] !== iters[j]);
    }
  }

  for (var i = 0; i < iters.length - 1; i++) {
    console.log(Object.getPrototypeOf(iters[i]) === Object.getPrototypeOf(iters[i + 1]));
  }
}

t18();

function t19() {
  var iter;
  var array = [];
  var arraylike = {
    length: 0
  };
  iter = array.entries();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = array.keys();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = array.values();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = Array.prototype.entries.call(arraylike);
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = Array.prototype.keys.call(arraylike);
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = Array.prototype.values.call(arraylike);
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t19();

function t20() {
  var iter;
  var map = new Map();
  iter = map.entries();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = map.keys();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = map.values();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  map.set('z', 'a');
  map.set('y', 'b');
  map.set('x', 'c');
  map.clear();
  iter = map.entries();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = map.keys();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = map.values();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t20();

function t21() {
  var iter;
  var set = new Set();
  iter = set.entries();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = set.values();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  set.add('a');
  set.add('b');
  set.add('c');
  set.clear();
  iter = set.entries();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  iter = set.values();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t21();

function tx() {
  var iter = ""[Symbol.iterator]();
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

tx();

function t22() {
  var array = ['a', 'b', 'c', 'd', 'e'];
  var iter = array.entries();
  console.log({
    done: false,
    value: [0, 'a']
  }, iter.next());
  console.log({
    done: false,
    value: [1, 'b']
  }, iter.next());
  console.log({
    done: false,
    value: [2, 'c']
  }, iter.next());
  console.log({
    done: false,
    value: [3, 'd']
  }, iter.next());
  console.log({
    done: false,
    value: [4, 'e']
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t22();

function t23() {
  var array = ['a', 'b', 'c', 'd', 'e'];
  var iter = array.keys();
  console.log({
    done: false,
    value: 0
  }, iter.next());
  console.log({
    done: false,
    value: 1
  }, iter.next());
  console.log({
    done: false,
    value: 2
  }, iter.next());
  console.log({
    done: false,
    value: 3
  }, iter.next());
  console.log({
    done: false,
    value: 4
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t23();

function t24() {
  var array = ['a', 'b', 'c', 'd', 'e'];
  var iter = array.values();
  console.log({
    done: false,
    value: 'a'
  }, iter.next());
  console.log({
    done: false,
    value: 'b'
  }, iter.next());
  console.log({
    done: false,
    value: 'c'
  }, iter.next());
  console.log({
    done: false,
    value: 'd'
  }, iter.next());
  console.log({
    done: false,
    value: 'e'
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t24();

function t25() {
  var map = getNewMapWith12345();
  var iter = map.entries();
  console.log({
    done: false,
    value: [1, 6]
  }, iter.next());
  console.log({
    done: false,
    value: [2, 7]
  }, iter.next());
  console.log({
    done: false,
    value: [3, 8]
  }, iter.next());
  console.log({
    done: false,
    value: [4, 9]
  }, iter.next());
  console.log({
    done: false,
    value: [5, 10]
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t25();

function t26() {
  var map = getNewMapWith12345();
  var iter = map.keys();
  console.log({
    done: false,
    value: 1
  }, iter.next());
  console.log({
    done: false,
    value: 2
  }, iter.next());
  console.log({
    done: false,
    value: 3
  }, iter.next());
  console.log({
    done: false,
    value: 4
  }, iter.next());
  console.log({
    done: false,
    value: 5
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t26();

function t27() {
  var map = getNewMapWith12345();
  var iter = map.values();
  console.log({
    done: false,
    value: 6
  }, iter.next());
  console.log({
    done: false,
    value: 7
  }, iter.next());
  console.log({
    done: false,
    value: 8
  }, iter.next());
  console.log({
    done: false,
    value: 9
  }, iter.next());
  console.log({
    done: false,
    value: 10
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t27();

function t28() {
  var set = getNewSetWith12345();
  var iter = set.entries();
  console.log({
    done: false,
    value: [1, 1]
  }, iter.next());
  console.log({
    done: false,
    value: [2, 2]
  }, iter.next());
  console.log({
    done: false,
    value: [3, 3]
  }, iter.next());
  console.log({
    done: false,
    value: [4, 4]
  }, iter.next());
  console.log({
    done: false,
    value: [5, 5]
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t28();

function t29() {
  var set = getNewSetWith12345();
  var iter = set.values();
  console.log({
    done: false,
    value: 1
  }, iter.next());
  console.log({
    done: false,
    value: 2
  }, iter.next());
  console.log({
    done: false,
    value: 3
  }, iter.next());
  console.log({
    done: false,
    value: 4
  }, iter.next());
  console.log({
    done: false,
    value: 5
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t29();

function t30() {
  var string = "abcde";
  var iter = string[Symbol.iterator]();
  console.log({
    done: false,
    value: 'a'
  }, iter.next());
  console.log({
    done: false,
    value: 'b'
  }, iter.next());
  console.log({
    done: false,
    value: 'c'
  }, iter.next());
  console.log({
    done: false,
    value: 'd'
  }, iter.next());
  console.log({
    done: false,
    value: 'e'
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next()); // a string with code points requiring surrogate pairs

  string = "ab\uD834\uDD1Ec\uD801\uDC27";
  var iter = string[Symbol.iterator]();
  console.log({
    done: false,
    value: 'a'
  }, iter.next());
  console.log({
    done: false,
    value: 'b'
  }, iter.next());
  console.log({
    done: false,
    value: '\u{1D11E}'
  }, iter.next());
  console.log({
    done: false,
    value: 'c'
  }, iter.next());
  console.log({
    done: false,
    value: '\uD801\uDC27'
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t30();

function t31() {
  var o = {
    length: 5,
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e'
  };
  var iter = Array.prototype.values.call(o);
  console.log({
    done: false,
    value: 'a'
  }, iter.next());
  console.log({
    done: false,
    value: 'b'
  }, iter.next());
  console.log({
    done: false,
    value: 'c'
  }, iter.next());
  console.log({
    done: false,
    value: 'd'
  }, iter.next());
  console.log({
    done: false,
    value: 'e'
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next()); // Setting the length lower should be reflected by the iterator

  o.length = 2;
  iter = Array.prototype.values.call(o);
  console.log({
    done: false,
    value: 'a'
  }, iter.next());
  console.log({
    done: false,
    value: 'b'
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next()); // Setting the length higher should also be reflected, giving undefined for the non-existent properties

  o.length = 7;
  var iter = Array.prototype.values.call(o);
  console.log({
    done: false,
    value: 'a'
  }, iter.next());
  console.log({
    done: false,
    value: 'b'
  }, iter.next());
  console.log({
    done: false,
    value: 'c'
  }, iter.next());
  console.log({
    done: false,
    value: 'd'
  }, iter.next());
  console.log({
    done: false,
    value: 'e'
  }, iter.next());
  console.log({
    done: false,
    value: undefined
  }, iter.next());
  console.log({
    done: false,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
}

t31();

function t32() {
  var o = {
    length: -1,
    0: 'a',
    1: 'b'
  };
  var iter = Array.prototype[Symbol.iterator].call(o);
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  o.length = Number.NaN;
  iter = Array.prototype[Symbol.iterator].call(o);
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  o.length = -0;
  iter = Array.prototype[Symbol.iterator].call(o);
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  o.length = Number.NEGATIVE_INFINITY;
  iter = Array.prototype[Symbol.iterator].call(o);
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  console.log({
    done: true,
    value: undefined
  }, iter.next());
  o.length = Number.POSITIVE_INFINITY;
  iter = Array.prototype[Symbol.iterator].call(o);
  console.log({
    done: false,
    value: 'a'
  }, iter.next());
  console.log({
    done: false,
    value: 'b'
  }, iter.next());
}

t32();

function t33() {
  var i = 0;
  var map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    map.delete(key);
    i += 1;
    console.log(key == i);
    console.log(val == i + 5);
  }

  for (var entry of map.entries()) {
    assert.fail("Shouldn't execute; map should be empty");
  }

  i = 0;
  map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];

    if (key >= 3) {
      map.delete(key - 2);
    }

    i += 1;
    console.log(key == i);
    console.log(val == i + 5);
  }

  i = 3;

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);
    console.log(val == i + 5);
  }
}

t33();

function t34() {
  var i = 1;
  var map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    console.log(key == i);
    console.log(val == i + 5);
    map.delete(key + 1);
    i += 2;
  }

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    console.log(key == 1);
    console.log(val == 6);
    map.delete(3);
    map.delete(5);
  }

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    console.log(key == 1);
    console.log(val == 6);
    map.delete(1);
  }

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
  }

  map = getNewMapWith12345();
  i = 0;

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    map.delete(6 - key);
    i += 1;
    console.log(key == i && key <= 3);
    console.log(val == i + 5 && val <= 8);
  }

  i = 0;

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i && key <= 2);
    console.log(val == i + 5 && val <= 7);
  }
}

t34();

function t35() {
  var i = 0;
  var map = new Map();
  map.set(1, 21);

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);
    console.log(val == i + 20);

    if (key < 20) {
      map.set(key + 1, val + 1);
    }
  }

  console.log(i == 20);
  i = 0;

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);

    if (key < 20) {
      map.set(key + 1, i);
    }
  }

  console.log(i == 20);
}

t35();

function t36() {
  var i = 0;
  var map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);

    if (key == 1) {
      map.clear();
    }
  }

  console.log(i == 1);
  i = 0;
  map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);

    if (key == 2) {
      map.clear();
    }
  }

  console.log(i == 2);
  i = 0;
  map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);

    if (key == 3) {
      map.clear();
    }
  }

  console.log(i == 3);
  i = 0;
  map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);

    if (key == 4) {
      map.clear();
    }
  }

  console.log(i == 4);
  i = 0;
  map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);

    if (key == 5) {
      map.clear();
    }
  }

  console.log(i == 5);
  console.log(map.size == 0);
}

t36();

function t37() {
  var i = 0;
  var map = getNewMapWith12345();

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];

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
  }

  i = 2;

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];
    i += 1;
    console.log(key == i);

    if (key == 5) {
      i = 0;
    }
  }
}

t37();

function t38() {
  var map = new Map();
  map.set(1, 0);
  map.set(2, 1);
  var keys = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  var i = 0;

  for (var entry of map.entries()) {
    var key = entry[0];
    var val = entry[1];

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
  }

  console.log(i == 10);
}

t38();

function ty() {
  var i = 0;
  var set = getNewSetWith12345();

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);
  } // a second forEach should start at the beginning again


  i = 0;

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);
  }

  set.clear();

  for (var val of set.values()) {
    ;
  }

  set = new Set();

  for (var val of set.values()) {
    ;
  }
}

ty();

function t39() {
  var i = 0;
  var set = getNewSetWith12345();

  for (var val of set.values()) {
    set.delete(val);
    i += 1;
    console.log(val == i);
  }

  for (var val of set.values()) {
    assert.fail("Shouldn't execute; set should be empty");
  }

  i = 0;
  set = getNewSetWith12345();

  for (var val of set.values()) {
    if (val >= 3) {
      set.delete(val - 2);
    }

    i += 1;
    console.log(val == i);
  }

  i = 3;

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);
  }
}

t39();

function t40() {
  var i = 1;
  var set = getNewSetWith12345();

  for (var val of set.values()) {
    console.log(val == i);
    set.delete(val + 1);
    i += 2;
  }

  for (var val of set.values()) {
    console.log(val == 1);
    set.delete(3);
    set.delete(5);
  }

  for (var val of set.values()) {
    console.log(val == 1);
    set.delete(1);
  }

  for (var val of set.values()) {
    ;
  }

  set = getNewSetWith12345();
  i = 0;

  for (var val of set.values()) {
    set.delete(6 - val);
    i += 1;
    console.log(val == i && val <= 3);
  }

  i = 0;

  for (var val of set.values()) {
    i += 1;
    console.log(val == i && val <= 2);
  }
}

t40();

function t41() {
  var i = 0;
  var set = new Set();
  set.add(1);

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);

    if (val < 20) {
      set.add(val + 1);
    }
  }

  console.log(i == 20);
  i = 0;

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);

    if (val < 20) {
      set.add(val + 1);
    }
  }

  console.log(i == 20);
}

t41();

function t42() {
  var i = 0;
  var set = getNewSetWith12345();

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);

    if (val == 1) {
      set.clear();
    }
  }

  console.log(i == 1);
  i = 0;
  set = getNewSetWith12345();

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);

    if (val == 2) {
      set.clear();
    }
  }

  console.log(i == 2);
  i = 0;
  set = getNewSetWith12345();

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);

    if (val == 3) {
      set.clear();
    }
  }

  console.log(i == 3);
  i = 0;
  set = getNewSetWith12345();

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);

    if (val == 4) {
      set.clear();
    }
  }

  console.log(i == 4);
  i = 0;
  set = getNewSetWith12345();

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);

    if (val == 5) {
      set.clear();
    }
  }

  console.log(i == 5);
  console.log(set.size == 0);
}

t42();

function ttt() {
  var i = 0;
  var set = getNewSetWith12345();

  for (var val of set.values()) {
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
  }

  i = 2;

  for (var val of set.values()) {
    i += 1;
    console.log(val == i);

    if (val == 5) {
      i = 0;
    }
  }
}

ttt();

function t43() {
  var set = new Set();
  set.add(1);
  set.add(2);
  var vals = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  var i = 0;

  for (var val of set.values()) {
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
  }

  console.log(i == 10);
}

t43();
