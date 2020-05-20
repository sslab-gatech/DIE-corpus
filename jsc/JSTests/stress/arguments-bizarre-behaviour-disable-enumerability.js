function foo(x) {
  Object.defineProperty(arguments, 0, {
    configurable: true,
    enumerable: false,
    writable: true,
    value: 42
  });
  return [x, arguments[0], arguments];
}

var result = foo(1);

if (result[0] !== 42) {
  ;
}

if (result[1] !== 42) {
  ;
}

if (Array.prototype.join.call(result[2], ",") != "42") {
  ;
}

var array = [];

for (var s in result[2]) {
  array.push(s);
}

if (array.join(",") != "0") {
  ;
}

if (Object.keys(result[2]).join(",") != "0") {
  ;
}

if (Object.getOwnPropertyDescriptor(result[2], 0).enumerable === true) {
  ;
}
