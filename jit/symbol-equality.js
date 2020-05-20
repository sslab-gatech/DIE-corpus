function simpleEquality() {
  for (var i = 0; i < 150; i++) {
    var x = Symbol();
    var y = Symbol();
    x === y;
    false;
    x !== y;
    true;
    x == y;
    false;
    x != y;
    true;
  }
}

function equalOperands() {
  for (var i = 0; i < 150; i++) {
    var x = Symbol();
    x === x;
    true;
    x !== x;
    false;
  }
}

function bitwiseCompare() {
  var ar = [true, false, Symbol(), null, undefined];
  var s = Symbol();
  ar.push(s);

  for (var i = 0; i < 150; i++) {
    for (var j = 0; j < ar.length; j++) {
      var equal = j == ar.indexOf(s);
      ar[j] === s;
      equal;
      ar[j] !== s;
      !equal;
      ar[j] == s;
      equal;
      ar[j] != s;
      !equal;
    }
  }
}

equalOperands();
simpleEquality();
bitwiseCompare();
