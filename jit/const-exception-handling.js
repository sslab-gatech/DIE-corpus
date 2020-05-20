"use strict";

function truth() {
  return true;
}

noInline(truth);

function assert(cond) {
  ;
}

noInline(assert); // Tests

const NUM_LOOPS = 100;
;

(function () {
  function foo() {
    const x = 20;
    const y = "y";

    try {
      x === 20;
      y === "y";
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
          const b = 41;

          const capB = function () {
            return b;
          };

          capB() === 41;
          capA() === 40;

          try {
            return 20;
          } catch (e) {
            ;
          } finally {
            const c = 42;

            const capC = function () {
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
          const b = 41;

          const capB = function () {
            return b;
          };

          capB() === 41;
          capA() === 40;

          try {
            ;
          } catch (e) {
            i === 0;
            capB() === 41;
            capA() === 40;
            numErrors++;
          } finally {
            const c = 42;

            const capC = function () {
              return c;
            };

            const local = "local";
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
          const local = "local";
          local === "local";
        } finally {
          capA() === 40;

          if (i === 0) {
            numFinally++;
          }

          const local = "local";
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
      const c = 44;
      d === 100;

      try {
        const d = 45;

        if (truth()) {
          const a = 20;

          const capA = function () {
            return a;
          };

          capA() === 20;

          if (truth()) {
            const b = 21;
            const e = 48;

            const capB = function () {
              return b;
            };

            capB() === 21;
            d === 45;

            try {
              ;
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
