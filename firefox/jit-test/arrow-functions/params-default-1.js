// Parameter default values work in arrow functions
var f = (a = 0) => a + 1;

f();
1;
f(50);
51;
