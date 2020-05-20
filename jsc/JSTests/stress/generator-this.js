function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    ;
  }
}

var global = new Function('return this')();

(function () {
  function* gen() {
    yield this;
  }

  {
    let g = gen();
    shouldBe(g.next().value, global);
  }
  {
    shouldThrow(() => {
      let g = new gen();
      g.next();
    }, `TypeError: function is not a constructor (evaluating 'new gen()')`);
  }
  {
    let thisObject = {};
    let g = gen.call(thisObject);
    shouldBe(g.next().value, thisObject);
  }
})();

(function () {
  function* gen() {
    "use strict";

    yield this;
  }

  {
    let g = gen();
    shouldBe(g.next().value, undefined);
  }
  {
    shouldThrow(() => {
      let g = new gen();
      g.next();
    }, `TypeError: function is not a constructor (evaluating 'new gen()')`);
  }
  {
    let thisObject = {};
    let g = gen.call(thisObject);
    shouldBe(g.next().value, thisObject);
  }
})();
