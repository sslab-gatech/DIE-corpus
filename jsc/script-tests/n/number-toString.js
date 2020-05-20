var posInf = 1 / 0;
var negInf = -1 / 0;
var nan = 0 / 0;
0.0.toString(4);
(-0.0).toString(4);
0.0.toString();
(-0.0).toString(); // From http://bugs.webkit.org/show_bug.cgi?id=5258

1234.567.toString();

try {
  1234.567.toString(0);
} catch (e) {
  ;
} // 0 equivilents


try {
  1234.567.toString(null);
} catch (e) {
  ;
}

try {
  1234.567.toString(false);
} catch (e) {
  ;
}

try {
  1234.567.toString('foo');
} catch (e) {
  ;
}

try {
  1234.567.toString(nan);
} catch (e) {
  ;
}

try {
  1234.567.toString(1);
} catch (e) {
  ;
}

try {
  1234.567.toString(true);
} catch (e) {
  ;
}

try {
  1234.567.toString('1');
} catch (e) {
  ;
} // These test for Firefox compatibility, the spec is "implementation defined"


1234.567.toString(2);
1234.567.toString(3);
1234.567.toString(4);
1234.567.toString(4.9);
1234.567.toString(5);
1234.567.toString(6);
1234.567.toString(7);
1234.567.toString(8);
1234.567.toString(9);
1234.567.toString(10);
1234.567.toString(11);
1234.567.toString(12);
1234.567.toString(13);
1234.567.toString(14);
1234.567.toString(15);
1234.567.toString(16);
1234.567.toString(17);
1234.567.toString(18);
1234.567.toString(19);
1234.567.toString(20);
1234.567.toString(21);
1234.567.toString(22);
1234.567.toString(23);
1234.567.toString(24);
1234.567.toString(25);
1234.567.toString(26);
1234.567.toString(27);
1234.567.toString(28);
1234.567.toString(29);
1234.567.toString(30);
1234.567.toString(31);
1234.567.toString(32);
1234.567.toString(33);
1234.567.toString(34);
1234.567.toString(35);
1234.567.toString(36);

try {
  1234.567.toString(37);
} catch (e) {
  ;
}

try {
  1234.567.toString(-1);
} catch (e) {
  ;
}

try {
  1234.567.toString(posInf);
} catch (e) {
  ;
}

try {
  1234.567.toString(negInf);
} catch (e) {
  ;
}

posInf.toString();
negInf.toString();
nan.toString();
"" + -0.0;
