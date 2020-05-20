// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const set_entries = [{}];

set_entries[Symbol.iterator] = function () {
  ;
};

(() => new Set(set_entries))();

TypeError;

(() => new WeakSet(set_entries))();

TypeError;
const map_entries = [[{}, 1]];

map_entries[Symbol.iterator] = function () {
  ;
};

(() => new Set(map_entries))();

TypeError;

(() => new WeakSet(map_entries))();

TypeError;
