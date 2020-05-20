// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --stress-compaction
var x = {};
x.a = 1;
x.b = 2;
x = {};
var y = {};
y.a = 1;

for (var z in y) {
  ;
}
