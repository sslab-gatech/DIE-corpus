function f(a) {
  switch (a) {
    case 3:
      return 3;

    case 4:
      return 4;

    default:
      return -1;
  }
}

f(-0.0);
-1;
f(3.14);
-1;
f(12.34);
-1;
