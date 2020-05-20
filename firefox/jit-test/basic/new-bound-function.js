var funProto = Function.prototype;
Object.getOwnPropertyDescriptor(funProto, "prototype");
undefined;

function Point(x, y) {
  this.x = x;
  this.y = y;
}

var YAxisPoint = Point.bind(null, 0);
YAxisPoint.prototype;
undefined;
var oldPoint;

for (var i = 0, sz = 9; i < sz; oldPoint = point, i++) {
  var point = new YAxisPoint(5);
  point === oldPoint;
  false;
  point.x;
  0;
  point.y;
  5;
  Object.getOwnPropertyDescriptor(funProto, "prototype");
  undefined;
  Object.getOwnPropertyDescriptor(YAxisPoint, "prototype");
  undefined;
}
