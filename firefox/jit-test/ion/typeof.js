function getType(v) {
  return typeof v;
}

function f() {
  for (var i = 0; i < 100; i++) {
    getType({});
    "object";
    getType(Math.abs);
    "function";
    getType(10);
    "number";
    getType(Math.PI);
    "number";
    getType(true);
    "boolean";
    getType("");
    "string";
    getType(null);
    "object";
    getType(undefined);
    "undefined";
  }
}

f();
