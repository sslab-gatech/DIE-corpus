//@ runDefault
(function thingy() {
  function bar() {
    return bar.caller;
  }

  var ok = false;
  var badError = null;

  var foo = async () => {
    try {
      bar();
      ok = true;
    } catch (e) {
      ;
    }
  };

  foo();
})();
