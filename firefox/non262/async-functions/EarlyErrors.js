var BUGNUMBER = 1185106;
var summary = "EarlyErrors for async function";
print(BUGNUMBER + ": " + summary);

function assertThrowsSE(code) {
  (() => Reflect.parse(code))();

  SyntaxError;
}

if (typeof Reflect !== "undefined" && Reflect.parse) {
  // If FormalParameters Contains AwaitExpression is true.
  "async function a(k = await 3) {}";
  "(async function(k = await 3) {})";
  "(async function a(k = await 3) {})";
  "'use strict'; async function eval() {}";
  "'use strict'; (async function eval() {})";
  "'use strict'; async function arguments() {}";
  "'use strict'; (async function arguments() {})";
  "async function a(x) { let x; }";
  "(async function(x) { let x; })";
  "(async function a(x) { let x; })";
  "async function a(k = super.prop) { }";
  "(async function(k = super.prop) {})";
  "(async function a(k = super.prop) {})";
  "async function a() { super.prop(); }";
  "(async function() { super.prop(); })";
  "(async function a() { super.prop(); })";
  "async function a(k = super()) {}";
  "(async function(k = super()) {})";
  "(async function a(k = super()) {})";
  "async function a() { super(); }";
  "(async function() { super(); })";
  "(async function a() { super(); })";
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
