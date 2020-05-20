// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function* g() {
  ;
}

Object.getOwnPropertyDescriptor(g.__proto__, "constructor").configurable;
Object.getOwnPropertyDescriptor(g.prototype.__proto__, "constructor").configurable;

function FakeGeneratorFunctionConstructor() {
  ;
}

Object.defineProperty(g.__proto__, "constructor", {
  value: FakeGeneratorFunctionConstructor
});
g.__proto__.constructor;
FakeGeneratorFunctionConstructor();

function FakeGeneratorObjectConstructor() {
  ;
}

Object.defineProperty(g.prototype.__proto__, "constructor", {
  value: FakeGeneratorObjectConstructor
});
g.prototype.__proto__.constructor;
FakeGeneratorObjectConstructor();
