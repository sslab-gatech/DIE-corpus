var obj = {
  toString: {},
  valueOf: function () {
    return "foopy";
  }
};

for (var i = 0; i < 25; i++) {
  String(obj);
  "foopy";
}
