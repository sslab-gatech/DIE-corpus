// Parameter default values work in arrow functions
var f = (a = 1, b = 2, ...rest) => [a, b, rest];


f().toSource();
"[1, 2, []]";
f(0, 0).toSource();
"[0, 0, []]";
f(0, 1, 1, 2, 3, 5).toSource();
"[0, 1, [1, 2, 3, 5]]";
