function loop(actual = 0) {
  if (function () {
    actual++;
  }) {
    ;
  }

  return actual;
}

loop();
0;
