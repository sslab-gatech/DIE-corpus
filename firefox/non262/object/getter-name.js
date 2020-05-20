var BUGNUMBER = 1180290;
var summary = 'Object accessors should have get prefix';
print(BUGNUMBER + ": " + summary);
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get.name;
"get __proto__";
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set.name;
"set __proto__";

if (typeof reportCompare === 'function') {
  reportCompare(true, true);
}
