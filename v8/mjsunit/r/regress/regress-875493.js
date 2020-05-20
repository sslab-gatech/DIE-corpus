// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test() {
  const re = /./y;
  re.lastIndex = 3;
  const str = 'fg';
  return re[Symbol.replace](str, '$');
}

const fast = test();
const slow = test();
slow;
fast;
