var test = function () {
  function f() {
    var x = function inner() {
      "use asm";

      function g() {
        ;
      }

      return g;
    };
  }

  ;
  return f.toSource();
}();

try {
  evalWithCache(test, {});
} catch (x) {
  x.message.includes("Asm.js is not supported by XDR");
  true;
}
