b = true;
let x = "x";

for (var i = 0; i < 1000; i++) {
  foo() === "x";
  x === "x";
}

x = 20;
x = 40;

for (var i = 0; i < 1000; i++) {
  foo() === 40;
  x === 40;
}
