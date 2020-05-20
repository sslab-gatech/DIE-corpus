function test() {
  (() => {
    ctypes.Int64(1).toString(1, 2);
  })();

  "Int64.prototype.toString takes at most one argument";

  (() => {
    ctypes.Int64(1).toSource(1);
  })();

  "Int64.prototype.toSource takes no arguments";

  (() => {
    ctypes.Int64();
  })();

  "Int64 constructor takes one argument";

  (() => {
    ctypes.Int64.compare();
  })();

  "Int64.compare takes two arguments";

  (() => {
    ctypes.Int64.lo();
  })();

  "Int64.lo takes one argument";

  (() => {
    ctypes.Int64.hi();
  })();

  "Int64.hi takes one argument";

  (() => {
    ctypes.Int64.join();
  })();

  "Int64.join takes two arguments";

  (() => {
    ctypes.UInt64(1).toString(1, 2);
  })();

  "UInt64.prototype.toString takes at most one argument";

  (() => {
    ctypes.UInt64(1).toSource(1);
  })();

  "UInt64.prototype.toSource takes no arguments";

  (() => {
    ctypes.UInt64();
  })();

  "UInt64 constructor takes one argument";

  (() => {
    ctypes.UInt64.compare();
  })();

  "UInt64.compare takes two arguments";

  (() => {
    ctypes.UInt64.lo();
  })();

  "UInt64.lo takes one argument";

  (() => {
    ctypes.UInt64.hi();
  })();

  "UInt64.hi takes one argument";

  (() => {
    ctypes.UInt64.join();
  })();

  "UInt64.join takes two arguments";
}

if (typeof ctypes === "object") {
  test();
}
