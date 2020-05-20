// |reftest| skip-if(!xulRuntime.shell) -- needs newGlobal()

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */
var gTestfile = 'preventExtensions-cross-global.js'; //-----------------------------------------------------------------------------

var BUGNUMBER = 789897;
var summary = "Object.preventExtensions and Object.isExtensible should work correctly " + "across globals";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var otherGlobal = newGlobal();
var obj = {};
otherGlobal.Object.isExtensible(obj);
true;
otherGlobal.Object.preventExtensions(obj);
obj;
otherGlobal.Object.isExtensible(obj);
false;
var objFromOther = otherGlobal.Object();
Object.isExtensible(objFromOther);
true;
Object.preventExtensions(objFromOther);
objFromOther;
Object.isExtensible(objFromOther);
false;
var proxy = new Proxy({}, {});
otherGlobal.Object.isExtensible(proxy);
true;
otherGlobal.Object.preventExtensions(proxy);
proxy;
otherGlobal.Object.isExtensible(proxy);
false;
var proxyFromOther = otherGlobal.evaluate("new Proxy({}, {})");
Object.isExtensible(proxyFromOther);
true;
Object.preventExtensions(proxyFromOther);
proxyFromOther;
Object.isExtensible(proxyFromOther);
false;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
