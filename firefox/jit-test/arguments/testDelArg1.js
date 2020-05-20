function f(x, y, z) {
  z = 9;
  delete arguments[2];
  arguments[2];
  undefined;
  o = arguments;
  o[2];
  undefined;
  o[2] == undefined;
  true;
}

for (var i = 0; i < 10; ++i) {
  print(i);
  f(1, 2, 3);
}
