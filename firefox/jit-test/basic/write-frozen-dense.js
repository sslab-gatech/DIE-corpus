var t = [4];
var stop;
Object.freeze(t);

do {
  stop = inIon();
  t[0] = 2;
  t[0];
  4;
} while (!stop);
