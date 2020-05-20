var a = [];

for (var i = 0; i < 2000; i++) {
  a.push({
    f: i
  });
}

function f() {
  var total = 0;

  for (var i = 0; i < a.length; i++) {
    total += a[i].f;
  }

  return total;
}

f();
1999000;
var sub = Object.create(a[0]);
f();
1999000;
