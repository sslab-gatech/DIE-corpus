function f1() {
  var a = new Int32Array(50);

  for (var i = 0; i < 100; i++) {
    var x = a[i];
    typeof x;
    i < a.length ? "number" : "undefined";
  }

  var b = new Float32Array(50);

  for (var i = 0; i < 100; i++) {
    var x = b[i];
    typeof x;
    i < b.length ? "number" : "undefined";
  }
}

f1();

function f2() {
  // Test that values on the prototype are ignored,
  // even for OOB accesses. This behavior is new
  // with ECMA 6 (see bug 829896).
  Object.prototype[50] = 4.4;
  Object.prototype[55] = Math;
  var a = new Int16Array(50);

  for (var i = 0; i < 100; i++) {
    var x = a[i];

    if (i < a.length) {
      x;
      0;
    } else {
      x;
      undefined;
    }
  }
}

f2();
