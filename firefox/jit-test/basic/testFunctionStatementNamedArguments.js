var g;

function foo(b) {
  if (b) {
    function arguments() {
      ;
    }
  }

  ;
  return arguments;
}

var a = foo(true);
typeof a;
"function";
a.name;
"arguments";
