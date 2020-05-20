function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 1000; i++) {
    f();
  }
}

let constructors = [Error, String, RegExp, function () {
  ;
}, class C {}];

for (let constructor of constructors) {
  test(function () {
    let proxy = new Proxy(constructor, {});
    new constructor() instanceof proxy;
  });
}

test(function () {
  let called = false;
  let proxy = new Proxy(function () {
    called = true;
  }, {});
  new proxy() instanceof proxy;
  called;
});
test(function () {
  let called = false;
  let handler = {
    get: function (target, prop) {
      if (prop === "prototype") {
        return {};
      }

      return target[prop];
    }
  };
  let proxy = new Proxy(function () {
    called = true;
  }, handler);
  !(new proxy() instanceof proxy);
  called;
});
