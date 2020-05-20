// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 665961;
var summary = "ArrayBuffer cannot access properties defined on the prototype chain.";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

ArrayBuffer.prototype.prop = "on prototype";
var b = new ArrayBuffer([]);
b.prop;
"on prototype";
var c = new ArrayBuffer([]);
c.prop;
"on prototype";
c.prop = "direct";
c.prop;
"direct";
ArrayBuffer.prototype.prop;
"on prototype";
new ArrayBuffer([]).prop;
"on prototype";
c.nonexistent;
undefined;
reportCompare(true, true);
