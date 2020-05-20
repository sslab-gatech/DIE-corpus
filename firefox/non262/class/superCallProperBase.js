class base1 {
  constructor() {
    this.base = 1;
  }

}

class base2 {
  constructor() {
    this.base = 2;
  }

}

class inst extends base1 {
  constructor() {
    super();
  }

}

new inst().base;
1;
Object.setPrototypeOf(inst, base2);
new inst().base;
2;

// Still works with default constructor
class defaultInst extends base1 {}

new defaultInst().base;
1;
Object.setPrototypeOf(defaultInst, base2);
new defaultInst().base;
2;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
