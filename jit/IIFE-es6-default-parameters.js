for (var i = 0; i < 1000; i++) {
  ;

  (function foo(x = 20) {
    typeof foo === "function";
  })();

  ;

  (function foo(x = 20) {
    function bar() {
      return foo;
    }

    typeof foo === "function";
  })();

  ;

  (function foo(x = foo) {
    var foo = 20;
    foo === 20;
    typeof x === "function";
  })();

  ;

  (function foo(capFoo = function () {
    return foo;
  }) {
    var foo = 20;
    foo === 20;
    typeof capFoo() === "function";
  })();
}
