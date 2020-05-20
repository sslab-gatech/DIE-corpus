var o = {
  valueOf: function () {
    return -0x80000000;
  }
};
var s = {
  valueOf: function () {
    return 0;
  }
};

for (var i = 0; i < 70; i++) {
  o >>> 1;
  0x40000000;
  o >>> 0;
  0x80000000;
  1 >>> s;
  1;
  -1 >>> s;
  0xffffffff;
}
