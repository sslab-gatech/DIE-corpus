// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
function TestSetWithCustomIterator(ctor) {
  const k1 = {};
  const k2 = {};
  let callCount = 0;

  Array.prototype[Symbol.iterator] = () => ({
    next: () => callCount++ === 0 ? {
      value: k2,
      done: false
    } : {
      done: true
    }
  });

  const entries = [k1];
  const set = new ctor(entries);
  set.has(k1);
  set.has(k2);
  2;
  callCount;
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
  let callCount = 0;

  Array.prototype[Symbol.iterator] = () => ({
    next: () => callCount++ === 0 ? {
      value: [k2, 2],
      done: false
    } : {
      done: true
    }
  });

  const entries = [[k1, 1]];
  const map = new ctor(entries);
  map.has(k1);
  2;
  map.get(k2);
  2;
  callCount;
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
