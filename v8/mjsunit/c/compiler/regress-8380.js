// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function reduceLHS() {
  for (var i = 0; i < 2; i++) {
    let [q, r] = [1, 1];
    r = r - 1;
    q += 1;
    q = r;
  }
}

reduceLHS();
reduceLHS();

function reduceRHS() {
  for (var i = 0; i < 2; i++) {
    let [q, r] = [1, 1];
    r = 1 - r;
    q += 1;
    q = r;
  }
}

reduceRHS();
reduceRHS();
