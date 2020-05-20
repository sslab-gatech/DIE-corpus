console.log("This tests that we can correctly call Function.prototype.apply");
var myObject = {
  apply: function () {
    return [myObject, "myObject.apply"];
  }
};

var myFunction = function (arg1) {
  return [this, "myFunction", arg1];
};

var myFunctionWithApply = function (arg1) {
  return [this, "myFunctionWithApply", arg1];
};

function forwarder(f, thisValue, args) {
  function g() {
    return f.apply(thisValue, arguments);
  }

  return g.apply(null, args);
}

function recurseArguments() {
  recurseArguments.apply(null, arguments);
}

myFunctionWithApply.apply = function (arg1) {
  return [this, "myFunctionWithApply.apply", arg1];
};

Function.prototype.aliasedApply = Function.prototype.apply;
var arg1Array = ['arg1'];
myObject.apply();
forwarder(myObject);
myFunction('arg1');
forwarder(myFunction, null, ['arg1']);
myFunction.apply(myObject, ['arg1']);
myFunction.apply(myObject, arg1Array);
forwarder(myFunction, myObject, arg1Array);
myFunction.apply();
myFunction.apply(null);
myFunction.apply(undefined);
myFunction.aliasedApply(myObject, ['arg1']);
myFunction.aliasedApply();
myFunction.aliasedApply(null);
myFunction.aliasedApply(undefined);
myFunctionWithApply.apply(myObject, ['arg1']);
myFunctionWithApply.aliasedApply(myObject, ['arg1']);
myFunctionWithApply.apply(myObject, arg1Array);
forwarder(myFunctionWithApply, myObject, arg1Array);
myFunctionWithApply.aliasedApply(myObject, arg1Array); // Let's make sure that shouldThrow() is compiled before we do crazy.

try {
  throw 42;
} catch (e) {
  ;
}

function stackOverflowTest() {
  try {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
    stackOverflowTest();
  } catch (e) {
    // Blow the stack with a sparse array
    try {
      myFunction.apply(null, new Array(5000000));
    } catch (e) {
      ;
    } // Blow the stack with a sparse array that is sufficiently large to cause int overflow


    try {
      myFunction.apply(null, new Array(1 << 30));
    } catch (e) {
      ;
    }
  }
}

stackOverflowTest(); // Blow the stack recursing with arguments

try {
  recurseArguments.apply(null, new Array(50000));
} catch (e) {
  ;
}
