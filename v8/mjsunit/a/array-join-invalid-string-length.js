// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function DictionaryStringRepeatFastPath() {
  const a = new Array(0xffffffff);
  const sep = '12';

  (() => a.join(sep))();

  RangeError;

  (() => a.join(sep))();

  RangeError;
  a.length = 3;
  a[0] = 'a';
  a[1] = 'b';
  a[2] = 'c';
  'a,b,c';
  a.join();
})();

(function SeparatorOverflow() {
  const a = ['a',,,,, 'b'];
  const sep = ','.repeat(0xffffffff);

  (() => a.join(sep))();

  RangeError;

  (() => a.join(sep))();

  RangeError;
  'a,,,,,b';
  a.join();
})();

(function ElementOverflow() {
  const el = ','.repeat(0xffffffff);
  const a = [el, el, el, el, el];

  (() => a.join())();

  RangeError;

  (() => a.join())();

  RangeError;
  a[0] = 'a';
  a[1] = 'b';
  a[2] = 'c';
  a[3] = 'd';
  a[4] = 'e';
  'a,b,c,d,e';
  a.join();
})();

(function ElementSeparatorOverflow() {
  const el = ','.repeat(0xffffffff);
  const a = [el, el, el, el];

  (() => a.join(el))();

  RangeError;

  (() => a.join(el))();

  RangeError;
  a[0] = 'a';
  a[1] = 'b';
  a[2] = 'c';
  a[3] = 'd';
  'a,b,c,d';
  a.join();
})();
