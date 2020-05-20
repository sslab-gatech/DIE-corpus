// => binds tighter than ,
var f, g;
g = (f, h => h + 1); // sequence expression: (f, (h => h + 1))

g.length;
1;
g(37);
38;
