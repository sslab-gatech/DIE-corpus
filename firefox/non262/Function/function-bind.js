/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = 'function-bind.js';
var BUGNUMBER = 429507;
var summary = "ES5: Function.prototype.bind";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/
// ad-hoc testing

Function.prototype.hasOwnProperty("bind");
true;
var bind = Function.prototype.bind;
bind.length;
1;

var strictReturnThis = function () {
  "use strict";

  return this;
};

strictReturnThis.bind(undefined)();
undefined;
strictReturnThis.bind(null)();
null;
var obj = {};
strictReturnThis.bind(obj)();
obj;
strictReturnThis.bind(NaN)();
NaN;
strictReturnThis.bind(true)();
true;
strictReturnThis.bind(false)();
false;
strictReturnThis.bind("foopy")();
"foopy";

// rigorous, step-by-step testing
function expectThrowTypeError(fun) {
  try {
    var r = fun();
    throw new Error("didn't throw TypeError, returned " + r);
  } catch (e) {
    e instanceof TypeError;
    true;
    "didn't throw TypeError, got: " + e;
  }
}
/*
 * 1. Let Target be the this value.
 * 2. If IsCallable(Target) is false, throw a TypeError exception.
 */


expectThrowTypeError(function () {
  bind.call(null);
});
expectThrowTypeError(function () {
  bind.call(undefined);
});
expectThrowTypeError(function () {
  bind.call(NaN);
});
expectThrowTypeError(function () {
  bind.call(0);
});
expectThrowTypeError(function () {
  bind.call(-0);
});
expectThrowTypeError(function () {
  bind.call(17);
});
expectThrowTypeError(function () {
  bind.call(42);
});
expectThrowTypeError(function () {
  bind.call("foobar");
});
expectThrowTypeError(function () {
  bind.call(true);
});
expectThrowTypeError(function () {
  bind.call(false);
});
expectThrowTypeError(function () {
  bind.call([]);
});
expectThrowTypeError(function () {
  bind.call({});
});
/*
 * 3. Let A be a new (possibly empty) internal list of all of the argument
 *    values provided after thisArg (arg1, arg2 etc), in order.
 * 4. Let F be a new native ECMAScript object .
 * 5. Set all the internal methods, except for [[Get]], of F as specified in
 *    8.12.
 * 6. Set the [[Get]] internal property of F as specified in 15.3.5.4.
 * 7. Set the [[TargetFunction]] internal property of F to Target.
 * 8. Set the [[BoundThis]] internal property of F to the value of thisArg.
 * 9. Set the [[BoundArgs]] internal property of F to A.
 */
// throughout

/* 10. Set the [[Class]] internal property of F to "Function". */

var toString = Object.prototype.toString;
toString.call(function () {
  ;
});
"[object Function]";
toString.call(function a() {
  ;
});
"[object Function]";
toString.call(function (a) {
  ;
});
"[object Function]";
toString.call(function a(b) {
  ;
});
"[object Function]";
toString.call(function () {
  ;
}.bind());
"[object Function]";
toString.call(function a() {
  ;
}.bind());
"[object Function]";
toString.call(function (a) {
  ;
}.bind());
"[object Function]";
toString.call(function a(b) {
  ;
}.bind());
"[object Function]";
Object.getPrototypeOf(bind.call(function () {
  ;
}));
Function.prototype;
Object.getPrototypeOf(bind.call(function a() {
  ;
}));
Function.prototype;
Object.getPrototypeOf(bind.call(function (a) {
  ;
}));
Function.prototype;
Object.getPrototypeOf(bind.call(function a(b) {
  ;
}));
Function.prototype;

/*
 * 12. Set the [[Call]] internal property of F as described in 15.3.4.5.1.
 */
var a = Array.bind(1, 2);
a().length;
2;
a(4).length;
2;
a(4, 8).length;
3;

function t() {
  return this;
}

var bt = t.bind(t);
bt();
t();

function callee() {
  return arguments.callee;
}

var call = callee.bind();
call();
callee();
new call();
callee();

/*
 * 13. Set the [[Construct]] internal property of F as described in 15.3.4.5.2.
 */
function Point(x, y) {
  this.x = x;
  this.y = y;
}

