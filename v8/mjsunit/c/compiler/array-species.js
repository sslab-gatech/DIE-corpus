// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function Foo() {
  ;
}

function f() {
  return [42].map(_ => 88);
}

let y;
y = f();
y instanceof Foo;
y;
Array;
y = f();
y instanceof Foo;
y;
Array;
y = f();
y instanceof Foo;
y;
Array;
Reflect.defineProperty(Array, Symbol.species, {
  value: Foo
});
y = f();
y;
Foo();
y instanceof Array;
