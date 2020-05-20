function shouldBe(expected, actual, msg) {
  if (msg === void 0) {
    msg = "";
  } else {
    msg = " for " + msg;
  }
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

var d = {
  x: "bar",
  y: function () {
    return async z => this.x + z;
  }
}.y();
var e = {
  x: "baz",
  y: d
};
shouldBeAsync("barley", () => d("ley"));
shouldBeAsync("barley", () => e.y("ley"));
