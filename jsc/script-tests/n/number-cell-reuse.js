console.log("This test checks corner cases of the number cell reuse code. In particular, it checks for known cases where code generation for number cell reuse caused assertions to fail.");

function leftConstantRightSimple(a) {
  return 0.1 * (a * a);
}

leftConstantRightSimple(2);

function leftConstantRightComplex(a) {
  return 0.1 * (a * a + a);
}

leftConstantRightComplex(1);

function leftSimpleRightConstant(a) {
  return a * a * 0.1;
}

leftSimpleRightConstant(2);

function leftComplexRightConstant(a) {
  return (a * a + a) * 0.1;
}

leftComplexRightConstant(1);

function leftThisRightSimple(a) {
  return this * (a * a);
}

leftThisRightSimple(2);
leftThisRightSimple.call(2, 2);

function leftThisRightComplex(a) {
  return this * (a * a + a);
}

leftThisRightComplex(2);
leftThisRightComplex.call(2, 2);

function leftSimpleRightThis(a) {
  return a * a * this;
}

leftSimpleRightThis(2);
leftSimpleRightThis.call(2, 2);

function leftComplexRightThis(a) {
  return (a * a + a) * this;
}

leftComplexRightThis(2);
leftComplexRightThis.call(2, 2);
