console.log("This test thoroughly checks the behaviour of the 'arguments' object.");

function access_1(a, b, c) {
  return arguments[0];
}

function access_2(a, b, c) {
  return arguments[1];
}

function access_3(a, b, c) {
  return arguments[2];
}

function access_4(a, b, c) {
  return arguments[3];
}

function access_5(a, b, c) {
  return arguments[4];
}

function argumentLengthIs5() {
  arguments.length = 5;
  return arguments.length;
}

function duplicateArgumentAndReturnLast_call(a) {
  Array.prototype.push.call(arguments, a);
  return arguments[1];
}

function duplicateArgumentAndReturnFirst_call(a) {
  Array.prototype.push.call(arguments, a);
  return arguments[0];
}

function duplicateArgumentAndReturnLast_apply(a) {
  Array.prototype.push.apply(arguments, arguments);
  return arguments[1];
}

function duplicateArgumentAndReturnFirst_apply(a) {
  Array.prototype.push.apply(arguments, arguments);
  return arguments[0];
}

access_1(1, 2, 3);
access_2(1, 2, 3);
access_3(1, 2, 3);
access_4(1, 2, 3);
access_5(1, 2, 3);
access_1(1);
access_2(1);
access_3(1);
access_4(1);
access_5(1);
access_1(1, 2, 3, 4, 5);
access_2(1, 2, 3, 4, 5);
access_3(1, 2, 3, 4, 5);
access_4(1, 2, 3, 4, 5);
access_5(1, 2, 3, 4, 5);
argumentLengthIs5();
argumentLengthIs5(1, 2, 3, 4, 5);
argumentLengthIs5(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
duplicateArgumentAndReturnLast_call(1);
duplicateArgumentAndReturnFirst_call(1);
duplicateArgumentAndReturnLast_apply(1);
duplicateArgumentAndReturnFirst_apply(1);

function f(a, b, c) {
  return arguments;
}

function tear_off_equal_access_1(a, b, c) {
  return f(a, b, c)[0];
}

function tear_off_equal_access_2(a, b, c) {
  return f(a, b, c)[1];
}

function tear_off_equal_access_3(a, b, c) {
  return f(a, b, c)[2];
}

function tear_off_equal_access_4(a, b, c) {
  return f(a, b, c)[3];
}

function tear_off_equal_access_5(a, b, c) {
  return f(a, b, c)[4];
}

tear_off_equal_access_1(1, 2, 3);
tear_off_equal_access_2(1, 2, 3);
tear_off_equal_access_3(1, 2, 3);
tear_off_equal_access_4(1, 2, 3);
tear_off_equal_access_5(1, 2, 3);

function tear_off_too_few_access_1(a) {
  return f(a)[0];
}

function tear_off_too_few_access_2(a) {
  return f(a)[1];
}

function tear_off_too_few_access_3(a) {
  return f(a)[2];
}

function tear_off_too_few_access_4(a) {
  return f(a)[3];
}

function tear_off_too_few_access_5(a) {
  return f(a)[4];
}

tear_off_too_few_access_1(1);
tear_off_too_few_access_2(1);
tear_off_too_few_access_3(1);
tear_off_too_few_access_4(1);
tear_off_too_few_access_5(1);

function tear_off_too_many_access_1(a, b, c, d, e) {
  return f(a, b, c, d, e)[0];
}

function tear_off_too_many_access_2(a, b, c, d, e) {
  return f(a, b, c, d, e)[1];
}

function tear_off_too_many_access_3(a, b, c, d, e) {
  return f(a, b, c, d, e)[2];
}

function tear_off_too_many_access_4(a, b, c, d, e) {
  return f(a, b, c, d, e)[3];
}

function tear_off_too_many_access_5(a, b, c, d, e) {
  return f(a, b, c, d, e)[4];
}

tear_off_too_many_access_1(1, 2, 3, 4, 5);
tear_off_too_many_access_2(1, 2, 3, 4, 5);
tear_off_too_many_access_3(1, 2, 3, 4, 5);
tear_off_too_many_access_4(1, 2, 3, 4, 5);
tear_off_too_many_access_5(1, 2, 3, 4, 5);

function live_1(a, b, c) {
  arguments[0] = 1;
  return a;
}

function live_2(a, b, c) {
  arguments[1] = 2;
  return b;
}

function live_3(a, b, c) {
  arguments[2] = 3;
  return c;
}

live_1(0, 2, 3);
live_2(1, 0, 3);
live_3(1, 2, 0); // Arguments that were not provided are not live

live_1(0);
live_2(1);
live_3(1);
live_1(0, 2, 3, 4, 5);
live_2(1, 0, 3, 4, 5);
live_3(1, 2, 0, 4, 5);

function extra_args_modify_4(a, b, c) {
  arguments[3] = 4;
  return arguments[3];
}

function extra_args_modify_5(a, b, c) {
  arguments[4] = 5;
  return arguments[4];
}

extra_args_modify_4(1, 2, 3, 0, 5);
extra_args_modify_5(1, 2, 3, 4, 0);

function tear_off_live_1(a, b, c) {
  var args = arguments;
  return function () {
    args[0] = 1;
    return a;
  };
}

function tear_off_live_2(a, b, c) {
  var args = arguments;
  return function () {
    args[1] = 2;
    return b;
  };
}

function tear_off_live_3(a, b, c) {
  var args = arguments;
  return function () {
    args[2] = 3;
    return c;
  };
}

tear_off_live_1(0, 2, 3)();
tear_off_live_2(1, 0, 3)();
tear_off_live_3(1, 2, 0)(); // Arguments that were not provided are not live

tear_off_live_1(0)();
tear_off_live_2(1)();
tear_off_live_3(1)();
tear_off_live_1(0, 2, 3, 4, 5)();
tear_off_live_2(1, 0, 3, 4, 5)();
tear_off_live_3(1, 2, 0, 4, 5)();

function tear_off_extra_args_modify_4(a, b, c) {
  return function () {
    arguments[3] = 4;
    return arguments[3];
  };
}

function tear_off_extra_args_modify_5(a, b, c) {
  return function () {
    arguments[4] = 5;
    return arguments[4];
  };
}

tear_off_extra_args_modify_4(1, 2, 3, 0, 5)();
tear_off_extra_args_modify_5(1, 2, 3, 4, 0)();

function delete_1(a, b, c) {
  delete arguments[0];
  return arguments[0];
}

function delete_2(a, b, c) {
  delete arguments[1];
  return arguments[1];
}

function delete_3(a, b, c) {
  delete arguments[2];
  return arguments[2];
}

function delete_4(a, b, c) {
  delete arguments[3];
  return arguments[3];
}

function delete_5(a, b, c) {
  delete arguments[4];
  return arguments[4];
}

delete_1(1, 2, 3);
delete_2(1, 2, 3);
delete_3(1, 2, 3);
delete_4(1, 2, 3);
delete_5(1, 2, 3);
delete_1(1);
delete_2(1);
delete_3(1);
delete_4(1);
delete_5(1);
delete_1(1, 2, 3, 4, 5);
delete_2(1, 2, 3, 4, 5);
delete_3(1, 2, 3, 4, 5);
delete_4(1, 2, 3, 4, 5);
delete_5(1, 2, 3, 4, 5);

function tear_off_delete_1(a, b, c) {
  return function () {
    delete arguments[0];
    return arguments[0];
  };
}

function tear_off_delete_2(a, b, c) {
  return function () {
    delete arguments[1];
    return arguments[1];
  };
}

function tear_off_delete_3(a, b, c) {
  return function () {
    delete arguments[2];
    return arguments[2];
  };
}

function tear_off_delete_4(a, b, c) {
  return function () {
    delete arguments[3];
    return arguments[3];
  };
}

function tear_off_delete_5(a, b, c) {
  return function () {
    delete arguments[4];
    return arguments[4];
  };
}

tear_off_delete_1(1, 2, 3)();
tear_off_delete_2(1, 2, 3)();
tear_off_delete_3(1, 2, 3)();
tear_off_delete_4(1, 2, 3)();
tear_off_delete_5(1, 2, 3)();
tear_off_delete_1(1)();
tear_off_delete_2(1)();
tear_off_delete_3(1)();
tear_off_delete_4(1)();
tear_off_delete_5(1)();
tear_off_delete_1(1, 2, 3, 4, 5)();
tear_off_delete_2(1, 2, 3, 4, 5)();
tear_off_delete_3(1, 2, 3, 4, 5)();
tear_off_delete_4(1, 2, 3, 4, 5)();
tear_off_delete_5(1, 2, 3, 4, 5)();

function delete_not_live_1(a, b, c) {
  delete arguments[0];
  return a;
}

function delete_not_live_2(a, b, c) {
  delete arguments[1];
  return b;
}

function delete_not_live_3(a, b, c) {
  delete arguments[2];
  return c;
}

delete_not_live_1(1, 2, 3);
delete_not_live_2(1, 2, 3);
delete_not_live_3(1, 2, 3);
delete_not_live_1(1);
delete_not_live_2(1);
delete_not_live_3(1);
delete_not_live_1(1, 2, 3, 4, 5);
delete_not_live_2(1, 2, 3, 4, 5);
delete_not_live_3(1, 2, 3, 4, 5);

function tear_off_delete_not_live_1(a, b, c) {
  return function () {
    delete arguments[0];
    return a;
  };
}

function tear_off_delete_not_live_2(a, b, c) {
  return function () {
    delete arguments[1];
    return b;
  };
}

function tear_off_delete_not_live_3(a, b, c) {
  return function () {
    delete arguments[2];
    return c;
  };
}

tear_off_delete_not_live_1(1, 2, 3)();
tear_off_delete_not_live_2(1, 2, 3)();
tear_off_delete_not_live_3(1, 2, 3)();
tear_off_delete_not_live_1(1)();
tear_off_delete_not_live_2(1)();
tear_off_delete_not_live_3(1)();
tear_off_delete_not_live_1(1, 2, 3, 4, 5)();
tear_off_delete_not_live_2(1, 2, 3, 4, 5)();
tear_off_delete_not_live_3(1, 2, 3, 4, 5)();

function access_after_delete_named_2(a, b, c) {
  delete arguments[0];
  return b;
}

function access_after_delete_named_3(a, b, c) {
  delete arguments[0];
  return c;
}

function access_after_delete_named_4(a, b, c) {
  delete arguments[0];
  return arguments[3];
}

access_after_delete_named_2(1, 2, 3);
access_after_delete_named_3(1, 2, 3);
access_after_delete_named_4(1, 2, 3);
access_after_delete_named_2(1);
access_after_delete_named_3(1);
access_after_delete_named_4(1);
access_after_delete_named_2(1, 2, 3, 4);
access_after_delete_named_3(1, 2, 3, 4);
access_after_delete_named_4(1, 2, 3, 4);

function access_after_delete_extra_1(a, b, c) {
  delete arguments[3];
  return a;
}

function access_after_delete_extra_2(a, b, c) {
  delete arguments[3];
  return b;
}

function access_after_delete_extra_3(a, b, c) {
  delete arguments[3];
  return c;
}

function access_after_delete_extra_5(a, b, c) {
  delete arguments[3];
  return arguments[4];
}

access_after_delete_extra_1(1, 2, 3);
access_after_delete_extra_2(1, 2, 3);
access_after_delete_extra_3(1, 2, 3);
access_after_delete_extra_5(1, 2, 3);
access_after_delete_extra_1(1);
access_after_delete_extra_2(1);
access_after_delete_extra_3(1);
access_after_delete_extra_5(1);
access_after_delete_extra_1(1, 2, 3, 4, 5);
access_after_delete_extra_2(1, 2, 3, 4, 5);
access_after_delete_extra_3(1, 2, 3, 4, 5);
access_after_delete_extra_5(1, 2, 3, 4, 5);

function argumentsParam(arguments) {
  return arguments;
}

argumentsParam(true);
var argumentsFunctionConstructorParam = new Function("arguments", "return arguments;");
argumentsFunctionConstructorParam(true);

function argumentsVarUndefined() {
  var arguments;
  return String(arguments);
}

argumentsVarUndefined();

function argumentsConst() {
  const arguments = 20;
  return String(arguments);
}

argumentsConst();

function argumentCalleeInException() {
  try {
    throw "";
  } catch (e) {
    return arguments.callee;
  }
}

argumentCalleeInException();

function shadowedArgumentsApply(arguments) {
  return function (a) {
    return a;
  }.apply(null, arguments);
}

function shadowedArgumentsLength(arguments) {
  return arguments.length;
}

function shadowedArgumentsCallee(arguments) {
  return arguments.callee;
}

function shadowedArgumentsIndex(arguments) {
  return arguments[0];
}

shadowedArgumentsApply([true]);
shadowedArgumentsLength([]);

try {
  shadowedArgumentsLength();
} catch (e) {
  ;
}

try {
  shadowedArgumentsCallee([]);
} catch (e) {
  ;
}

shadowedArgumentsIndex([true]);

descriptor = function () {
  return Object.getOwnPropertyDescriptor(arguments, 1);
}("zero", "one", "two");

descriptor.value;
descriptor.writable;
descriptor.enumerable;
descriptor.configurable; // Test cases for [[DefineOwnProperty]] applied to the arguments object.

(function (a0, a1, a2, a3) {
  Object.defineProperties(arguments, {
    1: {
      get: function () {
        return 201;
      }
    },
    2: {
      value: 202,
      writable: false
    },
    3: {
      writable: false
    }
  }); // Test a0 is a live mapped argument.

  a0 === 100;
  arguments[0] === 100;
  a0 = 300;
  a0 === 300;
  arguments[0] === 300;
  arguments[0] = 400;
  a0 === 400;
  arguments[0] === 400; // When a1 is redefined as an accessor, it is no longer live.

  a1 === 101;
  arguments[1] === 201;
  a1 = 301;
  a1 === 301;
  arguments[1] === 201;
  arguments[1] = 401;
  a1 === 301;
  arguments[1] === 201; // When a2 is made read-only the value is set, but it is no longer live.
  // (per 10.6 [[DefineOwnProperty]] 5.b.ii.1)

  a2 === 202;
  arguments[2] === 202;
  a2 = 302;
  a2 === 302;
  arguments[2] === 202;
  arguments[2] = 402;
  a2 === 302;
  arguments[2] === 202; // When a3 is made read-only, it is no longer live.
  // (per 10.6 [[DefineOwnProperty]] 5.b.ii.1)

  a3 === 103;
  arguments[3] === 103;
  a3 = 303;
  a3 === 303;
  arguments[3] === 103;
  arguments[3] = 403;
  a3 === 303;
  arguments[3] === 103;
})(100, 101, 102, 103); // Test cases for [[DefineOwnProperty]] applied to the arguments object.


(function (arg) {
  Object.getOwnPropertyDescriptor(arguments, 0).writable;
  Object.getOwnPropertyDescriptor(arguments, 0).enumerable;
  Object.defineProperty(arguments, 0, {
    writable: false
  });
  Object.getOwnPropertyDescriptor(arguments, 0).writable;
  Object.getOwnPropertyDescriptor(arguments, 0).enumerable;
  Object.defineProperty(arguments, 0, {
    enumerable: false
  });
  Object.getOwnPropertyDescriptor(arguments, 0).writable;
  Object.getOwnPropertyDescriptor(arguments, 0).enumerable;
  delete arguments[1];
  Object.getOwnPropertyDescriptor(arguments, 1);
  Object.defineProperty(arguments, 1, {
    writable: true
  });
  Object.getOwnPropertyDescriptor(arguments, 1).writable;
  Object.getOwnPropertyDescriptor(arguments, 1).enumerable;
})(0, 1);
