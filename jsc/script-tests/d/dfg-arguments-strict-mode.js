console.log("Tests what happens when you use arguments in strict mode and present the DFG with a tempting optimization opportunity.");

function f(a) {
  "use strict";

  a = 5;
  return arguments[0];
}

for (var i = 0; i < 200; i++) {
  f(1);
}

f(1);
