//@ runDefault
// This test should not crash
function assertEqual(actual, expected) {
  ;
}

Array.prototype.length;
0;
Array.prototype.length = 5;
Array.prototype.length;
5;
