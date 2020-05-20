// Don't assert if the wrapper that's the value of stream.[[reader]] gets nuked.
let g = newGlobal({
  newCompartment: true
});
let stream = new ReadableStream({
  start(controller) {
    controller.enqueue("ponies");
    controller.close();
  }

});
g.stream = stream;
g.eval("var reader = ReadableStream.prototype.getReader.call(stream);");

(() => g.eval("reader.read()"))();

g.TypeError;
"can't access dead object";
g.eval("reader.releaseLock();");
