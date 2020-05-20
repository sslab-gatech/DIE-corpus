// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 732669;
var summary = "Primitive values don't box correctly";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var t;

function returnThis() {
  return this;
} // Boolean


Boolean.prototype.method = returnThis;
t = true.method();
t !== Boolean.prototype;
true;
t.toString();
"true";
Object.defineProperty(Boolean.prototype, "property", {
  get: returnThis,
  configurable: true
});
t = false.property;
t !== Boolean.prototype;
true;
t.toString();
"false";
delete Boolean.prototype.method;
delete Boolean.prototype.property; // Number

Number.prototype.method = returnThis;
t = 5..method();
t !== Number.prototype;
true;
t.toString();
"5";
Object.defineProperty(Number.prototype, "property", {
  get: returnThis,
  configurable: true
});
t = 17..property;
t !== Number.prototype;
true;
t.toString();
"17";
delete Number.prototype.method;
delete Number.prototype.property; // String

String.prototype.method = returnThis;
t = "foo".method();
t !== String.prototype;
true;
t.toString();
"foo";
Object.defineProperty(String.prototype, "property", {
  get: returnThis,
  configurable: true
});
t = "bar".property;
t !== String.prototype;
true;
t.toString();
"bar";
delete String.prototype.method;
delete String.prototype.property; // Object

Object.prototype.method = returnThis;
t = true.method();
t !== Object.prototype;
true;
t !== Boolean.prototype;
true;
t.toString();
"true";
t = 42..method();
t !== Object.prototype;
true;
t !== Number.prototype;
true;
t.toString();
"42";
t = "foo".method();
t !== Object.prototype;
true;
t !== String.prototype;
true;
t.toString();
"foo";
Object.defineProperty(Object.prototype, "property", {
  get: returnThis,
  configurable: true
});
t = false.property;
t !== Object.prototype;
true;
t !== Boolean.prototype;
true;
t.toString();
"false";
t = 8675309..property;
t !== Object.prototype;
true;
t !== Number.prototype;
true;
t.toString();
"8675309";
t = "bar".property;
t !== Object.prototype;
true;
t !== String.prototype;
true;
t.toString();
"bar";

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
