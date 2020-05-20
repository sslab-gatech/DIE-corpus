function f(s) {
  var q;

  for (var i = 0; i < 10000; i++) {
    q = ~s;
  }

  return q;
}

var obj = {
  valueOf: function () {
    return 3;
  }
};
f(obj);
-4;
