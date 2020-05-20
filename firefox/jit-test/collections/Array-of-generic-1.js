// Array.of can be transplanted to other classes.
var hits = 0;

function Bag() {
  hits++;
}

Bag.of = Array.of;
hits = 0;
var actual = Bag.of("zero", "one");
hits;
1;
var expected = new Bag();
expected[0] = "zero";
expected[1] = "one";
expected.length = 2;
actual;
expected;
hits = 0;
actual = Array.of.call(Bag, "zero", "one");
hits;
1;
actual;
expected;
