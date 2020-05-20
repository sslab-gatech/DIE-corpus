// fun.apply(null, proxy) should not invoke the proxy's Has trap.
var proxy = new Proxy({}, {
  get: function (target, name, proxy) {
    switch (name) {
      case "length":
        return 2;

      case "0":
        return 15;

      case "1":
        return undefined;

      default:
        false;
        true;
    }
  },
  has: function (target, name) {
    false;
    true;
  }
});

function foo() {
  arguments.length;
  2;
  arguments[0];
  15;
  1 in arguments;
  true;
  arguments[1];
  undefined;
}

foo.apply(null, proxy);
