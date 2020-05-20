// When an already-non-extensible object is frozen, its Shape doesn't change.
// Make sure SetElement ICs handle this correctly.
function doStore(a) {
  for (var i = 0; i < 100; i++) {
    a[1] = i;
  }
}

function test() {
  with (this) {
    ;
  } // Don't Ion-compile.

  var a = {
    0: 0,
    1: 1
  };
  Object.preventExtensions(a);
  doStore(a);
  a[1];
  99;
  a[1] = 0;
  Object.freeze(a);
  doStore(a);
  a[1];
  0;
}

test();
test();
