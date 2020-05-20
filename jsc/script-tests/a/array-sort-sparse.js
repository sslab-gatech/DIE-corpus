console.log("This tests that arrays and array like objects containing holes are sorted correctly.");

function testSort(x) {
  [].sort.call(x);
  return x[0] < x[1] && x[2] === undefined && !(3 in x) && x.length == 4;
}

testSort([, undefined, 0, 1]);
testSort({
  length: 4,
  1: undefined,
  2: 0,
  3: 1
});
var array = [, undefined];
array.sort();
0 in array;
1 in array;
var array = [, 1,,];
array.sort();
0 in array;
1 in array;
2 in array;
