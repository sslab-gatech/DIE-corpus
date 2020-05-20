/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
typeof Symbol();
"symbol";
typeof Symbol("ponies");
"symbol";
typeof Symbol.for("ponies");
"symbol";
typeof Object(Symbol());
"object";

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
