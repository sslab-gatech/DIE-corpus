console.log("This tests that we can correctly call Function.prototype.call");
var myObject = {
  call: function () {
    return [myObject, "myObject.call"];
  }
};

var myFunction = function (arg1) {
  return [this, "myFunction", arg1];
};

var myFunctionWithCall = function (arg1) {
  return [this, "myFunctionWithCall", arg1];
};

myFunctionWithCall.call = function (arg1) {
  return [this, "myFunctionWithCall.call", arg1];
};

Function.prototype.aliasedCall = Function.prototype.call;
myObject.call();
myFunction('arg1');
myFunction.call(myObject, 'arg1');
myFunction.call();
myFunction.call(null);
myFunction.call(undefined);
myFunction.aliasedCall(myObject, 'arg1');
myFunction.aliasedCall();
myFunction.aliasedCall(null);
myFunction.aliasedCall(undefined);
myFunctionWithCall.call(myObject, 'arg1');
myFunctionWithCall.aliasedCall(myObject, 'arg1');
