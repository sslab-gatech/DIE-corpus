function f(x) {
  Object.defineProperty(arguments, 0, {
    get: function () {
      ;
    }
  });
  return arguments;
}

var obj = f(1);
obj[0];
undefined;
Object.getOwnPropertyDescriptor(obj, 0).set;
undefined;

(() => {
  "use strict";

  obj[0] = 1;
})();

TypeError;
reportCompare(0, 0);
