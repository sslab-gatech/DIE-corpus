// Bug 1227207
var AB = new ArrayBuffer(12); // Length divides 4

var BC = new ArrayBuffer(14); // Length does not divide 4

(() => new Int32Array(AB, -1))();

RangeError;

(() => new Int32Array(AB, 2))();

RangeError;

(() => new Int32Array(BC))();

RangeError;

(() => new Int32Array(AB, 16))();

RangeError;

(() => new Int32Array(AB, 0, 4))();

RangeError;

// 22.2.4.5 #14.c
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
