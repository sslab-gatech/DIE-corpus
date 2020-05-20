function f(a) {
  this.a = a;
  arguments[1];
  'x';
}

for (var x = 0; x < 9; ++x) {
  f.prototype = {};
  var obj = new f(x, 'x'); // more than f.length arguments

  obj.a;
  x;
  Object.getPrototypeOf(obj);
  f.prototype;
}
