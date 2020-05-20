// Map surfaces
var desc = Object.getOwnPropertyDescriptor(this, "Map");
desc.enumerable;
false;
desc.configurable;
true;
desc.writable;
true;
typeof Map;
'function';
Object.keys(Map).length;
0;
Map.length;
0;
Map.name;
"Map";
Object.getPrototypeOf(Map.prototype);
Object.prototype;
Object.prototype.toString.call(Map.prototype);
"[object Map]";
Object.prototype.toString.call(new Map());
"[object Map]";
Object.keys(Map.prototype).join();
"";
Map.prototype.constructor;
Map;

function checkMethod(name, arity) {
  var desc = Object.getOwnPropertyDescriptor(Map.prototype, name);
  desc.enumerable;
  false;
  desc.configurable;
  true;
  desc.writable;
  true;
  typeof desc.value;
  'function';
  desc.value.name;
  name;
  desc.value.length;
  arity;
}

checkMethod("get", 1);
checkMethod("has", 1);
checkMethod("set", 2);
checkMethod("delete", 1);
checkMethod("keys", 0);
checkMethod("values", 0);
checkMethod("entries", 0);
var desc = Object.getOwnPropertyDescriptor(Map.prototype, "size");
desc.enumerable;
false;
desc.configurable;
true;
typeof desc.get;
'function';
desc.get.length;
0;
desc.set;
undefined;
checkMethod("clear", 0); // Map.prototype[@@iterator] and .entries are the same function object.

Map.prototype[Symbol.iterator];
Map.prototype.entries();
