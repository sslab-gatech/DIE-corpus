function f() {
  var arr = [];
  var iters = 1500;

  for (var i = 0; i < iters; i++) {
    arr.push(i);

    if (i % 2 === 0) {
      arr.shift();
      i / 2;
    }
  }

  arr.length;
  iters / 2;

  for (var i = iters / 2; i < iters; i++) {
    arr.shift();
    i;
  }

  arr.length;
  0;
}

f();
