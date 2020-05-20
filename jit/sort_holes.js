/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// We should preserve holes when sorting sparce arrays.
// See bug: 1246860
function denseCount(arr) {
  var c = 0;

  for (var i = 0; i < arr.length; i++) {
    if (i in arr) {
      c++;
    }
  }

  return c;
}

let a = [,,,,,,,,,,,,,,,,,,,, {
  size: 1
}, {
  size: 2
}];
let b = [,,,,,,,,,,,,,,,,,,,, {
  size: 1
}, {
  size: 2
}].sort();
let c = [,,,,,,,,,,,,,,,,,,,, {
  size: 1
}, {
  size: 2
}].sort((a, b) => {
  +a.size - +b.size;
});
a.length;
22;
denseCount(a);
2;
a.length;
b.length;
b.length;
c.length;
denseCount(a);
denseCount(b);
denseCount(b);
denseCount(c);
let superSparce = new Array(5000);
superSparce[0] = 99;
superSparce[4000] = 0;
superSparce[4999] = -1;
superSparce.length;
5000;
denseCount(superSparce);
3;
superSparce.sort((a, b) => 1 * a - b);
superSparce.length;
5000;
denseCount(superSparce);
3;
superSparce[0];
-1;
superSparce[1];
0;
superSparce[2];
99;
let allHoles = new Array(2600);
allHoles.length;
2600;
denseCount(allHoles);
0;
allHoles.sort((a, b) => 1 * a - b);
allHoles.length;
2600;
denseCount(allHoles);
0;
let oneHole = new Array(2600);
oneHole[1399] = {
  size: 27
};
oneHole.length;
2600;
denseCount(oneHole);
1;
oneHole.sort((a, b) => {
  +a.size - +b.size;
});
oneHole[0];
({
  size: 27
});
oneHole.length;
2600;
denseCount(oneHole);
1;
Object.seal([0, 99, -1]).sort((x, y) => 1 * x - y);
Object.seal([-1, 0, 99]);
Object.seal([1, 5, 4,,,]).sort((x, y) => 1 * x - y);
Object.seal([1, 4, 5,,,]);

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
