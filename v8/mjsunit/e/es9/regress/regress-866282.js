// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Runtime_ObjectCloneIC_Slow() source argument must be a HeapObject handle,
// because undefined/null are allowed.
function spread(o) {
  return { ...o
  };
} // Transition to MEGAMORPHIC


({});
spread(new function C1() {
  ;
}());
({});
spread(new function C2() {
  ;
}());
({});
spread(new function C3() {
  ;
}());
({});
spread(new function C4() {
  ;
}());
({});
spread(new function C5() {
  ;
}());
({});
spread(undefined);
