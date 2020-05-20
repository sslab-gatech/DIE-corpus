// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
const Classes = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray, Float32Array, Float64Array];
const TypedArrayPrototype_toStringTag = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;

(function () {
  function foo(o) {
    return TypedArrayPrototype_toStringTag.call(o);
  }

  undefined;
  foo(1);
  undefined;
  foo({});
  undefined;
  foo([]);
  Classes.forEach(C => (C.name, foo(new C(1))));
  undefined;
  foo(1);
  undefined;
  foo({});
  undefined;
  foo([]);
  Classes.forEach(C => (C.name, foo(new C(1))));
})();

(function () {
  const ReflectApply = Reflect.apply;

  const uncurryThis = func => (thisArg, ...args) => ReflectApply(func, thisArg, args);

  const TypedArrayProto_toStringTag = uncurryThis(TypedArrayPrototype_toStringTag);

  function isTypedArray(value) {
    return TypedArrayProto_toStringTag(value) !== undefined;
  }

  isTypedArray(1);
  isTypedArray({});
  isTypedArray([]);
  isTypedArray('Lorem ipsum');
  Classes.forEach(C => isTypedArray(new C(1)));
  isTypedArray(1);
  isTypedArray({});
  isTypedArray([]);
  isTypedArray('Lorem ipsum');
  Classes.forEach(C => isTypedArray(new C(1)));
})();

(function () {
  const ReflectApply = Reflect.apply;

  const uncurryThis = func => (thisArg, ...args) => ReflectApply(func, thisArg, args);

  const TypedArrayProto_toStringTag = uncurryThis(TypedArrayPrototype_toStringTag);

  function isUint8Array(value) {
    return TypedArrayProto_toStringTag(value) === 'Uint8Array';
  }

  isUint8Array(1);
  isUint8Array({});
  isUint8Array([]);
  isUint8Array('Lorem ipsum');
  Classes.forEach(C => (C === Uint8Array, isUint8Array(new C(1))));
  isUint8Array(1);
  isUint8Array({});
  isUint8Array([]);
  isUint8Array('Lorem ipsum');
  Classes.forEach(C => (C === Uint8Array, isUint8Array(new C(1))));
})();
