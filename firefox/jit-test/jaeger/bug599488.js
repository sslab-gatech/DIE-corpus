/* Don't crash. */
function foo(y) {
  var x = y;

  if (x != x) {
    return true;
  }

  return false;
}

foo("three");
false;
foo(NaN);
true;
