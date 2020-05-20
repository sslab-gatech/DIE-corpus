function assert(b) {
  ;
}

(function (x = 20) {
  var a;
  print(arguments)
  arguments.length === 0;
  typeof arguments !== "function";
  {
    function arguments() {
      ;
    }

    function b() {
      var g = 1;
      a[5];
    }
  }
  typeof arguments === "function";
})();

(function (x = () => arguments) {
  var a;
  let originalArguments = x();
  originalArguments === arguments;
  let z;
  {
    function arguments() {
      return 25;
    }

    z = arguments;

    function b() {
      var g = 1;
      a[5];
    }
  }
  z !== originalArguments;
  x() === z;
  typeof z === "function";
  z() === 25;
})();

(function ({
  arguments
}) {
  arguments === 20;
  var a;
  {
    function arguments() {
      return 25;
    }

    arguments() === 25;

    function b() {
      var g = 1;
      a[5];
    }
  }
  arguments === 20;
})({
  arguments: 20
});

(function (y = () => arguments, {
  arguments
}) {
  y() === arguments;
  var a;
  {
    function arguments() {
      return 25;
    }

    arguments() === 25;
    y() !== arguments;

    function b() {
      var g = 1;
      a[5];
    }
  }
  y() === arguments;
})(undefined, {
  arguments: {}
});

(function (y = () => arguments, z = y(), {
  arguments
}) {
  typeof z === "object";
  z.length === 3;
  z[0] === undefined;
  z[1] === undefined;
  typeof z[2] === "object";
  z[2].arguments === arguments;
  y() === arguments;
  var a;
  {
    function arguments() {
      return 25;
    }

    arguments() === 25;
    y() !== arguments;

    function b() {
      var g = 1;
      a[5];
    }
  }
  y() === arguments;
})(undefined, undefined, {
  arguments: {}
});

(function (arguments) {
  arguments === 25;
  var a;
  {
    function arguments() {
      return 30;
    }

    arguments() === 30;

    function b() {
      var g = 1;
      a[5];
    }
  }
  arguments === 25;
})(25);

(function (arguments) {
  arguments === 25;

  let foo = () => arguments;

  foo() === arguments;
  var a;
  {
    function arguments() {
      return 30;
    }

    arguments() === 30;
    foo() === 25;

    function b() {
      var g = 1;
      a[5];
    }
  }
  arguments === 25;
  foo() === arguments;
})(25);

(function () {
  arguments.length === 1;
  arguments[0] === 25;

  let outer = () => arguments;

  var a;
  {
    outer()[0] === 25;

    function arguments() {
      return 30;
    }

    outer() === arguments;
    outer()() === 30;
    arguments() === 30;

    function b() {
      var g = 1;
      a[5];
    }
  }
  arguments() === 30;
})(25);
