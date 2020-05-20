/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
var symbols = [Symbol(), Symbol("one"), Symbol.for("two"), Symbol.iterator, Object(Symbol())];

for (var sym of symbols) {
  var obj = {}; // access a nonexistent property

  sym in obj;
  false;
  obj.hasOwnProperty(sym);
  false;
  obj[sym];
  undefined;
  typeof obj[sym];
  "undefined";
  Object.getOwnPropertyDescriptor(obj, sym);
  undefined;
  // assign, then try accessing again
  obj[sym] = "ok";
  sym in obj;
  true;
  obj.hasOwnProperty(sym);
  true;
  obj[sym];
  "ok";
  Object.getOwnPropertyDescriptor(obj, sym);
  ({
    value: "ok",
    writable: true,
    enumerable: true,
    configurable: true
  });
  // assign again, observe value is overwritten
  obj[sym] = 12;
  obj[sym];
  12;
  obj[sym]++;
  12;
  obj[sym];
  13;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
