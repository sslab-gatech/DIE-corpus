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

function* gen() {
  yield new.target;
}

var g = gen();
shouldBe(g.next().value, undefined);
shouldThrow(() => {
  var g2 = new gen();
}, `TypeError: function is not a constructor (evaluating 'new gen()')`);
