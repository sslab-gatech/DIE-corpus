console.log("This test checks whether getters and setters work correctly with garbage collection.");
var o = {};

o.__defineGetter__("x", function () {
  return 242;
});

o.x; // Force a gc

var i = 0;
var s;

while (i < 5000) {
  i = i + 1.11;
  s = s + " ";
}

o.x;
