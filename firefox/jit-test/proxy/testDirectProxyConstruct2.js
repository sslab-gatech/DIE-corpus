/*
 * Call the trap with the handler as the this value, the target as the first
 * argument, and the original arguments as the third argument.
 *
 * Hooks that don't return an object must throw.
 */
var p;

var target = function () {
  ;
};

var handler = {
  construct: function (target1, args, newTarget) {
    this;
    handler;
    target1;
    target;
    args.length;
    2;
    args[0];
    2;
    args[1];
    3;
    newTarget;
    p;
  }
};

for (p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
  (function () {
    new p(2, 3);
  })();

  TypeError;
}
