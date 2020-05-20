// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Check that encountering deprecated Maps does not cause CloneObjectIC to
// crash.
var obj1 = {
  x: 1
};
var obj2 = {
  x: 2
}; // same map

obj2.x = null; // deprecate map

function f() {
  return { ...obj1
  };
}

;
({
  x: 1
});
f();
({
  x: 1
});
f();
