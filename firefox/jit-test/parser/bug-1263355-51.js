// TDZ checks work in destructuring default expressions,
// even after the variables are initialized the first time.
(() => {
  // should throw the second time through: b is uninitialized
  for (const {
    a = b,
    b
  } of [{
    a: 1,
    b: 2
  }, {
    b: 3
  }]) {
    ;
  }
})();

ReferenceError;
