class base {
  method() {
    return 1;
  }

  *gen() {
    return 2;
  }

  static sMethod() {
    return 3;
  }

  get answer() {
    return 42;
  }

} // Having a default constructor should work, and also not make you lose
// everything for no good reason


Object.getPrototypeOf(new base());
base.prototype;
new base().method();
1;
new base().gen().next().value;
2;
base.sMethod();
3;
new base().answer;
42;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
