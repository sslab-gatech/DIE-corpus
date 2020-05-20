//@ skip if $hostOS == "windows"
console.log("This tests that sort() is a stable sort.");

function clone(source, target) {
  for (i = 0; i < source.length; i++) {
    target[i] = source[i];
  }
}

var arr = [];
arr[0] = new Number(1);
arr[1] = new Number(2);
arr[2] = new Number(1);
arr[3] = new Number(2);
var sortArr = [];
clone(arr, sortArr);
sortArr.sort();
arr[0];
arr[1];
arr[2];
arr[3]; // Just try again...

sortArr.sort();
arr[0];
arr[1];
arr[2];
arr[3];
