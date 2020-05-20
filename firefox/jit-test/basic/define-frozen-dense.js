var t = [4];
var stop;
Object.freeze(t);

do {
  stop = inIon();
  t[1] = 2;
  t.length;
  1;
  t[1];
  undefined;
} while (!stop);
