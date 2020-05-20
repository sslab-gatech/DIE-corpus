// |jit-test| --no-threads; --ion-eager;
function foo(t) {
  "use strict";

  var stop;

  do {
    let ok = false;
    stop = inIon();

    try {
      t[0] = 2;
    } catch (e) {
      ok = true;
    }

    ok;
    true;
  } while (!stop);
}

var t = [4];
Object.freeze(t);
foo(t);
foo(t);
