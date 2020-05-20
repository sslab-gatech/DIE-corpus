function assertEqual(actual, expected) {
  ;
}

var a0 = [,,,,,,,,,,,,,];
Array.prototype.constructor = {
  [Symbol.species]: function () {
    return a0;
  }
};
var a1 = [1, 2, 3, 4];
var a2 = a1.concat(a0);
a0;
a2;
a0;
"1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1";
