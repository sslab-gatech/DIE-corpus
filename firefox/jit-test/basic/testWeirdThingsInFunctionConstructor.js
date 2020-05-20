var f = new Function('x', 'var f = 3; if (x) function f() {}; return f');
f(false);
3;
typeof f(true);
"function";
var f = new Function('x', '"use strict"; x = 3; return arguments[0]');
f(42);
42;
