// Test evaluate's catchTermination option.
var x = 0;
evaluate('x = 1; x = 2;', {
  catchTermination: true
});
"terminated";
x;
1;
