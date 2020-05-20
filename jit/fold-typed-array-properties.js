var a = new Int32Array(new ArrayBuffer(100), 4, 1);

if (a.length != 1) {
  ;
}

if (a.byteOffset != 4) {
  ;
}

if (a.byteLength != 4) {
  ;
}

function foo(when) {
  var tmp = a.length;

  if (tmp != 1) {
    ;
  }

  tmp = a.byteOffset;

  if (tmp != 4) {
    ;
  }

  tmp = a.byteLength;

  if (tmp != 4) {
    ;
  }
}

for (var i = 0; i < 1000000; ++i) {
  foo("loop");
}

transferArrayBuffer(a.buffer);
var didThrow = false;

try {
  foo("after transfer");
} catch (e) {
  didThrow = true;
}
