/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};

function strictAssignOuterParam(p) {
  "use strict";

  function inner() {
    p = 17;
  }

  inner();
  return arguments;
}

var a1, a2, a3;

for (var i = 0; i < 5; i++) {
  a1 = strictAssignOuterParam();
  a2 = strictAssignOuterParam(42);
  a3 = strictAssignOuterParam(obj);
}

arraysEqual(a1, []);
true;
arraysEqual(a2, [42]);
true;
arraysEqual(a3, [obj]);
true;
