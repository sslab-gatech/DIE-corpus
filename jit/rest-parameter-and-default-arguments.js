function assert(b) {
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

function foo(a = function () {
  return c;
}, b = a(), ...c) {
  return a();
}

noInline(foo);

function baz(a = function () {
  return b;
}, ...b) {
  return a();
}

for (let i = 0; i < 1000; i++) {
  shouldThrowTDZ(function () {
    foo(undefined, undefined, 10, 20);
  });
  let o = {
    x: 20
  };
  let result = baz(undefined, 10, o, "baz");
  result.length === 3;
  result[0] === 10;
  result[1] === o;
  result[2] === "baz";
}
