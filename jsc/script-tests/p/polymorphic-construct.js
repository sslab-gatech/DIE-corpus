console.log("This tests that polymorphic construction works correctly.");

function Foo() {
  this.field = "foo";
}

function Bar() {
  this.field = "bar";
}

function Baz() {
  this.field = "baz";
}

function construct(what) {
  return new what();
}

for (var i = 0; i < 3; ++i) {
  construct(Foo).field;
}

for (var i = 0; i < 3; ++i) {
  construct(Foo).field;
  construct(Bar).field;
  construct(Baz).field;
}
