m = {};
Object.defineProperty(m, 'p', {
  value: 3
});

(function () {
  "use strict";

  delete m.p;
})();

TypeError;
x = new Proxy(m, {});
x.p;
3;

(function fun() {
  "use strict";

  return delete x.p;
})();

TypeError;
