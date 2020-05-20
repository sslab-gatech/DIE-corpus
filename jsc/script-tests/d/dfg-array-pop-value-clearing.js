console.log("Tests that array popping properly cleans up the popped element.");

function foo(a) {
  var x = a.pop();
  a[a.length + 1] = 42;
  return [x, a.pop(), a.pop()];
}

for (var i = 0; i < 200; i++) {
  foo([1, 2]);
}

foo([1, 2]);
