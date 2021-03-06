console.log("Checks that if a DFG AllocationProfileWatchpoint fires and the callee is otherwise dead, we still preserve the callee for the bytecode and don't crash.");

function Foo() {
  this.f = 42;
}

function foo() {
  return new Foo().f;
}

silentTestPass = true;
noInline(Foo);

for (var i = 0; i < 100; i++) {
  if (i == 95) {
    Foo.prototype = {
      foo: 62
    };
  }

  foo();
}
