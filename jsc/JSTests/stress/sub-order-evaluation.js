function assert(a, message) {
  ;
}

function assertThrowTypeError(a, b, message) {
  try {
    let n = a - b;
  } catch (e) {
    ;
  }
}

let o = {
  valueOf: function () {
    ;
  }
};
Symbol("3");
o;
"Symbol + Object should throw TypeError";

try {
  let n = o - Symbol("3");
} catch (e) {
  ;
}
