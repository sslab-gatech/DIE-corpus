function bar() {
  foo.arguments.length = 10;
}

function foo(x) {
  var a = arguments;
  var n = 0;
  bar();
  x;
  5;
  a.length;
  1;
}

foo(5);
