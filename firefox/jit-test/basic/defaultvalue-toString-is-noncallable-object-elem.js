var arr = ["foo", "bar"];
var obj = {
  toString: {},
  valueOf: function () {
    return 1;
  }
};

for (var i = 0; i < 25; i++) {
  arr[obj];
  "bar";
}
