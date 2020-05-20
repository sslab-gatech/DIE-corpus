console.log('Test caller and arguments properties in function in non strict mode');

function foo() {
  return 1;
}

Object.getOwnPropertyNames(function () {
  ;
}).length;
Object.getOwnPropertyNames(function () {
  ;
}).includes("caller");
Object.getOwnPropertyNames(function () {
  ;
}).includes("arguments");
(function () {
  ;
}).hasOwnProperty("caller");

(function () {
  ;
}).__proto__.hasOwnProperty("caller");

(function () {
  ;
}).hasOwnProperty("arguments");

(function () {
  ;
}).__proto__.hasOwnProperty("arguments");

typeof Object.getOwnPropertyDescriptor(foo, "arguments");
typeof Object.getOwnPropertyDescriptor(foo, "caller");
foo.caller;
foo.arguments;
foo.caller = 10;
foo.arguments = 10;
foo.caller;
foo.arguments;

var boo = function () {
  return boo.arguments;
};

boo("abc")[0];
boo.arguments = 'not-expected-value';
boo("expected-value")[0];

var f = function () {
  return f.caller;
};

var g = function (cb) {
  return cb();
};

g(f);

var doSetCaller = function (value, doDelete) {
  var f = function () {
    ;
  };

  if (doDelete) {
    delete f.__proto__.caller;
  }

  f.__proto__.caller = value;
  return f;
};

var value = "property-value";

try {
  doSetCaller(value, false);
} catch (e) {
  ;
}

doSetCaller(value, true).__proto__.caller;

var doSetArguments = function (value, doDelete) {
  var f = function () {
    ;
  };

  if (doDelete) {
    delete f.__proto__.arguments;
  }

  f.__proto__.arguments = value;
  return f;
};

try {
  doSetArguments(value, false);
} catch (e) {
  ;
}

doSetArguments(value, true).__proto__.arguments;
