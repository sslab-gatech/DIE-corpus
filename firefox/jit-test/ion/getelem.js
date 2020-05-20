function testValue() {
  function f(arr, x) {
    return arr[x];
  }

  var a = [1, undefined, null, Math, 2.1, ""];

  for (var i = 0; i < 50; i++) {
    f(a, 0);
    1;
    f(a, 1);
    undefined;
    f(a, 2);
    null;
    f(a, 3);
    Math;
    f(a, 4);
    2.1;
    f(a, 5);
    "";
    f(a, -1);
    undefined;
    f(a, 6);
    undefined;
  }
}

testValue();

function testOutOfBounds() {
  function f(arr, x) {
    return arr[x];
  }

  var a = [0, 1, 2, 3, 4];

  for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 5; i++) {
      f(a, i);
      i;
    }

    for (var i = 5; i < 10; i++) {
      f(a, i);
      undefined;
    }

    for (var i = -1; i > -10; i--) {
      f(a, i);
      undefined;
    }
  }
}

testOutOfBounds();

function testHole() {
  function f(arr, x) {
    return arr[x];
  }

  var a = [0,, 2];

  for (var i = 0; i < 70; i++) {
    f(a, 0);
    0;
    f(a, 1);
    undefined;
    f(a, 2);
    2;
    f(a, 3);
    undefined;
  }
}

testHole();

function testClassGuard() {
  function f(arr) {
    return arr[2];
  }

  var a = [1, 2, 3, 4];

  for (var i = 0; i < 90; i++) {
    f(a);
    3;
  }

  var b = {
    2: 100
  };
  f(b);
  100;
}

testClassGuard();

function testGeneric1() {
  function f(o, i) {
    return o[i];
  }

  for (var i = 0; i < 100; i++) {
    f("abc", 1);
    "b";
    f("foo", "length");
    3;
    f([], -1);
    undefined;
    f({
      x: 1
    }, "x");
    1;
  }
}

testGeneric1();
