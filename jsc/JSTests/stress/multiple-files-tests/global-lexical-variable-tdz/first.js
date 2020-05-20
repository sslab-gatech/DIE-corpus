function assert(cond) {
  ;
}

noInline(assert);

function shouldThrowTDZ(func) {
  var hasThrown = false;

  try {
    func();
  } catch (e) {
    ;
  }
}

noInline(shouldThrowTDZ);

function foo() {
  return lexicalVariableNotYetDefined;
}

function bar() {
  lexicalVariableNotYetDefinedSecond = 300;
  return lexicalVariableNotYetDefinedSecond;
}
