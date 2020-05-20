function f() {
  var a;

  for (var i = 0; i < 50; i++) {
    a = [i,, [,, i * 3]];
  }

  return a;
}

Array.prototype[1] = 123;
var arr = f();
arr.length;
3;
arr.toString();
"49,123,,123,147";
