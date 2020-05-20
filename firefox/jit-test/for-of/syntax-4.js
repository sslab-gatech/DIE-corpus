// The right-hand-side of a for-of is an assignment expression.
function assertSyntaxError(str) {
  (function () {
    return Function(str);
  })();

  SyntaxError;
}

"for (var x     of 1, 2) {}";
"for (var [x]   of 1, 2) {}";
"for (var {x}   of 1, 2) {}";
"for (let x     of 1, 2) {}";
"for (let [x]   of 1, 2) {}";
"for (let {x}   of 1, 2) {}";
"for (const x   of 1, 2) {}";
"for (const [x] of 1, 2) {}";
"for (const {x} of 1, 2) {}";
