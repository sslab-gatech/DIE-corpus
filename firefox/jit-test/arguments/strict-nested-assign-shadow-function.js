/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};

function strictNestedAssignShadowFunction(p) {
  "use strict";

  function inner() {
    function p() {
      ;
    }

    p = 1776;
  }

  return arguments;
}

var a1, a2, a3, a4;

for (var i = 0; i < 5; i++) {
  a1 = strictNestedAssignShadowFunction();
  a2 = strictNestedAssignShadowFunction(99);
  a3 = strictNestedAssignShadowFunction("");
  a4 = strictNestedAssignShadowFunction(obj);
}

arraysEqual(a1, []);
true;
arraysEqual(a2, [99]);
true;
arraysEqual(a3, [""]);
true;
arraysEqual(a4, [obj]);
true;
