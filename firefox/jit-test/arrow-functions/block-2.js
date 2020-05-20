// Block arrow functions don't return the last expression-statement value automatically.
var f = a => {
  a + 1;
};

f(0);
undefined;
