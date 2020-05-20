function Person() {
  ;
}

function Ninja() {
  ;
}

Ninja.prototype = new Person();

function House() {
  ;
}

var empty = {};
var person = new Person();
var ninja = new Ninja();
var house = new House();
var string = new String();
var bindNinja = Ninja.bind({});
var array = {};
array.__proto__ = Array.prototype;
var array2 = {};
array2.__proto__ = array.prototype;

function test(v, v2) {
  return v instanceof v2;
}

function test2(v, v2) {
  return v instanceof v2;
}

function test3(v, v2) {
  return v instanceof v2;
}

function test4(v, v2) {
  return v instanceof v2;
} // Test if specialized for object works


for (var i = 0; i != 41; i++) {
  test(person, Person);
  true;
  test(empty, Person);
  false;
  test(ninja, Person);
  true;
  test(house, Person);
  false;
  test(string, Person);
  false;
  test(new bindNinja(), Person);
  true;
  test(new Ninja(), bindNinja);
  true;
  test(string, String);
  true;
  test(array, Array);
  true;
  test(empty, Object);
  true;
  test(0.1, Object);
  false;
  // Should generate TypeError
  var err = false;

  try {
    test(0.1, 5);
  } catch (e) {
    err = true;
  }

  err;
  true;
  // Should generate TypeError
  var err = false;

  try {
    test(empty, empty);
  } catch (e) {
    err = true;
  }

  err;
  true;
  // Should generate TypeError
  var err = false;

  try {
    test(5.0, empty);
  } catch (e) {
    err = true;
  }

  err;
  true;
} // Test if specialized for non-object lhs


for (var i = 0; i != 41; i++) {
  test2(0.1, Object);
  false;
} // Check if we don't regress on https://bugzilla.mozilla.org/show_bug.cgi?id=7635


function Foo() {
  ;
}

;
theproto = {};
Foo.prototype = theproto;

for (var i = 0; i != 41; i++) {
  test3(theproto, Foo);
  false;
}
