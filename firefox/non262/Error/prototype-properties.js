const nativeErrors = [InternalError, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];
Reflect.ownKeys(Error.prototype).toString();
"toSource,toString,message,name,stack,constructor";
Error.prototype.name;
"Error";
Error.prototype.message;
"";

for (const error of nativeErrors) {
  Reflect.ownKeys(error.prototype).toString();
  "message,name,constructor";
  error.prototype.name;
  error.name;
  error.prototype.message;
  "";
  error.prototype.constructor;
  error;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
