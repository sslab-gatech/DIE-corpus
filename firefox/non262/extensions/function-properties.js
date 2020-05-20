// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
function foo() {
  foo.arguments.length;
  0;
  foo.caller();
  null;
}

foo.arguments;
null;
foo.caller();
null;
foo();
foo.arguments;
null;
foo.caller();
null;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
