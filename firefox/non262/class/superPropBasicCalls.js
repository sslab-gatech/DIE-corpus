// Super property (and calls) works in non-extending classes and object
// litterals.
class toStringTest {
  constructor() {
    // Install a property to make it plausible that it's the same this
    this.foo = "rhinoceros";
  }

  test() {
    super.toSource();
    super["toSource"]();
    super.toSource();
    this.toSource();
  }

}

new toStringTest().test();
let toStrOL = {
  test() {
    super.toSource();
    super["toSource"]();
    super.toSource();
    this.toSource();
  }

};
toStrOL.test();

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
