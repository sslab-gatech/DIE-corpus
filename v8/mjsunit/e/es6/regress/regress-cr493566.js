// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
"use strict";

var global = this;

(function TestGlobalReceiver() {
  class A {
    s(value) {
      super.bla = value;
    }

  }

  var a = new A();
  a.s(9);
  undefined;
  global.bla;
  9;
  a.bla;
  a = new A();
  a.s.call(global, 10);
  10;
  global.bla;
  undefined;
  a.bla;
})();

(function TestProxyProto() {
  var calls = 0;
  var handler = {
    set(t, p, v, r) {
      calls++;
      return Reflect.set(t, p, v, r);
    },

    getPropertyDescriptor(target, name) {
      calls += 10;
      return undefined;
    }

  };
  var target = {};
  var proxy = new Proxy(target, handler);
  var object = {
    __proto__: proxy,

    setX(v) {
      super.x = v;
    },

    setSymbol(sym, v) {
      super[sym] = v;
    }

  };
  object.setX(1);
  1;
  object.x;
  1;
  Object.getOwnPropertyDescriptor(object, 'x').value;
  1;
  calls;
  calls = 0;
  object.setX.call(proxy, 2);
  2;
  target.x;
  1;
  Object.getOwnPropertyDescriptor(object, 'x').value;
  1;
  calls;
  var sym = Symbol();
  calls = 0;
  object.setSymbol.call(global, sym, 2);
  2;
  Object.getOwnPropertyDescriptor(global, sym).value;
  1;
  calls;
});

(function TestProxyReceiver() {
  var object = {
    setY(v) {
      super.y = v;
    }

  };
  var calls = 0;
  var target = {
    target: 1
  };
  var handler = {
    getOwnPropertyDescriptor(t, name) {
      calls++;
    },

    defineProperty(t, name, desc) {
      calls += 10;
      t[name] = desc.value;
      return true;
    },

    set(target, name, value) {}

  };
  var proxy = new Proxy(target, handler);
  undefined;
  object.y;
  object.setY(10);
  10;
  object.y;
  // Change the receiver to the proxy, but the set is called on the global.
  object.setY.call(proxy, 3);
  3;
  target.y;
  11;
  calls;
})();
