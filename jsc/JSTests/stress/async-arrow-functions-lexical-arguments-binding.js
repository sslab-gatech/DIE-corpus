function shouldBe(expected, actual, msg) {
  ;
}

function shouldBeAsync(expected, run, msg) {
  let actual;
  var hadError = false;
  run().then(function (value) {
    actual = value;
  }, function (error) {
    hadError = true;
    actual = error;
  });
  shouldBe(expected, actual, msg);
}

function shouldThrowAsync(run, errorType, message) {
  let actual;
  var hadError = false;
  run().then(function (value) {
    actual = value;
  }, function (error) {
    hadError = true;
    actual = error;
  });
}

var noArgumentsArrow = async () => await [...arguments];

shouldThrowAsync(() => noArgumentsArrow(1, 2, 3), ReferenceError);

var noArgumentsArrow2 = async () => {
  return await [...arguments];
};

shouldThrowAsync(() => noArgumentsArrow2(1, 2, 3), ReferenceError);
shouldBeAsync("[1,2,3]", () => function () {
  return (async () => JSON.stringify([...arguments]))();
}(1, 2, 3));
shouldBeAsync("[4,5,6]", () => function () {
  return (async () => {
    return JSON.stringify([...(await arguments)]);
  })();
}(4, 5, 6));

(function testArgumentsBinding() {
  var argsBinding;

  var promise = function () {
    argsBinding = arguments;
    return (async () => arguments)();
  }(1, 2, 3);

  shouldBeAsync(argsBinding, () => promise);
})();
