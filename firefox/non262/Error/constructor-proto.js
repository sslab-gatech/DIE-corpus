const nativeErrors = [InternalError, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];
Reflect.getPrototypeOf(Error);
Function.prototype;

for (const error of nativeErrors) {
  Reflect.getPrototypeOf(error);
  Error;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
