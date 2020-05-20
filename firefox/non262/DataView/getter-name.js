var BUGNUMBER = 1180290;
var summary = 'DataView getters should have get prefix';
print(BUGNUMBER + ": " + summary);
Object.getOwnPropertyDescriptor(DataView.prototype, "buffer").get.name;
"get buffer";
Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength").get.name;
"get byteLength";
Object.getOwnPropertyDescriptor(DataView.prototype, "byteOffset").get.name;
"get byteOffset";

if (typeof reportCompare === 'function') {
  reportCompare(true, true);
}
