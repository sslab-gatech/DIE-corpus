var proxy = new Proxy(function () {
  ;
}, {
  getOwnPropertyDescriptor(target, name) {
    name;
    "length";
    return {
      value: 3,
      configurable: true
    };
  },

  get(target, name) {
    if (name == "length") {
      return 3;
    }

    if (name == "name") {
      return "hello world";
    }

    false;
    true;
  }

});
var bound = Function.prototype.bind.call(proxy);
bound.name;
"bound hello world";
bound.length;
3;

var fun = function () {
  ;
};

Object.defineProperty(fun, "name", {
  value: 1337
});
Object.defineProperty(fun, "length", {
  value: "15"
});
bound = fun.bind();
bound.name;
"bound ";
bound.length;
0;
Object.defineProperty(fun, "length", {
  value: Number.MAX_SAFE_INTEGER
});
bound = fun.bind();
bound.length;
Number.MAX_SAFE_INTEGER;
Object.defineProperty(fun, "length", {
  value: -100
});
bound = fun.bind();
bound.length;
0;

fun = function f(a, ...b) {
  ;
};

fun.length;
1;
bound = fun.bind();
bound.length;
1;
reportCompare(0, 0, 'ok');
