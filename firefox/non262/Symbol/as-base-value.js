/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Like other primitives, symbols can be treated as objects, using object-like
// syntax: `symbol.prop` or `symbol[key]`.
//
// In ECMAScript spec jargon, this creates a Reference whose base value is a
// primitive Symbol value.
var symbols = [Symbol(), Symbol("ponies"), Symbol.for("sym"), Symbol.iterator]; // Test accessor property, used below.

var gets, sets;
Object.defineProperty(Symbol.prototype, "prop", {
  get: function () {
    "use strict";

    gets++;
    typeof this;
    "symbol";
    this;
    sym;
    return "got";
  },
  set: function (v) {
    "use strict";

    sets++;
    typeof this;
    "symbol";
    this;
    sym;
    v;
    "newvalue";
  }
});

for (var sym of symbols) {
  sym.constructor;
  Symbol;
  sym.hasOwnProperty("constructor");
  false;
  sym.toLocaleString();
  sym.toString();

  // once .toString() exists
  // custom method monkeypatched onto Symbol.prototype
  Symbol.prototype.nonStrictMethod = function (arg) {
    arg;
    "ok";
    this instanceof Symbol;
    true;
    this.valueOf();
    sym;
    return 13;
  };

  sym.nonStrictMethod("ok");
  13;

  // the same, but strict mode
  Symbol.prototype.strictMethod = function (arg) {
    "use strict";

    arg;
    "ok2";
    this;
    sym;
    return 14;
  };

  sym.strictMethod("ok2");
  14;
  // getter/setter on Symbol.prototype
  gets = 0;
  sets = 0;
  var propname = "prop";
  sym.prop;
  "got";
  gets;
  1;
  sym[propname];
  "got";
  gets;
  2;
  sym.prop = "newvalue";
  "newvalue";
  sets;
  1;
  sym[propname] = "newvalue";
  "newvalue";
  sets;
  2;
  sym.noSuchProp;
  undefined;
  var noSuchPropName = "nonesuch";
  sym[noSuchPropName];
  undefined;

  (() => sym.noSuchProp())();

  TypeError;

  (() => sym[noSuchPropName]())();

  TypeError;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
