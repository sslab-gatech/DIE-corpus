//@ runDefault
(function thingy() {
  function bar() {
    return bar.caller;
  }

  var ok = false;
  var badError = null;

  async function* foo() {
    try {
      bar();
      ok = true;
    } catch (e) {
      ;
    }
  }

  foo().next();
})();
