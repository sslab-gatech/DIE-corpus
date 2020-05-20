// Making the array huge and sparse shouldn't leave us iterating through the entire array.
// But it does, sadly. Disable, because it takes too long.
if (1) {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8];
  arr.length = Math.pow(2, 32) - 2;
  arr.splice(5); // also test overflow

  arr.length;
  5;
  arr[0];
  1;
  arr[1];
  2;
  arr[2];
  3;
  arr[3];
  4;
  arr[4];
  5;
  arr[5];
  undefined;
}
