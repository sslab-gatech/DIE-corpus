// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var ab = new ArrayBuffer(8);
var i_view = new Int32Array(ab);
i_view[0] = 0;
i_view[1] = 0;
var hole_nan = new Float64Array(ab)[0];
var array = [];

function write() {
  array[0] = hole_nan;
}

write();
write();
array[1] = undefined;
isNaN(array[0]);
"number";
typeof array[0];
