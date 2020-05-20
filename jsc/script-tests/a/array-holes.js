console.log("This tests that arrays have holes that you can see the prototype through, not just missing values.");

function isHole(array, index) {
  if (index >= array.length) {
    return "bad index: past length";
  } // Check if we can see through the hole into another room.


  Array.prototype[index] = "room";
  var isHole = array[index] == "room";
  delete Array.prototype[index];
  return isHole;
}

function showHoles(array) {
  var string = "[";

  for (i = 0; i < array.length; ++i) {
    if (i) {
      string += ", ";
    }

    if (isHole(array, i)) {
      string += "hole";
    } else {
      string += array[i];
    }
  }

  string += "]";
  return string;
}

function returnTrue() {
  return true;
}

var a;

function addToArray(arg) {
  a.push(arg);
}

function addToArrayReturnFalse(arg) {
  a.push(arg);
  return false;
}

function addToArrayReturnTrue(arg) {
  a.push(arg);
  return true;
}

var a = [];
a.length = 1;
showHoles(a);
var a = [];
a[0] = undefined;
showHoles(a);
var a = [];
a[0] = undefined;
delete a[0];
showHoles(a);
showHoles([0,, 2]);
showHoles([0, 1,,]);
showHoles([0,, 2].concat([3,, 5]));
showHoles([0,, 2, 3].reverse());
a = [0,, 2, 3];
a.shift();
showHoles(a);
showHoles([0,, 2, 3].slice(0, 3));
showHoles([0,, 2, 3].sort());
showHoles([0, undefined, 2, 3].sort());
a = [0,, 2, 3];
a.splice(2, 3, 5, 6);
showHoles(a);
a = [0,, 2, 3];
a.unshift(4);
showHoles(a);
showHoles([0,, 2, 3].filter(returnTrue));
showHoles([0, undefined, 2, 3].filter(returnTrue));
showHoles([0,, 2, 3].map(returnTrue));
showHoles([0, undefined, 2, 3].map(returnTrue));
a = [];
[0,, 2, 3].every(addToArrayReturnTrue);
showHoles(a);
a = [];
[0, undefined, 2, 3].every(addToArrayReturnTrue);
showHoles(a);
a = [];
[0,, 2, 3].forEach(addToArray);
showHoles(a);
a = [];
[0, undefined, 2, 3].forEach(addToArray);
showHoles(a);
a = [];
[0,, 2, 3].some(addToArrayReturnFalse);
showHoles(a);
a = [];
[0, undefined, 2, 3].some(addToArrayReturnFalse);
showHoles(a);
[0,, 2, 3].indexOf();
[0, undefined, 2, 3].indexOf();
[0,, 2, 3].lastIndexOf();
[0, undefined, 2, 3].lastIndexOf();
Object.prototype[1] = "peekaboo";
showHoles([0,, 2]);
showHoles([0, 1,,]);
showHoles([0,, 2].concat([3,, 5]));
showHoles([0,, 2, 3].reverse());
a = [0,, 2, 3];
a.shift();
showHoles(a);
showHoles([0,, 2, 3].slice(0, 3));
showHoles([0,, 2, 3].sort());
showHoles([0, undefined, 2, 3].sort());
a = [0,, 2, 3];
a.splice(2, 3, 5, 6);
showHoles(a);
a = [0,, 2, 3];
a.unshift(4);
showHoles(a);
showHoles([0,, 2, 3].filter(returnTrue));
showHoles([0, undefined, 2, 3].filter(returnTrue));
showHoles([0,, 2, 3].map(returnTrue));
showHoles([0, undefined, 2, 3].map(returnTrue));
a = [];
[0,, 2, 3].every(addToArrayReturnTrue);
showHoles(a);
a = [];
[0, undefined, 2, 3].every(addToArrayReturnTrue);
showHoles(a);
a = [];
[0,, 2, 3].forEach(addToArray);
showHoles(a);
a = [];
[0, undefined, 2, 3].forEach(addToArray);
showHoles(a);
a = [];
[0,, 2, 3].some(addToArrayReturnFalse);
showHoles(a);
a = [];
[0, undefined, 2, 3].some(addToArrayReturnFalse);
showHoles(a);
[0,, 2, 3].indexOf();
[0,, 2, 3].indexOf('peekaboo');
[0, undefined, 2, 3].indexOf();
[0,, 2, 3].lastIndexOf();
[0,, 2, 3].lastIndexOf('peekaboo');
[0, undefined, 2, 3].lastIndexOf();
delete Object.prototype[1];
