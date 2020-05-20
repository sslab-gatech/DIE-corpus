// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --no-always-opt
function getobj() {
  return {
    bar: function () {
      return 0;
    }
  };
}

function foo() {
  var obj = getobj();
  var length = arguments.length;

  if (length == 0) {
    obj.bar();
  } else {
    obj.bar.apply(obj, arguments);
  }
}

foo();
foo();
foo();
foo();
foo(10);
foo();
