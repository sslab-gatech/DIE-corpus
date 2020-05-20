//@ runDefault
(function thingy() {
  function bar() {
    return bar.caller;
  }

  var ok = false;
  var badError = null;

  async function foo() {
    try {
      bar();
      ok = true;
    } catch (e) {
      if (e.toString() != "TypeError: Function.caller used to retrieve async function body") {
        badError = e;
      }
    }
  }

  foo();
})();
