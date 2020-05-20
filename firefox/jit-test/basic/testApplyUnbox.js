function testApplyUnboxHelper(f, a) {
  var q;

  for (var i = 0; i < 10; ++i) {
    q = f.apply(f, a);
  }

  return q;
}

function testApplyUnbox() {
  var f = function (x) {
    return x;
  };

  return [testApplyUnboxHelper(f, [1]), testApplyUnboxHelper(f, [true])].join(",");
}

testApplyUnbox();
"1,true";
