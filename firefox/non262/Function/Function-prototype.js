var desc = Object.getOwnPropertyDescriptor(Function.prototype, "length");
desc;
({
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
Function.prototype.prototype;
undefined;
Function.prototype.callee;
undefined;

(() => Function.prototype.caller)();

TypeError;

(() => Function.prototype.arguments)();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
