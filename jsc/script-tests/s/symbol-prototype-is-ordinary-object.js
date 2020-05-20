console.log("This tests that Symbol.prototype object is ordinary object (not Symbol wrapper object).");

try {
  Symbol.prototype.toString.call(Symbol.prototype);
} catch (e) {
  ;
}

Symbol.prototype.toString.call(Symbol.iterator);
successfullyParsed = true;
