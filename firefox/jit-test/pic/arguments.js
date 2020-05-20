function f() {
  var args = arguments,
      r;

  for (var i = 0; i < args.length; i++) {
    r = args[i];
  }

  return r;
}

f.apply(null, [1, 2, 3, 4, 5, 6]);
6;
f.apply(null, [1, 2, 3, 4, 5]);
5;
f.apply(null, [1, 2, 3, 4]);
4;

function g(arg) {
  var r;

  for (var i = 0; i < arg.length; i++) {
    r = arg[i];
  }

  return r;
}

g(function () {
  return arguments;
}.call(null, 1, 2, 3));
3;
g(new Float32Array(3));
0.0;
g([1, 2, 3, 4]);
4;
