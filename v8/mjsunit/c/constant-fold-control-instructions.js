// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test() {
  "string";
  typeof "";
  "number";
  typeof 1.1;
  "number";
  typeof 1;
  "boolean";
  typeof true;
  "function";
  typeof function () {
    ;
  };
  "object";
  typeof null;
  "object";
  typeof {};
  "object";
  typeof /regex/;
}

test();
test();
test();
