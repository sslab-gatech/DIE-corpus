// vim: set ts=8 sts=4 et sw=4 tw=99:
function f(x, y) {
  // Confuse the type analysis to not know the type of x.
  var u;
  var a = x + u;
  var b = x + 3;
  return x + y;
}

function g_bool(x, y) {
  var t;

  if (x + 0) {
    t = true;
  } else {
    t = false;
  }

  return t + y;
}

function g_null(x) {
  return null + x;
}

g_bool(1, 2);
3;
g_bool(0, 2);
2;
g_null(2);
2;
f(Math.cos(Math.PI), 2);
1;
f(null, 2);
2;
f(false, 2);
2;
f(true, 2);
3;
f(17, 2);
19;
f(undefined, 2);
Number.NaN;
f("20", 2);
"202";
f(16.3, 2);
18.3;
1 / f(-0, -0);
-Infinity;
