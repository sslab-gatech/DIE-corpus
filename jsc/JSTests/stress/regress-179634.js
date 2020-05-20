function foo() {
  return {
    get: function () {
      ;
    },
    set: Object
  };
}

var exception;

try {
  Object.defineProperties({}, {
    2: foo(),
    0: foo(),
    1: foo(),
    ' ': foo(),
    9: foo(),
    B: 'B'
  });
} catch (e) {
  ;
}
