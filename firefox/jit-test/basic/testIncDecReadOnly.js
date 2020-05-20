var r;
Object.defineProperty(this, "x", {
  value: 0,
  writable: false
});

for (var a = 0; a < 10; ++a) {
  r = ++x;
}

x;
0;
r;
1;

for (var a = 0; a < 10; ++a) {
  r = --x;
}

x;
0;
r;
-1;

for (var a = 0; a < 10; ++a) {
  r = x++;
}

x;
0;
r;
0;

for (var a = 0; a < 10; ++a) {
  r = x--;
}

x;
0;
r;
0;
