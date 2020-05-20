// The argument to Set can be a generator.
function* hexData(n) {
  for (var i = 0; i < n; i++) {
    yield i.toString(16);
  }
}

var s = new Set(hexData(256));
s.size;
256;
s.has("0");
true;
s.has(0);
false;
s.has("ff");
true;