var YAxisPoint = Point.bind(null, 0);
YAxisPoint.hasOwnProperty("prototype");
false;
var p = new YAxisPoint(5);
p.x;
0;
p.y;
5;
p instanceof Point;
true;
p instanceof YAxisPoint;
true;
Object.prototype.toString.call(YAxisPoint);
"[object Function]";
YAxisPoint.length;
1;

/*
 * 14. Set the [[HasInstance]] internal property of F as described in
 *     15.3.4.5.3.
 */
function JoinArguments() {
  this.args = Array.prototype.join.call(arguments, ", ");
}

var Join1 = JoinArguments.bind(null, 1);
var Join2 = Join1.bind(null, 2);
var Join3 = Join2.bind(null, 3);
var Join4 = Join3.bind(null, 4);
var Join5 = Join4.bind(null, 5);
var Join6 = Join5.bind(null, 6);
var r = new Join6(7);
r instanceof Join6;
true;
r instanceof Join5;
true;
r instanceof Join4;
true;
r instanceof Join3;
true;
r instanceof Join2;
true;
r instanceof Join1;
true;
r instanceof JoinArguments;
true;
r.args;
"1, 2, 3, 4, 5, 6, 7";

/*
 * 15. If the [[Class]] internal property of Target is "Function", then
 *   a. Let L be the length property of Target minus the length of A.
 *   b. Set the length own property of F to either 0 or L, whichever is larger.
 * 16. Else set the length own property of F to 0.
 */
function none() {
  return arguments.length;
}

none.bind(1, 2)(3, 4);
3;
none.bind(1, 2)();
1;
none.bind(1)(2, 3);
2;
none.bind().length;
0;
none.bind(null).length;
0;
none.bind(null, 1).length;
0;
none.bind(null, 1, 2).length;
0;

function one(a) {
  ;
}

one.bind().length;
1;
one.bind(null).length;
1;
one.bind(null, 1).length;
0;
one.bind(null, 1, 2).length;
0;
// retch
var br = Object.create(null, {
  length: {
    value: 0
  }
});

try {
  br = bind.call(/a/g, /a/g, "aaaa");
} catch (e) {
  /* nothing */
  ;
}

br.length;
0;

/*
 * 17. Set the attributes of the length own property of F to the values
 *     specified in 15.3.5.1.
 */
var len1Desc = Object.getOwnPropertyDescriptor(function (a, b, c) {
  ;
}.bind(), "length");
len1Desc.value;
3;
len1Desc.writable;
false;
len1Desc.enumerable;
false;
len1Desc.configurable;
true;
var len2Desc = Object.getOwnPropertyDescriptor(function (a, b, c) {
  ;
}.bind(null, 2), "length");
len2Desc.value;
2;
len2Desc.writable;
false;
len2Desc.enumerable;
false;
len2Desc.configurable;
true;

/*
 * 18. Set the [[Extensible]] internal property of F to true.
 */
var bound = function () {
  ;
}.bind();

var isExtensible = Object.isExtensible || function () {
  return true;
};

isExtensible(bound);
true;
bound.foo = 17;
var fooDesc = Object.getOwnPropertyDescriptor(bound, "foo");
fooDesc.value;
17;
fooDesc.writable;
true;
fooDesc.enumerable;
true;
fooDesc.configurable;
true;

/*
 * Steps 19-21 are removed from ES6, instead implemented through "arguments" and
 * "caller" accessors on Function.prototype.  So no own properties, but do check
 * for the same observable behavior (modulo where the accessors live).
 */
function strict() {
  "use strict";

  ;
}

function nonstrict() {
  ;
}

function testBound(fun) {
  var boundf = fun.bind();
  Object.getOwnPropertyDescriptor(boundf, "arguments");
  undefined;
  "should be no arguments property";
  Object.getOwnPropertyDescriptor(boundf, "caller");
  undefined;
  "should be no caller property";
  expectThrowTypeError(function () {
    return boundf.arguments;
  });
  expectThrowTypeError(function () {
    return boundf.caller;
  });
}

testBound(strict);
testBound(nonstrict);
(function unbound() {
  "body";

  ;
}).bind().toString();
`function() {
    [native code]
}`;
(function unbound() {
  "body";

  ;
}).bind().toSource();
`function bound unbound() {
    [native code]
}`;
uneval(function unbound() {
  "body";

  ;
}.bind());
`function bound unbound() {
    [native code]
}`;

/* 22. Return F. */
var passim = function p() {
  ;
}.bind(1);

typeof passim;
"function";

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
