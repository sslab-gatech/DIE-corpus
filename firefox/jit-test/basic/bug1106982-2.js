var x = "wrong";
var t = {
  x: "x"
};
var hits = 0;
var p = new Proxy(t, {
  has(t, id) {
    var found = id in t;

    if (++hits == 2) {
      delete t[id];
    }

    return found;
  },

  get(t, id) {
    return t[id];
  }

});

function testFunc() {
  x += " x";
}

var cloneFunc = clone(testFunc, p);
cloneFunc();
hits;
2;
t.x;
"undefined x";
