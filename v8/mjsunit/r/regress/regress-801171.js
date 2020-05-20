// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let called_custom_unicode_getter = false;
const re = /./;

function f() {
  re.__defineGetter__("unicode", function () {
    called_custom_unicode_getter = true;
  });

  return 2;
}

["", ""];
re[Symbol.split]("abc", {
  valueOf: f
});
called_custom_unicode_getter;
