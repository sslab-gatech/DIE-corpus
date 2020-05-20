var BUGNUMBER = 1263558;
var summary = "Self-host all Array generics.";
print(BUGNUMBER + ": " + summary);
var arr, arrLike, tmp, f;

function reset() {
  arr = [5, 7, 13];
  arrLike = {
    length: 3,
    0: 5,
    1: 7,
    2: 13,

    toString() {
      return "arrLike";
    }

  };
  tmp = [];
}

function toString() {
  return "G";
} // Array.join (test this first to use it in remaining tests).


reset();

(() => Array.join())();

TypeError;
Array.join(arr);
"5,7,13";
Array.join(arr, "-");
"5-7-13";
Array.join(arrLike);
"5,7,13";
Array.join(arrLike, "-");
"5-7-13";
// Array.concat.
reset();

(() => Array.concat())();

TypeError;
Array.join(Array.concat(arr), ",");
"5,7,13";
Array.join(Array.concat(arr, 11), ",");
"5,7,13,11";
Array.join(Array.concat(arr, 11, 17), ",");
"5,7,13,11,17";
Array.join(Array.concat(arrLike), ",");
"arrLike";
Array.join(Array.concat(arrLike, 11), ",");
"arrLike,11";
Array.join(Array.concat(arrLike, 11, 17), ",");
"arrLike,11,17";
// Array.lastIndexOf.
reset();

(() => Array.lastIndexOf())();

TypeError;
Array.lastIndexOf(arr);
-1;
Array.lastIndexOf(arr, 1);
-1;
Array.lastIndexOf(arr, 5);
0;
Array.lastIndexOf(arr, 7);
1;
Array.lastIndexOf(arr, 13, 1);
-1;
Array.lastIndexOf(arrLike);
-1;
Array.lastIndexOf(arrLike, 1);
-1;
Array.lastIndexOf(arrLike, 5);
0;
Array.lastIndexOf(arrLike, 7);
1;
Array.lastIndexOf(arrLike, 13, 1);
-1;
// Array.indexOf.
reset();

(() => Array.indexOf())();

TypeError;
Array.indexOf(arr);
-1;
Array.indexOf(arr, 1);
-1;
Array.indexOf(arr, 5);
0;
Array.indexOf(arr, 7);
1;
Array.indexOf(arr, 1, 5);
-1;
Array.indexOf(arrLike);
-1;
Array.indexOf(arrLike, 1);
-1;
Array.indexOf(arrLike, 5);
0;
Array.indexOf(arrLike, 7);
1;
Array.indexOf(arrLike, 1, 5);
-1;
// Array.forEach.
reset();

(() => Array.forEach())();

TypeError;

(() => Array.forEach(arr))();

TypeError;

(() => Array.forEach(arrLike))();

TypeError;

f = function (...args) {
  tmp.push(this, ...args);
};

tmp = [];
Array.forEach(arr, f);
tmp.join(",");
"G,5,0,5,7,13," + "G,7,1,5,7,13," + "G,13,2,5,7,13";
tmp = [];
Array.forEach(arr, f, "T");
tmp.join(",");
"T,5,0,5,7,13," + "T,7,1,5,7,13," + "T,13,2,5,7,13";
tmp = [];
Array.forEach(arrLike, f);
tmp.join(",");
"G,5,0,arrLike," + "G,7,1,arrLike," + "G,13,2,arrLike";
tmp = [];
Array.forEach(arrLike, f, "T");
tmp.join(",");
"T,5,0,arrLike," + "T,7,1,arrLike," + "T,13,2,arrLike";
// Array.map.
reset();

(() => Array.map())();

TypeError;

(() => Array.map(arr))();

TypeError;

(() => Array.map(arrLike))();

TypeError;

f = function (...args) {
  tmp.push(this, ...args);
  return args[0] * 2;
};

tmp = [];
Array.join(Array.map(arr, f), ",");
"10,14,26";
tmp.join(",");
"G,5,0,5,7,13," + "G,7,1,5,7,13," + "G,13,2,5,7,13";
tmp = [];
Array.join(Array.map(arr, f, "T"), ",");
"10,14,26";
tmp.join(",");
"T,5,0,5,7,13," + "T,7,1,5,7,13," + "T,13,2,5,7,13";
tmp = [];
Array.join(Array.map(arrLike, f), ",");
"10,14,26";
tmp.join(",");
"G,5,0,arrLike," + "G,7,1,arrLike," + "G,13,2,arrLike";
tmp = [];
Array.join(Array.map(arrLike, f, "T"), ",");
"10,14,26";
tmp.join(",");
"T,5,0,arrLike," + "T,7,1,arrLike," + "T,13,2,arrLike";
// Array.filter.
reset();

