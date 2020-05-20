function f(l, m) {
  var a = NaN;
  var b = 13;
  var c = "test";
  var d = undefined;
  var e = null;
  var f = 15.7;
  var g = Math.fround(189777.111);
  var h = "ABC";
  var i = String.fromCharCode(65, 65, 65);
  var j = {};
  var k = Math.fround("".charCodeAt(15)); // Special case rigt here:

  a === a;
  false;
  a !== a;
  true;
  k === k;
  false;
  k !== k;
  true;
  l === l;
  false;
  l !== l;
  true;
  b === b;
  true;
  b !== b;
  false;
  c === c;
  true;
  c !== c;
  false;
  d === d;
  true;
  d !== d;
  false;
  e === e;
  true;
  e !== e;
  false;
  f === f;
  true;
  f !== f;
  false;
  g === g;
  true;
  g !== g;
  false;
  h === h;
  true;
  h !== h;
  false;
  i === i;
  true;
  i !== i;
  false;
  j === j;
  true;
  j !== j;
  false;
  m === m;
  true;
  m !== m;
  false;
}

function test() {
  for (var i = 0; i < 100; i++) {
    f("".charCodeAt(15), 42);
  }
}

test();
