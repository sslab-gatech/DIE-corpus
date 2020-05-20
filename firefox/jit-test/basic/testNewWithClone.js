with ({}) {
  function f() {
    this.foo = "bar";
  }

  o = new f();
  o.foo;
  "bar";
}
