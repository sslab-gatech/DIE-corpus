foo();

function foo() {
  Array.prototype.__proto__ = null;
  Array.prototype[1] = 'bar';
}
