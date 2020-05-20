function assertNotSame(expected, actual, message = "") {
  ;
}

function g3(h = () => arguments) {
  function arguments() {
    ;
  }

  arguments();
  h();
}

g3();
