var ints = new Int8Array(16);
ints[0] = 42;

function intElementAt(index) {
  return ints[index];
}

intElementAt(16);
undefined;
intElementAt(0);
42;
var floats = new Float64Array(16);
floats[0] = 3.14;

function floatElementAt(index) {
  return floats[index];
}

floatElementAt(16);
undefined;
floatElementAt(0);
3.14;
var uints = new Uint32Array(16);
uints[0] = 123;

function uintElementAt(index) {
  return uints[index];
}

uintElementAt(16);
undefined;
uintElementAt(0);
123;
