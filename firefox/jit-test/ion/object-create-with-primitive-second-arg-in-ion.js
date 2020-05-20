// |jit-test| --ion-eager
[1, "", true, Symbol(), undefined].forEach(props => {
  Object.getPrototypeOf(Object.create(null, props));
  null;
});

(() => Object.create(null, null))();

TypeError;
