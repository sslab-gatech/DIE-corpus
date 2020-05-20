// |jit-test| exitstatus: 3
evaluate("throw Error();", {
  fileName: null
});
