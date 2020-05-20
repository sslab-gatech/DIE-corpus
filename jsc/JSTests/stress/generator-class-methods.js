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

class A {
  *gen() {
    yield this;
    yield this;
    return 42;
  }

  static *staticGen() {
    yield this;
    yield this;
    return 42;
  }

}

{
  let a = new A();
  let g = a.gen();
  shouldBe(g.next().value, a);
  shouldBe(g.next().value, a);
  shouldBe(g.next().value, 42);
  shouldBe(g.next().done, true);
}
{
  let a = new A();
  shouldThrow(() => {
    let g = new a.gen();
  }, `TypeError: function is not a constructor (evaluating 'new a.gen()')`);
}
{
  let g = A.staticGen();
  shouldBe(g.next().value, A);
  shouldBe(g.next().value, A);
  shouldBe(g.next().value, 42);
  shouldBe(g.next().done, true);
}
{
  shouldThrow(() => {
    let g = new A.staticGen();
  }, `TypeError: function is not a constructor (evaluating 'new A.staticGen()')`);
}
