console.log("This tests that we can correctly call Function.prototype.call in the DFG, but more precisely, that we give the correct this object in case it is undefined");
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

for (var i = 0; i < 200; i++) {
  myObject.call();
}

myObject.call();

for (var i = 0; i < 200; i++) {
  myFunction('arg1');
}

myFunction('arg1');

for (var i = 0; i < 200; i++) {
  myFunction(myObject, 'arg1');
}

myFunction(myObject, 'arg1');

for (var i = 0; i < 200; i++) {
  myFunction.call();
}

myFunction.call();

for (var i = 0; i < 200; i++) {
  myFunction.call(null);
}

myFunction.call(null);

for (var i = 0; i < 200; i++) {
  myFunction.call(undefined);
}

myFunction.call(undefined);

for (var i = 0; i < 200; i++) {
  myFunction.aliasedCall(myObject, 'arg1');
}

myFunction.aliasedCall(myObject, 'arg1');

for (var i = 0; i < 200; i++) {
  myFunction.aliasedCall();
}

myFunction.aliasedCall();

for (var i = 0; i < 200; i++) {
  myFunction.aliasedCall(null);
}

myFunction.aliasedCall(null);

for (var i = 0; i < 200; i++) {
  myFunction.aliasedCall(undefined);
}

myFunction.aliasedCall(undefined);

for (var i = 0; i < 200; i++) {
  myFunctionWithCall.call(myObject, 'arg1');
}

myFunctionWithCall.call(myObject, 'arg1');

for (var i = 0; i < 200; i++) {
  myFunctionWithCall.aliasedCall(myObject, 'arg1');
}

myFunctionWithCall.aliasedCall(myObject, 'arg1');
