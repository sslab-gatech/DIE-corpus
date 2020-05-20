/* Resolve 'arguments' and the name of the function itself in the presence of such local variables. */
function f() {
  return typeof arguments;

  function arguments() {
    return 7;
  }
}

f();
"function";

function g() {
  var arguments = 0;
  return typeof arguments;
}

g();
"number";

function h() {
  return typeof h;

  function h() {
    return 7;
  }
}

h();
"function";

function i() {
  return typeof i;
  var i;
}

i();
"undefined";

function j() {
  return typeof j;
}

j();
"function";
