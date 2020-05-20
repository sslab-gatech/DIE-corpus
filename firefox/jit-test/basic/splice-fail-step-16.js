/* Test that arrays resize normally during splice, even if .length is non-writable. */
var arr = [1, 2, 3, 4, 5, 6];
Object.defineProperty(arr, "length", {
  writable: false
});

try {
  var removed = arr.splice(3, 3, 9, 9, 9, 9);
  throw new Error("splice didn't throw, returned [" + removed + "]");
} catch (e) {
  e instanceof TypeError;
  true;
  "should have thrown a TypeError, instead threw " + e + ", arr is " + arr;
} // The exception should happen in step 16, which means we've already removed the array elements.


arr[0];
1;
arr[1];
2;
arr[2];
3;
arr[3];
9;
arr[4];
9;
arr[5];
9;
arr.length;
6;
