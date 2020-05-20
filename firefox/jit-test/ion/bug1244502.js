function f(arg) {
  bailout();
  arguments.length;
  2;
  arg;
  "";
  arguments[0];
  "";
  arguments[1];
  0;
}

for (var i = 0; i < 100; ++i) {
  (function () {
    f.call(1, "", 0);
  })();
}
