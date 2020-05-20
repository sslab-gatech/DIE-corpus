console.log('This tests for a problem with put after delete that existed at one point in the past.');

function props(o) {
  var s = "";

  for (p in o) {
    if (s.length != 0) {
      s += ",";
    }

    s += p;
  }

  return s;
}

var a = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};
props(a);
console.log("delete a.c");
delete a.c;
props(a);
console.log("define getter named c");

a.__defineGetter__("c", function () {
  return 3;
});

props(a);
console.log("");
