"use strict";

var t = [4];
var stop;
Object.freeze(t);

do {
  let ok = false;
  stop = inIon();

  try {
    t[1] = 2;
  } catch (e) {
    ok = true;
  }

  ok;
  true;
  t.length;
  1;
  t[1];
  undefined;
} while (!stop);
