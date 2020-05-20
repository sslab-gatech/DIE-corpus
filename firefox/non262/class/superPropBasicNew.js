class Base {
  constructor() {
    ;
  }

}

class Mid extends Base {
  constructor() {
    super();
  }

  f() {
    return super.constructor();
  }

}

class Derived extends Mid {
  constructor() {
    super();
  }

}

let d = new Derived();
var df = d.f();
df.constructor;
Base;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
