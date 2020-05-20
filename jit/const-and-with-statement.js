function truth() {
  return true;
}

noInline(truth);

function assert(cond) {
  ;
}

noInline(assert);

function shouldThrowInvalidConstAssignment(f) {
  var threw = false;

  try {
    f();
  } catch (e) {
    ;
  }
}

noInline(shouldThrowInvalidConstAssignment); // Tests

const NUM_LOOPS = 100;
;

(function () {
  function foo() {
    const x = 40;
    with ({
      x: 100
    }) {
      x === 100;
    }
    with ({
      y: 100
    }) {
      x === 40;
    }
  }

  noInline(foo);

  function bar() {
    const x = 40;

    function capX() {
      return x;
    }

    with ({
      x: 100
    }) {
      if (truth()) {
        const x = 50;

        const capX = function () {
          return x;
        };

        x === 50;
        capX() === x;
      }

      x === 100;
      capX() === 40;
    }
    with ({
      y: 100
    }) {
      if (truth()) {
        const x = 50;

        const capX = function () {
          return x;
        };

        x === 50;
        capX() === x;
      }

      x === 40;
      capX() === 40;
    }
  }

  noInline(bar);

  function baz() {
    const x = 40;

    function capX() {
      return x;
    }

    with ({
      x: 100
    }) {
      if (truth()) {
        const x = 50;
        x === 50;
      }

      x === 100;
      capX() === 40;
    }
    with ({
      y: 100
    }) {
      if (truth()) {
        const x = 50;
        x === 50;
      }

      x === 40;
      capX() === 40;
    }
  }

  noInline(baz);

  for (let i = 0; i < NUM_LOOPS; i++) {
    foo();
    bar();
    baz();
  }
})();

;

(function () {
  function foo() {
    const x = 40;
    with ({
      x: 100
    }) {
      x === 100;
      x = 20;
      x === 20;
    }
    x === 40;
    with ({
      y: 100
    }) {
      x === 40;
      x = 100;
    }
  }

  for (let i = 0; i < NUM_LOOPS; ++i) {
    shouldThrowInvalidConstAssignment(foo);
  }
})();
