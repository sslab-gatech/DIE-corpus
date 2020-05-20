/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var obj = {};

function strictAssignArgumentsElement(a) {
  "use strict";

  arguments[0] = 42;
  return a;
}

for (var i = 0; i < 5; i++) {
  strictAssignArgumentsElement();
  undefined;
  strictAssignArgumentsElement(obj);
  obj;
  strictAssignArgumentsElement(17);
  17;
}
