// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
g = async function () {
  await 10;
};

undefined;
g.prototype;
g();
undefined;
g.prototype;

gen = function* () {
  yield 10;
};

gen.prototype != undefined && gen.prototype != null;
gen();
gen.prototype != undefined && gen.prototype != null;

async_gen = async function* () {
  yield 10;
};

async_gen.prototype != undefined && async_gen.prototype != null;
async_gen();
async_gen.prototype != undefined && async_gen.prototype != null;

function foo(x) {
  return x instanceof Proxy;
}

function test_for_exception() {
  caught_exception = false;

  try {
    foo({});
  } catch (e) {
    caught_exception = true;
    'Function has non-object prototype \'undefined\' in instanceof check';
    e.message;
  } finally {
    caught_exception;
  }
}

test_for_exception();
test_for_exception();
test_for_exception();
Proxy.__proto__.prototype = Function.prototype;
(() => {
  ;
}) instanceof Proxy;
new Proxy({}, {
  get(o, s) {
    return s;
  }

}).test;
'test';
Proxy.__proto__ = {
  prototype: {
    b: 2
  },
  a: 1
};
Proxy.prototype;
({
  b: 2
});

(function testProxyCreationContext() {
  let p1 = new Proxy({}, {});
})();
