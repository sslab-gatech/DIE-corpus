//@ run("function-dot-arguments", "--useFunctionDotArguments=false")
function foo() {
  var a = bar.arguments;

  if (a.length != 0) {
    ;
  }

  for (var i = 0; i < 100; ++i) {
    if (a[i] !== void 0) {
      ;
    }
  }
}

function bar() {
  foo();
}

bar();
bar(1);
bar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
