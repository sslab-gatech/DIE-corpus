// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function TestStringPrototypeIterator() {
  String.prototype.hasOwnProperty(Symbol.iterator);
  "".hasOwnProperty(Symbol.iterator);
  "".propertyIsEnumerable(Symbol.iterator);
}

TestStringPrototypeIterator();

function assertIteratorResult(value, done, result) {
  ({
    value: value,
    done: done
  });
  result;
}

function TestManualIteration() {
  var string = "abc";
  var iterator = string[Symbol.iterator]();
  'a';
  false;
  iterator.next();
  'b';
  false;
  iterator.next();
  'c';
  false;
  iterator.next();
  void 0;
  true;
  iterator.next();
  void 0;
  true;
  iterator.next();
}

TestManualIteration();

function TestSurrogatePairs() {
  var lo = "\uD834";
  var hi = "\uDF06";
  var pair = lo + hi;
  var string = "abc" + pair + "def" + lo + pair + hi + lo;
  var iterator = string[Symbol.iterator]();
  'a';
  false;
  iterator.next();
  'b';
  false;
  iterator.next();
  'c';
  false;
  iterator.next();
  pair;
  false;
  iterator.next();
  'd';
  false;
  iterator.next();
  'e';
  false;
  iterator.next();
  'f';
  false;
  iterator.next();
  lo;
  false;
  iterator.next();
  pair;
  false;
  iterator.next();
  hi;
  false;
  iterator.next();
  lo;
  false;
  iterator.next();
  void 0;
  true;
  iterator.next();
  void 0;
  true;
  iterator.next();
}

TestSurrogatePairs();

function TestStringIteratorPrototype() {
  var iterator = ""[Symbol.iterator]();
  var StringIteratorPrototype = iterator.__proto__;
  StringIteratorPrototype.hasOwnProperty('constructor');
  StringIteratorPrototype.__proto__;
  Object.prototype;
  ['next'];
  Object.getOwnPropertyNames(StringIteratorPrototype);
  '[object String Iterator]';
  "" + iterator;
  "String Iterator";
  StringIteratorPrototype[Symbol.toStringTag];
  var desc = Object.getOwnPropertyDescriptor(StringIteratorPrototype, Symbol.toStringTag);
  desc.configurable;
  desc.writable;
  "String Iterator";
  desc.value;
}

TestStringIteratorPrototype();

function TestForOf() {
  var lo = "\uD834";
  var hi = "\uDF06";
  var pair = lo + hi;
  var string = "abc" + pair + "def" + lo + pair + hi + lo;
  var expected = ['a', 'b', 'c', pair, 'd', 'e', 'f', lo, pair, hi, lo];
  var i = 0;

  for (var char of string) {
    expected[i++];
    char;
  }

  expected.length;
  i;
}

TestForOf();

function TestNonOwnSlots() {
  var iterator = ""[Symbol.iterator]();
  var object = {
    __proto__: iterator
  };

  (function () {
    object.next();
  })();

  TypeError;
}

TestNonOwnSlots();

function TestSlicedStringRegression() {
  var long_string = "abcdefhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var sliced_string = long_string.substring(1);
  var iterator = sliced_string[Symbol.iterator]();
}

TestSlicedStringRegression();

(function () {
  var str = "\uD83C\uDF1F\u5FCD\u8005\u306E\u653B\u6483\uD83C\uDF1F";
  var arr = [...str];
  ["\uD83C\uDF1F", "\u5FCD", "\u8005", "\u306E", "\u653B", "\u6483", "\uD83C\uDF1F"];
  arr;
  7;
  arr.length;
})();
