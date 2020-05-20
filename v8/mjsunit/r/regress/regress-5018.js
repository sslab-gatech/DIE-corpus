// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var dv = new DataView(new ArrayBuffer(4), 2);

function getByteLength(a) {
  return a.byteLength;
}

2;
getByteLength(dv);
2;
getByteLength(dv);
Object.defineProperty(dv.__proto__, 'byteLength', {
  value: 42
});
42;
dv.byteLength;
42;
getByteLength(dv);

function getByteOffset(a) {
  return a.byteOffset;
}

2;
getByteOffset(dv);
2;
getByteOffset(dv);
Object.defineProperty(dv.__proto__, 'byteOffset', {
  value: 42
});
42;
dv.byteOffset;
42;
getByteOffset(dv);
