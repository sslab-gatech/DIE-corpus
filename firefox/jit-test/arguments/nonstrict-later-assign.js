/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
function getLaterAssign(a) {
  var o = arguments;
  a = 17;
  return o;
}

var a1, a2;

for (var i = 0; i < 5; i++) {
  a1 = getLaterAssign(1);
}

arraysEqual(a1, [17]);
true;
