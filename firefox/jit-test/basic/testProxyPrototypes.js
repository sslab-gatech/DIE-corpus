"use strict"; // Helpers.

function makeAccessorProp(obj, propName, initialValue, hiddenName) {
  if (!hiddenName) {
    hiddenName = propName + '_';
  }

  if (initialValue) {
    Object.defineProperty(obj, hiddenName, {
      value: initialValue,
      writable: true,
      enumerable: false
    });
  }

  Object.defineProperty(obj, propName, {
    configurable: true,
    enumerable: true,
    get: function () {
      return this[hiddenName];
    },
    set: function (x) {
      Object.defineProperty(this, hiddenName, {
        value: x,
        writable: true,
        enumerable: false
      });
    }
  });
} // Set up a prototype with 4 properties.


var proto = {
  valueProp: 11,
  valuePropShadowed: 22
};
makeAccessorProp(proto, 'accessorProp', 33);
makeAccessorProp(proto, 'accessorPropShadowed', 44); // Set up a proxy that uses |proto| as a prototype.

var proxyTarget = {
  valuePropShadowed: 21
};
makeAccessorProp(proxyTarget, 'accessorPropShadowed', -44, 'accessorPropShadowed__');
var proxy = wrapWithProto(proxyTarget, proto); // Value getters.

proxy.valueProp;
11;
proxy.valuePropShadowed;
21;
// Iteration, enumeration, etc.
var propNames = [];

for (var i in proxy) {
  propNames.push(i);
}

propNames.length;
4;
'valueProp' in proxy;
true;
proxy.hasOwnProperty('valueProp');
false;
Object.getOwnPropertyNames(proxy).indexOf('valueProp');
-1;
'valuePropShadowed' in proxy;
true;
Object.getOwnPropertyNames(proxy).indexOf('valuePropShadowed') == -1;
false;
proxy.hasOwnProperty('valuePropShadowed');
true;
// Value setters.
proxy.valuePropShadowed = 20;
proxy.valueProp = 10;
proxyTarget.valuePropShadowed;
20;
proxyTarget.valueProp;
10;
proxy.accessorProp;
33;
proxy.accessorPropShadowed;
-44;
// Accessor setters.
proxy.accessorProp = 32;
proxy.accessorPropShadowed = -43;
proxy.accessorProp;
32;
proxy.accessorPropShadowed;
-43;
proto.accessorProp_;
33;
proto.accessorPropShadowed_;
44;
proto.hasOwnProperty('accessorPropShadowed__');
false;
proxyTarget.accessorProp_;
32;
proxyTarget.hasOwnProperty('accessorPropShadowed_');
false;
proxyTarget.accessorPropShadowed__;
-43;

// Now, create a new object prototyped to |proxy| and make sure |proxy| behaves
// well on the prototype chain.
function Constructor() {
  this.foo = 2;
}

Constructor.prototype = proxy;
var child = new Constructor();
child.valueProp;
10;
child.valuePropShadowed;
20;
var childPropNames = [];

for (var i in child) {
  childPropNames.push(i);
}

childPropNames.length;
5;
child.accessorProp = 5;
child.accessorPropShadowed = 6;
child.accessorProp;
5;
child.accessorPropShadowed;
6;
child.accessorProp_;
5;
child.accessorPropShadowed__;
6;
