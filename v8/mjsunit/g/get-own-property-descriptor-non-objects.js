// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function () {
  Object.getOwnPropertyDescriptor(null, 'x');
})();

TypeError;

(function () {
  Object.getOwnPropertyDescriptor(undefined, 'x');
})();

TypeError;
({
  configurable: false,
  enumerable: false,
  value: 3,
  writable: false
});
Object.getOwnPropertyDescriptor('abc', 'length');
({
  configurable: false,
  enumerable: true,
  value: 'a',
  writable: false
});
Object.getOwnPropertyDescriptor('abc', 0);
undefined;
Object.getOwnPropertyDescriptor(42, 'x');
undefined;
Object.getOwnPropertyDescriptor(true, 'x');
undefined;
Object.getOwnPropertyDescriptor(false, 'x');
undefined;
Object.getOwnPropertyDescriptor(Symbol(), 'x');
