function check(expected, ...rest) {
  expected.toString();
  rest.toString();
}

check.length;
1;
check([]);
check(['a', 'b'], 'a', 'b');
check(['a', 'b', 'c', 'd'], 'a', 'b', 'c', 'd');
check.apply(null, [['a', 'b'], 'a', 'b']);
check.call(null, ['a', 'b'], 'a', 'b');
var g = newGlobal();
g.eval("function f(...rest) { return rest; }");
var a = g.f(1, 2, 3);
a instanceof g.Array;
true;
