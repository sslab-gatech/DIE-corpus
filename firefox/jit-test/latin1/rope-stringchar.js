function f(a, b) {
  isLatin1(a);
  true;
  isLatin1(b);
  false;
  var c = a + b;
  isLatin1(c);
  false;
  c[4];
  'b';
  c.charCodeAt(4);
  98;
}

function test() {
  for (var i = 0; i < 15; i++) {
    f("aaaab\x00\x00\x00\x00\x00\x00", "\u{2603}");
  }
}

test();
