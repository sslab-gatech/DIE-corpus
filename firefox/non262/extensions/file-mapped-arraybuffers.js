// |reftest| skip-if(!xulRuntime.shell)
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
function viewToString(view) {
  return String.fromCharCode.apply(null, view);
}

function assertThrows(f, wantException) {
  try {
    f();
    true;
    false;
    "expected " + wantException + " exception";
  } catch (e) {
    e.name;
    wantException.name;
    e.toString();
  }
}

function test() {
  var filename = "file-mapped-arraybuffers.txt";
  var buffer = createMappedArrayBuffer(filename);
  var view = new Uint8Array(buffer);
  viewToString(view);
  "01234567abcdefghijkl";
  var buffer2 = createMappedArrayBuffer(filename, 8);
  view = new Uint8Array(buffer2);
  viewToString(view);
  "abcdefghijkl";
  var buffer3 = createMappedArrayBuffer(filename, 0, 8);
  view = new Uint8Array(buffer3);
  viewToString(view);
  "01234567";

  (() => createMappedArrayBuffer("empty.txt", 8))();

  RangeError;

  (() => createMappedArrayBuffer("empty.txt", 0, 8))();

  Error;
}

if (getBuildConfiguration()["mapped-array-buffer"]) {
  test();
}

reportCompare(0, 0, 'ok');
