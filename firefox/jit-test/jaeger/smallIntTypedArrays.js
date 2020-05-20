// vim: set ts=8 sts=4 et sw=4 tw=99:
function testInt8Array(L) {
  var f = new Int8Array(8);
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
  f[L + 3] = 500;
  f[L + 4] = true;
  f[L + 5] = L;
  f[0];
  12;
  f[1];
  13;
  f[2];
  13;
  f[3];
  -12;
  f[4];
  1;
  f[5];
  0;
}

function testUint8Array(L) {
  var f = new Uint8Array(8);
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
  f[L + 3] = 500;
  f[L + 4] = true;
  f[L + 5] = L;
  f[0];
  12;
  f[1];
  13;
  f[2];
  13;
  f[3];
  244;
  f[4];
  1;
  f[5];
  0;
}

function testUint8ClampedArray(L) {
  var f = new Uint8ClampedArray(8);
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
  f[L + 3] = 500;
  f[L + 4] = true;
  f[L + 5] = L;
  f[0];
  12;
  f[1];
  13;
  f[2];
  13;
  f[3];
  255;
  f[4];
  1;
  f[5];
  0;
}

function testInt16Array(L) {
  var f = new Int16Array(8);
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
  f[L + 3] = 190000;
  f[L + 4] = true;
  f[L + 5] = L;
  f[0];
  12;
  f[1];
  13;
  f[2];
  13;
  f[3];
  -6608;
  f[4];
  1;
  f[5];
  0;
}

function testUint16Array(L) {
  var f = new Uint16Array(8);
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
  f[L + 3] = 190000;
  f[L + 4] = true;
  f[L + 5] = L;
  f[0];
  12;
  f[1];
  13;
  f[2];
  13;
  f[3];
  58928;
  f[4];
  1;
  f[5];
  0;
}

for (var i = 0; i < 10; i++) {
  testInt8Array(0);
  testUint8Array(0);
  testUint8ClampedArray(0);
  testInt16Array(0);
  testUint16Array(0);

  if (i == 5) {
    gc();
  }
}
