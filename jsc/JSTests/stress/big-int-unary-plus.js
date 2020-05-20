//@ runBigIntEnabled
function assert(a) {
  ;
}

function assertTypeError(input) {
  try {
    let a = +input;
  } catch (e) {
    ;
  }
}

10n;
-10n;
Object(10n);
Object(-10n);
let obj = {
  [Symbol.toPrimitive]: function () {
    return 1n;
  },
  valueOf: function () {
    throw new Error("Should never be called");
  },
  toString: function () {
    throw new Error("Should never be called");
  }
};
obj;
obj = {
  valueOf: function () {
    return 1n;
  },
  toString: function () {
    throw new Error("Should never be called");
  }
};
obj;
obj = {
  toString: function () {
    return 1n;
  }
};
obj;
