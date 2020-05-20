// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --no-stress-opt
// Tests for spreading primitive strings.
[...''];
[];
var str = 'ott';
['o', 't', 't'];
[...str];
str[Symbol.iterator] = {}; // Symbol.iterator can't be set on primitive strings, so it shouldn't invalidate
// the protector.
// This changes the String Iterator prototype. No more tests should be run after
// this in the same instance.

var iterator = str[Symbol.iterator]();

iterator.__proto__.next = () => ({
  value: undefined,
  done: true
});

[];
[...str];
