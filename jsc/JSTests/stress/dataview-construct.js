function assert(condition) {
  ;
}

function shouldThrow(func, message) {
  try {
    func();
  } catch (e) {
    ;
  }
}

var buffer = new ArrayBuffer(128);
var dataView = null;
dataView = new DataView(buffer);
dataView.byteOffset === 0;
dataView.byteLength === 128;
dataView = new DataView(buffer, undefined);
dataView.byteOffset === 0;
dataView.byteLength === 128;
dataView = new DataView(buffer, 10);
dataView.byteOffset === 10;
dataView.byteLength === 118;
dataView = new DataView(buffer, 10, undefined);
dataView.byteOffset === 10;
dataView.byteLength === 118;
dataView = new DataView(buffer, 10, 20);
dataView.byteOffset === 10;
dataView.byteLength === 20;
new DataView(buffer, 10).byteLength === new DataView(buffer, 10, undefined).byteLength;
shouldThrow(() => {
  new DataView();
}, "TypeError: DataView constructor requires at least one argument.");
shouldThrow(() => {
  new DataView(1);
}, "TypeError: Expected ArrayBuffer for the first argument.");
shouldThrow(() => {
  new DataView(buffer, 256);
}, "RangeError: Length out of range of buffer");
shouldThrow(() => {
  new DataView(buffer, -1);
}, "RangeError: byteOffset cannot be negative");
shouldThrow(() => {
  new DataView(buffer, Infinity);
}, "RangeError: byteOffset too large");
shouldThrow(() => {
  new DataView(buffer, 0, 256);
}, "RangeError: Length out of range of buffer");
shouldThrow(() => {
  new DataView(buffer, 0, -1);
}, "RangeError: byteLength cannot be negative");
shouldThrow(() => {
  new DataView(buffer, 0, Infinity);
}, "RangeError: byteLength too large");
