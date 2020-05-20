// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
function TestSetPrototypeModified(ctor) {
  const originalPrototypeAdd = ctor.prototype.add;
  const k1 = {};
  const k2 = {};
  const entries = [k1, k2];
  let addCount = 0;

  ctor.prototype.add = function (value) {
    addCount++;
    originalPrototypeAdd.call(this, value);
    entries.length = 1;
  };

  const set = new ctor(entries);
  1;
  addCount;
  set.has(k1);
  set.has(k2);
  ctor.prototype.add = originalPrototypeAdd;
}

TestSetPrototypeModified(Set);
TestSetPrototypeModified(Set);
TestSetPrototypeModified(Set);
TestSetPrototypeModified(Set);
TestSetPrototypeModified();
TestSetPrototypeModified(WeakSet);
TestSetPrototypeModified(WeakSet);
TestSetPrototypeModified(WeakSet);
TestSetPrototypeModified(WeakSet);
TestSetPrototypeModified();

function TestMapPrototypeModified(ctor) {
  const originalPrototypeSet = ctor.prototype.set;
  const k1 = {};
  const k2 = {};
  const entries = [[k1, 1], [k2, 2]];
  let setCount = 0;

  ctor.prototype.set = function (key, value) {
    setCount++;
    originalPrototypeSet.call(this, key, value);
    entries.length = 1;
  };

  const map = new ctor(entries);
  1;
  setCount;
  map.has(k1);
  map.has(k2);
  ctor.prototype.set = originalPrototypeSet;
}

TestMapPrototypeModified(Map);
TestMapPrototypeModified(Map);
TestMapPrototypeModified(Map);
TestMapPrototypeModified(Map);
TestMapPrototypeModified();
TestMapPrototypeModified(WeakMap);
TestMapPrototypeModified(WeakMap);
TestMapPrototypeModified(WeakMap);
TestMapPrototypeModified(WeakMap);
TestMapPrototypeModified();
