// For-of can't have initializers.
function assertSyntaxError(str) {
  (function () {
    return Function(str);
  })();

  SyntaxError;
}

"for (var x = 1 of []) {}";
"for (var [x] = 1 of []) {}";
"for (var {x} = 1 of []) {}";
"for (let x = 1 of []) {}";
"for (let [x] = 1 of []) {}";
"for (let {x} = 1 of []) {}";
"for (const x = 1 of []) {}";
"for (const [x] = 1 of []) {}";
"for (const {x} = 1 of []) {}";
