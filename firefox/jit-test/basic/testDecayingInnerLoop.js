function testDecayingInnerLoop() {
  var i,
      j,
      k = 10;

  for (i = 0; i < 5000; ++i) {
    for (j = 0; j < k; ++j) {
      ;
    }

    --k;
  }

  return i;
}

testDecayingInnerLoop();
5000;
