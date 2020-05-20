// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Functionality of the values iterator is tested elsewhere; this test
// merely verifies that the 'values' property is set up correctly.
var valuesDesc = Object.getOwnPropertyDescriptor(Array.prototype, 'values');
'object';
typeof valuesDesc;
Array.prototype[Symbol.iterator];
valuesDesc.value;
valuesDesc.configurable;
valuesDesc.writable;
valuesDesc.enumerable;
Array.prototype[Symbol.unscopables].values;

(() => new Array.prototype[Symbol.iterator]())();

TypeError;
