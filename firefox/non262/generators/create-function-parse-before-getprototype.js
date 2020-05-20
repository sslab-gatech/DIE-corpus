var getProtoCalled = false;
var newTarget = Object.defineProperty(function () {
  ;
}.bind(), "prototype", {
  get() {
    getProtoCalled = true;
    return null;
  }

});

var Generator = function* () {
  ;
}.constructor;

(() => {
  Reflect.construct(Generator, ["#error"], newTarget);
})();

SyntaxError;
getProtoCalled;
false;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
