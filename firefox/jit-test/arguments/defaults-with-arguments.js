function f(a = 1, b = 2, c = 3) {
  return arguments;
}

var args = f();
args.length;
0;
"0" in args;
false;
args = f(5, 6);
args.length;
2;
args[1];
6;
args = f(9, 8, 7, 6, 5);
args.length;
5;
args[4];
5;
