var leftRight;

function left() {
  leftRight = leftRight + "Left";
}

function right() {
  leftRight = leftRight + "Right";
}

(function () {
  leftRight = "";
  left() > right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() >= right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() < right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() <= right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() + right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() - right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() / right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() * right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() % right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() << right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() >> right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() >>> right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() || right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() && right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() & right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() | right();
  return leftRight;
})();

(function () {
  leftRight = "";
  left() ^ right();
  return leftRight;
})();

function testEvaluationOfArguments() {
  function throwPass() {
    throw "PASS";
  }

  var nonFunction = 42;

  try {
    nonFunction(throwPass());
  } catch (e) {
    return e == "PASS";
  }
}

testEvaluationOfArguments();
