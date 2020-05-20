function f() {
  var init, first;

  for (let i = (init = () => i = 1, 0); (first = () => i, i) < 0; ++i) {
    ;
  }

  init();
  1;
  first();
  0;
}

f();
