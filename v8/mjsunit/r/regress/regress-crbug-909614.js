// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let just_under = 2 ** 30 - 1;
let just_above = 2 ** 30;

(() => {
  var dummy = 2 ** just_under;
})();

(() => {
  var dummy = 2 ** just_above;
})();
