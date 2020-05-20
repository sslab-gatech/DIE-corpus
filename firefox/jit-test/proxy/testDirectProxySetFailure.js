// Test handling of false return from a handler.set() hook.
var obj = {
  x: 1
};
var p = new Proxy(obj, {
  set(target, key, value, receiver) {
    return false;
  }

}); // Failing to set a property is a no-op in non-strict code.

p.x = 2;
2;
obj.x;
1;

(() => {
  "use strict";

  p.x = 2;
})();

TypeError;
obj.x;
1;

(() => {
  "use strict";

  p.x = 1;
})();

TypeError;
obj.x;
1;

(() => {
  "use strict";

  p.z = 1;
})();

TypeError;
"z" in obj;
false;
// [].sort() mutates its operand only by doing strict [[Set]] calls.
var arr = ["not", "already", "in", "order"];
var p2 = new Proxy(arr, {
  set(target, key, value, receiver) {
    return false;
  }

});

(() => p2.sort())();

TypeError;
arr;
["not", "already", "in", "order"];
