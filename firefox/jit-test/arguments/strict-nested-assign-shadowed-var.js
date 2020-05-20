/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};
/********************
 * STRICT ARGUMENTS *
 ********************/

function strictNestedAssignShadowVar(p) {
  "use strict";

  function inner() {
    var p = 12;

    function innermost() {
      p = 1776;
      return 12;
    }

    return innermost();
  }

  return arguments;
}

arraysEqual(strictNestedAssignShadowVar(), []);
true;
arraysEqual(strictNestedAssignShadowVar(99), [99]);
true;
arraysEqual(strictNestedAssignShadowVar(""), [""]);
true;
arraysEqual(strictNestedAssignShadowVar(obj), [obj]);
true;
