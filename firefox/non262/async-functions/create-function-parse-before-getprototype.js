var getProtoCalled = false;
var newTarget = Object.defineProperty(function () {
  ;
}.bind(), "prototype", {
  get() {
    getProtoCalled = true;
    return null;
  }

});

var AsyncFunction = async function () {
  ;
}.constructor;

(() => {
  Reflect.construct(AsyncFunction, ["#error"], newTarget);
})();

SyntaxError;
getProtoCalled;
false;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
