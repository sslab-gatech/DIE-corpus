Number.isFinite(Infinity);
false;
Number.isFinite(-Infinity);
false;
Number.isFinite(NaN);
false;
Number.isFinite(4);
true;
Number.isFinite(4.5);
true;
Number.isFinite("hi");
false;
Number.isFinite("1.3");
false;
Number.isFinite("51");
false;
Number.isFinite(0);
true;
Number.isFinite(-0);
true;
Number.isFinite({
  valueOf: function () {
    return 3;
  }
});
false;
Number.isFinite({
  valueOf: function () {
    return 0 / 0;
  }
});
false;
Number.isFinite({
  valueOf: function () {
    throw 17;
  }
});
false;
Number.isFinite({
  toString: function () {
    throw 17;
  }
});
false;
Number.isFinite({
  valueOf: function () {
    throw 17;
  },
  toString: function () {
    throw 42;
  }
});
false;
