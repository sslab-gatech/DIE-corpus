// arrow functions are not implicitly strict-mode code
var f = a => {
  with (a) {
    return f();
  }
};

f({
  f: () => 7
});
7;

f = a => function () {
  with (a) {
    return f();
  }
};

f({
  f: () => 7
})();
7;

f = (a = {
  x: 1,
  x: 2
}) => b => {
  "use strict";

  return a.x;
};

f()(0);
2;
