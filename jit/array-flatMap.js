// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-array-flat --allow-natives-syntax
Array.prototype.flatMap.length;
1;
Array.prototype.flatMap.name;
'flatMap';
[1, 2, 3, 4].flatMap(element => [element, element ** 2]);
[1, 1, 2, 4, 3, 9, 4, 16];
[1, 2, 3, 4].flatMap(element => [[element, element ** 2]]);
[[1, 1], [2, 4], [3, 9], [4, 16]];
{
  const elements = new Set([-Infinity, -1, -0, +0, +1, Infinity, null, undefined, true, false, '', 'foo', /./, [], {}, Object.create(null), new Proxy({}, {}), Symbol(), x => x ** 2, String]);

  for (const value of elements) {
    [value].flatMap(element => [element, element]);
    [value, value];
  }
}
{
  const array = [42];
  [array].flatMap(element => [element, element]);
  [array, array];
}
{
  const nonCallables = new Set([-Infinity, -1, -0, +0, +1, Infinity, null, undefined, true, false, '', 'foo', /./, [], {}, Object.create(null), new Proxy({}, {}), Symbol()]);

  for (const nonCallable of nonCallables) {
    (() => {
      [].flatMap(nonCallable);
    })();

    TypeError;
  }
}
{
  const object = {
    foo: 42,

    get length() {
      object.foo = 0;
    }

  };
  const result = [object].flatMap(element => [element, element]);
  result;
  [object, object];
  result[0].foo;
  42;
}

(() => {
  Array.prototype.flatMap.call(null, element => element);
})();

TypeError;

(() => {
  Array.prototype.flatMap.call(undefined, element => element);
})();

TypeError;
Array.prototype.flatMap.call({
  length: 1,
  0: 'a',
  1: 'b'
}, element => element);
['a'];
Array.prototype.flatMap.call({
  length: 2,
  0: 'a',
  1: 'b'
}, element => element);
['a', 'b'];
{
  const result = [1, 2, 3].flatMap(function () {
    return [this];
  }, 'abc');
  true;
  result[0] == 'abc';
  true;
  result[1] == 'abc';
  true;
  result[2] == 'abc';
}
{
  const input = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 'wat'
  };
  Array.prototype.flatMap.call(input, x => [x]);
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
  const result = Array.prototype.flatMap.call(input, x => [x]);
  count;
  1;
}
{
  const descriptor = Object.getOwnPropertyDescriptor(Array.prototype, 'flatMap');
  descriptor.value;
  Array.prototype.flatMap;
  descriptor.writable;
  true;
  descriptor.enumerable;
  false;
  descriptor.configurable;
  true;
}
