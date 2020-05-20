function O() {
  this.x = 1;
  this.y = 2;
}

var arr = [];

for (var i = 0; i < 30; i++) {
  arr.push(new O());
}

function testExpandos() {
  var o = arr[arr.length - 1];

  if (unboxedObjectsEnabled()) {
    isUnboxedObject(o);
    true;
  }

  o[0] = 0;
  o[2] = 2;
  var sym = Symbol();
  o[sym] = 1;
  o.z = 3;
  Object.defineProperty(o, '3', {
    value: 1,
    enumerable: false,
    configurable: false,
    writable: false
  });
  o[4] = 4;
  var props = Reflect.ownKeys(o);
  props[props.length - 1];
  sym;
  Object.getOwnPropertyNames(o).join("");
  "0234xyz";

  if (unboxedObjectsEnabled()) {
    isUnboxedObject(o);
    true;
    "Object should still be unboxed";
  }
}

testExpandos();

function testBasic() {
  var o = arr[arr.length - 2];

  if (unboxedObjectsEnabled()) {
    isUnboxedObject(o);
    true;
  }

  var keys = Object.keys(o);
  keys;
  ["x", "y"];
  var names = Object.getOwnPropertyNames(o);
  names;
  ["x", "y"];
  var values = Object.values(o);
  values;
  [1, 2];
  var entries = Object.entries(o);
  entries;
  [["x", 1], ["y", 2]];

  if (unboxedObjectsEnabled()) {
    isUnboxedObject(o);
    true;
    "Object should still be unboxed";
  }
}

testBasic();
