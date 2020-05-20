// |jit-test| skip-if: !('oomTest' in this)
function f(s) {
  s + "x";
  s.indexOf("y") === 0;
  oomTest(new Function(s));
}

var s = `
    class TestClass { constructor() {} }
`;

if (s.length) {
  f(s);
}
