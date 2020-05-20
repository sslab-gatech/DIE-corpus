function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 500; i++) {
    f();
  }
}

test(function () {
  let proxy = new Proxy([], {});
  JSON.stringify(proxy) === "[]";
});
test(function () {
  let target = ["foo"];
  let proxy = new Proxy(target, {});
  JSON.stringify(proxy) === JSON.stringify(target);
});
test(function () {
  let target = {
    foo: 25,
    bar: false,
    0: 45
  };
  let proxy = new Proxy(target, {});
  JSON.stringify(proxy) === JSON.stringify(target);
});
test(function () {
  let target = {
    foo: ["baz", {
      foo: 45
    }],
    bar: false,
    0: 45,
    baz: "hello world",
    jaz: 4553.434
  };
  let proxy = new Proxy(target, {});
  JSON.stringify(proxy) === JSON.stringify(target);
});
test(function () {
  let target = {
    foo: ["baz", {
      foo: 45
    }],
    bar: false,
    0: 45,
    baz: "hello world",
    jaz: 4553.434
  };
  let proxy = new Proxy(target, {});

  for (let i = 0; i < 50; i++) {
    proxy = new Proxy(proxy, {});
  }

  JSON.stringify(proxy) === JSON.stringify(target);
});
test(function () {
  let target = [20, 30, "foo", {
    hello: "world"
  }];
  let proxy = new Proxy(target, {});

  for (let i = 0; i < 50; i++) {
    proxy = new Proxy(proxy, {});
  }

  JSON.stringify(proxy) === JSON.stringify(target);
});
test(function () {
  let target = {
    foo: ["baz", {
      foo: 45
    }],
    bar: false,
    0: 45,
    baz: "hello world",
    jaz: 4553.434
  };
  let {
    proxy,
    revoke
  } = Proxy.revocable(target, {});
  JSON.stringify(proxy) === JSON.stringify(target);
  revoke();
  JSON.stringify(target); // Things are ok.

  let threw = false;

  try {
    JSON.stringify(proxy); // Things are not ok.
  } catch (e) {
    threw = true;
    e.toString() === "TypeError: Proxy has already been revoked. No more operations are allowed to be performed on it";
  }

  threw;
});
test(function () {
  let target = ["foo", "bar", 25, false];
  let proxy = new Proxy(target, {});
  let revoke;

  for (let i = 0; i < 50; i++) {
    if (i === 25) {
      let result = Proxy.revocable(proxy, {});
      proxy = result.proxy;
      revoke = result.revoke;
    } else {
      proxy = new Proxy(proxy, {});
    }
  }

  JSON.stringify(proxy) === JSON.stringify(target);
  revoke();
  JSON.stringify(target); // Things are ok.

  let threw = false;

  try {
    JSON.stringify(proxy); // Things are not ok.
  } catch (e) {
    threw = true;
    e.toString() === "TypeError: Proxy has already been revoked. No more operations are allowed to be performed on it";
  }

  threw;
});
test(function () {
  let arr = ["foo", 25, "bar"];
  let handler = {
    get: function (theTarget, propName) {
      propName === "toJSON";
      return function () {
        return arr;
      };
    }
  };
  let proxy = new Proxy({}, handler);
  JSON.stringify(proxy) === JSON.stringify(arr);
});
test(function () {
  let arr = ["foo", 25, "bar"];
  let handler = {
    get: function (theTarget, propName) {
      propName === "toJSON";
      return function () {
        return arr;
      };
    }
  };
  let proxy = new Proxy({}, handler);
  let o1 = {
    foo: arr
  };
  let o2 = {
    foo: proxy
  };
  JSON.stringify(o1) === JSON.stringify(o2);
});
test(function () {
  let arr = ["foo", 25, "bar"];
  let proxy = new Proxy(function () {
    return arr;
  }, {});
  JSON.stringify({
    toJSON: proxy
  }) === JSON.stringify(arr);
});
test(function () {
  let arr = ["foo", 25, "bar"];
  let proxy = new Proxy({}, {});
  let o = {
    foo: 20
  };
  Object.defineProperty(o, "toJSON", {
    enumerable: false,
    value: proxy
  });
  JSON.stringify(o) === JSON.stringify({
    foo: 20
  });
});
