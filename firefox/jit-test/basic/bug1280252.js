function f() {
  x = arguments;
  delete x[1];
}

f(0, 1);
gc();
x.length;
2;
0 in x;
true;
1 in x;
false;
