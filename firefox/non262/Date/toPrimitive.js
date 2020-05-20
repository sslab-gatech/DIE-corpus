// ES6 20.3.4.45 Date.prototype[@@toPrimitive](hint)
// The toPrimitive method throws if the this value isn't an object.
var toPrimitive = Date.prototype[Symbol.toPrimitive];

(() => toPrimitive.call(undefined, "default"))();

TypeError;

(() => toPrimitive.call(3, "default"))();

TypeError;
// It doesn't have to be a Date object, though.
var obj = {
  toString() {
    return "str";
  },

  valueOf() {
    return "val";
  }

};
toPrimitive.call(obj, "number");
"val";
toPrimitive.call(obj, "string");
"str";
toPrimitive.call(obj, "default");
"str";

(() => toPrimitive.call(obj))();

TypeError;

(() => toPrimitive.call(obj, undefined))();

TypeError;

(() => toPrimitive.call(obj, "boolean"))();

TypeError;

(() => toPrimitive.call(obj, ["number"]))();

TypeError;

(() => toPrimitive.call(obj, {
  toString() {
    throw "FAIL";
  }

}))();

TypeError;
// The next few tests cover the OrdinaryToPrimitive algorithm, specified in
// ES6 7.1.1 ToPrimitive(input [, PreferredType]).
// Date.prototype.toString or .valueOf can be overridden.
var dateobj = new Date();

Date.prototype.toString = function () {
  this;
  dateobj;
  return 14;
};

Date.prototype.valueOf = function () {
  return "92";
};

dateobj[Symbol.toPrimitive]("number");
"92";
dateobj[Symbol.toPrimitive]("string");
14;
dateobj[Symbol.toPrimitive]("default");
14;
dateobj == 14;
true;
// equality comparison: passes "default"
// If this.toString is a non-callable value, this.valueOf is called instead.
Date.prototype.toString = {};
dateobj[Symbol.toPrimitive]("string");
"92";
dateobj[Symbol.toPrimitive]("default");
"92";

// And vice versa.
Date.prototype.toString = function () {
  return 15;
};

Date.prototype.valueOf = "ponies";
dateobj[Symbol.toPrimitive]("number");
15;
// If neither is callable, it throws a TypeError.
Date.prototype.toString = "ponies";

(() => dateobj[Symbol.toPrimitive]("default"))();

TypeError;
toPrimitive.name;
"[Symbol.toPrimitive]";
var desc = Object.getOwnPropertyDescriptor(Date.prototype, Symbol.toPrimitive);
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
false;
reportCompare(0, 0);
