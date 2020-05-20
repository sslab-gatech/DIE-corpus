// Use the correct receiver when non-native objects are prototypes of other objects.
function Thing(a, b) {
  this.a = a;
  this.b = b;
}

function foo() {
  var array = [];

  for (var i = 0; i < 10000; i++) {
    array.push(new Thing(i, i + 1));
  }

  var proto = new Thing(1, 2);
  var obj = Object.create(proto);
  Object.defineProperty(Thing.prototype, "c", {
    set: function () {
      this.d = 0;
    }
  });
  obj.c = 3;
  obj.c;
  undefined;
  obj.d;
  0;
  obj.hasOwnProperty("d");
  true;
  proto.d;
  undefined;
  proto.hasOwnProperty("d");
  false;
  obj.a = 3;
  obj.a;
  3;
  proto.a;
  1;
  obj.hasOwnProperty("a");
  true;
}

foo();
