// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// This is used to force binary operations below to have tagged representation.
var z = {
  valueOf: function () {
    return 3;
  }
};

function f() {
  var y = -2;
  return (1 & z) - y++;
}

3;
f();
3;
f();
3;
f();

function g() {
  var y = 2;
  return 1 & z | y++;
}

3;
g();
3;
g();
3;
g();

function h() {
  var y = 3;
  return 3 & z & y++;
}

3;
h();
3;
h();
3;
h();

function i() {
  var y = 2;
  return 1 & z ^ y++;
}

3;
i();
3;
i();
3;
i();
