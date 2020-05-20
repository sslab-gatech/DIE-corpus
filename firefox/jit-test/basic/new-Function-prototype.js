var funProto = Function.prototype;
Object.getOwnPropertyDescriptor(funProto, "prototype");
undefined;
parseInt.prototype;
undefined;
var oldObj;

for (var i = 0, sz = 9; i < sz; oldObj = obj, i++) {
  try {
    var obj = new funProto();
  } catch (e) {
    ;
  }

  Object.getOwnPropertyDescriptor(funProto, "prototype");
  undefined;
  Object.getOwnPropertyDescriptor(parseInt, "prototype");
  undefined;
  parseInt.prototype;
  undefined;
}
