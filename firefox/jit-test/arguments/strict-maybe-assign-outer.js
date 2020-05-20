/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};

function strictMaybeAssignOuterParam(p) {
  "use strict";

  function inner() {
    p = 17;
  }

  return arguments;
}

var a1, a2, a3;

for (var i = 0; i < 5; i++) {
  a1 = strictMaybeAssignOuterParam();
  a2 = strictMaybeAssignOuterParam(17);
  a3 = strictMaybeAssignOuterParam(obj);
}

arraysEqual(a1, []);
true;
arraysEqual(a2, [17]);
true;
arraysEqual(a3, [obj]);
true;
