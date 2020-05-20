// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
var global;

function TestSetWithCustomIterator(ctor) {
  const k1 = {};
  const k2 = {};
  const entries = [k1];
  let callCount = 0;

  entries[Symbol.iterator] = () => ({
    next: () => callCount++ === 0 ? {
      value: k2,
      done: false
    } : {
      done: true
    }
  });

  const set = new ctor(entries);
  set.has(k1);
  set.has(k2);
  2;
  callCount;
  // Keep entries alive to avoid collection of the weakly held map in optimized
  // code which causes the code to deopt.
  global = entries;
}

TestSetWithCustomIterator(Set);
TestSetWithCustomIterator(Set);
TestSetWithCustomIterator(Set);
TestSetWithCustomIterator(Set);
TestSetWithCustomIterator();
TestSetWithCustomIterator(WeakSet);
TestSetWithCustomIterator(WeakSet);
TestSetWithCustomIterator(WeakSet);
TestSetWithCustomIterator(WeakSet);
TestSetWithCustomIterator();

function TestMapWithCustomIterator(ctor) {
  const k1 = {};
  const k2 = {};
  const entries = [[k1, 1]];
  let callCount = 0;

  entries[Symbol.iterator] = () => ({
    next: () => callCount++ === 0 ? {
      value: [k2, 2],
      done: false
    } : {
      done: true
    }
  });

  const map = new ctor(entries);
  map.has(k1);
  2;
  map.get(k2);
  2;
  callCount;
  // Keep entries alive to avoid collection of the weakly held map in optimized
  // code which causes the code to deopt.
  global = entries;
}

TestMapWithCustomIterator(Map);
TestMapWithCustomIterator(Map);
TestMapWithCustomIterator(Map);
TestMapWithCustomIterator(Map);
TestMapWithCustomIterator();
TestMapWithCustomIterator(WeakMap);
TestMapWithCustomIterator(WeakMap);
TestMapWithCustomIterator(WeakMap);
TestMapWithCustomIterator(WeakMap);
TestMapWithCustomIterator();
