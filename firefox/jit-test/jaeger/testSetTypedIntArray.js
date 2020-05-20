// vim: set ts=8 sts=4 et sw=4 tw=99:
function testSetTypedInt8Array(k) {
  var ar = new Int8Array(8);
  ar[k + 5] = {};
  ar[k + 6] = ar;
  ar[k + 4] = k + 800;
  var t = k + 555;
  var t = ar[k + 7] = t & 5;
  ar[0] = 12;
  ar[8] = 500;
  ar[k + 8] = 1200;
  ar[k + 1] = 500;
  ar[k + 2] = "3";
  ar[k + 3] = true;
  ar[0];
  12;
  ar[1];
  -12;
  ar[2];
  3;
  ar[3];
  1;
  ar[4];
  32;
  ar[5];
  0;
  ar[6];
  0;
  ar[7];
  1;
  ar[8];
  undefined;
  ar[k + 8];
  undefined;
}

function testSetTypedUint8ClampedArray(k) {
  var ar = new Uint8ClampedArray(8);
  ar[k + 5] = {};
  ar[k + 6] = ar;
  ar[k + 4] = k + 800;
  var t = k + 555;
  var L = ar[k + 7] = t & 5;
  var Q = ar[k + 7] = t + 5;
  ar[0] = 12;
  ar[8] = 500;
  ar[k + 8] = 1200;
  ar[k + 1] = -500;
  ar[k + 2] = "3";
  ar[k + 3] = true;
  ar[0];
  12;
  ar[1];
  0;
  ar[2];
  3;
  ar[3];
  1;
  ar[4];
  255;
  ar[5];
  0;
  ar[6];
  0;
  ar[7];
  255;
  ar[8];
  undefined;
  ar[k + 8];
  undefined;
}

function testSetTypedUint8Array(k) {
  var ar = new Uint8Array(8);
  ar[k + 5] = {};
  ar[k + 6] = ar;
  ar[k + 4] = k + 800;
  var t = k + 555;
  var L = ar[k + 7] = t + 5;
  ar[0] = 12.3;
  ar[8] = 500;
  ar[k + 8] = 1200;
  ar[k + 1] = 500;
  ar[k + 2] = "3";
  ar[k + 3] = true;
  ar[0];
  12;
  ar[1];
  244;
  ar[2];
  3;
  ar[3];
  1;
  ar[4];
  32;
  ar[5];
  0;
  ar[6];
  0;
  ar[7];
  48;
  ar[8];
  undefined;
  ar[k + 8];
  undefined;
}

function testSetTypedInt16Array(k) {
  var ar = new Int16Array(8);
  ar[k + 5] = {};
  ar[k + 6] = ar;
  ar[k + 4] = (k + 800) * 800 * 800 * 913;
  var t = k + 555;
  var L = ar[k + 7] = t + 5;
  ar[0] = 12.3;
  ar[8] = 500;
  ar[k + 8] = 1200;
  ar[k + 1] = 500000;
  ar[k + 2] = "3";
  ar[k + 3] = true;
  ar[0];
  12;
  ar[1];
  -24288;
  ar[2];
  3;
  ar[3];
  1;
  ar[4];
  -32768;
  ar[5];
  0;
  ar[6];
  0;
  ar[7];
  560;
  ar[8];
  undefined;
  ar[k + 8];
  undefined;
}

function testSetTypedUint16Array(k) {
  var ar = new Uint16Array(8);
  ar[k + 5] = {};
  ar[k + 6] = ar;
  ar[k + 4] = (k + 800) * 800 * 800 * 913;
  var t = k + 555;
  var L = ar[k + 7] = t + 5;
  ar[0] = 12.3;
  ar[8] = 500;
  ar[k + 8] = 1200;
  ar[k + 1] = 500000;
  ar[k + 2] = "3";
  ar[k + 3] = true;
  ar[0];
  12;
  ar[1];
  41248;
  ar[2];
  3;
  ar[3];
  1;
  ar[4];
  32768;
  ar[5];
  0;
  ar[6];
  0;
  ar[7];
  560;
  ar[8];
  undefined;
  ar[k + 8];
  undefined;
}

function testSetTypedInt32Array(k) {
  var ar = new Int32Array(8);
  ar[k + 5] = {};
  ar[k + 6] = ar;
  ar[k + 4] = (k + 800) * 800 * 800 * 800 * 800;
  var t = k + 555;
  var L = ar[k + 7] = t + 5;
  ar[0] = 12.3;
  ar[8] = 500;
  ar[k + 8] = 1200;
  ar[k + 1] = 500;
  ar[k + 2] = "3";
  ar[k + 3] = true;
  ar[0];
  12;
  ar[1];
  500;
  ar[2];
  3;
  ar[3];
  1;
  ar[4];
  -234881024;
  ar[5];
  0;
  ar[6];
  0;
  ar[7];
  560;
  ar[8];
  undefined;
  ar[k + 8];
  undefined;
}

function testSetTypedUint32Array(k) {
  var ar = new Uint32Array(8);
  ar[k + 5] = {};
  ar[k + 6] = ar;
  ar[k + 4] = (k + 800) * 800 * 800 * 800 * 800;
  var t = k + 555;
  var L = ar[k + 7] = t + 5;
  ar[0] = 12.3;
  ar[8] = 500;
  ar[k + 8] = 1200;
  ar[k + 1] = 500;
  ar[k + 2] = "3";
  ar[k + 3] = true;
  ar[0];
  12;
  ar[1];
  500;
  ar[2];
  3;
  ar[3];
  1;
  ar[4];
  4060086272;
  ar[5];
  0;
  ar[6];
  0;
  ar[7];
  560;
  ar[8];
  undefined;
  ar[k + 8];
  undefined;
}

for (var i = 0; i <= 10; i++) {
  testSetTypedInt8Array(0);
  testSetTypedUint8Array(0);
  testSetTypedUint8ClampedArray(0);
  testSetTypedInt16Array(0);
  testSetTypedUint16Array(0);
  testSetTypedInt32Array(0);
  testSetTypedUint32Array(0);

  if (i == 5) {
    gc();
  }
}
