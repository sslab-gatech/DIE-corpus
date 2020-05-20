console.log("This tests that if a variable is dead on OSR exit, it will at least contain a valid JS value.");
var array = [];

array[0] = function () {
  return void 0;
};

array[1] = function (arg0) {
  return arg0;
};

array[2] = function (arg0, arg1) {
  return arg0 + arg1;
};

array[3] = function (arg0, arg1, arg2) {
  return arg0 + arg1 + arg2;
};

array[4] = function (arg0, arg1, arg2, arg3) {
  return arg0 + arg1 + arg2 + arg3;
};

array[5] = function (arg0, arg1, arg2, arg3, arg4) {
  return arg0 + arg1 + arg2 + arg3 + arg4;
};

array[6] = function (arg0, arg1, arg2, arg3, arg4, arg5) {
  return arg0 + arg1 + arg2 + arg3 + arg4 + arg5;
};

array[7] = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  return arg0 + arg1 + arg2 + arg3 + arg4 + arg5 + arg6;
};

array[8] = function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  return arg0 + arg1 + arg2 + arg3 + arg4 + arg5 + arg6 + arg7;
};

function foo(a, b) {
  var x = 0;

  if (a.f < b.f) {
    var result = b.g - a.g;
    x = !x;
    return result;
  } else {
    var result = a.g - b.g;
    x = [x];
    return result;
  }
}

var firstArg = {
  f: 2,
  g: 3
};
var secondArg = {
  f: 3,
  g: 4
};
var myFunctions = array.concat(foo);

for (var i = 0; i < myFunctions.length; ++i) {
  noInline(myFunctions[i]);
}

silentTestPass = true;

for (var i = 0; i < 300; i++) {
  // i = dfgIncrement({f:myFunctions, i:i + 1, n:100})) {
  var args = [];

  for (var j = 0; j < (i / 2 | 0) % array.length; ++j) {
    args.push(i + j);
  }

  if (i == 150) {
    firstArg = {
      f: 2,
      g: 2.5
    };
    secondArg = {
      f: 3,
      g: 3.5
    };
  }

  var tmp = firstArg;
  firstArg = secondArg;
  secondArg = tmp;
  array[(i / 2 | 0) % array.length](...args);
  foo(firstArg, secondArg);
}
