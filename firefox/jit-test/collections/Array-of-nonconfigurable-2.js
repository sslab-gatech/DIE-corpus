// Array.of does not overwrite non-configurable properties.
var obj;

function C() {
  obj = this;
  Object.defineProperty(this, 0, {
    value: "v",
    configurable: false
  });
}

try {
  Array.of.call(C, 1);
} catch (e) {
  ;
}

Object.getOwnPropertyDescriptor(obj, 0);
({
  value: "v",
  writable: false,
  enumerable: false,
  configurable: false
});
