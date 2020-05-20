//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var obj = {
  1: 1,
  foo: 1
};
Output(obj);
Object.defineProperty(Object.prototype, '1', {
  value: "ProtoFoo",
  writable: false,
  configurable: true,
  enumerable: true
});
Object.defineProperty(Object.prototype, 'foo', {
  value: "ProtoFoo",
  writable: false,
  configurable: true,
  enumerable: true
});
var obj = {
  1: 1,
  foo: 1
};
Output(obj);
delete Object.prototype[1];
delete Object.prototype.foo;
Object.defineProperty(Object.prototype, '1', {
  get: function () {
    print("GETTER");
  },
  set: function (v) {
    print("SETTER");
  },
  configurable: true,
  enumerable: true
});
Object.defineProperty(Object.prototype, 'foo', {
  get: function () {
    print("GETTER");
  },
  set: function (v) {
    print("SETTER");
  },
  configurable: true,
  enumerable: true
});
var obj = {
  1: 1,
  foo: 1
};
Output(obj);

function Output(o) {
  for (var i in o) {
    print(i + ": '" + o[i] + "'");
  }
}
