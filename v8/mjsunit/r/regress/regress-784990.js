// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const key1 = {};
const key2 = {};
const set = new Set([, 1]);
set.has(undefined);
true;
set.has(1);
true;
const doubleSet = new Set([, 1.234]);
doubleSet.has(undefined);
true;
doubleSet.has(1.234);
true;
const map = new Map([[, key1], [key2]]);
map.get(undefined);
key1;
map.get(key2);
undefined;
const doublesMap = new Map([[, 1.234]]);
doublesMap.get(undefined);
1.234;
const weakmap = new WeakMap([[key1]]);
weakmap.get(key1);
undefined;

(() => new WeakSet([, {}]))();

(() => new WeakSet([, 1.234]))();

(() => new Map([, [, key1]]))();

(() => new WeakMap([[, key1]]))();

(() => new WeakMap([, [, key1]]))();
