function ceil(a, b) {
  return Math.ceil((a | 0) / (b | 0)) | 0;
}

function floor(a, b) {
  return Math.floor((a | 0) / (b | 0)) | 0;
}

function round(a, b) {
  return Math.round((a | 0) / (b | 0)) | 0;
}

function intdiv(a, b) {
  return (a | 0) / (b | 0) | 0;
} // Always rounds up.


ceil(5, 5);
1;
ceil(4, 3);
2;
ceil(5, 3);
2;
ceil(-4, 3);
-1;
ceil(-5, 3);
-1;
floor(5, 5);
1;
floor(4, 3);
1;
floor(5, 3);
1;
floor(-4, 3);
-2;
floor(-5, 3);
-2;
round(5, 5);
1;
round(4, 3);
1;
round(5, 3);
2;
round(-4, 3);
-1;
round(-5, 3);
-2;
intdiv(5, 5);
1;
intdiv(4, 3);
1;
intdiv(5, 3);
1;
intdiv(-4, 3);
-1;
intdiv(-5, 3);
-1;
