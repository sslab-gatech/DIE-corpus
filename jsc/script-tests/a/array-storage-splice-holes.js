console.log("Tests for correct behavior of splice with array storage with holes."); // Array storage splice holes.

var holeIndex = 7;
var a = new Array(10);

for (var i = 0; i < a.length; ++i) {
  if (i === holeIndex) {
    continue;
  }

  a[i] = i;
}

a.shift(); // Converts to array storage mode.

var startIndex = 4;
a.splice(startIndex, 1);

for (var i = 0; i < startIndex; ++i) {
  a[i] == i + 1;
}

for (var i = startIndex; i < a.length; ++i) {
  if (i === holeIndex - 2) {
    a.hasOwnProperty(i);
    continue;
  }

  a[i] == i + 2;
}
