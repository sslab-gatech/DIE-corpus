// return exits the innermost enclosing arrow (not an enclosing function)
function f() {
  var g = x => {
    return !x;
  };

  return "f:" + g(true);
}

f();
"f:false";
