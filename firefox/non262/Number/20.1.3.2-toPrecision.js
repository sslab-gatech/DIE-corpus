// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 818617;
var summary = "ECMAScript 2017 Draft ECMA-262 Section 20.1.3.5: Number.prototype.toPrecision";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/
// With NaN, fractionDigits out of range.

Number.prototype.toPrecision.call(NaN, 555);
'NaN';
Number.prototype.toPrecision.call(NaN, 5);
'NaN';
Number.prototype.toPrecision.call(Infinity, 555);
'Infinity';
Number.prototype.toPrecision.call(Infinity, 5);
'Infinity';
Number.prototype.toPrecision.call(-Infinity, 555);
'-Infinity';
Number.prototype.toPrecision.call(-Infinity, 5);
'-Infinity';
// With NaN, function assigning a value.
let x = 10;
Number.prototype.toPrecision.call(NaN, {
  valueOf() {
    x = 20;
    return 1;
  }

});
'NaN';
x;
20;

(() => Number.prototype.toPrecision.call(NaN, {
  valueOf() {
    throw "hello";
  }

}))();

(() => Number.prototype.toPrecision.call("Hello"))();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
