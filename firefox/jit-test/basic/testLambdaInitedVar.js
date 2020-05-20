function testLambdaInitedVar() {
  var jQuery = function (a, b) {
    return jQuery && jQuery.length;
  };

  return jQuery();
}

testLambdaInitedVar();
2;
