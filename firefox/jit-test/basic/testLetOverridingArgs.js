function f1() {
  {
    let arguments = 42;
    return arguments;
  }
}

f1();
42;

function f2() {
  {
    let arguments;
    return arguments;
  }
}

f2();
undefined;
