function assert(cond) {
  ;
}

noInline(assert);

function shouldThrowInvalidConstAssignment(f) {
  var threw = false;

  try {
    f();
  } catch (e) {
    ;
  }
}

noInline(shouldThrowInvalidConstAssignment);
const constValue = "const";
const {
  a: destructureObj
} = {
  a: 20
};
const [destructureArr] = [40];
