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

var global = new Function("return this")();
shouldBe(typeof global.GeneratorFunction, 'undefined');

var generatorFunctionConstructor = function* () {
  ;
}.constructor;

shouldBe(generatorFunctionConstructor.__proto__, Function);
shouldBe(generatorFunctionConstructor.prototype.constructor, generatorFunctionConstructor);
shouldBe(generatorFunctionConstructor() instanceof generatorFunctionConstructor, true);
shouldBe(generatorFunctionConstructor("a") instanceof generatorFunctionConstructor, true);
shouldBe(generatorFunctionConstructor("a", "b") instanceof generatorFunctionConstructor, true); // Generator functions created by the GeneratorFunction constructor are not themselves constructors.

shouldThrow(() => new (generatorFunctionConstructor())(), "TypeError: function is not a constructor (evaluating 'new (generatorFunctionConstructor())')");
