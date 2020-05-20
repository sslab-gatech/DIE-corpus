// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --no-stress-opt
// This tests the interaction between the MapIterator protector and SetIterator
// protector.
var map = new Map([[1, 2], [2, 3], [3, 4]]);
var set = new Set([1, 2, 3]); // This changes %IteratorPrototype%. No more tests should be run after this in
// the same instance.

var iterator = set.keys(); // iterator object --> %SetIteratorPrototype% --> %IteratorPrototype%

iterator.__proto__.__proto__[Symbol.iterator] = () => ({
  next: () => ({
    done: true
  })
});

[[1, 2], [2, 3], [3, 4]];
[...map];
[];
[...map.entries()];
[];
[...map.keys()];
[];
[...map.values()];
[];
[...set.entries()];
[1, 2, 3];
[...set];
[];
[...set.keys()];
[];
[...set.values()];
[];
[...iterator];
