var buf = new ArrayBuffer([1, 2]);
var bufView = new DataView(buf);
detachArrayBuffer(buf);

(() => bufView.getInt8(0))();

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
