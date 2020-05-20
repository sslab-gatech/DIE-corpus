console.log("Test for error messages on function.apply");

try {
  function foo() {
    ;
  }

  ;
  foo.apply(null, 20);
} catch (e) {
  ;
}

try {
  function foo() {
    ;
  }

  ;
  foo.apply(null, 'hello');
} catch (e) {
  ;
}

try {
  function foo() {
    ;
  }

  ;
  foo.apply(null, true);
} catch (e) {
  ;
}
