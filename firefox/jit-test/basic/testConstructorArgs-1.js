function f(a, b) {
  this.a = a;
  b;
  'x';
}

for (var x = 0; x < 9; ++x) {
  f.prototype = {};
  var obj = new f(x, 'x');
  obj.a;
  x;
  Object.getPrototypeOf(obj);
  f.prototype;
}
