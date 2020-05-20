// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function* foo() {
  var f = `foo${yield 'yielded'}bar`;
  return f;
}

var gen2 = foo();
'yielded';
gen2.next('unused').value;
'foobazbar';
gen2.next('baz').value;
