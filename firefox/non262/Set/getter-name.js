var BUGNUMBER = 1180290;
var summary = 'Set getters should have get prefix';
print(BUGNUMBER + ": " + summary);
Object.getOwnPropertyDescriptor(Set, Symbol.species).get.name;
"get [Symbol.species]";
Object.getOwnPropertyDescriptor(Set.prototype, "size").get.name;
"get size";

if (typeof reportCompare === 'function') {
  reportCompare(true, true);
}
