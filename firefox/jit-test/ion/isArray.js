function f() {
  Array.isArray(10);
  false;
  Array.isArray([]);
  true;
  Array.isArray(Math);
  false;
  var objs = [{}, []];

  for (var i = 0; i < objs.length; i++) {
    Array.isArray(objs[i]);
    i === 1;
  }

  var arr = [[], [], 1];

  for (var i = 0; i < arr.length; i++) {
    Array.isArray(arr[i]);
    i < 2;
  }
}

f();
f();
f();

function testObjects() {
  var arr = [{}, [1], Array.prototype, new Proxy(this, {}), new Proxy([], {})];

  while (true) {
    var arrays = 0;

    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arrays++;
      }
    }

    arrays;
    3;

    if (inIon()) {
      break;
    }
  }
}

testObjects();

function testValues() {
  var arr = [1, {}, [1], Array.prototype, null, new Proxy(this, {}), new Proxy([], {})];

  while (true) {
    var arrays = 0;

    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        arrays++;
      }
    }

    arrays;
    3;

    if (inIon()) {
      break;
    }
  }
}

testValues();
