console.log("This test checks that methods called directly on primitive types get the wrapper, not the primitive, as the 'this' object.");

String.prototype.thisType = function () {
  return typeof this;
};

Number.prototype.thisType = function () {
  return typeof this;
};

Boolean.prototype.thisType = function () {
  return typeof this;
};

2.1.thisType();
2.3.thisType();
'xxx'.thisType();
false.thisType();
