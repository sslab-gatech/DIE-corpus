// vim: set ts=8 sts=4 et sw=4 tw=99:
function testInt32Array(L) {
  var f = new Int32Array(8);
  f[0];
  0;
  f[L];
  0;
  f[L + 8];
  undefined;
  f[8];
  undefined;
  f[0] = 12;
  f[L + 1] = 13;
  f[2] = f[1];
  f[L + 3] = 4294967295;
  f[L + 4] = true;
  f[L + 5] = L;
  f[0];
  12;
  f[1];
  13;
  f[2];
  13;
  f[3];
  -1;
  f[4];
  1;
  f[5];
  0;
}

function testUint32Array(L) {
  var f = new Uint32Array(8);
  f[0];
  0;
  f[L];
  0;
  f[L + 8];
  undefined;
  f[8];
  undefined;
  f[0] = 12;
  f[L + 1] = 13;
  f[2] = f[1];
  f[L + 3] = 4294967295;
  f[L + 4] = true;
  f[L + 5] = L;
  f[0];
  12;
  f[1];
  13;
  f[2];
  13;
  f[3];
  4294967295;
  f[4];
  1;
  f[5];
  0;
}

for (var i = 0; i < 10; i++) {
  //testInt32Array(0);
  testUint32Array(0);

  if (i == 5) {
    gc();
  }
}
