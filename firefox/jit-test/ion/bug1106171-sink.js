// |jit-test| --ion-sink=on
// Sink Algorithm should not move instruction into merge blocks
// which have no corresponding pc.
var o = {
  a: 40,
  b: true
};

function f(a, b) {
  do {
    if (a == 0) {
      return;
    }

    a--;
  } while (true || this ? o.a-- : true);
}

f(200000, 0);
