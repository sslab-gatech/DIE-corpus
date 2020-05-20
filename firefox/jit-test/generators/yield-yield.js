// Bug 880447
function* f() {
  yield yield 1;
}

var g = f();
g.next().value;
1;
g.return("hello").value;
"hello";
g.next().value;
undefined;
