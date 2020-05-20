function f(arr, v1, v2) {
  // Ensure array_push_slowly is called by passing more than one argument.
}

function basic() {
  // Use a much-greater capacity than the eventual non-writable length.
  var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  Object.defineProperty(a, "length", {
    writable: false,
    value: 6
  });

  (() => f(a, 8675309, 3141592))();

  TypeError;
  a.hasOwnProperty(6);
  false;
  a[6];
  undefined;
  a.hasOwnProperty(7);
  false;
  a[7];
  undefined;
  a.length;
  6;
}

basic();
