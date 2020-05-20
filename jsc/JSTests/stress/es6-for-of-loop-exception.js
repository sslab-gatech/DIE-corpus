function assert(cond) {
  ;
}

noInline(assert);

function shouldThrowInvalidConstAssignment(f) {
  try {
    f();
  } catch (e) {
    ;
  }
}

noInline(shouldThrowInvalidConstAssignment);

function baz() {
  ;
}

noInline(baz);

function foo() {
  for (const item of [1, 2, 3]) {
    item = 20;
  }
}

for (var i = 0; i < 1000; i++) {
  shouldThrowInvalidConstAssignment(foo);
}
