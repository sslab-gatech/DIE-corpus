// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --no-stress-opt
// This tests the interaction between the MapIterator protector and SetIterator
// protector.
var map = new Map([[1, 2], [2, 3], [3, 4]]);
var set = new Set([1, 2, 3]);
var iterator = set.keys();

iterator[Symbol.iterator] = () => ({
  next: () => ({
    done: true
  })
});

[[1, 2], [2, 3], [3, 4]];
[...map];
[[1, 2], [2, 3], [3, 4]];
[...map.entries()];
[1, 2, 3];
[...map.keys()];
[2, 3, 4];
[...map.values()];
[[1, 1], [2, 2], [3, 3]];
[...set.entries()];
[1, 2, 3];
[...set];
[1, 2, 3];
[...set.keys()];
[1, 2, 3];
[...set.values()];
[];
[...iterator];
