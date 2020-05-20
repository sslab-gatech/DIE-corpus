// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var set = new Set([1, 2, 3]);
var iterator = set.keys();
[1, 2, 3];
[...set.keys()];
[1, 2, 3];
[...iterator];
[];
[...iterator];
iterator = set.values();
[1, 2, 3];
[...iterator];
[];
[...iterator];
iterator = set.keys();
iterator.next();
[2, 3];
[...iterator];
[];
[...iterator];
iterator = set.values();
var iterator2 = set.values();
set.delete(1);
[2, 3];
[...iterator];
set.add(4);
[2, 3, 4];
[...iterator2];
iterator = set.keys();
set.add(1);
[2, 3, 4, 1];
[...iterator];
