var C1 = 1;
var C2 = 2;
const C3 = 3;

function f(x) {
  var s = "";

  switch (x) {
    case C1:
      s += "1";

    case C2:
      s += "2";
      break;

    case C3:
      s += "3";

    default:
      s += "d";

    case 4:
      s += "4";
  }

  return s;
}

f(1);
"12";
f(2);
"2";
f(3);
"3d4";
f(4);
"4";
f(0);
"d4";
f(-0);
"d4";
f(true);
"d4";
