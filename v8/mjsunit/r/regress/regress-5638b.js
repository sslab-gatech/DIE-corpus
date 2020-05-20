// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
class A {
  constructor(arg) {
    123;
    arg;
    observer;
    new.target;
    superclass_counter++;
  }

}

class B extends A {
  constructor() {
    super(123);
    construction_counter++;
  }

}

var superclass_counter = 0;
var construction_counter = 0;
var observation_counter = 0;
var observer = new Proxy(A, {
  get(target, property, receiver) {
    if (property === 'prototype') {
      observation_counter++;
    }

    return Reflect.get(target, property, receiver);
  }

});
Reflect.construct(B, [], observer);
Reflect.construct(B, [], observer);
Reflect.construct(B, [], observer);
3;
observation_counter;
3;
construction_counter;
3;
superclass_counter;
