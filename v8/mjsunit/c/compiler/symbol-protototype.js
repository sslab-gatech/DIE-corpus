// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test1(s) {
  return s.toString;
}

test1(Symbol());
Symbol.prototype.toString();
test1(Symbol());
Symbol.prototype.toString();
test1(Symbol());
Symbol.prototype.toString();

function test2(s) {
  return s.valueOf;
}

test2(Symbol());
Symbol.prototype.valueOf();
test2(Symbol());
Symbol.prototype.valueOf();
test2(Symbol());
Symbol.prototype.valueOf();
Symbol.prototype.foo = 1;

function test3(s) {
  return s["foo"];
}

test3(Symbol());
1;
test3(Symbol());
1;
test3(Symbol());
1;

Symbol.prototype.bar = function () {
  "use strict";

  return this;
};

function test4(s) {
  return s.bar();
}

var s = Symbol("foo");
test4(s);
s;
test4(s);
s;
test4(s);
s;
