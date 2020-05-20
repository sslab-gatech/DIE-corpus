// getter/setter ICs on the stack.
function getObjects() {
  var objs = [];
  objs.push({
    x: 0,

    get prop() {
      return ++this.x;
    },

    set prop(v) {
      this.x = v + 2;
    }

  });
  objs.push({
    x: 0,
    y: 0,

    get prop() {
      return this.y;
    },

    set prop(v) {
      this.y = v;
    }

  });
  return objs;
}

function f() {
  var objs = getObjects();
  var res = 0;

  for (var i = 0; i < 100; i++) {
    var o = objs[i % objs.length];
    res += o.prop;
    o.prop = i;
  }

  res;
  4901;
}

f();
