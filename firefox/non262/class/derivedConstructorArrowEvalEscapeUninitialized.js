let superArrow;
let thisArrow;
let thisStash;

class base {
  constructor() {
    // We run this constructor twice as part of the double init check
    if (!thisStash) {
      thisStash = {
        prop: 45
      };
    }

    return thisStash;
  }

}

class foo extends base {
  constructor() {
    superArrow = () => super();

    thisArrow = () => this;
  }

} // Populate the arrow function saves. Since we never invoke super(), we throw


(() => new foo())();

ReferenceError;
thisArrow;
ReferenceError;
// call super()
superArrow(); // Can't call it twice

superArrow;
ReferenceError;
thisArrow();
thisStash;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
