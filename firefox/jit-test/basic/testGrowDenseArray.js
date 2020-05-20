function testGrowDenseArray() {
  var a = new Array();

  for (var i = 0; i < 10; ++i) {
    a[i] |= 5;
  }

  return a.join(",");
}

testGrowDenseArray();
"5,5,5,5,5,5,5,5,5,5";
