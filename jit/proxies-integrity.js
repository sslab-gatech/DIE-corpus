// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function toKey(x) {
  if (typeof x === "symbol") {
    return x;
  }

  return String(x);
}

const noconf = {
  configurable: false
};
const noconf_nowrite = {
  configurable: false,
  writable: false
};
var symbol = Symbol();
var log = [];
var logger = {};
var handler = new Proxy({}, logger);

logger.get = function (t, trap, r) {
  return function () {
    log.push([trap, ...arguments]);
    return Reflect[trap](...arguments);
  };
};

(function Seal() {
  var target = [];
  var proxy = new Proxy(target, handler);
  log.length = 0;
  target.wurst = 42;
  target[0] = true;
  Object.defineProperty(target, symbol, {
    get: undefined
  });
  Object.seal(proxy);
  6;
  log.length;

  for (var i in log) {
    target;
    log[i][1];
  }

  ["preventExtensions", target];
  log[0];
  ["ownKeys", target];
  log[1];
  ["defineProperty", target, toKey(0), noconf];
  log[2];
  ["defineProperty", target, toKey("length"), noconf];
  log[3];
  ["defineProperty", target, toKey("wurst"), noconf];
  log[4];
  ["defineProperty", target, toKey(symbol), noconf];
  log[5];
})();

(function Freeze() {
  var target = [];
  var proxy = new Proxy(target, handler);
  log.length = 0;
  target.wurst = 42;
  target[0] = true;
  Object.defineProperty(target, symbol, {
    get: undefined
  });
  Object.freeze(proxy);
  10;
  log.length;

  for (var i in log) {
    target;
    log[i][1];
  }

  ["preventExtensions", target];
  log[0];
  ["ownKeys", target];
  log[1];
  ["getOwnPropertyDescriptor", target, toKey(0)];
  log[2];
  ["defineProperty", target, toKey(0), noconf_nowrite];
  log[3];
  ["getOwnPropertyDescriptor", target, toKey("length")];
  log[4];
  ["defineProperty", target, toKey("length"), noconf_nowrite];
  log[5];
  ["getOwnPropertyDescriptor", target, toKey("wurst")];
  log[6];
  ["defineProperty", target, toKey("wurst"), noconf_nowrite];
  log[7];
  ["getOwnPropertyDescriptor", target, toKey(symbol)];
  log[8];
  ["defineProperty", target, toKey(symbol), noconf];
  log[9];
})();

(function IsSealed() {
  var target = [];
  var proxy = new Proxy(target, handler);
  target.wurst = 42;
  target[0] = true;
  Object.defineProperty(target, symbol, {
    get: undefined
  }); // Extensible.

  log.length = 0;
  Object.isSealed(proxy);
  1;
  log.length;

  for (var i in log) {
    target;
    log[i][1];
  }

  ["isExtensible", target];
  log[0];
  // Not extensible but not sealed.
  log.length = 0;
  Object.preventExtensions(target);
  Object.isSealed(proxy);
  3;
  log.length;

  for (var i in log) {
    target;
    log[i][1];
  }

  ["isExtensible", target];
  log[0];
  ["ownKeys", target];
  log[1];
  ["getOwnPropertyDescriptor", target, toKey(0)];
  log[2];
  // Sealed.
  log.length = 0;
  Object.seal(target);
  Object.isSealed(proxy);
  6;
  log.length;

  for (var i in log) {
    target;
    log[i][1];
  }

  ["isExtensible", target];
  log[0];
  ["ownKeys", target];
  log[1];
  ["getOwnPropertyDescriptor", target, toKey(0)];
  log[2];
  ["getOwnPropertyDescriptor", target, toKey("length")];
  log[3];
  ["getOwnPropertyDescriptor", target, toKey("wurst")];
  log[4];
  ["getOwnPropertyDescriptor", target, toKey(symbol)];
  log[5];
})();

(function IsFrozen() {
  var target = [];
  var proxy = new Proxy(target, handler);
  target.wurst = 42;
  target[0] = true;
  Object.defineProperty(target, symbol, {
    get: undefined
  }); // Extensible.

  log.length = 0;
  Object.isFrozen(proxy);
  1;
  log.length;

  for (var i in log) {
    target;
    log[i][1];
  }

  ["isExtensible", target];
  log[0];
  // Not extensible but not frozen.
  log.length = 0;
  Object.preventExtensions(target);
  Object.isFrozen(proxy);
  3;
  log.length;

  for (var i in log) {
    target;
    log[i][1];
  }

  ["isExtensible", target];
  log[0];
  ["ownKeys", target];
  log[1];
  ["getOwnPropertyDescriptor", target, toKey(0)];
  log[2];
  // Frozen.
  log.length = 0;
  Object.freeze(target);
  Object.isFrozen(proxy);
  6;
  log.length;

  for (var i in log) {
    target;
    log[i][1];
  }

  ["isExtensible", target];
  log[0];
  ["ownKeys", target];
  log[1];
  ["getOwnPropertyDescriptor", target, toKey(0)];
  log[2];
  ["getOwnPropertyDescriptor", target, toKey("length")];
  log[3];
  ["getOwnPropertyDescriptor", target, toKey("wurst")];
  log[4];
  ["getOwnPropertyDescriptor", target, toKey(symbol)];
  log[5];
})();
