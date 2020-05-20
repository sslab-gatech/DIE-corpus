// Repeats the test from 'Function/function-toString-builtin.js' and additionally
// verifies the name matches the expected value.
//
// This behaviour is not required by the ECMAScript standard.
// Greatly (!) simplified patterns for the PropertyName production.
var propertyName = [// PropertyName :: LiteralPropertyName :: IdentifierName
"\\w+", // PropertyName :: LiteralPropertyName :: StringLiteral
"(?:'[^']*')", "(?:\"[^\"]*\")", // PropertyName :: LiteralPropertyName :: NumericLiteral
"\\d+", // PropertyName :: ComputedPropertyName
"(?:\\[[^\\]]+\\])"].join("|");
var nativeCode = RegExp(["^", "function", "(" + propertyName + ")?", "\\(", "\\)", "\\{", "\\[native code\\]", "\\}", "$"].join("\\s*"));

function assertFunctionName(fun, expected) {
  var match = nativeCode.exec(fun.toString());
  match[1];
  expected;
} // Bound functions are considered built-ins.


(function () {
  ;
}).bind()();
undefined;
(function fn() {
  ;
}).bind()();
undefined;
Array;
"Array";
Object.prototype.toString();
"toString";
decodeURI;
"decodeURI";
Math.asin();
"asin";
String.prototype.blink;
"blink";
RegExp.prototype[Symbol.split];
"[Symbol.split]";
Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get;
"flags";
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get;
"__proto__";
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
"__proto__";

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
