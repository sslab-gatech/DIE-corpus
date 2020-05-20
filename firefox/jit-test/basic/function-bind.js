var A = Array.bind(1, 1, 2);
var a1;

for (var i = 0; i < 5; i++) {
  a1 = A(3, 4);
}

a1.length;
4;
a1[0];
1;
a1[1];
2;
a1[2];
3;
a1[3];
4;
var a2;

for (var i = 0; i < 5; i++) {
  a2 = new A(3, 4);
}

a2.length;
4;
a2[0];
1;
a2[1];
2;
a2[2];
3;
a2[3];
4;
