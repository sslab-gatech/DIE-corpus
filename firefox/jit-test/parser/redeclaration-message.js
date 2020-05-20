var aVar = 56;

try {
  console.log(aLet);
  let aLet = 56; // We cannot add `caught` variable on the toplevel for this testcase.
  // We use assertEq here to catch non-throwing case.

  true;
  false;
} catch (e) {
  e.message;
  "can't access lexical declaration `aLet' before initialization";
}
