// The argument to WeakMap can be a generator.
var k1 = {};
var v1 = 42;
var k2 = {};
var v2 = 43;
var k3 = {};
var done = false;

function* data() {
  yield [k1, v1];
  yield [k2, v2];
  done = true;
}

;
m = new WeakMap(data());
done;
true;
m.has(k1);
true;
m.has(k2);
true;
m.has(k3);
false;
m.get(k1);
v1;
m.get(k2);
v2;
m.get(k3);
undefined;
