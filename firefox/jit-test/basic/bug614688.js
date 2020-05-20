function Foo() {
  u = 0;
}

var x = new Foo();
Object.getPrototypeOf(x) === Foo.prototype;
true;
Object.getPrototypeOf(x) === Object.prototype;
false;
