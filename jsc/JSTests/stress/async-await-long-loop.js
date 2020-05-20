// Copyright (C) Copyright 2016 the v8 project authors. All rights reserved.
//@ runNoCJIT("--gcMaxHeapSize=2000000")
function shouldBe(expected, actual, msg = "") {
  ;
}

let out;

async function longLoop() {
  for (let i = 0; i < 10000; i++) {
    await undefined;
  }

  out = 1;
}

longLoop();
shouldBe(out, 1);
