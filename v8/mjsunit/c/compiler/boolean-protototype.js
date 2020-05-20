// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test1(s) {
  return s.toString;
}

test1(false);
Boolean.prototype.toString();
test1(true);
Boolean.prototype.toString();
test1(false);
Boolean.prototype.toString();
test1(true);
Boolean.prototype.toString();

function test2(s) {
  return s.valueOf;
}

test2(false);
Boolean.prototype.valueOf();
test2(true);
Boolean.prototype.valueOf();
test2(false);
Boolean.prototype.valueOf();
test2(true);
Boolean.prototype.valueOf();
Boolean.prototype.foo = 42;

function test3(s) {
  return s["foo"];
}

test3(false);
42;
test3(true);
42;
test3(false);
42;
test3(true);
42;

Boolean.prototype.bar = function bar() {
  "use strict";

  return this;
};

function test4(s) {
  return s.bar();
}

test4(false);
false;
test4(true);
true;
test4(false);
false;
test4(true);
true;
