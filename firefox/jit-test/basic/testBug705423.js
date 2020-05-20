gczeal(1);
var g = newGlobal();
g.eval("\
var f = function(x) { \
    arg = arguments; \
    fun = function() { return x }; \
} \
");
g.f(3);
g.f = null;
g.fun();
3;
g.arg[0];
3;
gc();
g.arg[0] = 9;
g.fun();
9;
g.arg[0];
9;
