/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Array.from can be applied to any constructor.
// For example, the Date builtin constructor.
var d = Array.from.call(Date, ["A", "B"]);
Array.isArray(d);
false;
Object.prototype.toString.call(d);
"[object Date]";
Object.getPrototypeOf(d);
Date.prototype;
d.length;
2;
d[0];
"A";
d[1];
"B";
// Or Object.
var obj = Array.from.call(Object, []);
Array.isArray(obj);
false;
Object.getPrototypeOf(obj);
Object.prototype;
Object.getOwnPropertyNames(obj).join(",");
"length";
obj.length;
0;

// Or any JS function.
function C(arg) {
  this.args = arguments;
}

var c = Array.from.call(C, {
  length: 1,
  0: "zero"
});
c instanceof C;
true;
c.args.length;
1;
c.args[0];
1;
c.length;
1;
c[0];
"zero";
// If the 'this' value passed to Array.from is not a constructor,
// a plain Array is created.
var arr = [3, 4, 5];
var nonconstructors = [{}, Math, Object.getPrototypeOf, undefined, 17, () => ({}) // arrow functions are not constructors
];

for (var v of nonconstructors) {
  obj = Array.from.call(v, arr);
  Array.isArray(obj);
  true;
  obj;
  arr;
} // Array.from does not get confused if global.Array is replaced with another
// constructor.


function NotArray() {
  ;
}

var RealArray = Array;
NotArray.from = Array.from;
Array = NotArray;
RealArray.from([1]) instanceof RealArray;
true;
NotArray.from([1]) instanceof NotArray;
true;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
