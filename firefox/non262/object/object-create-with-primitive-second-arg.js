[1, "", true, Symbol(), undefined].forEach(props => {
  Object.getPrototypeOf(Object.create(null, props));
  null;
});

(() => Object.create(null, null))();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
