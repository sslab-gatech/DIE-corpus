console.log('Tests whether bytecode codegen properly handles temporaries.');
var a = true;
a = false || a;
a;
var b = false;
b = true && b;
b;

function TestObject() {
  this.toString = function () {
    return this.test;
  };

  this.test = "FAIL";
  return this;
}

function assign_test1() {
  var testObject = new TestObject();
  var a = testObject;
  a.test = "PASS";
  return testObject.test;
}

assign_test1();

function assign_test2() {
  var testObject = new TestObject();
  var a = testObject;
  a = a.test = "PASS";
  return testObject.test;
}

assign_test2();

function assign_test3() {
  var testObject = new TestObject();
  var a = testObject;
  a.test = a = "PASS";
  return testObject.test;
}

assign_test3();
var testObject4 = new TestObject();
var a4 = testObject4;
a4.test = this.a4 = "PASS";
testObject4.test;
var testObject5 = new TestObject();
var a5 = testObject5;
a5 = a5.test = "PASS";
testObject5.test;

function assign_test6() {
  var testObject = new TestObject();
  var a = testObject;
  a["test"] = "PASS";
  return testObject.test;
}

assign_test6();

function assign_test7() {
  var testObject = new TestObject();
  var a = testObject;
  a = a["test"] = "PASS";
  return testObject.test;
}

assign_test7();

function assign_test8() {
  var testObject = new TestObject();
  var a = testObject;
  a["test"] = a = "PASS";
  return testObject.test;
}

assign_test8();

function assign_test9() {
  var testObject = new TestObject();
  var a = testObject;
  a["test"] = this.a = "PASS";
  return testObject.test;
}

assign_test9();
var testObject10 = new TestObject();
var a10 = testObject10;
a10 = a10["test"] = "PASS";
testObject10.test;

function assign_test11() {
  var testObject = new TestObject();
  var a = testObject;
  a[a = "test"] = "PASS";
  return testObject.test;
}

assign_test11();

function assign_test12() {
  var test = "test";
  var testObject = new TestObject();
  var a = testObject;
  a[test] = "PASS";
  return testObject.test;
}

assign_test12();

function assign_test13() {
  var testObject = new TestObject();
  var a = testObject;
  a.test = (a = "FAIL", "PASS");
  return testObject.test;
}

assign_test13();

function assign_test14() {
  var testObject = new TestObject();
  var a = testObject;
  a["test"] = (a = "FAIL", "PASS");
  return testObject.test;
}

assign_test14();

function assign_test15() {
  var test = "test";
  var testObject = new TestObject();
  var a = testObject;
  a[test] = (test = "FAIL", "PASS");
  return testObject.test;
}

assign_test15();

function assign_test16() {
  var a = 1;
  a = a = 2;
  return a;
}

assign_test16();
var a17 = 1;
a17 += a17 += 1;
a17;

function assign_test18() {
  var a = 1;
  a += a += 1;
  return a;
}

assign_test18();
var a19 = {
  b: 1
};
a19.b += a19.b += 1;
a19.b;

function assign_test20() {
  var a = {
    b: 1
  };
  a.b += a.b += 1;
  return a.b;
}

assign_test20();
var a21 = {
  b: 1
};
a21["b"] += a21["b"] += 1;
a21['b'];

function assign_test22() {
  var a = {
    b: 1
  };
  a["b"] += a["b"] += 1;
  return a["b"];
}

assign_test22();

function assign_test23() {
  var o = {
    b: 1
  };
  var a = o;
  a.b += a = 2;
  return o.b;
}

assign_test23();

function assign_test24() {
  var o = {
    b: 1
  };
  var a = o;
  a["b"] += a = 2;
  return o["b"];
}

assign_test24();

function assign_test25() {
  var o = {
    b: 1
  };
  var a = o;
  a[a = "b"] += a = 2;
  return o["b"];
}

assign_test25();

function assign_test26() {
  var o = {
    b: 1
  };
  var a = o;
  var b = "b";
  a[b] += a = 2;
  return o["b"];
}

assign_test26();

function assign_test27() {
  var o = {
    b: 1
  };
  var a = o;
  a.b += (a = 100, 2);
  return o.b;
}

assign_test27();

function assign_test28() {
  var o = {
    b: 1
  };
  var a = o;
  a["b"] += (a = 100, 2);
  return o["b"];
}