(() => Array.filter())();

TypeError;

(() => Array.filter(arr))();

TypeError;

(() => Array.filter(arrLike))();

TypeError;

f = function (...args) {
  tmp.push(this, ...args);
  return args[0] < 10;
};

tmp = [];
Array.join(Array.filter(arr, f), ",");
"5,7";
tmp.join(",");
"G,5,0,5,7,13," + "G,7,1,5,7,13," + "G,13,2,5,7,13";
tmp = [];
Array.join(Array.filter(arr, f, "T"), ",");
"5,7";
tmp.join(",");
"T,5,0,5,7,13," + "T,7,1,5,7,13," + "T,13,2,5,7,13";
tmp = [];
Array.join(Array.filter(arrLike, f), ",");
"5,7";
tmp.join(",");
"G,5,0,arrLike," + "G,7,1,arrLike," + "G,13,2,arrLike";
tmp = [];
Array.join(Array.filter(arrLike, f, "T"), ",");
"5,7";
tmp.join(",");
"T,5,0,arrLike," + "T,7,1,arrLike," + "T,13,2,arrLike";
// Array.every.
reset();

(() => Array.every())();

TypeError;

(() => Array.every(arr))();

TypeError;

(() => Array.every(arrLike))();

TypeError;

f = function (...args) {
  tmp.push(this, ...args);
  return args[0] < 6;
};

tmp = [];
Array.every(arr, f);
false;
tmp.join(",");
"G,5,0,5,7,13," + "G,7,1,5,7,13";
tmp = [];
Array.every(arr, f, "T");
false;
tmp.join(",");
"T,5,0,5,7,13," + "T,7,1,5,7,13";
tmp = [];
Array.every(arrLike, f);
false;
tmp.join(",");
"G,5,0,arrLike," + "G,7,1,arrLike";
tmp = [];
Array.every(arrLike, f, "T");
false;
tmp.join(",");
"T,5,0,arrLike," + "T,7,1,arrLike";
// Array.some.
reset();

(() => Array.some())();

TypeError;

(() => Array.some(arr))();

TypeError;

(() => Array.some(arrLike))();

TypeError;

f = function (...args) {
  tmp.push(this, ...args);
  return args[0] == 7;
};

tmp = [];
Array.some(arr, f);
true;
tmp.join(",");
"G,5,0,5,7,13," + "G,7,1,5,7,13";
tmp = [];
Array.some(arr, f, "T");
true;
tmp.join(",");
"T,5,0,5,7,13," + "T,7,1,5,7,13";
tmp = [];
Array.some(arrLike, f);
true;
tmp.join(",");
"G,5,0,arrLike," + "G,7,1,arrLike";
tmp = [];
Array.some(arrLike, f, "T");
true;
tmp.join(",");
"T,5,0,arrLike," + "T,7,1,arrLike";
// Array.reduce.
reset();

(() => Array.reduce())();

TypeError;

(() => Array.reduce(arr))();

TypeError;

(() => Array.reduce(arrLike))();

TypeError;

f = function (...args) {
  tmp.push(...args);
  return args[0] + args[1];
};

tmp = [];
Array.reduce(arr, f);
25;
tmp.join(",");
"5,7,1,5,7,13," + "12,13,2,5,7,13";
tmp = [];
Array.reduce(arr, f, 17);
42;
tmp.join(",");
"17,5,0,5,7,13," + "22,7,1,5,7,13," + "29,13,2,5,7,13";
tmp = [];
Array.reduce(arrLike, f);
25;
tmp.join(",");
"5,7,1,arrLike," + "12,13,2,arrLike";
tmp = [];
Array.reduce(arrLike, f, 17);
42;
tmp.join(",");
"17,5,0,arrLike," + "22,7,1,arrLike," + "29,13,2,arrLike";
// Array.reduceRight.
reset();

(() => Array.reduceRight())();

TypeError;

(() => Array.reduceRight(arr))();

TypeError;

(() => Array.reduceRight(arrLike))();

TypeError;

f = function (...args) {
  tmp.push(...args);
  return args[0] + args[1];
};

