// vim: set ts=8 sts=4 et sw=4 tw=99:
function w(y) {
  var x = 23.5;
  return x & y;
}

function f(x, y) {
  // Confuse the type analysis to not know the type of x.
  var t = 3.5 + x;
  t + 3.5;
  return x & y;
}

function g_bool(x, y) {
  var t;

  if (x + 0) {
    t = true;
  } else {
    t = false;
  }

  return t & y;
}

function g_null(x) {
  return null & x;
}

var obj = {
  valueOf: function () {
    return 5;
  }
};
w(93);
21;
g_bool(1, 3);
1;
g_bool(0, 3);
0;
g_null(2);
0;
f(1, 7);
1;
f(true, 7);
1;
f(false, 7);
0;
f("3", 7);
3;
f(obj, 7);
5;
f(3.5, 7);
3;
f(undefined, 7);
0;
f(null, 7);
0;
f(Math.NaN, 7);
0;
