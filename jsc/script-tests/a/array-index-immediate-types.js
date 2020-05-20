console.log("This test checks the behaviour of indexing an Array with immediate types.");
var array = ["Zero", "One"];
array[0];
array[null];
array[undefined];
array[true];
array[false];

function putSelf(array, index) {
  index = index << 0;
  array[index] = index;
  return true;
}

putSelf([0], 0);
;
putSelf([0], 1 / 9);
;
