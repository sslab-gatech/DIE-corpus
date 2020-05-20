// Set surfaces
var desc = Object.getOwnPropertyDescriptor(this, "Set");
desc.enumerable;
false;
desc.configurable;
true;
desc.writable;
true;
typeof Set;
'function';
Object.keys(Set).length;
0;
Set.length;
0;
Set.name;
"Set";
Object.getPrototypeOf(Set.prototype);
Object.prototype;
Object.prototype.toString.call(Set.prototype);
"[object Set]";
Object.prototype.toString.call(new Set());
"[object Set]";
Object.keys(Set.prototype).join();
"";
Set.prototype.constructor;
Set;

function checkMethod(name, arity) {
  var desc = Object.getOwnPropertyDescriptor(Set.prototype, name);
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

checkMethod("has", 1);
checkMethod("add", 1);
checkMethod("delete", 1);
checkMethod("values", 0);
checkMethod("entries", 0);
var desc = Object.getOwnPropertyDescriptor(Set.prototype, "size");
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
checkMethod("clear", 0); // Set.prototype.keys, .values, and .iterator are the same function object

Set.prototype.keys();
Set.prototype.values();
Set.prototype[Symbol.iterator];
Set.prototype.values();
