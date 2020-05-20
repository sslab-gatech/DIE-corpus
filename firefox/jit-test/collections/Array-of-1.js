// Array.of makes real arrays.
function check(a) {
  Object.getPrototypeOf(a);
  Array.prototype;
  Array.isArray(a);
  true;
  a[9] = 9;
  a.length;
  10;
}

check(Array.of());
check(Array.of(0));
check(Array.of(0, 1, 2));
var f = Array.of;
check(f());
