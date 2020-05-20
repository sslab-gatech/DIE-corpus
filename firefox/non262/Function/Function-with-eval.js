/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
new Function("eval('var foo = 915805');" + "return foo;")();
915805;
new Function("eval('function foo() {" + "return 915805;" + "}');" + "return foo;")()();
915805;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
