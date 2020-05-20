function test() {
  for (var i = 0; i < 2; i++) {
    var a = /a/;
    a.lastIndex;
    0;
    a.exec("aaa");
    a.lastIndex;
    0;
  }

  for (var i = 0; i < 2; i++) {
    var a = /a/g;
    a.lastIndex;
    0;
    a.exec("aaa");
    a.lastIndex;
    1;
  }

  for (var i = 0; i < 2; i++) {
    var a = /a/y;
    a.lastIndex;
    0;
    a.exec("aaa");
    a.lastIndex;
    1;
  }
}

test();
test();
