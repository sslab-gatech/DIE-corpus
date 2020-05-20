/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};

function strictAssignOuterParamPSYCH(p) {
  "use strict";

  function inner(p) {
    p = 17;
  }

  inner();
  return arguments;
}

var a1, a2, a3;

for (var i = 0; i < 5; i++) {
  a1 = strictAssignOuterParamPSYCH();
  a2 = strictAssignOuterParamPSYCH(17);
  a3 = strictAssignOuterParamPSYCH(obj);
}

arraysEqual(a1, []);
true;
arraysEqual(a2, [17]);
true;
arraysEqual(a3, [obj]);
true;
