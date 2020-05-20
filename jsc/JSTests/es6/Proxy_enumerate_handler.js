function test() {
  var proxied = {};
  var passed = false;

  for (var i in new Proxy(proxied, {
    enumerate: function (t) {
      passed = t === proxied;
      return {
        next: function () {
          return {
            done: true,
            value: null
          };
        }
      };
    }
  })) {
    ;
  }

  return passed;
}

test();
