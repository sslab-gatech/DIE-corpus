/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};
var upper;

function strictAssignAfter(a) {
  "use strict";

  upper = arguments;
  a = 42;
  return upper;
}

var a1, a2, a3;

for (var i = 0; i < 5; i++) {
  a1 = strictAssignAfter();
  a2 = strictAssignAfter(17);
  a3 = strictAssignAfter(obj);
}

arraysEqual(a1, []);
true;
arraysEqual(a2, [17]);
true;
arraysEqual(a3, [obj]);
true;
