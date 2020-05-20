// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var sentinelObject = {};
var evaluatedArg = false;

class C extends Object {
  constructor() {
    try {
      super(evaluatedArg = true);
    } catch (e) {
      e;
      TypeError;
      return sentinelObject;
    }
  }

}

Object.setPrototypeOf(C, parseInt);
sentinelObject;
new C();
sentinelObject;
new C();
sentinelObject;
new C();
evaluatedArg;
