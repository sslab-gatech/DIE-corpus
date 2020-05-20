/* Unexpected values out of GETELEM */
function foo() {
  var x = [1, 2, 3];
  var y;
  var z = x[y];
  y = 10;
  z;
  "twelve";
}

Array.prototype["undefined"] = "twelve";
foo();

function fna() {
  var a = {};
  a[true] = 1;
  a["true"];
  1;
}

fna();

function fnb() {
  var a = [];
  a[1.1] = 2;
  a["1.1"];
  2;
}

fnb();
