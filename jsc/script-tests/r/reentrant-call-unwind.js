console.log("This test checks that unwinding of exceptions properly copies registers of activation frames created by reentrant calls to JavaScript.");
var f;

try {
  (function () {
    var j = 0;

    f = function () {
      return j;
    };

    throw new Object();
  }).apply();
} catch (e) {
  (function () {
    f();
  }).apply();
}
