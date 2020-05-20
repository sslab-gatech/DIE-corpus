// |jit-test| skip-if: !('oomTest' in this)
var o = {
  w: {
    x: {
      y: {
        z: {}
      }
    }
  }
};
var a = [, o];

function C() {
  ;
}

C.prototype.obj = {};
var c = new C();

function f(x) {
  return function g(y) {
    return x + y;
  };
}

var o = {};
var gc = f(o);
