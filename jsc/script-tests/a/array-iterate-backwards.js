console.log("This test checks that iterating a large array backwards works correctly.");
var bytes = new Array();

function prepare(nbytes) {
  var i = nbytes - 1;

  while (i >= 0) {
    bytes[i] = new Number(i);
    i -= 1;
  }
}

function verify(nbytes) {
  var i = nbytes - 1;

  while (i >= 0) {
    if (bytes[i] != i) {
      return false;
    }

    i -= 1;
  }

  return true;
}

prepare(32768);
verify(32768);
prepare(65536);
verify(65536);
prepare(120000);
verify(120000);
