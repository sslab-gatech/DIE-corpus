/*
 * Call the trap with the handler as the this value, the target as the first
 * argument, the original this value as the second argument, and the original
 * arguments as the third argument.
 */
var target = function () {
  ;
};

var receiver = {};
var handler = {
  apply: function (target1, receiver1, args) {
    this;
    handler;
    target1;
    target;
    receiver1;
    receiver;
    args.length;
    2;
    args[0];
    2;
    args[1];
    3;
  }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
  p.call(receiver, 2, 3);
}
