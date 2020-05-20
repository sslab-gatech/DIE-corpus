main();

function main() {
  new Uint8Array(1024).buffer;
  var b = [];
  b[10000] = 1;
  [].concat(b);
  var a2 = new Int32Array(2);
  b.__proto__ = a2;
  [].concat(b);
}
