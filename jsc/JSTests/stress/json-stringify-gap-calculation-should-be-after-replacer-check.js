var proxy = Proxy.revocable([], {});
proxy.revoke();

function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
}

shouldThrow(() => {
  var string = new String("Hello");

  string.toString = function () {
    throw new Error("Out");
  };

  JSON.stringify({}, proxy.proxy, string);
}, `TypeError: Array.isArray cannot be called on a Proxy that has been revoked`);
shouldThrow(() => {
  var string = new String("Hello");

  string.toString = function () {
    throw new Error("Out");
  };

  JSON.stringify({}, [], string);
}, `Error: Out`);
