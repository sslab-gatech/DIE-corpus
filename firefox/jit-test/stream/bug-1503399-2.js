// Don't assert if the wrapper that's the value of reader.[[stream]] gets nuked.
let g = newGlobal({
  newCompartment: true
});
let stream = new g.ReadableStream({});
let reader = ReadableStream.prototype.getReader.call(stream);

(() => reader.read())();

TypeError;
"can't access dead object";

(() => reader.releaseLock())();

TypeError;
"can't access dead object";
