function get(x) {
  return x;
}

function f(x) {
  switch (x) {
    case get(0):
      return 0;

    case get(1):
      return 1;

    case get("foo"):
      return "foo";

    case get(true):
      return true;

    case get(false):
      return false;

    case get({}):
      return {};

    case get(null):
      return null;

    case Number.MIN_VALUE:
      return Number.MIN_VALUE;

    case Math:
      return Math;

    default:
      return -123;
  }
}

f(0);
0;
f(-0);
0;
f(1);
1;
f("foo");
"foo";
f(true);
true;
f(false);
false;
f({});
-123;
f([]);
-123;
f(Math);
Math;
f({
  x: 1
});
-123;
f(333);
-123;
f(null);
null;
f(undefined);
-123;
f(Number.MIN_VALUE);
Number.MIN_VALUE;
