//@ runDefault
// This test should not crash
function assertEqual(actual, expected) {
  ;
}

Array.prototype.length;
0;
Array.prototype.length = 0x40000000;
Array.prototype.length;
0x40000000;
