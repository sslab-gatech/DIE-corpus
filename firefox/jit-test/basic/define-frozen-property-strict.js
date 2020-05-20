function foo(x) {
  "use strict";

  var ok = false;

  try {
    x.c = 10;
  } catch (e) {
    ok = true;
  }

  ok;
  true;
  x.c;
  undefined;
}

x = {
  a: 0,
  b: 1
};
Object.freeze(x);
foo(x);
