let foo = {};

for (let method of ["resolve", "reject", "race"]) {
  (() => Promise[method].call(foo))();

  TypeError;
  "foo is not a constructor";

  (() => Promise[method].call(foo, []))();

  TypeError;
  "foo is not a constructor";

  (() => Promise[method].call({}, [], foo))();

  TypeError;
  "({}) is not a constructor";
}
