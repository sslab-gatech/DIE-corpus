console.log('Tests to ensure that Function.apply works correctly for Arrays, arguments and array-like objects.');

function argumentsApply1(a, b, c) {
  function t(a, b, c) {
    return a;
  }

  return t.apply(null, arguments);
}

function argumentsApply2(a, b, c) {
  function t(a, b, c) {
    return b;
  }

  return t.apply(null, arguments);
}

function argumentsApply3(a, b, c) {
  function t(a, b, c) {
    return c;
  }

  return t.apply(null, arguments);
}

function argumentsApplyLength(a, b, c) {
  function t(a, b, c) {
    return arguments.length;
  }

  return t.apply(null, arguments);
}

var executedAdditionalArgument = false;

function argumentsApplyExcessArguments(a, b, c) {
  function t(a, b, c) {
    return arguments.length;
  }

  return t.apply(null, arguments, executedAdditionalArgument = true);
}

argumentsApply1(1, 2, 3);
argumentsApply2(1, 2, 3);
argumentsApply3(1, 2, 3);
argumentsApplyLength(1, 2, 3);
argumentsApplyExcessArguments(1, 2, 3);
executedAdditionalArgument;

function arrayApply1(array) {
  function t(a, b, c) {
    return a;
  }

  return t.apply(null, array);
}

function arrayApply2(array) {
  function t(a, b, c) {
    return b;
  }

  return t.apply(null, array);
}

function arrayApply3(array) {
  function t(a, b, c) {
    return c;
  }

  return t.apply(null, array);
}

function arrayApplyLength(array) {
  function t(a, b, c) {
    return arguments.length;
  }

  return t.apply(null, array);
}

arrayApply1([1, 2, 3]);
arrayApply2([1, 2, 3]);
arrayApply3([1, 2, 3]);
arrayApplyLength([1, 2, 3]);

function argumentsApplyDelete1(a, b, c) {
  function t(a, b, c) {
    return a;
  }

  delete arguments[1];
  return t.apply(null, arguments);
}

function argumentsApplyDelete2(a, b, c) {
  function t(a, b, c) {
    return b;
  }

  delete arguments[1];
  return t.apply(null, arguments);
}

function argumentsApplyDelete3(a, b, c) {
  function t(a, b, c) {
    return c;
  }

  delete arguments[1];
  return t.apply(null, arguments);
}

function argumentsApplyDeleteLength(a, b, c) {
  function t(a, b, c) {
    return arguments.length;
  }

  delete arguments[1];
  return t.apply(null, arguments);
}

argumentsApplyDelete1(1, 2, 3);
argumentsApplyDelete2(1, 2, 3);
argumentsApplyDelete3(1, 2, 3);
argumentsApplyDeleteLength(1, 2, 3);

function arrayApplyDelete1(array) {
  function t(a, b, c) {
    return a;
  }

  delete array[1];
  return t.apply(null, array);
}

function arrayApplyDelete2(array) {
  function t(a, b, c) {
    return b;
  }

  delete array[1];
  return t.apply(null, array);
}

function arrayApplyDelete3(array) {
  function t(a, b, c) {
    return c;
  }

  delete array[1];
  return t.apply(null, array);
}

function arrayApplyDeleteLength(array) {
  function t(a, b, c) {
    return arguments.length;
  }

  delete array[1];
  return t.apply(null, array);
}

arrayApplyDelete1([1, 2, 3]);
arrayApplyDelete2([1, 2, 3]);
arrayApplyDelete3([1, 2, 3]);
arrayApplyDeleteLength([1, 2, 3]);

function argumentsApplyChangeLength1() {
  function f() {
    return arguments.length;
  }

  ;
  arguments.length = 2;
  return f.apply(null, arguments);
}

function argumentsApplyChangeLength2() {
  function f(a) {
    return arguments.length;
  }

  ;
  arguments.length = 2;
  return f.apply(null, arguments);
}

function argumentsApplyChangeLength3() {
  function f(a, b, c) {
    return arguments.length;
  }

  ;
  arguments.length = 2;
  return f.apply(null, arguments);
}

;

function argumentsApplyChangeLength4() {
  function f() {
    return arguments.length;
  }

  ;
  arguments.length = 0;
  return f.apply(null, arguments);
}

;

function argumentsApplyChangeLength5() {
  function f() {
    return arguments.length;
  }

  ;
  arguments.length = "Not A Number";
  return f.apply(null, arguments);
}

argumentsApplyChangeLength1(1);
argumentsApplyChangeLength2(1);
argumentsApplyChangeLength3(1);
argumentsApplyChangeLength4(1);
argumentsApplyChangeLength5(1);

function arrayApplyChangeLength1() {
  function f() {
    return arguments.length;
  }

  ;
  var array = [];
  array.length = 2;
  return f.apply(null, array);
}

function arrayApplyChangeLength2() {
  function f(a) {
    return arguments.length;
  }

  ;
  var array = [];
  array.length = 2;
  return f.apply(null, array);
}

function arrayApplyChangeLength3() {
  function f(a, b, c) {
    return arguments.length;
  }

  ;
  var array = [];
  array.length = 2;
  return f.apply(null, array);
}

function arrayApplyChangeLength4() {
  function f() {
    return arguments.length;
  }

  ;
  var array = [1];
  array.length = 0;
  return f.apply(null, array);
}

;
arrayApplyChangeLength1();
arrayApplyChangeLength2();
arrayApplyChangeLength3();
arrayApplyChangeLength4();
var a = [];
a.length = 0xFFFE;
[].constructor.apply('', a).length;
var a = [];
a.length = 0xFFFF;
[].constructor.apply('', a).length;
var a = [];
a.length = 0x10000;
[].constructor.apply('', a).length;

try {
  var a = [];
  a.length = 0x10001;
  [].constructor.apply('', a).length;
} catch (e) {
  ;
}

try {
  var a = [];
  a.length = 0xFFFFFFFE;
  [].constructor.apply('', a).length;
} catch (e) {
  ;
}

try {
  var a = [];
  a.length = 0xFFFFFFFF;
  [].constructor.apply('', a).length;
} catch (e) {
  ;
} // ES5 permits apply with array-like objects.


(function (a, b, c, d) {
  return d ? -1 : a + b + c;
}).apply(undefined, {
  length: 3,
  0: 100,
  1: 20,
  2: 3
});
