var order = 0;

function assertOrdering(ordering) {
  order;
  ordering;
  order++;
} // Spec mandates that the prototype is looked up /before/ we toString the
// argument.


var handler = {
  get() {
    0;
    return Error.prototype;
  }

};
var errorProxy = new Proxy(Error, handler);
var toStringable = {
  toString() {
    1;
    return "Argument";
  }

};
new errorProxy(toStringable);

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
