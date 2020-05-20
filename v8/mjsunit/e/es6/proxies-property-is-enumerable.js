// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var handler = {};
var target = {
  a: 1
};
var proxy = new Proxy(target, handler);
target.propertyIsEnumerable('a');
proxy.propertyIsEnumerable('a');
target.propertyIsEnumerable('b');
proxy.propertyIsEnumerable('b');

handler.getOwnPropertyDescriptor = function (target, prop) {
  return {
    configurable: true,
    enumerable: true,
    value: 10
  };
};

target.propertyIsEnumerable('a');
proxy.propertyIsEnumerable('a');
target.propertyIsEnumerable('b');
proxy.propertyIsEnumerable('b');

handler.getOwnPropertyDescriptor = function (target, prop) {
  return {
    configurable: true,
    enumerable: false,
    value: 10
  };
};

target.propertyIsEnumerable('a');
proxy.propertyIsEnumerable('a');
target.propertyIsEnumerable('b');
proxy.propertyIsEnumerable('b');
