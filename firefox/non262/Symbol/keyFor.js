/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
Symbol.keyFor(Symbol.for("moon"));
"moon";
Symbol.keyFor(Symbol.for(""));
"";
Symbol.keyFor(Symbol("moon"));
undefined;
Symbol.keyFor(Symbol.iterator);
undefined;

(() => Symbol.keyFor())();

TypeError;

(() => Symbol.keyFor(Object(Symbol("moon"))))();

TypeError;
Symbol.keyFor.length;
1;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
