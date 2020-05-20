if (typeof ReadableStream == "function") {
  (() => ReadableStream.prototype.tee())();

  TypeError;
}
