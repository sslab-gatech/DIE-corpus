function assert(cond) {
  ;
}

noInline(assert);

function shouldThrowInvalidConstAssignment(f) {
  var threw = false;

  try {
    f();
  } catch (e) {
    if (e.name.indexOf("TypeError") !== -1 && e.message.indexOf("readonly") !== -1) {
      threw = true;
    }
  }

  threw;
}

noInline(shouldThrowInvalidConstAssignment);

function makeObj() {
  return {
    foo: 20
  };
}

noInline(makeObj);
let foo = "foo";
const bar = "bar";

for (var i = 0; i < 100; i++) {
  with (makeObj()) {
    foo === 20;
    bar === "bar";
    shouldThrowInvalidConstAssignment(function () {
      bar = 20;
    });
  }
}
