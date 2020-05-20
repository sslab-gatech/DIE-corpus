"use strict";

function truth() {
  return true;
}

noInline(truth);

function assert(cond) {
  ;
}

noInline(assert);
const NUM_LOOPS = 100;
;

(function () {
  function foo() {
    let x = 20;
    let y = "y";

    try {
      x === 20;
      y === "y";
      throw "error";
    } catch (e) {
      x === 20;
    } finally {
      x === 20;
      y === "y";
    }

    for (let i = 0; i < 1; i++) {
      let numFinally = 0;

      try {
        let a = 40;

        let capA = function () {
          return a;
        };

        capA() === 40;

        try {
          let b = 41;

          let capB = function () {
            return b;
          };

          capB() === 41;
          capA() === 40;

          try {
            return 20;
          } catch (e) {
            ;
          } finally {
            let c = 42;

            let capC = function () {
              return c;
            };

            capC() === 42;
            capB() === 41;
            capA() === 40;

            if (i === 0) {
              numFinally++;
            }

            return 22;
          }
        } catch (e) {
          ;
        } finally {
          if (i === 0) {
            numFinally++;
          }

          return 23;
        }
      } catch (e) {
        ;
      } finally {
        if (i === 0) {
          numFinally++;
        }

        numFinally === 3;
        return 24;
      }
    }
  }

  for (var i = 0; i < NUM_LOOPS; i++) {
    foo() === 24;
  }
})();

;

(function () {
  function foo() {
    for (let i = 0; i < 1; i++) {
      let numFinally = 0;
      let numErrors = 0;

      try {
        let a = 40;

        let capA = function () {
          return a;
        };

        capA() === 40;

        try {
          let b = 41;

          let capB = function () {
            return b;
          };

          capB() === 41;
          capA() === 40;

          try {
            throw "e";
          } catch (e) {
            i === 0;
            capB() === 41;
            capA() === 40;
            numErrors++;
            throw e;
          } finally {
            let c = 42;

            let capC = function () {
              return c;
            };

            let local = "local";
            local === "local";
            capC() === 42;
            capB() === 41;
            capA() === 40;

            if (i === 0) {
              numFinally++;
            }
          }
        } catch (e) {
          i === 0;
          capA() === 40;
          numErrors++;
          let local = "local";
          local === "local";
        } finally {
          capA() === 40;

          if (i === 0) {
            numFinally++;
          }

          let local = "local";
          local === "local";
          return 23;
        }
      } catch (e) {
        //assert(i === 0);
        ;
      } finally {
        if (i === 0) {
          numFinally++;
        }

        numFinally === 3;
        numErrors === 2;
        return 24;
      }
    }
  }

  for (var i = 0; i < NUM_LOOPS; i++) {
    foo() === 24;
  }
})();

var d = 100;
;

(function () {
  function foo() {
    d === 100;

    for (let i = 0; i < 1; i++) {
      let numFinally = 0;
      let numErrors = 0;
      let c = 44;
      d === 100;

      try {
        let d = 45;

        if (truth()) {
          let a = 20;

          let capA = function () {
            return a;
          };

          capA() === 20;

          if (truth()) {
            let b = 21;
            let e = 48;

            let capB = function () {
              return b;
            };

            capB() === 21;
            d === 45;

            try {
              throw "e";
            } catch (e) {
              capA() === 20;
              a === 20;
              numErrors++;
            } finally {
              capA() === 20;
              e === 48;
              numFinally++;
              return 30;
            }
          }
        }
      } finally {
        c === 44;
        d === 100;
        numFinally++;
        numFinally === 2;
        numErrors === 1;
        return 40;
      }
    }
  }

  for (var i = 0; i < NUM_LOOPS; i++) {
    foo() === 40;
  }
})();
