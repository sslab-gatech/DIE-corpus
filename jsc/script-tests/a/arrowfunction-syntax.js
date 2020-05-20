console.log("Tests for ES6 arrow function calling");

var af0 = v => v + 1;

af0(10);

var af1 = v => v * 2;

af1(10);

var af2 = () => 1000;

af2(1212);
var a = 151;

var af2_1 = () => a;

af2_1(121);

var af3 = (v, x) => v + x;

af3(11, 12);

var afwrapper = function (cl, paramter) {
  return cl(paramter);
};

afwrapper(x => 1234);
afwrapper(x => 1234, 2345);
afwrapper(x => 121 + 232);
afwrapper(x => 123 + 321, 9999);
afwrapper(x => x + 12, 21);
afwrapper(x => x + 21, 32);
afwrapper(() => 100);
var ext_value = 121;
afwrapper(() => ext_value);
afwrapper(() => ext_value * 10);
afwrapper(x => ext_value * x, 30);
afwrapper(() => 100, 11);
afwrapper(() => 100 + 10);
afwrapper(() => 100 + 11, 12);

var arrowFunction4 = v => v + 1,
    xyz1 = 10101;

arrowFunction4(1011);
xyz1;

var afwrapper2 = function (cl, paramter1, paramter2) {
  return cl(paramter1, paramter2);
};

afwrapper2((x, y) => x + y, 12, 43);
var afArr0 = [v => v * 10];
afArr0[0](10);
var afArr1 = [v => v + 1, v => v + 2];
afArr1[0](10);
afArr1[1](11);
var afArr2 = [v => v + 1, v => v + 2];
afArr2[0](11);
afArr2[1](11);
var afArr3 = [() => 101, () => 12323];
afArr3[0](11);
afArr3[1](11);
var afObj = {
  func: y => y + 12
};
afObj.func(11);

var afBlock0 = () => {
  return 1000;
};

afBlock0(11);

var afBlock1 = v => {
  var intval = 100;
  return v * intval;
};

afBlock1(11);

var afBlock2 = v => {
  var int = 200;
  return v * int;
};

afBlock2(11);

var afBlock3 = (v, x) => {
  var result = x * v;
  return result;
};

afBlock3(11, 12222);

(function funcSelfExecAE1(value) {
  var f = x => x + 1;

  return f(value);
})(123);

;

(function funcSelfExecAE2(value) {
  var f = x => {
    x++;
    return x + 1;
  };

  return f(value);
})(123);

;

(function funcSelfExecAE3(value) {
  var f = x => {
    x++;
    return x + 1;
  };

  return f(value);
})(123);

;

(function funcSelfExecAE4(value) {
  var f = (x, y) => {
    x++;
    return x + y;
  };

  return f(value, value * 2);
})(123);

;

(([a, b]) => a + b)(["a_", "b_"]);

(({
  a,
  b
}) => a + b)({
  a: "a_",
  b: "b_"
});

(({
  c: a,
  d: b
}) => a + b)({
  c: "a_",
  d: "b_"
});

(({
  c: b,
  d: a
}) => a + b)({
  c: "a_",
  d: "b_"
});

((x, y, {
  c: b,
  d: a
}) => x + y + a + b)("x_", "y_", {
  c: "a_",
  d: "b_"
});

(({
  c: b,
  d: a
}, x, y) => x + y + a + b)({
  c: "a_",
  d: "b_"
}, "x_", "y_");

((x, y, {
  c: b,
  d: a
}, [e, f]) => x + y + a + b + e + f)("x_", "y_", {
  c: "a_",
  d: "b_"
}, ["e_", "f_"]);

((x, y, {
  c: b,
  d: a
}, [e, f], ...theArgs) => x + y + a + b + e + f + theArgs[0] + theArgs[1])("x_", "y_", {
  c: "a_",
  d: "b_"
}, ["e_", "f_"], "g_", "h_");

((x, y = 'default-value') => x + y)('input-value:');

((x, y = 'default-value') => x + y)('input-value:', undefined);

((x, y = 'default-value') => x + y)();

((x, y = 'default-value') => x + y)('input-value-1:', 'input-value-2');

var arr1 = ([a, b]) => a + b;

arr1(["a_", "b_"]);

var arr2 = ({
  a,
  b
}) => a + b;

arr2({
  a: "a_",
  b: "b_"
});

var arr3 = ({
  c: a,
  d: b
}) => a + b;

arr3({
  c: "a_",
  d: "b_"
});

var arr4 = ({
  c: b,
  d: a
}) => a + b;

arr4({
  c: "a_",
  d: "b_"
});

var arr5 = (x, y, {
  c: b,
  d: a
}) => x + y + a + b;

arr5("x_", "y_", {
  c: "a_",
  d: "b_"
});

var arr6 = ({
  c: b,
  d: a
}, x, y) => x + y + a + b;

arr6({
  c: "a_",
  d: "b_"
}, "x_", "y_");

var arr7 = (x, y, {
  c: b,
  d: a
}, [e, f]) => x + y + a + b + e + f;

arr7("x_", "y_", {
  c: "a_",
  d: "b_"
}, ["e_", "f_"]);

var arr8 = (x, y, {
  c: b,
  d: a
}, [e, f], ...theArgs) => x + y + a + b + e + f + theArgs[0] + theArgs[1];

arr8("x_", "y_", {
  c: "a_",
  d: "b_"
}, ["e_", "f_"], "g_", "h_");

var arr9 = (x, y = 'default-value') => x + y;

arr9("input-value:");
arr9("input-value:", undefined);
arr9();
arr9("input-value-1:", "input-value-2");
var successfullyParsed = true;
