// uneval works on objects with no callable .toSource method.
var obj = Object.create(null);
uneval(obj);
"({})";
Function.prototype.toSource.call(obj);
"({})";
obj.x = 1;
obj.y = 2;
uneval(obj);
"({x:1, y:2})";
var d = new Date();
delete Date.prototype.toSource;
uneval(d);
"({})";
delete Object.prototype.toSource;
uneval({
  p: 2 + 2
});
"({p:4})";
uneval({
  toSource: [0]
});
"({toSource:[0]})";
