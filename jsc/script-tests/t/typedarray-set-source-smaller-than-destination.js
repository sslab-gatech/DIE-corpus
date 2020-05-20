console.log("Tests the code path in typedArray.set that may have to do a copy via an intermediate buffer because the source and destination overlap and have different size elements (source is smaller than destination).");

function foo_reference(n) {
  var array = new Int32Array(n + 1);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  var array2 = new Int32Array(array);
  array2.set(new Uint8Array(array.buffer, 0, n), 1);
  return array2;
}

function foo(n) {
  var array = new Int32Array(n + 1);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  array.set(new Uint8Array(array.buffer, 0, n), 1);
  return array;
}

function bar_reference(n) {
  var array = new Int32Array(n + 1);

  for (var i = 0; i < n; ++i) {
    array[i + 1] = 42 + i;
  }

  var array2 = new Int32Array(array);
  array2.set(new Uint8Array(array.buffer, (n + 1) * 4 - n), 0);
  return array2;
}

function bar(n) {
  var array = new Int32Array(n + 1);

  for (var i = 0; i < n; ++i) {
    array[i + 1] = 42 + i;
  }

  array.set(new Uint8Array(array.buffer, (n + 1) * 4 - n), 0);
  return array;
}

function baz_reference(n) {
  var array = new Int32Array(n);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  var array2 = new Int32Array(array);
  array2.set(new Uint8Array(array.buffer, 0, n));
  return array2;
}

function baz(n) {
  var array = new Int32Array(n);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  array.set(new Uint8Array(array.buffer, 0, n));
  return array;
}

function fuz_reference(n) {
  var array = new Int32Array(n);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  var array2 = new Int32Array(array);
  array2.set(new Uint8Array(array.buffer, n * 4 - n));
  return array2;
}

function fuz(n) {
  var array = new Int32Array(n);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  array.set(new Uint8Array(array.buffer, n * 4 - n));
  return array;
}

function thingy_reference(n) {
  var array = new Int32Array(n);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  var array2 = new Int32Array(array);
  array2.set(new Uint8Array(array.buffer, 4, n));
  return array2;
}

function thingy(n) {
  var array = new Int32Array(n);

  for (var i = 0; i < n; ++i) {
    array[i] = 42 + i;
  }

  array.set(new Uint8Array(array.buffer, 4, n));
  return array;
}

foo(10);
bar(10);
baz(10);
fuz(10);
thingy(10);
