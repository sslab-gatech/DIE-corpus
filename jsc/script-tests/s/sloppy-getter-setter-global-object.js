console.log("Tests that check that sloppy getters and setters on the global object don't coerce undefined to their this.");
var act_e = undefined;

try {
  this.__proto__;
  var originalProto = this.__proto__;
  this.__proto__ = 1;

  if (this.__proto__ != originalProto) {
    throw "__proto__ was modified";
  }
} catch (e) {
  act_e = e;
}

if (act_e) {
  console.log("shouldn't have thrown '" + e + "' when accessing and modifying this.__proto__");
} else {
  console.log("this.__proto__ accessed succesfully and stayed frozen.");
}

try {
  Object.prototype.valueOf.call(3);
  ;
} catch (e) {
  ;
}

try {
  Object.prototype.valueOf.call(null);
  ;
} catch (e) {
  ;
}

try {
  Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').get();
} catch (e) {
  ;
}

try {
  Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set(['foo']);
} catch (e) {
  ;
}

try {
  (0, Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').get)();
} catch (e) {
  ;
}

try {
  (0, Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set)(['foo']);
} catch (e) {
  ;
}

var top_level_sloppy_getter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').get;

try {
  top_level_sloppy_getter();
  ;
} catch (e) {
  ;
}

var top_level_sloppy_setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;

try {
  top_level_sloppy_setter(['foo']);
  ;
} catch (e) {
  ;
}
