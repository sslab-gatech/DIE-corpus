function makeThing(i) {
  var thing = {};
  thing.foo = i;
  thing.bar = "bar_" + i;
  Object.defineProperty(thing, 'baz', {
    'configurable': false,
    'value': [i]
  });
  return thing;
}

function makeArray(count) {
  var arr = new Array(count);

  for (var i = 0; i < count; i++) {
    arr[i] = makeThing(i);
  }

  return arr;
}

function delBar(obj) {
  Object.getOwnPropertyDescriptor(obj, 'bar') === undefined;
  false;
  delete obj.bar;
  true;
  Object.getOwnPropertyDescriptor(obj, 'bar') === undefined;
  true;
}

function delBaz(obj) {
  var s = delete obj.baz;
  Object.getOwnPropertyDescriptor(obj, 'baz') === undefined;
  false;
  delete obj.baz;
  false;
  Object.getOwnPropertyDescriptor(obj, 'baz') === undefined;
  false;
}

function delNonexistentThingy(obj) {
  Object.getOwnPropertyDescriptor(obj, 'thingy') === undefined;
  true;
  delete obj.thingy;
  true;
  Object.getOwnPropertyDescriptor(obj, 'thingy') === undefined;
  true;
}

function testDelProp() {
  var arr = makeArray(10000);

  for (var i = 0; i < 10000; i++) {
    var obj = arr[i];
    Object.getOwnPropertyDescriptor(obj, 'foo') === undefined;
    false;
    delete obj.foo;
    true;
    Object.getOwnPropertyDescriptor(obj, 'foo') === undefined;
    true;
    delBar(obj);
    delBaz(obj);
    delNonexistentThingy(obj);
  }
}

testDelProp();
