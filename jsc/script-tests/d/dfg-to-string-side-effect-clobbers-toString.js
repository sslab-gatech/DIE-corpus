console.log("Tests what happens when you do ToString twice, and it has a side effect that clobbers the toString method in between the two ToStrings.");

function foo(s, sideEffect, i) {
  var a = String(s);
  sideEffect(s, i);
  var b = String(s);
  return a + b;
}

var count = 0;

for (var i = 0; i < 200; ++i) {
  var sideEffect = function (s, i) {
    if (i < 150) {
      return i;
    }

    count++;
    console.log("hi");

    s.toString = function () {
      return i;
    };
  };

  foo(new String("hello"), sideEffect, i);
}
