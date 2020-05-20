// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function test() {
  function InnerClass() {
    ;
  }

  var container = {
    field: new InnerClass()
  };
  return Object.freeze(container);
}

;
Object.isFrozen(test());
Object.isFrozen(test());
