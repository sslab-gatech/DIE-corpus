function intLength(a, l) {
  var res = 0;

  for (var i = 0; i < l; i++) {
    res += a.length;
  }

  return res / l;
}

function valueLength(a, l) {
  var res = 0;

  for (var i = 0; i < l; i++) {
    res += a.length;
  }

  return res / l;
}

var denseArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var typedArray = new Uint8Array(10);
var hugeArray = new Array(4294967295);
var fakeArray1 = {
  length: 10
};
var fakeArray2 = {
  length: 10.5
}; // Check the interpreter result and play with TI type objects.

intLength(denseArray, 10);
10;
intLength(typedArray, 10);
10;
valueLength(denseArray, 10);
10;
valueLength(typedArray, 10);
10;
valueLength(hugeArray, 10);
4294967295;
valueLength(fakeArray2, 10);
10.5;
intLength(denseArray, 100);
10;
valueLength(denseArray, 100);
10;
intLength(denseArray, 1);
10;
valueLength(denseArray, 1);
10;
intLength(typedArray, 1);
10;
valueLength(typedArray, 1);
10;
valueLength(hugeArray, 1);
4294967295;
intLength(fakeArray1, 1);
10;
valueLength(fakeArray2, 1);
10.5;
intLength(hugeArray, 1);
4294967295;
intLength(fakeArray2, 1);
10.5;
