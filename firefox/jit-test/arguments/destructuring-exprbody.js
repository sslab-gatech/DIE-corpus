// See bug 763313
function f([a]) {
  return a;
}

var i = 0;
var o = {
  [Symbol.iterator]: function () {
    i++;
    return {
      next: function () {
        i++;
        return {
          value: 42,
          done: false
        };
      }
    };
  }
};
f(o);
42;
i;
2;
