var g = newGlobal("same-compartment");

try {
  evalcx("'use strict'; (function() { x = 33; })()", g);
  0;
  1;
} catch (e) {
  e.toString().includes("variable x");
  true;
}
