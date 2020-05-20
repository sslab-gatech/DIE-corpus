// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function f(...arguments) {
  return Array.isArray(arguments);
}

f();

function g({
  arguments
}) {
  return arguments === 42;
}

g({
  arguments: 42
});

function foo() {
  let arguments = 2;
  return arguments;
}

2;
foo();

(function (x = arguments, arguments) {
  ;
})();

ReferenceError;
