function testBase(base) {
  class instance extends base {
    constructor(inst, one) {
      super(inst, one);
    }

  }

  let inst = new instance(instance, 1);
  Object.getPrototypeOf(inst);
  instance.prototype;
  inst.calledBase;
  true;

  class defaultInstance extends base {}

  let defInst = new defaultInstance(defaultInstance, 1);
  Object.getPrototypeOf(defInst);
  defaultInstance.prototype;
  defInst.calledBase;
  true;
}

class base {
  // Base class must be [[Construct]]ed, as you cannot [[Call]] a class
  // constructor
  constructor(nt, one) {
    new.target;
    nt;
    one;
    1;
    this.calledBase = true;
  }

}

testBase(base);
testBase(class extends base {
  constructor(nt, one) {
    // Every step of the way, new.target and args should be right
    new.target;
    nt;
    one;
    1;
    super(nt, one);
  }

});

function baseFunc(nt, one) {
  new.target;
  nt;
  one;
  1;
  this.calledBase = true;
}

testBase(baseFunc);
let handler = {};
let p = new Proxy(baseFunc, handler);
testBase(p);

handler.construct = (target, args, nt) => Reflect.construct(target, args, nt);

testBase(p);

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
