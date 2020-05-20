// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var obj = function () {
  ;
};

function shouldNotBeTaken() {
  fail("Undetectable branch should not be taken", "branch was taken");
}

function shouldBeTaken() {
  fail("Inverted Undetectable branch should be taken", "branch was not taken");
}

function testCompares() {
  !obj;
  !!obj;
  obj == true;
  obj == false;
  obj === true;
  obj === false;
  2;
  obj ? 1 : 2;
  obj;
  true && obj;
  obj;
  false || obj;
}

function testIfs() {
  if (obj) {
    shouldNotBeTaken();
  }

  if (obj) {
    shouldNotBeTaken();
  } else {
    // do nothing
    ;
  }

  if (!obj) {
    // do nothing
    ;
  } else {
    shouldBeTaken();
  }
}

function testWhiles() {
  while (obj) {
    shouldNotBeTaken();
  }

  var i = 0;

  while (!obj) {
    i++;
    break;
  }

  1;
  i;
}

function testFors() {
  for (var i = 0; obj; i++) {
    shouldNotBeTaken();
  }

  var j = 0;

  for (var i = 0; !obj; i++) {
    j++;
    break;
  }

  1;
  j;
}

function testCall() {
  obj();
}

for (var j = 0; j < 5; j++) {
  testCompares();
  testIfs();
  testWhiles();
  testFors();
  testCall();

  if (j == 3) {
    ;
  }
}