assign_test28();

function assign_test29() {
  var o = {
    b: 1
  };
  var a = o;
  var b = "b";
  a[b] += (a = 100, 2);
  return o["b"];
}

assign_test29();

function assign_test30() {
  var a = "foo";
  a += a++;
  return a;
}

assign_test30();

function assign_test31() {
  function result() {
    return "PASS";
  }

  return (globalVar = result)();
}

assign_test31();

function bracket_test1() {
  var o = [-1];
  var a = o[++o];
  return a;
}

bracket_test1();

function bracket_test2() {
  var o = [1];
  var a = o[--o];
  return a;
}

bracket_test2();

function bracket_test3() {
  var o = [0];
  var a = o[o++];
  return a;
}

bracket_test3();

function bracket_test4() {
  var o = [0];
  var a = o[o--];
  return a;
}

bracket_test4();

function bracket_test5() {
  var o = [1];
  var a = o[o ^= 1];
  return a;
}

bracket_test5();

function bracket_test6() {
  var o = {
    b: 1
  };
  var b = o[(o = {
    b: 2
  }, "b")];
  return b;
}

bracket_test6();

function mult_test1() {
  var a = 1;
  return a * (a = 2);
}

mult_test1();

function mult_test2() {
  var a = 1;
  return a * ++a;
}

mult_test2();

function mult_test3() {
  var a = 1;
  return a * (a += 1);
}

mult_test3();

function div_test1() {
  var a = 1;
  return a / (a = 2);
}

div_test1();

function div_test2() {
  var a = 1;
  return a / ++a;
}

div_test2();

function div_test3() {
  var a = 1;
  return a / (a += 1);
}

div_test3();

function mod_test1() {
  var a = 1;
  return a % (a = 2);
}

mod_test1();

function mod_test2() {
  var a = 1;
  return a % ++a;
}

mod_test2();

function mod_test3() {
  var a = 1;
  return a % (a += 1);
}

mod_test3();

function add_test1() {
  var a = 1;
  return a + (a = 2);
}

add_test1();

function add_test2() {
  var a = 1;
  return a + ++a;
}

add_test2();

function add_test3() {
  var a = 1;
  return a + (a += 1);
}

add_test3();

function sub_test1() {
  var a = 1;
  return a - (a = 2);
}

sub_test1();

function sub_test2() {
  var a = 1;
  return a - ++a;
}

sub_test2();

function sub_test3() {
  var a = 1;
  return a - (a += 1);
}

sub_test3();

function lshift_test1() {
  var a = 1;
  return a << (a = 2);
}

lshift_test1();

function lshift_test2() {
  var a = 1;
  return a << ++a;
}

lshift_test2();

function lshift_test3() {
  var a = 1;
  return a << (a += 1);
}

lshift_test3();

function rshift_test1() {
  var a = 4;
  return a >> (a = 2);
}

rshift_test1();

function rshift_test2() {
  var a = 2;
  return a >> --a;
}

rshift_test2();

function rshift_test3() {
  var a = 2;
  return a >> (a -= 1);
}

rshift_test3();

function urshift_test1() {
  var a = 4;
  return a >>> (a = 2);
}

urshift_test1();

function urshift_test2() {
  var a = 2;
  return a >>> --a;
}

urshift_test2();

function urshift_test3() {
  var a = 2;
  return a >>> (a -= 1);
}

urshift_test3();

function less_test1() {
  var a = 1;
  return a < (a = 2);
}

less_test1();

function less_test2() {
  var a = 1;
  return a < ++a;
}

less_test2();

function less_test3() {
  var a = 1;
  return a < (a += 1);
}

less_test3();

function greater_test1() {
  var a = 2;
  return a > (a = 1);
}

greater_test1();

function greater_test2() {
  var a = 2;
  return a > --a;
}

greater_test2();

function greater_test3() {
  var a = 2;
  return a > (a -= 1);
}

greater_test3();

function lesseq_test1() {
  var a = 1;
  return a <= (a = 3, 2);
}

lesseq_test1();

function lesseq_test2() {
  var a = 1;
  return a <= (++a, 1);
}

lesseq_test2();

function lesseq_test3() {
  var a = 1;
  return a <= (a += 1, 1);
}

lesseq_test3();

function greatereq_test1() {
  var a = 2;
  return a >= (a = 1, 2);
}

