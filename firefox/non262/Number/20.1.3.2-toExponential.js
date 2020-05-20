// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 818617;
var summary = "ECMAScript 2017 Draft ECMA-262 Section 20.1.3.2: Number.prototype.toExponential";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/
// With NaN, fractionDigits out of range.

Number.prototype.toExponential.call(NaN, 555);
'NaN';
Number.prototype.toExponential.call(NaN, 5);
'NaN';
Number.prototype.toExponential.call(Infinity, 555);
'Infinity';
Number.prototype.toExponential.call(Infinity, 5);
'Infinity';
Number.prototype.toExponential.call(-Infinity, 555);
'-Infinity';
Number.prototype.toExponential.call(-Infinity, 5);
'-Infinity';
// With NaN, function assigning a value.
let x = 10;
Number.prototype.toExponential.call(NaN, {
  valueOf() {
    x = 20;
    return 1;
  }

});
'NaN';
x;
20;

(() => Number.prototype.toExponential.call(NaN, {
  valueOf() {
    throw "hello";
  }

}))();

(() => Number.prototype.toExponential.call("Hello"))();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
