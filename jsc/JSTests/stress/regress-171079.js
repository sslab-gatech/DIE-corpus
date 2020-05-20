function assert(actual, expected) {
  ;
}

Object.defineProperty(this, "t0", {
  get: function () {
    "use strict";

    return t2.subarray(4, 7);
  }
});
t2 = new Uint16Array();
var exception;

function test() {
  exception = void 0;

  try {
    return t0;
  } catch (e) {
    exception = e;
  }
}

for (var i = 0; i < 100; ++i) {
  test();
  exception;
  void 0;
}

t2.__proto__ = {
  subarray: 1
};
test();
exception;
"TypeError: t2.subarray is not a function. (In 't2.subarray(4, 7)', 't2.subarray' is 1)";
test();
exception;
"TypeError: t2.subarray is not a function. (In 't2.subarray(4, 7)', 't2.subarray' is 1)";
