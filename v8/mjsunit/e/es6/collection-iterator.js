// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test(f) {
  f();
  f();
  f();
}

test(function TestSetIterator() {
  var s = new Set();
  var iter = s.values();
  var SetIteratorPrototype = iter.__proto__;
  SetIteratorPrototype.hasOwnProperty('constructor');
  SetIteratorPrototype.__proto__;
  Object.prototype;
  var propertyNames = Object.getOwnPropertyNames(SetIteratorPrototype);
  ['next'];
  propertyNames;
  new Set().values().__proto__;
  SetIteratorPrototype;
  new Set().entries().__proto__;
  SetIteratorPrototype;
  "[object Set Iterator]";
  Object.prototype.toString.call(iter);
  "Set Iterator";
  SetIteratorPrototype[Symbol.toStringTag];
  var desc = Object.getOwnPropertyDescriptor(SetIteratorPrototype, Symbol.toStringTag);
  desc.configurable;
  desc.writable;
  "Set Iterator";
  desc.value;
});
test(function TestSetIteratorValues() {
  var s = new Set();
  s.add(1);
  s.add(2);
  s.add(3);
  var iter = s.values();
  ({
    value: 1,
    done: false
  });
  iter.next();
  ({
    value: 2,
    done: false
  });
  iter.next();
  ({
    value: 3,
    done: false
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
});
test(function TestSetIteratorKeys() {
  Set.prototype.keys();
  Set.prototype.values();
});
test(function TestSetIteratorEntries() {
  var s = new Set();
  s.add(1);
  s.add(2);
  s.add(3);
  var iter = s.entries();
  ({
    value: [1, 1],
    done: false
  });
  iter.next();
  ({
    value: [2, 2],
    done: false
  });
  iter.next();
  ({
    value: [3, 3],
    done: false
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
});
test(function TestSetIteratorMutations() {
  var s = new Set();
  s.add(1);
  var iter = s.values();
  ({
    value: 1,
    done: false
  });
  iter.next();
  s.add(2);
  s.add(3);
  s.add(4);
  s.add(5);
  ({
    value: 2,
    done: false
  });
  iter.next();
  s.delete(3);
  ({
    value: 4,
    done: false
  });
  iter.next();
  s.delete(5);
  ({
    value: undefined,
    done: true
  });
  iter.next();
  s.add(4);
  ({
    value: undefined,
    done: true
  });
  iter.next();
});
test(function TestSetIteratorMutations2() {
  var s = new Set();
  s.add(1);
  s.add(2);
  var i = s.values();
  ({
    value: 1,
    done: false
  });
  i.next();
  s.delete(2);
  s.delete(1);
  s.add(2);
  ({
    value: 2,
    done: false
  });
  i.next();
  ({
    value: undefined,
    done: true
  });
  i.next();
});
test(function TestSetIteratorMutations3() {
  var s = new Set();
  s.add(1);
  s.add(2);
  var i = s.values();
  ({
    value: 1,
    done: false
  });
  i.next();
  s.delete(2);
  s.delete(1);

  for (var x = 2; x < 500; ++x) {
    s.add(x);
  }

  for (var x = 2; x < 500; ++x) {
    s.delete(x);
  }

  for (var x = 2; x < 1000; ++x) {
    s.add(x);
  }

  ({
    value: 2,
    done: false
  });
  i.next();

  for (var x = 1001; x < 2000; ++x) {
    s.add(x);
  }

  s.delete(3);

  for (var x = 6; x < 2000; ++x) {
    s.delete(x);
  }

  ({
    value: 4,
    done: false
  });
  i.next();
  s.delete(5);
  ({
    value: undefined,
    done: true
  });
  i.next();
  s.add(4);
  ({
    value: undefined,
    done: true
  });
  i.next();
});
test(function TestSetInvalidReceiver() {
  (function () {
    Set.prototype.values.call({});
  })();

  TypeError;

  (function () {
    Set.prototype.entries.call({});
  })();

  TypeError;
});
test(function TestSetIteratorInvalidReceiver() {
  var iter = new Set().values();

  (function () {
    iter.next.call({});
  })();
});
test(function TestSetIteratorSymbol() {
  Set.prototype[Symbol.iterator];
  Set.prototype.values();
  Set.prototype.hasOwnProperty(Symbol.iterator);
  Set.prototype.propertyIsEnumerable(Symbol.iterator);
  var iter = new Set().values();
  iter;
  iter[Symbol.iterator]();
  iter[Symbol.iterator].name;
  '[Symbol.iterator]';
});
test(function TestMapIterator() {
  var m = new Map();
  var iter = m.values();
  var MapIteratorPrototype = iter.__proto__;
  MapIteratorPrototype.hasOwnProperty('constructor');
  MapIteratorPrototype.__proto__;
  Object.prototype;
  var propertyNames = Object.getOwnPropertyNames(MapIteratorPrototype);
  ['next'];
  propertyNames;
  new Map().values().__proto__;
  MapIteratorPrototype;
  new Map().keys().__proto__;
  MapIteratorPrototype;
  new Map().entries().__proto__;
  MapIteratorPrototype;
  "[object Map Iterator]";
  Object.prototype.toString.call(iter);
  "Map Iterator";
  MapIteratorPrototype[Symbol.toStringTag];
  var desc = Object.getOwnPropertyDescriptor(MapIteratorPrototype, Symbol.toStringTag);
  desc.configurable;
  desc.writable;
  "Map Iterator";
  desc.value;
});
test(function TestMapIteratorValues() {
  var m = new Map();
  m.set(1, 11);
  m.set(2, 22);
  m.set(3, 33);
  var iter = m.values();
  ({
    value: 11,
    done: false
  });
  iter.next();
  ({
    value: 22,
    done: false
  });
  iter.next();
  ({
    value: 33,
    done: false
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
});
test(function TestMapIteratorKeys() {
  var m = new Map();
  m.set(1, 11);
  m.set(2, 22);
  m.set(3, 33);
  var iter = m.keys();
  ({
    value: 1,
    done: false
  });
  iter.next();
  ({
    value: 2,
    done: false
  });
  iter.next();
  ({
    value: 3,
    done: false
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
});
test(function TestMapIteratorEntries() {
  var m = new Map();
  m.set(1, 11);
  m.set(2, 22);
  m.set(3, 33);
  var iter = m.entries();
  ({
    value: [1, 11],
    done: false
  });
  iter.next();
  ({
    value: [2, 22],
    done: false
  });
  iter.next();
  ({
    value: [3, 33],
    done: false
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
  ({
    value: undefined,
    done: true
  });
  iter.next();
});
test(function TestMapInvalidReceiver() {
  (function () {
    Map.prototype.values.call({});
  })();

  TypeError;

  (function () {
    Map.prototype.keys.call({});
  })();

  TypeError;

  (function () {
    Map.prototype.entries.call({});
  })();

  TypeError;
});
test(function TestMapIteratorInvalidReceiver() {
  var iter = new Map().values();

  (function () {
    iter.next.call({});
  })();

  TypeError;
});
test(function TestMapIteratorSymbol() {
  Map.prototype[Symbol.iterator];
  Map.prototype.entries();
  Map.prototype.hasOwnProperty(Symbol.iterator);
  Map.prototype.propertyIsEnumerable(Symbol.iterator);
  var iter = new Map().values();
  iter;
  iter[Symbol.iterator]();
  iter[Symbol.iterator].name;
  '[Symbol.iterator]';
});
