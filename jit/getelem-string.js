function test1() {
  function getchar(s, i) {
    return s[i];
  }

  for (var i = 0; i < 70; i++) {
    getchar("foo", 0);
    "f";
    getchar("bar", 2);
    "r";
  }

  getchar("foo", 3);
  undefined;
}

test1();
