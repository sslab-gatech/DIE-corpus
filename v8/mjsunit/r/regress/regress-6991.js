// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
function foo(o) {
  return o.x;
}

undefined;
foo({});
undefined;
foo(1);
undefined;
foo({});
undefined;
foo(1);
undefined;
foo({});
foo();
undefined;
foo(1);
foo();
