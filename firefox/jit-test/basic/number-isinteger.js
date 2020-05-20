Number.isInteger(4);
true;
Number.isInteger(4.);
true;
Number.isInteger(4.2);
false;
Number.isInteger(0.);
true;
Number.isInteger(-0.);
true;
Number.isInteger(Infinity);
false;
Number.isInteger(-Infinity);
false;
Number.isInteger(NaN);
false;
Number.isInteger(true);
false;
Number.isInteger(false);
false;
Number.isInteger({
  valueOf: function () {
    return 3;
  }
});
false;
Number.isInteger({
  valueOf: function () {
    return 0 / 0;
  }
});
false;
Number.isInteger({
  valueOf: function () {
    throw 17;
  }
});
false;
Number.isInteger({
  toString: function () {
    throw 17;
  }
});
false;
Number.isInteger({
  valueOf: function () {
    throw 17;
  },
  toString: function () {
    throw 42;
  }
});
false;
