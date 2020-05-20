// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Array.prototype.sort + TypedArray.prototype.sort: comparefn must be either a
// function or undefined.
// https://github.com/tc39/ecma262/pull/785
const types = [Array, Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array];

for (const type of types) {
  const array = new type();
  array[0] = 1;
  array[1] = 2;
  array[2] = 3;
  array.sort();
  array.sort(undefined);
  array.sort(() => {
    ;
  });

  (() => {
    array.sort(null);
  })();

  TypeError;

  (() => {
    array.sort(true);
  })();

  TypeError;

  (() => {
    array.sort(false);
  })();

  TypeError;

  (() => {
    array.sort('');
  })();

  TypeError;

  (() => {
    array.sort(0);
  })();

  TypeError;

  (() => {
    array.sort(42);
  })();

  TypeError;

  (() => {
    array.sort([]);
  })();

  TypeError;

  (() => {
    array.sort(/./);
  })();

  TypeError;

  (() => {
    array.sort({});
  })();

  TypeError;

  (() => {
    array.sort(Symbol());
  })();

  TypeError;
}

(() => {
  Array.prototype.sort.call(null, 42);
})();

TypeError;

try {
  Array.prototype.sort.call(null, 42);
} catch (exception) {
  'The comparison function must be either a function or undefined';
  exception.message;
}
