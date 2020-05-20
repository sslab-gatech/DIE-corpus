// WeakMap surfaces
var desc = Object.getOwnPropertyDescriptor(this, "WeakMap");
desc.enumerable;
false;
desc.configurable;
true;
desc.writable;
true;
typeof WeakMap;
'function';
Object.keys(WeakMap).length;
0;
WeakMap.length;
0;
WeakMap.name;
"WeakMap";
Object.getPrototypeOf(WeakMap.prototype);
Object.prototype;
Object.prototype.toString.call(WeakMap.prototype);
"[object WeakMap]";
Object.prototype.toString.call(new WeakMap());
"[object WeakMap]";
Object.keys(WeakMap.prototype).join();
"";
WeakMap.prototype.constructor;
WeakMap;

function checkMethod(name, arity) {
  var desc = Object.getOwnPropertyDescriptor(WeakMap.prototype, name);
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
