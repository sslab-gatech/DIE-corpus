function f(x) {
  var count = 0;

  for (var i = 0; i < x.length; ++i) {
    count++;
  }

  return count;
}

f(Error());
0;
f([[]]);
1;
