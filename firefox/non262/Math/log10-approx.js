Math.log10(2);
0.3010299956639812;
Math.log10(7);
0.8450980400142568;
Math.log10(Math.E);
Math.LOG10E;

for (var i = -10; i < 10; i++) {
  Math.log10(Math.pow(10, i));
  i;
}

reportCompare(0, 0, 'ok');
