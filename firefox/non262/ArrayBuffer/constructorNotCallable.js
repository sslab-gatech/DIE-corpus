(() => ArrayBuffer())();

TypeError;

(() => ArrayBuffer(1))();

TypeError;

(() => ArrayBuffer.call(null))();

TypeError;

(() => ArrayBuffer.apply(null, []))();

TypeError;

(() => Reflect.apply(ArrayBuffer, null, []))();

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
