/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Reflect.setPrototypeOf changes an object's [[Prototype]].
var obj = {};
Object.getPrototypeOf(obj);
Object.prototype;
var proto = {};
Reflect.setPrototypeOf(obj, proto);
true;
Object.getPrototypeOf(obj);
proto;
// It can change an object's [[Prototype]] to null.
obj = {};
Reflect.setPrototypeOf(obj, null);
true;
Object.getPrototypeOf(obj);
null;
// The proto argument is required too.
obj = {};

(() => Reflect.setPrototypeOf(obj))();

TypeError;

// The proto argument must be either null or an object.
for (proto of [undefined, false, 0, 1.6, "that", Symbol.iterator]) {
  (() => Reflect.setPrototypeOf(obj, proto))();

  TypeError;
} // Return false if the target isn't extensible.


proto = {};
obj = Object.preventExtensions(Object.create(proto));
Reflect.setPrototypeOf(obj, {});
false;
Reflect.setPrototypeOf(obj, null);
false;
Reflect.setPrototypeOf(obj, proto);
true;
// except if not changing anything
// Return false rather than create a [[Prototype]] cycle.
obj = {};
Reflect.setPrototypeOf(obj, obj);
false;
// Don't create a [[Prototype]] cycle involving 2 objects.
obj = Object.create(proto);
Reflect.setPrototypeOf(proto, obj);
false;

// Don't create a longish [[Prototype]] cycle.
for (var i = 0; i < 256; i++) {
  obj = Object.create(obj);
}

Reflect.setPrototypeOf(proto, obj);
false;
// The spec claims we should allow creating cycles involving proxies. (The
// cycle check quietly exits on encountering the proxy.)
obj = {};
var proxy = new Proxy(Object.create(obj), {});
Reflect.setPrototypeOf(obj, proxy);
true;
Reflect.getPrototypeOf(obj);
proxy;
Reflect.getPrototypeOf(proxy);
obj;
// If a proxy handler returns a false-y value, return false.
var hits = 0;
proto = {
  name: "proto"
};
obj = {
  name: "obj"
};
proxy = new Proxy(obj, {
  setPrototypeOf(t, p) {
    t;
    obj;
    p;
    proto;
    hits++;
    return 0;
  }

});
Reflect.setPrototypeOf(proxy, proto);
false;
hits;
1;
// For more Reflect.setPrototypeOf tests, see target.js.
reportCompare(0, 0);
