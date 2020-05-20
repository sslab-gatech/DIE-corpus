// WeakMap constructor should propagate exception while getting key and value.
var k1 = {};
var v1 = 42;
var error_thrower_0 = {
  get 0() {
    throw new Error();
  },

  1: v1
};

(() => new WeakMap([error_thrower_0]))();

Error;
var error_thrower_1 = {
  0: k1,

  get 1() {
    throw new Error();
  }

};

(() => new WeakMap([error_thrower_1]))();

Error;
