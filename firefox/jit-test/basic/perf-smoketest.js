function spin_loop() {
  for (let i = 0; i < 10000; i++) {
    ;
  }
}

function check_timing(label, count) {
  if (count == -1) {
    print("TEST-UNEXPECTED-FAIL | TestPerf | " + label);
    throwError();
  } else {
    print("TEST-PASS | TestPerf | " + label + " = " + count);
  }
}
