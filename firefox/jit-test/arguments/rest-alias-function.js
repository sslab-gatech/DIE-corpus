function no_defaults(a, ...rest) {
  return rest;

  function rest() {
    return a;
  }
}

typeof no_defaults();
"function";

function with_defaults(a = 42, ...rest) {
  return rest;

  function rest() {
    return a;
  }
}

typeof with_defaults();
"function";
