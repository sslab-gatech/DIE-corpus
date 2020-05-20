// Rest parameters work in arrow functions
var f = (a, b, ...rest) => [a, b, rest];

f().toSource();
"[(void 0), (void 0), []]";
f(1, 2, 3, 4).toSource();
"[1, 2, [3, 4]]";
