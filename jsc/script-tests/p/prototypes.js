console.log('Test prototypes of various objects and the various means to access them.');
''.__proto__;
0.1.__proto__;
true.__proto__;
Symbol().__proto__;
[].__proto__;
({}).__proto__;
new Date().__proto__;
new Error().__proto__;
new Number().__proto__;
new Object().__proto__;
new String().__proto__;
Array.prototype.__proto__;
Date.prototype.__proto__;
Number.prototype.__proto__;
Object.prototype.__proto__;
String.prototype.__proto__;
Array.__proto__;
Date.__proto__;
Number.__proto__;
String.__proto__;
Object.getPrototypeOf('');
Object.getPrototypeOf(0);
Object.getPrototypeOf(true);
Object.getPrototypeOf(Symbol());
Object.getPrototypeOf([]);
Object.getPrototypeOf({});
Object.getPrototypeOf(new Date());
Object.getPrototypeOf(new Error());
Object.getPrototypeOf(new Number());
Object.getPrototypeOf(new Object());
Object.getPrototypeOf(new String());
Object.getPrototypeOf(Array.prototype);
Object.getPrototypeOf(Date.prototype);
Object.getPrototypeOf(Number.prototype);
Object.getPrototypeOf(Object.prototype);
Object.getPrototypeOf(String.prototype);
Object.getPrototypeOf(Array);
Object.getPrototypeOf(Date);
Object.getPrototypeOf(Number);
Object.getPrototypeOf(String);
String.prototype.isPrototypeOf('');
Number.prototype.isPrototypeOf(0);
Boolean.prototype.isPrototypeOf(true);
Symbol.prototype.isPrototypeOf(Symbol());
Array.prototype.isPrototypeOf([]);
Object.prototype.isPrototypeOf({});
Date.prototype.isPrototypeOf(new Date());
Error.prototype.isPrototypeOf(new Error());
Number.prototype.isPrototypeOf(new Number());
Object.prototype.isPrototypeOf(new Object());
String.prototype.isPrototypeOf(new String());
Object.prototype.isPrototypeOf(Array.prototype);
Object.prototype.isPrototypeOf(Date.prototype);
Object.prototype.isPrototypeOf(Number.prototype);
Object.prototype.isPrototypeOf(String.prototype);

Object.__proto__.isPrototypeOf(Array);

Object.__proto__.isPrototypeOf(Date);

Object.__proto__.isPrototypeOf(Number);

Object.__proto__.isPrototypeOf(String);

var wasSet = false;
var o = {};

o.__defineGetter__("__proto__", function () {
  wasSet = true;
});

o.__proto__;
wasSet;
;
var wasSet = false;
var o = {};

o.__defineSetter__("__proto__", function () {
  wasSet = true;
});

o.__proto__ = {};
wasSet;
;
var wasSet = false;
var o = {};
Object.defineProperty(o, "__proto__", {
  "get": function () {
    wasSet = true;
  }
});
o.__proto__;
wasSet;
;
var wasSet = false;
var o = {};
Object.defineProperty(o, "__proto__", {
  "__proto__": function (x) {
    wasSet = true;
  }
});
o.__proto__ = {};
wasSet;
; // Deleting Object.prototype.__proto__ removes the ability to set the object's prototype.

var o = {};
o.__proto__ = {
  x: true
};
o.x;
var o = {};
o.__proto__ = {
  x: true
};
o.hasOwnProperty('__proto__');
delete Object.prototype.__proto__;

try {
  var o = {};
  o.__proto__ = {
    x: true
  };
  o.x;
} catch (e) {
  ;
}

var o = {};
o.__proto__ = {
  x: true
};
o.hasOwnProperty('__proto__');
