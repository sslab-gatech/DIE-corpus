// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(Array.prototype, Symbol.iterator, {
  value: function* () {
    ;
  }
});
const arrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());

arrayIteratorProto.next = function () {
  ;
};

(() => new Map([[{}, 1], [{}, 2]]))();

TypeError;

(() => new WeakMap([[{}, 1], [{}, 2]]))();

TypeError;

(() => new Set([{}]))();

TypeError;

(() => new WeakSet([{}]))();

TypeError;
