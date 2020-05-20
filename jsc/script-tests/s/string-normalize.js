console.log("Test String.prototype.normalize.");
console.log("Basic function properties");
typeof String.prototype.normalize;
String.prototype.normalize.name;
String.prototype.normalize.length;
Object.getOwnPropertyDescriptor(String.prototype, 'normalize').configurable;
Object.getOwnPropertyDescriptor(String.prototype, 'normalize').enumerable;
Object.getOwnPropertyDescriptor(String.prototype, 'normalize').writable;
console.log("Invokes ToString on the argument.");
var listener = {
  callCount: 0,
  toString: function () {
    this.callCount++;
    return "WebKit";
  }
};
String.prototype.normalize.call(listener);
listener.callCount;
