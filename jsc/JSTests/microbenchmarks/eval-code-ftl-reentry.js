for (var _i = 0; _i < 1000; ++_i) {
  var result = 0;
  var n = 15000;

  for (var i = 0; i < n; ++i) {
    result += {
      f: 1
    }.f;
  }

  result == n;
}
