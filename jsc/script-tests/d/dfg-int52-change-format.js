function foo(a) {
  // Create an int52.
  var x = a + 3000000000; // Make sure it's left-shifted.

  var y = x + x; // Now get it to be right-shifted.

  var z = x >> 1; // And finally, do something that prefers left-shift.

  var w = y + x;
  return [x, y, z, w];
}

for (var i = 0; i < 200; i++) {
  foo(1000000000);
}

foo(1000000000);
