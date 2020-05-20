// Arrow functions have a .length property like ordinary functions.
(a => a).hasOwnProperty("length");
true;
(a => a).length;
1;
(() => 0).length;
0;
(a => 0).length;
1;
((a, b) => 0).length;
2;
((...arr) => arr).length;
0;
((a = 1, b = 2) => 0).length;
0;
