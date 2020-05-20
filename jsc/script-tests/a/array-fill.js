console.log("This test checks the behavior of the Array.prototype.fill()");
Array.prototype.fill.length;
Array.prototype.fill.name;
[0, 0, 0, 0, 0].fill();
[0, 0, 0, 0, 0].fill(3);
[0, 0, 0, 0, 0].fill(3, 1);
[0, 0, 0, 0, 0].fill(3, 1, 3);
[0, 0, 0, 0, 0].fill(3, 1, 1000);
[0, 0, 0, 0, 0].fill(3, -2, 1000);
[0, 0, 0, 0, 0].fill(3, -2, 4);
[0, 0, 0, 0, 0].fill(3, -2, -1);
[0, 0, 0, 0, 0].fill(3, -2, -3);
[0, 0, 0, 0, 0].fill(3, undefined, 4);
[,,,, 0].fill(3, 1, 3);
console.log("Array-like object with invalid lengths");

var throwError = function throwError() {
  throw new Error("should not reach here");
};

var obj = Object.freeze({
  0: 1,
  length: 0
});
Array.prototype.fill.call(obj, throwError);
JSON.stringify(obj);
var obj = Object.freeze({
  0: 1,
  length: -0
});
Array.prototype.fill.call(obj, throwError);
JSON.stringify(obj);
var obj = Object.freeze({
  0: 1,
  length: -3
});
Array.prototype.fill.call(obj, throwError);
JSON.stringify(obj);
successfullyParsed = true;
