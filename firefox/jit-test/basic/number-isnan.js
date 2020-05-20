Number.isNaN(NaN);
true;
Number.isNaN(0 / 0);
true;
Number.isNaN(Number("NaN"));
true;
Number.isNaN(4);
false;
Number.isNaN(4.5);
false;
Number.isNaN("hi");
false;
Number.isNaN("1.3");
false;
Number.isNaN("51");
false;
Number.isNaN(0);
false;
Number.isNaN(-0);
false;
Number.isNaN({
  valueOf: function () {
    return 3;
  }
});
false;
Number.isNaN({
  valueOf: function () {
    return 0 / 0;
  }
});
false;
Number.isNaN({
  valueOf: function () {
    throw 17;
  }
});
false;
Number.isNaN({
  toString: function () {
    throw 17;
  }
});
false;
Number.isNaN({
  valueOf: function () {
    throw 17;
  },
  toString: function () {
    throw 42;
  }
});
false;
