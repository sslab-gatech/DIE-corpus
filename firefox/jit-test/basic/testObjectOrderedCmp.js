function testObjectOrderedCmp() {
  var a = new Array(5);

  for (var i = 0; i < 5; ++i) {
    a[i] = {} < {};
  }

  return a.join(",");
}

testObjectOrderedCmp();
"false,false,false,false,false";
