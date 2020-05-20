var g = newGlobal({
  newCompartment: true
});
var f = g.Function("fn", "fn()");
f(function () {
  (() => {
    arguments.callee.caller = null;
  })();

  TypeError;
  "can't access dead object";

  (() => arguments.callee.caller)();

  TypeError;
  "can't access dead object";
});
