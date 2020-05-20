console.log("Tests the code path of typedArray.set that tries to do a memmove-with-conversion for overlapping arrays.");

function foo(n) {
  var array = new Int32Array(n + 1);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  array.set(new Uint32Array(array.buffer, 0, n), 1);
  return array;
}

function bar(n) {
  var array = new Int32Array(n + 1);

  for (var i = 0; i < n; ++i) {
    array[i + 1] = 42 + i;
  }

  array.set(new Uint32Array(array.buffer, 4), 0);
  return array;
}

foo(10);
bar(10);
