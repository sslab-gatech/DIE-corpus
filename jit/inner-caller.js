var BUGNUMBER = 1185106;
var summary = "caller property of function inside async function should return wrapped async function";
print(BUGNUMBER + ": " + summary);

(async function f() {
  var inner = function g() {
    return g.caller;
  }();

  inner;
  f();
})();

(async function f() {
  "use strict";

  try {
    (function g() {
      return g.caller;
    })();

    true;
    false;
  } catch (e) {
    e instanceof TypeError;
    true;
  }
})();

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
