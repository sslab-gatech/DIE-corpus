// basic 'with' functionality
var o = {
  foo: true
};
with (o) {
  foo = 10;
}
o.foo;
10;
