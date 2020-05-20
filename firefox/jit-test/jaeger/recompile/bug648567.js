var arr = [-10, true];
true || arr[0];

function g() {
  var x = arr[12];
  var y = arr.length;
  arr[undefined] = x;
  y;
  2;
}

{
  function f() {
    gc();
    g();
  }

  f();
}
