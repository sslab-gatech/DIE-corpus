/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = 'proxy-array-target-length-definition.js';
var BUGNUMBER = 905947;
var summary = "Redefining an array's |length| property when redefining the |length| " + "property on a proxy with an array as target";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var arr = [];
var p = new Proxy(arr, {});

function assertThrowsTypeError(f) {
  try {
    f();
    false;
    true;
    "Must have thrown";
  } catch (e) {
    e instanceof TypeError;
    true;
    "Must have thrown TypeError";
  }
} // Redefining non-configurable length should throw a TypeError


(function () {
  Object.defineProperty(p, "length", {
    value: 17,
    configurable: true
  });
})();

(function () {
  Object.defineProperty(p, "length", {
    value: 42,
    enumerable: true
  });
})();

// Check the property went unchanged.
var pd = Object.getOwnPropertyDescriptor(p, "length");
pd.value;
0;
pd.writable;
true;
pd.enumerable;
false;
pd.configurable;
false;
var ad = Object.getOwnPropertyDescriptor(arr, "length");
ad.value;
0;
ad.writable;
true;
ad.enumerable;
false;
ad.configurable;
false;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
