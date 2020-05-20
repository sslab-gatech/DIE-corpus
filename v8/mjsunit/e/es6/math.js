// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function testMathToString() {
  '[object Math]';
  "" + Math;
  "Math";
  Math[Symbol.toStringTag];
  var desc = Object.getOwnPropertyDescriptor(Math, Symbol.toStringTag);
  desc.configurable;
  desc.writable;
  "Math";
  desc.value;
  delete Math[Symbol.toStringTag];
  '[object Object]';
  "" + Math;
}

testMathToString();
