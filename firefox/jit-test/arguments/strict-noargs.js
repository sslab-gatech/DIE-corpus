/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};

function strictNoargs() {
  "use strict";

  return arguments;
}

var a1, a2, a3;

for (var i = 0; i < 5; i++) {
  a1 = strictNoargs();
  a2 = strictNoargs(1);
  a3 = strictNoargs(1, obj);
}

arraysEqual(a1, []);
true;
arraysEqual(a2, [1]);
true;
arraysEqual(a3, [1, obj]);
true;
