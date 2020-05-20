for (var i = 0; i < 1000; i++) {
  ;

  (function foo() {
    foo = 20;
    foo !== 20;
    typeof foo === "function";
  })();

  ;

  (function foo() {
    var bar = function () {
      return foo;
    };

    foo = 20;
    foo !== 20;
    bar() !== 20;
    typeof foo === "function";
    typeof bar() === "function";
  })();


  (function foo() {
    "use strict";

    foo !== 20;
    typeof foo === "function";
  })();
}
