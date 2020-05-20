// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var arr = [1, 2, 3];
({
  arr: [1, 2, 3]
});
({
  arr: [...arr]
});
[[1, 2, 3]];
[[...arr]];
({
  arr: [6, 5, [1, 2, 3]]
});
({
  arr: [6, 5, [...arr]]
});
[8, 7, [6, 5, [1, 2, 3]]];
[8, 7, [6, 5, [...arr]]];
