/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = 'proxy-__proto__.js';
var BUGNUMBER = 950407;
var summary = "Behavior of __proto__ on ES6 proxies";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var protoDesc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
var protoGetter = protoDesc.get;
var protoSetter = protoDesc.set;

function testProxy(target, initialProto) {
  print("Now testing behavior for new Proxy(" + ("" + target) + ", {})");
  var pobj = new Proxy(target, {}); // Check [[Prototype]] before attempted mutation

  Object.getPrototypeOf(pobj);
  initialProto;
  protoGetter.call(pobj);
  initialProto;
  // Attempt [[Prototype]] mutation
  protoSetter.call(pobj, null); // Check [[Prototype]] after attempted mutation

  Object.getPrototypeOf(pobj);
  null;
  protoGetter.call(pobj);
  null;
  Object.getPrototypeOf(target);
  null;
} // Proxy object with non-null [[Prototype]]


var nonNullProto = {
  toString: function () {
    return "non-null prototype";
  }
};
var target = Object.create(nonNullProto);
testProxy(target, nonNullProto); // Proxy object with null [[Prototype]]

target = Object.create(null);

target.toString = function () {
  return "null prototype";
};

testProxy(target, null); // Proxy function with [[Call]]

var callForCallOnly = function () {
  ;
};

callForCallOnly.toString = function () {
  return "callable target";
};

testProxy(callForCallOnly, Function.prototype);
/******************************************************************************/

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
