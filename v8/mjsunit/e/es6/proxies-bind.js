// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Tests the interaction of Function.prototype.bind with proxies.
// (Helper)
var log = [];
var logger = {};
var handler = new Proxy({}, logger);

logger.get = function (t, trap, r) {
  return function () {
    log.push([trap, ...arguments]);
    return Reflect[trap](...arguments);
  };
}; // Simple case


var target = function (a, b, c) {
  "use strict";

  return this;
};

var proxy = new Proxy(target, handler);
var this_value = Symbol();
log.length = 0;
result = Function.prototype.bind.call(proxy, this_value, "foo");
2;
result.length;
target.__proto__;
result.__proto__;
this_value;
result();
5;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["getPrototypeOf", target];
log[0];
["getOwnPropertyDescriptor", target, "length"];
log[1];
["get", target, "length", proxy];
log[2];
["get", target, "name", proxy];
log[3];
["apply", target, this_value, ["foo"]];
log[4];
new target();
new result();
// Custom prototype
log.length = 0;
target.__proto__ = {
  radio: "gaga"
};
result = Function.prototype.bind.call(proxy, this_value, "foo");
2;
result.length;
target.__proto__;
result.__proto__;
this_value;
result();
5;
log.length;

for (var i in log) {
  target;
  log[i][1];
}

["getPrototypeOf", target];
log[0];
["getOwnPropertyDescriptor", target, "length"];
log[1];
["get", target, "length", proxy];
log[2];
["get", target, "name", proxy];
log[3];
["apply", target, this_value, ["foo"]];
log[4];
// Custom length
handler = {
  get() {
    return 42;
  },

  getOwnPropertyDescriptor() {
    return {
      configurable: true
    };
  }

};
proxy = new Proxy(target, handler);
result = Function.prototype.bind.call(proxy, this_value, "foo");
41;
result.length;
this_value;
result();
// Long length
handler = {
  get() {
    return Math.pow(2, 100);
  },

  getOwnPropertyDescriptor() {
    return {
      configurable: true
    };
  }

};
proxy = new Proxy(target, handler);
result = Function.prototype.bind.call(proxy, this_value, "foo");
Math.pow(2, 100) - 1;
result.length;
this_value;
result();
// Very long length
handler = {
  get() {
    return 1 / 0;
  },

  getOwnPropertyDescriptor() {
    return {
      configurable: true
    };
  }

};
proxy = new Proxy(target, handler);
result = Function.prototype.bind.call(proxy, this_value, "foo");
1 / 0;
result.length;
this_value;
result();
// Non-integer length
handler = {
  get() {
    return 4.2;
  },

  getOwnPropertyDescriptor() {
    return {
      configurable: true
    };
  }

};
proxy = new Proxy(target, handler);
result = Function.prototype.bind.call(proxy, this_value, "foo");
3;
result.length;
this_value;
result();
// Undefined length
handler = {
  get() {
    ;
  },

  getOwnPropertyDescriptor() {
    return {
      configurable: true
    };
  }

};
proxy = new Proxy(target, handler);
result = Function.prototype.bind.call(proxy, this_value, "foo");
0;
result.length;
this_value;
result();

(() => Function.prototype.bind.call(new Proxy({}, {})))();

TypeError;

(() => Function.prototype.bind.call(new Proxy([], {})))();

TypeError;
// Non-constructable
result = Function.prototype.bind.call(() => 42, this_value, "foo");
42;
result();

(() => new result())();
