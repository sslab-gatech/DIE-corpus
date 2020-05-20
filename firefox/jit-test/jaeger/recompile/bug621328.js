function foo() {
  ;
}

;

function f() {
  var e = foo;
  a = new e();
  typeof a;
  "object";
  e = a;
}

f();
