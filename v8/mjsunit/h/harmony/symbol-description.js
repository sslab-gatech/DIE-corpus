// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-symbol-description
{
  let desc = Object.getOwnPropertyDescriptor(Symbol.prototype, 'description');
  desc.set;
  undefined;
  desc.writable;
  undefined;
  desc.enumerable;
  desc.configurable;
}
{
  const empty = Symbol();
  empty.description;
  undefined;
  const symbol = Symbol('test');
  symbol.description;
  'test';
  symbol.hasOwnProperty('description');
}
{
  const empty = Object(Symbol());
  empty.description;
  undefined;
  const symbol = Object(Symbol('test'));
  symbol.description;
  'test';
  symbol.hasOwnProperty('description');
}
{
  (function () {
    const proxy = new Proxy({}, {});
    Symbol.prototype.description.call(proxy);
  })();

  TypeError;

  (function () {
    const smi = 123;
    Symbol.prototype.description.call(smi);
  })();

  TypeError;

  (function () {
    const str = 'string';
    Symbol.prototype.description.call(string);
  })();

  TypeError;

  (function () {
    const obj = {
      prop: 'test'
    };
    Symbol.prototype.description.call(obj);
  })();

  TypeError;
}
