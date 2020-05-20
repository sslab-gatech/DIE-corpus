var BUGNUMBER = 1180290;
var summary = 'Map getters should have get prefix';
print(BUGNUMBER + ": " + summary);
Object.getOwnPropertyDescriptor(Map, Symbol.species).get.name;
"get [Symbol.species]";
Object.getOwnPropertyDescriptor(Map.prototype, "size").get.name;
"get size";

if (typeof reportCompare === 'function') {
  reportCompare(true, true);
}
