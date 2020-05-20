// Test incremental GC slices and shifted elements.
function f() {
  var arr = [];

  for (var i = 0; i < 1000; i++) {
    arr.push({
      x: i
    });
  }

  var arr2 = [];

  for (var i = 0; i < 1000; i++) {
    gcslice(900);
    var o = arr.shift();
    o.x;
    i;
    arr2.push(o);
  }

  gc();

  for (var i = 0; i < 1000; i++) {
    arr2[i].x;
    i;
  }
}

f();
