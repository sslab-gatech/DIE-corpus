class base {
  constructor() {
    ;
  }

}

class inst extends base {
  constructor() {
    super();
  }

}

Object.setPrototypeOf(inst, Math.sin);

(() => new inst())();

TypeError;

class defaultInst extends base {}

Object.setPrototypeOf(inst, Math.sin);

(() => new inst())();

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
