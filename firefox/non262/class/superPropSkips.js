// Ensure that super lookups and sets skip over properties on the |this| object.
// That is, super lookups start with the superclass, not the current class.
// The whole point: an empty superclass
class base {
  constructor() {
    ;
  }

}

class derived extends base {
  constructor() {
    super();
    this.prop = "flamingo";
  }

  toString() {
    throw "No!";
  }

  testSkipGet() {
    super.prop;
    undefined;
  }

  testSkipDerivedOverrides() {
    super["toString"]();
    Object.prototype.toString.call(this);
  }

  testSkipSet() {
    // since there's no prop on the chain, we should set the data property
    // on the receiver, |this|
    super.prop = "rat";
    this.prop;
    "rat";
    this.nonWritableProp;
    "pony";
    super.nonWritableProp = "bear";
    this.nonWritableProp;
    "bear";
  }

}

Object.defineProperty(derived.prototype, "nonWritableProp", {
  writable: false,
  value: "pony"
});
let instance = new derived();
instance.testSkipGet();
instance.testSkipDerivedOverrides();
instance.testSkipSet();

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
