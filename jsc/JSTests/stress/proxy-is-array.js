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
  Array.isArray(proxy);
});
test(function () {
  let {
    proxy,
    revoke
  } = Proxy.revocable([], {});
  Array.isArray(proxy);
  revoke();
  let threw = false;

  try {
    Array.isArray(proxy);
  } catch (e) {
    threw = true;
    e.toString() === "TypeError: Array.isArray cannot be called on a Proxy that has been revoked";
  }

  threw;
});
test(function () {
  let proxyChain = new Proxy([], {});

  for (let i = 0; i < 400; i++) {
    proxyChain = new Proxy(proxyChain, {});
  }

  Array.isArray(proxyChain);
});
test(function () {
  let proxyChain = new Proxy([], {});
  let revoke = null;

  for (let i = 0; i < 400; i++) {
    if (i !== 250) {
      proxyChain = new Proxy(proxyChain, {});
    } else {
      let result = Proxy.revocable(proxyChain, {});
      proxyChain = result.proxy;
      revoke = result.revoke;
    }
  }

  Array.isArray(proxyChain);
  revoke();
  let threw = false;

  try {
    Array.isArray(proxyChain);
  } catch (e) {
    threw = true;
    e.toString() === "TypeError: Array.isArray cannot be called on a Proxy that has been revoked";
  }

  threw;
});