greatereq_test1();

function greatereq_test2() {
  var a = 2;
  return a >= (--a, 2);
}

greatereq_test2();

function greatereq_test3() {
  var a = 2;
  return a >= (a -= 1, 2);
}

greatereq_test3();

function instanceof_test1() {
  var a = {};
  return a instanceof (a = 1, Object);
}

instanceof_test1();

function instanceof_test2() {
  var a = {
    valueOf: function () {
      return 1;
    }
  };
  return a instanceof (++a, Object);
}

instanceof_test2();

function instanceof_test3() {
  var a = {
    valueOf: function () {
      return 1;
    }
  };
  return a instanceof (a += 1, Object);
}

instanceof_test3();

function in_test1() {
  var a = "a";
  return a in (a = "b", {
    a: 1
  });
}

in_test1();

function in_test2() {
  var a = {
    toString: function () {
      return "a";
    },
    valueOf: function () {
      return 1;
    }
  };
  return a in (++a, {
    a: 1
  });
}

in_test2();

function in_test3() {
  var a = {
    toString: function () {
      return "a";
    },
    valueOf: function () {
      return 1;
    }
  };
  return a in (a += 1, {
    a: 1
  });
}

in_test3();

function eq_test1() {
  var a = 1;
  return a == (a = 2);
}

eq_test1();

function eq_test2() {
  var a = 1;
  return a == ++a;
}

eq_test2();

function eq_test3() {
  var a = 1;
  return a == (a += 1);
}

eq_test3();

function neq_test1() {
  var a = 1;
  return a != (a = 2);
}

neq_test1();

function neq_test2() {
  var a = 1;
  return a != ++a;
}

neq_test2();

function neq_test3() {
  var a = 1;
  return a != (a += 1);
}

neq_test3();

function stricteq_test1() {
  var a = 1;
  return a === (a = 2);
}

stricteq_test1();

function stricteq_test2() {
  var a = 1;
  return a === ++a;
}

stricteq_test2();

function stricteq_test3() {
  var a = 1;
  return a === (a += 1);
}

stricteq_test3();

function nstricteq_test1() {
  var a = 1;
  return a !== (a = 2);
}

nstricteq_test1();

function nstricteq_test2() {
  var a = 1;
  return a !== ++a;
}

nstricteq_test2();

function nstricteq_test3() {
  var a = 1;
  return a !== (a += 1);
}

nstricteq_test3();

function bitand_test1() {
  var a = 1;
  return a & (a = 2);
}

bitand_test1();

function bitand_test2() {
  var a = 1;
  return a & ++a;
}

bitand_test2();

function bitand_test3() {
  var a = 1;
  return a & (a += 1);
}

bitand_test3();

function bitor_test1() {
  var a = 1;
  return a | (a = 2);
}

bitor_test1();

function bitor_test2() {
  var a = 1;
  return a | ++a;
}

bitor_test2();

function bitor_test3() {
  var a = 1;
  return a | (a += 1);
}

bitor_test3();

function bitxor_test1() {
  var a = 1;
  return a ^ (a = 2);
}

bitxor_test1();

function bitxor_test2() {
  var a = 1;
  return a ^ ++a;
}

bitxor_test2();

function bitxor_test3() {
  var a = 1;
  return a ^ (a += 1);
}

bitxor_test3();

function switch_test1_helper(a, b) {
  switch (a) {
    case b:
      break;

    default:
      break;
  }

  return b;
}

function switch_test1() {
  return switch_test1_helper(0, 1) == 1;
}

switch_test1();

function switch_test2_helper(a, b) {
  var c = b;

  switch (a) {
    case c:
      break;

    default:
      break;
  }

  return c;
}

function switch_test2() {
  return switch_test2_helper(0, 1) == 1;
}

switch_test2();

function switch_test3_helper(a) {
  switch (a) {
    case this:
      break;

    default:
      break;
  }

  return this;
}

function switch_test3() {
  return this == switch_test3_helper.call(this, 0);
}

switch_test3();

function construct_test() {
  var c = [function (a) {
    this.a = a;
  }];

  function f() {
    return new c[0](true);
  }

  return f().a;
}

construct_test();
var testStr = "[";

for (var i = 0; i < 64; i++) {
  testStr += "(0/0), ";
}

testStr += "].length";
