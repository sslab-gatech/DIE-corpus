function f() {
  var b, c;
  var a = void (b = 5, c = 7);
  return a;
}

typeof f();
"undefined";
