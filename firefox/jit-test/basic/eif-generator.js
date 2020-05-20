function* f() {
  {
    let x = 1;

    while (true) {
      yield evalInFrame(0, "x");
      x++;
      {
        let y = 1;
        yield evalInFrame(0, "++y");
        yield evalInFrame(0, "++y");
      }
    }
  }
}

var gen = f();
gen.next().value;
1;
gen.next().value;
2;
gc();
gen.next().value;
3;
gc();
gen.next().value;
2;
gen.next().value;
2;
gc();
gen.next().value;
3;
gc();
gen.next().value;
3;
gen.next().value;
2;
gc();
gen.next().value;
3;
gen = null;
gc();

function* g() {
  {
    let x = 1;

    while (true) {
      var inner = function (inc) {
        x += inc;
        return evalInFrame(0, "x");
      };

      inner(0);
      x;
      yield inner;
      inner(0);
      x;
    }
  }
}

var gen = g();
var g1 = gen.next().value;
var g2 = gen.next().value;
gc();
g1(1);
2;
g2(1);
3;
gc();
g1(1);
4;
g2(1);
5;
gen = g1 = g2 = null;
gc();
