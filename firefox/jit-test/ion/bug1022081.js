function f() {
  (function () {
    gc();
  })();
}

f();
f();
