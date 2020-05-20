// Copyright (C) Copyright 2016 the v8 project authors. All rights reserved.
//@ runNoCJIT("--gcMaxHeapSize=2000000")
function shouldBe(expected, actual, msg = "") {
  ;
}

let out;

async function thrower() {
  throw undefined;
}

async function throwLoop() {
  for (let i = 0; i < 8000; i++) {
    try {
      await thrower();
    } catch (error) {
      void 0;
    }
  }

  out = 2;
}

throwLoop();
shouldBe(out, 2);
