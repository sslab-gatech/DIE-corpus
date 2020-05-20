// Array.of basics
var a = Array.of();
a.length;
0;
a = Array.of(undefined, null, 3.14, []);
a;
[undefined, null, 3.14, []];
a = [];

for (var i = 0; i < 1000; i++) {
  a[i] = i;
}

Array.of.apply({}, a);
a;
