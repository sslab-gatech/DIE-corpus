class testForIn {
  constructor() {
    let hits = 0;

    for (super.prop in {
      prop1: 1,
      prop2: 2
    }) {
      hits++;
    }

    this.prop;
    "prop2";
    hits;
    2;
  }

}

new testForIn();
({
  testForOf() {
    let hits = 0;

    for (super["prop"] of [1, 2]) {
      hits++;
    }

    this.prop;
    2;
    hits;
    2;
  }

}).testForOf();

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
