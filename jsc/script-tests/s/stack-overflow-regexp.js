console.log('Test that we do not overflow the stack while handling regular expressions'); // Base case.

try {
  new RegExp(Array(50000).join("(") + "a" + Array(50000).join(")"));
} catch (e) {
  ;
}

{
  // Verify that a deep JS stack does not help avoiding the error.
  function recursiveCall(depth) {
    if (!(depth % 10)) {
      console.log("Creating RegExp at depth " + depth);

      try {
        new RegExp(Array(50000).join("(") + "a" + Array(50000).join(")"));
      } catch (e) {
        ;
      }
    }

    if (depth < 100) {
      recursiveCall(depth + 1);
    }
  }

  recursiveCall(0);
}
{
  // Have the deepest nested subpattern surrounded by other expressions.
  var expression = "";

  for (let i = 0; i < 50000; ++i) {
    expression += "((a)(";
  }

  expression += "b";

  for (let i = 0; i < 50000; ++i) {
    expression += ")(c))";
  }

  try {
    new RegExp(expression);
  } catch (e) {
    ;
  }
}
