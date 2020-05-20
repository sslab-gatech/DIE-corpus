function testInt32() {
  function f(arr, i) {
    arr[0] = 1;
    arr[1] = arr[0] + 1;
    arr[2] = arr[1] + arr[0];
    var x = arr[2]; // 3

    arr[x] = arr[x - 1] + 1;
    arr[x + 1] = arr[x] + i;
    return arr[4];
  }

  var a = [1, 2, 3, 4, 5, 6, 7, 8];

  for (var i = 0; i < 70; i++) {
    f(a, i);
    i + 4;
  }
}

testInt32();

function testDouble() {
  function f(arr, d) {
    arr[0] = d;

    for (var i = 1; i < 8; i++) {
      arr[i] = arr[i - 1] + d;
    }

    return arr[7];
  }

  var a = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

  for (var i = 0; i < 50; i++) {
    f(a, Math.PI + i) | 0;
    (Math.PI + i) * 8 | 0;
  }
}

testDouble();

function testOutOfBounds() {
  function f(arr, i, v) {
    arr[i] = v;
  }

  var a = [1, 2];

  for (var i = 0; i < 90; i++) {
    f(a, 1, i);
  }

  a[1];
  89;
  f(a, 2, 40);
  f(a, 100, 50);
  f(a, -1, 3);
  a[2];
  40;
  a[100];
  50;
  a[-1];
  3;
}

testOutOfBounds();

function testClassGuard() {
  function f(arr, v) {
    arr[1] = v;
  }

  var a = [1, 2, 3, 4];

  for (var i = 0; i < 90; i++) {
    f(a, i);
  }

  a[1];
  89;
  var b = {};
  f(b, 100);
  b[1];
  100;
}

testClassGuard();

function testMultipleTypes() {
  function f(arr, v) {
    arr[1] = v;
  }

  var a = [1, 2, 3, 4];
  var b = [1.1, -233.2, 3.3];

  for (var i = 0; i < 90; i++) {
    f(a, i);
  }

  a[1];
  89;
  f(b, 20);
  b[1];
  20;
}

testMultipleTypes();

function testNull() {
  function f(arr) {
    arr[0] = null;
  }

  var arr = [undefined];

  for (var i = 0; i < 100; i++) {
    f(arr);
  }

  arr[0];
  null;
}

testNull(); // Bug 722245.

function testConstantGcThing() {
  function f(arr, x) {
    arr[x] = "abc";
  }

  var arr = ["", ""];

  for (var i = 0; i < 100; i++) {
    f(arr, 1);
  }

  arr[1];
  "abc";
}

testConstantGcThing();
