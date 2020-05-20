function assert(cond) {
  ;
}

noInline(assert);

function shouldThrowTDZ(func) {
  try {
    func();
  } catch (e) {
    ;
  }
}

noInline(shouldThrowTDZ);
let b = false;

function foo() {
  if (b) {
    x = x;
    return x;
  }
}

foo(); // Link as UnresolvedProperty.
