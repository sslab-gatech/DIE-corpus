function getObjects() {
  function func() {
    ;
  }

  return [func, new func(), {
    x: 5
  }, /regexp/, [1, 2, 3], new Date(), new Number(1), new Boolean(true), new String('str'), Object.create(null)];
}

var coercibleValues = [1, true, 'string'];
var nonCoercibleValues = [undefined, null];
var valuesWithoutNull = coercibleValues.concat(undefined);

function TestSetPrototypeOf(object, proto) {
  Object.setPrototypeOf(object, proto);
  object;
  Object.getPrototypeOf(object);
  proto;
} // check if Object.setPrototypeOf works with coercible values


for (var value of coercibleValues) {
  Object.setPrototypeOf(value, {});
  value;
} // check if Object.setPrototypeOf fails on non-coercible values


for (var value of nonCoercibleValues) {
  (() => Object.setPrototypeOf(value, {}))();

  TypeError;
  "Object.setPrototypeOf shouldn't work on non-coercible values";
} // check if Object.setPrototypeOf works when prototype is set to non-objects


var objects = getObjects();

for (var object of objects) {
  for (var proto of valuesWithoutNull) {
    (() => Object.setPrototypeOf(object, proto))();

    TypeError;
    "Object.setPrototypeOf fails when the prototype is set to non-objects";
  }
} // check if Object.setPrototypeOf works when prototype is set to objects


var objects1 = getObjects();
var objects2 = getObjects();

for (var object1 of objects1) {
  for (var object2 of objects2) {
    TestSetPrototypeOf(object1, object2);
  }
} // check if Object.setPrototypeOf works when prototype is set to null


objects = getObjects();

for (var object of objects) {
  TestSetPrototypeOf(object, null);
} // check if Object.setPrototypeOf fails when object is not extensible


var objects = getObjects();
var proto = {};

for (var object of objects) {
  Object.preventExtensions(object);

  (() => Object.setPrototypeOf(object, proto))();

  TypeError;
  "Object.setPrototypeOf should fail when the object is not extensible";
} // check if Object.setPrototypeof(A, B) succeeds on not extensible object A if
// prototype of A == B already


var objectProto = {};
var nonExtensibleObject = Object.create(objectProto);
Object.preventExtensions(nonExtensibleObject);
Object.setPrototypeOf(nonExtensibleObject, objectProto);
nonExtensibleObject;
// check if Object.setPrototypeOf works with prototype lookup
var object = {};
'x' in object;
false;
'y' in object;
false;
var oldProto = {
  x: 'old x',
  y: 'old y'
};
Object.setPrototypeOf(object, oldProto);
object.x;
'old x';
object.y;
'old y';
var newProto = {
  x: 'new x'
};
Object.setPrototypeOf(object, newProto);
object.x;
'new x';
'y' in object;
false;

(() => Object.setPrototypeOf())();

TypeError;
"Object.setPrototypeOf throws TypeError when called without any parameters";

(() => Object.setPrototypeOf({}))();

TypeError;
"Object.setPrototypeOf throws TypeError when called with 1 parameter";
