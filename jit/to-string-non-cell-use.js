function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
}

function toString(value) {
  return `${value}`;
}

noInline(toString);

for (var i = 0; i < 1e4; ++i) {
  shouldBe(toString(i), i + "");
  shouldBe(toString(null), "null");
  shouldBe(toString(undefined), "undefined");
  shouldBe(toString(10.5), "10.5");
  shouldBe(toString(-10.5), "-10.5");
  shouldBe(toString(true), "true");
  shouldBe(toString(false), "false");
  shouldBe(toString(0 / 0), "NaN");
}

shouldBe(toString("HELLO"), "HELLO");
shouldThrow(() => {
  toString(Symbol("Cocoa"));
}, `TypeError: Cannot convert a symbol to a string`);
