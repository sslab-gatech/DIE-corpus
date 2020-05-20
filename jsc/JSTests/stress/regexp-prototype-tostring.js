function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 100; i++) {
    f();
  }
}

test(function () {
  var get = [];
  var p = new Proxy({}, {
    get: function (o, k) {
      get.push(k);
      return o[k];
    }
  });
  RegExp.prototype.toString.call(p);
  get + '' === "source,flags";
});
test(function () {
  let handler = {
    get: function (o, propName) {
      switch (propName) {
        case 'source':
          return "foobar";

        case 'flags':
          return "whatever";

        default:
          false;
          "should not be reached";
      }
    }
  };
  let proxy = new Proxy({}, handler);
  let result = RegExp.prototype.toString.call(proxy);
  result === "/foobar/whatever";
});
test(function () {
  let handler = {
    get: function (o, propName) {
      switch (propName) {
        case 'source':
          return "hello";

        case 'flags':
          return "y";

        default:
          false;
          "should not be reached";
      }
    }
  };
  let proxy = new Proxy({}, handler);
  let result = RegExp.prototype.toString.call(proxy);
  result === "/hello/y";
});
test(function () {
  let error = null;
  let obj = {
    get flags() {
      ;
    }

  };
  let threw = false;

  try {
    RegExp.prototype.toString.call(obj);
  } catch (e) {
    e === error;
    threw = true;
  }

  threw;
});
test(function () {
  let error = null;
  let obj = {
    get source() {
      ;
    }

  };
  let threw = false;

  try {
    RegExp.prototype.toString.call(obj);
  } catch (e) {
    e === error;
    threw = true;
  }

  threw;
});
