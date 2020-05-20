// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var handler = {};
var target = {
  a: 1
};
var proxy = new Proxy(target, handler);
target.hasOwnProperty('a');
proxy.hasOwnProperty('a');
target.hasOwnProperty('b');
proxy.hasOwnProperty('b');

handler.has = function () {};

handler.getOwnPropertyDescriptor = function () {
  ;
};

target.hasOwnProperty('a');
proxy.hasOwnProperty('a');
target.hasOwnProperty('b');
proxy.hasOwnProperty('b');

handler.getOwnPropertyDescriptor = function () {
  return {
    configurable: true
  };
};

target.hasOwnProperty('a');
proxy.hasOwnProperty('a');
target.hasOwnProperty('b');
proxy.hasOwnProperty('b');

handler.getOwnPropertyDescriptor = function () {
  throw Error();
};

target.hasOwnProperty('a');

(function () {
  proxy.hasOwnProperty('a');
})();

Error;
target.hasOwnProperty('b');

(function () {
  proxy.hasOwnProperty('b');
})();

Error;
