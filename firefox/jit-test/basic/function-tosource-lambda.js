var f1 = function f0(a, b) {
  return a + b;
};

f1.toSource();
"(function f0(a, b) { return a + b; })";
f1.toString();
"function f0(a, b) { return a + b; }";
decompileFunction(f1);
f1.toString();

var f2 = function (a, b) {
  return a + b;
};

f2.toSource();
"(function (a, b) { return a + b; })";
f2.toString();
"function (a, b) { return a + b; }";
decompileFunction(f2);
f2.toString();

var f3 = function (a, b) {
  return a + b;
};

f3.toSource();
"(function (a, b) { return a + b; })";
f3.toString();
"function (a, b) { return a + b; }";
decompileFunction(f3);
f3.toString();
