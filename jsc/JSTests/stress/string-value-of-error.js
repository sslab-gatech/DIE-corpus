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

var valueOf = String.prototype.valueOf;

function test(string) {
  return valueOf.call(string);
}

noInline(test);
var object = {};
var symbol = Symbol("Cocoa");

for (var i = 0; i < 3e3; ++i) {
  shouldThrow(() => test(object), `TypeError: Type error`);
  shouldThrow(() => test(false), `TypeError: Type error`);
  shouldThrow(() => test(true), `TypeError: Type error`);
  shouldThrow(() => test(42), `TypeError: Type error`);
  shouldThrow(() => test(null), `TypeError: Type error`);
  shouldThrow(() => test(undefined), `TypeError: Type error`);
  shouldThrow(() => test(symbol), `TypeError: Type error`);
}

var string = "Hello";
var stringObject = new String(string);

for (var i = 0; i < 1e2; ++i) {
  shouldBe(test(string), string);
  shouldBe(test(stringObject), string);
}
