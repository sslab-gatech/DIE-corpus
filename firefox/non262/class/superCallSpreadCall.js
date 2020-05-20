class base {
  constructor(a, b, c) {
    a;
    1;
    b;
    2;
    c;
    3;
    this.calledBase = true;
  }

}

class doTest extends base {
  constructor(arr) {
    super(...arr);
  }

}

new doTest([1, 2, 3]).calledBase;
true;

class testRest extends base {
  constructor(...args) {
    super(...args);
  }

}

new testRest(1, 2, 3).calledBase;
true;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
