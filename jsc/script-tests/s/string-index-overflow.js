console.log("This test checks that accessing a string by an out of bounds index doesn't crash, furthermore the string should not appear to have out-of-bounds numeric properties.");

try {
  "x"[10];
} catch (e) {
  ;
}

"x".hasOwnProperty(10);
