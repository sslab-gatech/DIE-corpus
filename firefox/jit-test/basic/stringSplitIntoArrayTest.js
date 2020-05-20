function stringSplitIntoArrayTest() {
  var s = "a,b";
  var a = [];

  for (var i = 0; i < 10; ++i) {
    a[i] = s.split(",");
  }

  return a.join();
}

stringSplitIntoArrayTest();
"a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b,a,b";
