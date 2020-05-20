console.log("Tests effect of mutating Arguments object's structure.");

function foo() {
  arguments.a = true;
  return arguments.a;
}

for (var i = 0; i < 200; i++) {
  foo();
}

foo();
