var x;
var str = "a";
str.charCodeAt(Infinity) | 0;
0;

for (var i = 0; i < 10; ++i) {
  x = str.charCodeAt(Infinity) | 0;
}

x;
0;

for (var i = 0; i < 10; ++i) {
  x = str.charCodeAt(Infinity);
}

x | 0;
0;
