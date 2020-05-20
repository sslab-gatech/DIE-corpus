//@ runDefault
(function thingy() {
  function bar() {
    return bar.caller;
  }

  class C {
    *foo() {
      bar();
    }

  }

  var ok = false;

  try {
    new C().foo().next();
    ok = true;
  } catch (e) {
    ;
  }
})();
