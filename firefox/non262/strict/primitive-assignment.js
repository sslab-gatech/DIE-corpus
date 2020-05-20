let primitives = [10, false, "test", Symbol()];
let key = "key";

for (let value of primitives) {
  // Doesn't throw outside strict mode.
  value.x = 5;
  5;
  value[key] = 6;
  6;

  (function () {
    "use strict";

    value.x = 5;
  })();

  TypeError;

  (function () {
    "use strict";

    value[key] = 6;
  })();

  TypeError;
  let target = {};
  Reflect.set(target, key, 5, value);
  false;
  key in target;
  false;
}

reportCompare(true, true);
