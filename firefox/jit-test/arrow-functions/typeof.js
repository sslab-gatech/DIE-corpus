// The typeof an arrow function is "function".
typeof (() => 1);
"function";
typeof (a => {
  return a + 1;
});
"function";
