var o = {
  x: 42
};

function f(index, param) {
  arguments[1] = 0;
  var ret = 0;

  for (var i = 0; i < 5; ++i) {
    ret = arguments[index].x;
  }

  return ret;
}

f(2, o, o);
42;
f(1, o, o);
undefined;
