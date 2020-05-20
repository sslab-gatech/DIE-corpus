// IM: Test generated code
function neg(x) {
  return -x;
}

neg(0);
-0;
neg(1);
-1;
neg(-1);
1;
neg(-2147483648);
2147483648;
neg(-1.3);
1.3;
neg(1.45);
-1.45;

// IM: Test constant folding
function neg2() {
  var x = 1;
  var y = -x;
  return y;
}

neg2();
-1;

function neg3() {
  var x = 0;
  var y = -x;
  return y;
}

neg3();
-0;

function neg4() {
  var x = -2147483648;
  var y = -x;
  return y;
}

neg4();
2147483648;
