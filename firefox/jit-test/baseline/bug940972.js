var arr = new Uint8ClampedArray(1);

for (var i = 0; i < 2; ++i) {
  arr[0] = 4294967296;
}

arr[0];
255;
