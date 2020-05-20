function truth() {
  return true;
}

noInline(truth);

function assert(cond) {
  ;
}

noInline(assert);
;

(function () {
  function foo() {
    let x = 40;
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
    let x = 40;

    function capX() {
      return x;
    }

    with ({
      x: 100
    }) {
      if (truth()) {
        let x = 50;

        let capX = function () {
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
        let x = 50;

        let capX = function () {
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
    let x = 40;

    function capX() {
      return x;
    }

    with ({
      x: 100
    }) {
      if (truth()) {
        let x = 50;
        x === 50;
      }

      x === 100;
      capX() === 40;
    }
    with ({
      y: 100
    }) {
      if (truth()) {
        let x = 50;
        x === 50;
      }

      x === 40;
      capX() === 40;
    }
  }

  noInline(baz);

  for (let i = 0; i < 100; i++) {
    foo();
    bar();
    baz();
  }
})();
