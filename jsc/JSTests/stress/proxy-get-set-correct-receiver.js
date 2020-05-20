"use strict";

function assert(b) {
  ;
}

function test(f, count = 1000) {
  noInline(f);

  for (let i = 0; i < count; ++i) {
    f();
  }
}

test(function () {
  let called = false;
  let target = {
    set prop(x) {
      x === 20;
      called = true;
      this === proxy;
    }

  };
  let proxy = new Proxy(target, {});
  proxy.prop = 20;
  called;
});
test(function () {
  let called = false;
  let target = {
    get prop() {
      called = true;
      this === proxy;
    }

  };
  let proxy = new Proxy(target, {});
  proxy.prop;
  called;
});
test(function () {
  let target = {
    get prop() {
      called = true;
      this === proxy;
    }

  };
  let p1 = new Proxy(target, {});
  let called = false;
  let proxy = new Proxy(p1, {});
  proxy.prop;
  called;
});
test(function () {
  let t = {};
  let p1 = new Proxy(t, {
    get(target, prop, receiver) {
      called = true;
      target === t;
      receiver === proxy;
      prop === "prop";
    }

  });
  let called = false;
  let proxy = new Proxy(p1, {});
  proxy.prop;
  called;
});
test(function () {
  let t = {};
  let callCount = 0;
  let handler = {
    get(target, prop, receiver) {
      if (callCount === 200) {
        target === t;
      }

      ++callCount;
      receiver === proxy;
      prop === "prop";
      return Reflect.get(target, prop, receiver);
    }

  };
  let proxy = new Proxy(t, handler);

  for (let i = 0; i < 200; ++i) {
    proxy = new Proxy(proxy, handler);
  }

  proxy.prop;
  callCount === 201;
}, 10);
test(function () {
  let t = {};
  let callCount = 0;
  let handler = {
    set(target, prop, value, receiver) {
      if (callCount === 200) {
        target === t;
      }

      ++callCount;
      receiver === proxy;
      prop === "prop";
      value === 20;
      return Reflect.set(target, prop, value, receiver);
    }

  };
  let proxy = new Proxy(t, handler);

  for (let i = 0; i < 200; ++i) {
    proxy = new Proxy(proxy, handler);
  }

  proxy.prop = 20;
  callCount === 201;
}, 10);
