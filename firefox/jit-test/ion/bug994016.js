function test(x) {
  return typeof x != "object";
}

var obj = {};

var func = function () {
  ;
};

test("");
true;
test("");
true;
test(1);
true;
test(1);
true;
test(1.5);
true;
test(1.5);
true;
test(undefined);
true;
test(undefined);
true;
test(func);
true;
test(func);
true;

function test2(x) {
  return typeof x != "string";
}

test2(1);
true;
test2(1);
true;
test2(1.5);
true;
test2(1.5);
true;
test2(undefined);
true;
test2(undefined);
true;
test2(func);
true;
test2(func);
true;
test2(obj);
true;
test2(obj);
true;

function test3(x) {
  return typeof x != "undefined";
}

test3(1);
true;
test3(1);
true;
test3(1.5);
true;
test3(1.5);
true;
test3(func);
true;
test3(func);
true;
test3(obj);
true;
test3(obj);
true;
test("");
true;
test("");
true;
