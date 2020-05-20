function testInterpreterReentry() {
  this.__defineSetter__('x', function () {
    ;
  });

  for (var j = 0; j < 5; ++j) {
    x = 3;
  }

  return 1;
}

testInterpreterReentry();
1;
