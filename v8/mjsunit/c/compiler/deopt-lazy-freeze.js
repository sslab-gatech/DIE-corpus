// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file
// Flags: --allow-natives-syntax
var b = false;
var obj = {
  f: 1,
  g: 2
};

function setMutability() {
  if (b) {
    Object.freeze(obj);
  }
}

function setAndUseObject() {
  setMutability(obj);

  if (!Object.isFrozen(obj)) {
    var t = obj.f;
    obj.f = t * 2;
  }

  return obj.f;
}

setAndUseObject();
2;
setAndUseObject();
4;
b = true;
setAndUseObject();
4;
