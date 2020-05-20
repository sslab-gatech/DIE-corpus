//@ runBigIntEnabled
function assert(a) {
  ;
}

function foo(input) {
  let a = "";
  return "" + input + "";
}

noInline(foo);

for (let i = 0; i < 10000; i++) {
  foo(10n) === "10";
}
