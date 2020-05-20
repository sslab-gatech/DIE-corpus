function f() {
  var res = 0;

  for (var i = 0; i < 100; i++) {
    var s = "test" + i;
    res += s.length;
    s[0];
    "t";
    s[3];
    "t";

    if (i > 90) {
      s[4];
      "9";
    }
  }

  return res;
}

f();
590;
