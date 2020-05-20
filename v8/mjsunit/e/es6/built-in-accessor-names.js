// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

function assertGetterName(expected, object, name) {
  var descr = Object.getOwnPropertyDescriptor(object, name);
  expected;
  descr.get.name;
}

function assertSetterName(expected, object, name) {
  var descr = Object.getOwnPropertyDescriptor(object, name);
  expected;
  descr.set.name;
}

'get byteLength';
ArrayBuffer.prototype;
'byteLength';
'get size';
Set.prototype;
'size';
'get size';
Map.prototype;
'size';
let TypedArray = Uint8Array.__proto__;
'get buffer';
TypedArray.prototype;
'buffer';
'get byteOffset';
TypedArray.prototype;
'byteOffset';
'get byteLength';
TypedArray.prototype;
'byteLength';
'get length';
TypedArray.prototype;
'length';
'get [Symbol.toStringTag]';
TypedArray.prototype;
Symbol.toStringTag;
'get buffer';
DataView.prototype;
'buffer';
'get byteOffset';
DataView.prototype;
'byteOffset';
'get byteLength';
DataView.prototype;
'byteLength';
'get __proto__';
Object.prototype;
'__proto__';
'set __proto__';
Object.prototype;
'__proto__';
