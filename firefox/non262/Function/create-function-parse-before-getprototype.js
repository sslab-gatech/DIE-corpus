var getProtoCalled = false;
var newTarget = Object.defineProperty(function () {
  ;
}.bind(), "prototype", {
  get() {
    getProtoCalled = true;
    return null;
  }

});

(() => {
  Reflect.construct(Function, ["#error"], newTarget);
})();

SyntaxError;
getProtoCalled;
false;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
