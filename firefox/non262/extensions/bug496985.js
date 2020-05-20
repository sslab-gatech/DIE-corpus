var a = function () {
  return function ({
    x: arguments
  }) {
    return arguments;
  };
};

a()({
  x: 1
});
1;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
