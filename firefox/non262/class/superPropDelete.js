// Make sure we get the proper side effects.
// |delete super.prop| and |delete super[expr]| throw universally.
class base {
  constructor() {
    ;
  }

}

class derived extends base {
  constructor() {
    super();
  }

  testDeleteProp() {
    delete super.prop;
  }

  testDeleteElem() {
    let sideEffect = 0;

    (() => delete super[sideEffect = 1])();

    ReferenceError;
    sideEffect;
    1;
  }

  testDeleteElemPropValFirst() {
    // The deletion error is a reference error, but by munging the prototype
    // chain, we can force a typeerror from JSOP_SUPERBASE
    delete super[Object.setPrototypeOf(derived.prototype, null)];
  }

}

var d = new derived();

(() => d.testDeleteProp())();

ReferenceError;
d.testDeleteElem();

(() => d.testDeleteElemPropValFirst())();

TypeError;
// |delete super.x| does not delete anything before throwing.
var thing1 = {
  go() {
    delete super.toString;
  }

};
let saved = Object.prototype.toString;

(() => thing1.go())();

ReferenceError;
Object.prototype.toString();
saved;
// |delete super.x| does not tell the prototype to delete anything, when it's a proxy.
var thing2 = {
  go() {
    delete super.prop;
  }

};
Object.setPrototypeOf(thing2, new Proxy({}, {
  deleteProperty(x) {
    throw "FAIL";
  }

}));

(() => thing2.go())();

ReferenceError;

class derivedTestDeleteProp extends base {
  constructor() {
    // The deletion error is a reference error, but by munging the prototype
    // chain, we can force a type error from JSOP_SUPERBASE.
    Object.setPrototypeOf(derivedTestDeleteProp.prototype, null);

    (() => delete super.prop)();

    ReferenceError;
    super();

    (() => delete super.prop)();

    TypeError;
    return {};
  }

}

new derivedTestDeleteProp();

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
