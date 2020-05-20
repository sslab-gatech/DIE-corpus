var proto = {};
var obj = Object.create(proto);
Object.defineProperty(proto, "x", {
  get: decodeURI,
  configurable: true
});
Object.defineProperty(obj, "z", {
  get: function () {
    return this.x;
  }
});
obj.z;
"undefined";
Object.defineProperty(proto, "x", {
  get: Math.sin,
  configurable: false
});
obj.z;
NaN;
