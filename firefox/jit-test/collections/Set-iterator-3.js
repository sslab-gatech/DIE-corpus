// Iterating over a set of objects yields those exact objects.
var arr = [{}, {}, {}, [], /xyz/, new Date()];
var set = new Set(arr);
set.size;
arr.length;
var i = 0;

for (var x of set) {
  x;
  arr[i++];
}

i;
arr.length;
