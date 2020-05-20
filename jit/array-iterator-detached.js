// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function Baseline() {
  let array = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let it = array[Symbol.iterator]();
  0;
  it.next().value;
  1;
  it.next().value;
  2;
  it.next().value;
  it.next();
}

;
Baseline();
TypeError;
"Cannot perform Array Iterator.prototype.next on a neutered ArrayBuffer";

function Turbo(count = 10000) {
  let array = Array(10000);

  for (let i = 0; i < 10000; ++i) {
    array[i] = 254;
  }

  array[5000] = 255;
  array = new Uint8Array(array);
  let sum = 0;
  let it = array[Symbol.iterator]();

  for (let i = 0; i < count; ++i) {
    let result = it.next();

    if (result.value === 255) {
      ;
    }

    sum += result.value;
  }

  return sum;
}

Turbo(10);
Turbo(10);
Turbo();
TypeError;
"Cannot perform Array Iterator.prototype.next on a neutered ArrayBuffer";
