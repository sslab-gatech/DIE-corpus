// WeakSet surfaces
var desc = Object.getOwnPropertyDescriptor(this, "WeakSet");
desc.enumerable;
false;
desc.configurable;
true;
desc.writable;
true;
typeof WeakSet;
'function';
Object.keys(WeakSet).length;
0;
WeakSet.length;
0;
WeakSet.name;
"WeakSet";
Object.getPrototypeOf(WeakSet.prototype);
Object.prototype;
Object.prototype.toString.call(WeakSet.prototype);
"[object WeakSet]";
Object.prototype.toString.call(new WeakSet());
"[object WeakSet]";
Object.keys(WeakSet.prototype).length;
0;
WeakSet.prototype.constructor;
WeakSet;

function checkMethod(name, arity) {
  var desc = Object.getOwnPropertyDescriptor(WeakSet.prototype, name);
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
