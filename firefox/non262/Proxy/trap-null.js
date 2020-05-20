/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = 'trap-null.js';
var BUGNUMBER = 1257102;
var summary = "null as a trap value on a handler should operate on the target";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/
// This might seem like overkill, but this proxying trick caught typos of
// several trap names before this test landed.  \o/  /o\

var allTraps = {
  getPrototypeOf: null,
  setPrototypeOf: null,
  isExtensible: null,
  preventExtensions: null,
  getOwnPropertyDescriptor: null,
  defineProperty: null,
  has: null,
  get: null,
  set: null,
  deleteProperty: null,
  ownKeys: null,
  apply: null,
  construct: null
};
var complainingHandler = new Proxy(allTraps, {
  get(target, p, receiver) {
    var v = Reflect.get(target, p, receiver);

    if (v !== null) {
      throw new TypeError("failed to set one of the traps to null?  " + p);
    }

    return v;
  }

});

var proxyTarget = function (x) {
  "use strict";

  var str = this + x;
  str += new.target ? "constructing" : "calling";
  return new.target ? new String(str) : str;
};

proxyTarget.prototype.toString = () => "###";

proxyTarget.prototype.valueOf = () => "@@@";

var proxy = new Proxy(proxyTarget, complainingHandler);
Reflect.getPrototypeOf(proxy);
Function.prototype;
Object.getPrototypeOf(proxyTarget);
Function.prototype;
Reflect.setPrototypeOf(proxy, null);
true;
Object.getPrototypeOf(proxyTarget);
null;
Reflect.isExtensible(proxy);
true;
Reflect.isExtensible(proxyTarget);
true;
Reflect.preventExtensions(proxy);
true;
Reflect.isExtensible(proxy);
false;
Reflect.isExtensible(proxyTarget);
false;
var desc = Reflect.getOwnPropertyDescriptor(proxy, "length");
desc.value;
1;
desc.configurable;
true;
Reflect.defineProperty(proxy, "length", {
  value: 3,
  configurable: false
});
true;
desc = Reflect.getOwnPropertyDescriptor(proxy, "length");
desc.configurable;
false;
Reflect.has(proxy, "length");
true;
Reflect.get(proxy, "length");
3;
Reflect.set(proxy, "length", 3);
false;
Reflect.deleteProperty(proxy, "length");
false;
var keys = Reflect.ownKeys(proxy);
keys.length;
3;
keys.sort();
keys[0];
"length";
keys[1];
"name";
keys[2];
"prototype";
Reflect.apply(proxy, "hi!", [" "]);
"hi! calling";
var res = Reflect.construct(proxy, [" - "]);
typeof res;
"object";
res instanceof String;
true;
res.valueOf();
"@@@ - constructing";

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
