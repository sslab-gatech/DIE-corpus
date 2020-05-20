/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};

function noargs() {
  return arguments;
}

var a1, a2, a3;

for (var i = 0; i < 5; i++) {
  a1 = noargs();
  a2 = noargs(1);
  a3 = noargs(2, obj, 8);
}

arraysEqual(a1, []);
true;
arraysEqual(a2, [1]);
true;
arraysEqual(a3, [2, obj, 8]);
true;
