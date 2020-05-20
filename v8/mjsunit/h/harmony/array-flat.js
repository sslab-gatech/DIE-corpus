// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-array-flat
Array.prototype.flat.length;
0;
Array.prototype.flat.name;
'flat';
{
  const input = [1, [2], [[3]]];
  input.flat();
  [1, 2, [3]];
  input.flat(1);
  [1, 2, [3]];
  input.flat(true);
  [1, 2, [3]];
  input.flat(undefined);
  [1, 2, [3]];
  input.flat(-Infinity);
  [1, [2], [[3]]];
  input.flat(-1);
  [1, [2], [[3]]];
  input.flat(-0);
  [1, [2], [[3]]];
  input.flat(0);
  [1, [2], [[3]]];
  input.flat(false);
  [1, [2], [[3]]];
  input.flat(null);
  [1, [2], [[3]]];
  input.flat('');
  [1, [2], [[3]]];
  input.flat('foo');
  [1, [2], [[3]]];
  input.flat(/./);
  [1, [2], [[3]]];
  input.flat([]);
  [1, [2], [[3]]];
  input.flat({});
  [1, [2], [[3]]];
  input.flat(new Proxy({}, {}));
  [1, [2], [[3]]];
  input.flat(x => x);
  [1, [2], [[3]]];
  input.flat(String);
  [1, [2], [[3]]];
  input.flat(2);
  [1, 2, 3];
  input.flat(Infinity);
  [1, 2, 3];

  (() => {
    input.flat(Symbol());
  })();

  TypeError;

  (() => {
    input.flat(Object.create(null));
  })();

  TypeError;
}
{
  const input = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 'wat'
  };
  Array.prototype.flat.call(input, Infinity);
  [];
}
{
  let count = 0;
  const input = {
    get length() {
      ++count;
      return 0;
    }

  };
  const result = Array.prototype.flat.call(input, Infinity);
  count;
  1;
}
{
  const descriptor = Object.getOwnPropertyDescriptor(Array.prototype, 'flat');
  descriptor.value;
  Array.prototype.flat;
  descriptor.writable;
  true;
  descriptor.enumerable;
  false;
  descriptor.configurable;
  true;
}