tmp = [];
Array.reduceRight(arr, f);
25;
tmp.join(",");
"13,7,1,5,7,13," + "20,5,0,5,7,13";
tmp = [];
Array.reduceRight(arr, f, 17);
42;
tmp.join(",");
"17,13,2,5,7,13," + "30,7,1,5,7,13," + "37,5,0,5,7,13";
tmp = [];
Array.reduceRight(arrLike, f);
25;
tmp.join(",");
"13,7,1,arrLike," + "20,5,0,arrLike";
tmp = [];
Array.reduceRight(arrLike, f, 17);
42;
tmp.join(",");
"17,13,2,arrLike," + "30,7,1,arrLike," + "37,5,0,arrLike";
// Array.reverse.
reset();

(() => Array.reverse())();

TypeError;
Array.join(Array.reverse(arr), ",");
"13,7,5";
Array.join(arr, ",");
"13,7,5";
Array.join(Array.reverse(arrLike), ",");
"13,7,5";
Array.join(arrLike, ",");
"13,7,5";
// Array.sort.
reset();

(() => Array.sort())();

TypeError;

f = function (x, y) {
  return y - x;
};

Array.join(Array.sort(arr), ",");
"13,5,7";
Array.join(Array.sort(arr, f), ",");
"13,7,5";
Array.join(Array.sort(arrLike), ",");
"13,5,7";
Array.join(Array.sort(arrLike, f), ",");
"13,7,5";
// Array.push.
reset();

(() => Array.push())();

TypeError;
Array.push(arr);
3;
Array.join(arr);
"5,7,13";
Array.push(arr, 17);
4;
Array.join(arr);
"5,7,13,17";
Array.push(arr, 19, 21);
6;
Array.join(arr);
"5,7,13,17,19,21";
Array.push(arrLike);
3;
Array.join(arrLike);
"5,7,13";
Array.push(arrLike, 17);
4;
Array.join(arrLike);
"5,7,13,17";
Array.push(arrLike, 19, 21);
6;
Array.join(arrLike);
"5,7,13,17,19,21";
// Array.pop.
reset();

(() => Array.pop())();

TypeError;
Array.pop(arr);
13;
Array.join(arr);
"5,7";
Array.pop(arr);
7;
Array.join(arr);
"5";
Array.pop(arrLike);
13;
Array.join(arrLike);
"5,7";
Array.pop(arrLike);
7;
Array.join(arrLike);
"5";
// Array.shift.
reset();

(() => Array.shift())();

TypeError;
Array.shift(arr);
5;
Array.join(arr);
"7,13";
Array.shift(arr);
7;
Array.join(arr);
"13";
Array.shift(arrLike);
5;
Array.join(arrLike);
"7,13";
Array.shift(arrLike);
7;
Array.join(arrLike);
"13";
// Array.unshift.
reset();

(() => Array.unshift())();

TypeError;
Array.unshift(arr);
3;
Array.join(arr);
"5,7,13";
Array.unshift(arr, 17);
4;
Array.join(arr);
"17,5,7,13";
Array.unshift(arr, 19, 21);
6;
Array.join(arr);
"19,21,17,5,7,13";
Array.unshift(arrLike);
3;
Array.join(arrLike);
"5,7,13";
Array.unshift(arrLike, 17);
4;
Array.join(arrLike);
"17,5,7,13";
Array.unshift(arrLike, 19, 21);
6;
Array.join(arrLike);
"19,21,17,5,7,13";
// Array.splice.
reset();

(() => Array.splice())();

TypeError;
Array.join(Array.splice(arr));
"";
Array.join(arr);
"5,7,13";
Array.join(Array.splice(arr, 1));
"7,13";
Array.join(arr);
"5";
reset();
Array.join(Array.splice(arr, 1, 1));
"7";
Array.join(arr);
"5,13";
reset();
Array.join(Array.splice(arrLike));
"";
Array.join(arrLike);
"5,7,13";
Array.join(Array.splice(arrLike, 1));
"7,13";
Array.join(arrLike);
"5";
reset();
Array.join(Array.splice(arrLike, 1, 1));
"7";
Array.join(arrLike);
"5,13";
// Array.slice.
reset();

(() => Array.slice())();

TypeError;
Array.join(Array.slice(arr));
"5,7,13";
Array.join(Array.slice(arr, 1));
"7,13";
Array.join(Array.slice(arr, 1, 1));
"";
Array.join(Array.slice(arr, 1, 2));
"7";
Array.join(Array.slice(arrLike));
"5,7,13";
Array.join(Array.slice(arrLike, 1));
"7,13";
Array.join(Array.slice(arrLike, 1, 1));
"";
Array.join(Array.slice(arrLike, 1, 2));
"7";

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
