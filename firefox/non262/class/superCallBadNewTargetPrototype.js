class base {
  constructor() {
    ;
  }

} // lies and the lying liars who tell them


function lies() {
  ;
}

lies.prototype = 4;

(() => Reflect.consruct(base, [], lies))();

TypeError;

// lie a slightly different way
function get(target, property, receiver) {
  if (property === "prototype") {
    return 42;
  }

  return Reflect.get(target, property, receiver);
}

class inst extends base {
  constructor() {
    super();
  }

}

(() => new new Proxy(inst, {
  get
})())();

TypeError;

class defaultInst extends base {}

(() => new new Proxy(defaultInst, {
  get
})())();

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
