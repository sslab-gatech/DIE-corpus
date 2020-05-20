console.log("This tests that a call to array.sort(compareFunction) works correctly for numeric comparisons (arg1 - arg2), and also for things that might look like numeric comparisons.");

function doSort(x, y) {
  return x - y;
}

function dontSort(w, x, y) {
  return x - y;
}

[3, 1, 5, 2, 4].sort(doSort);
[3, 1, 5, 2, 4].sort(dontSort);
