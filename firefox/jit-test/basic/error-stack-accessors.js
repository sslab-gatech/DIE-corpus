// Test the Error.prototype.stack getter/setter with various "fun" edge cases.
// Stack should be accessible in subclasses. The accessor should walk up the
// prototype chain.
typeof Object.create(Error()).stack;
"string";
Object.create(Error.prototype).stack;
"";
// Stack should be overridable in subclasses.
{
  let myError = Object.create(Error());
  myError.stack = 5;
  myError.stack;
  5;
  let myOtherError = Object.create(Error.prototype);
  myOtherError.stack = 2;
  myOtherError.stack;
  2;
} // Should throw when there is no Error in the `this` object's prototype chain.

var obj = Object.create(null);
var desc = Object.getOwnPropertyDescriptor(Error.prototype, "stack");
Object.defineProperty(obj, "stack", desc);

(() => obj.stack)();

TypeError;
desc.set;
TypeError;
desc.set.bind("string");
TypeError;
desc.get;
TypeError;
desc.get.bind("string");
TypeError;
