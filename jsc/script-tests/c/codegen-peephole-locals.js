console.log("Tests whether peephole optimizations on bytecode properly deal with local registers.");

function if_less_test() {
  var a = 0;
  var b = 2;

  if (a = 1 < 2) {
    return a == 1;
  }
}

if_less_test();

function if_else_less_test() {
  var a = 0;
  var b = 2;

  if (a = 1 < 2) {
    return a == 1;
  } else {
    return false;
  }
}

if_else_less_test();

function conditional_less_test() {
  var a = 0;
  var b = 2;
  return (a = 1 < 2) ? a == 1 : false;
}

conditional_less_test();

function logical_and_less_test() {
  var a = 0;
  var b = 2;
  return (a = 1 < 2) && a == 1;
}

logical_and_less_test();

function logical_or_less_test() {
  var a = 0;
  var b = 2;
  var result = (a = 1 < 2) || a == 1;
  return a == 1;
}

logical_or_less_test();

function do_while_less_test() {
  var a = 0;
  var count = 0;

  do {
    if (count == 1) {
      return a == 1;
    }

    count++;
  } while (a = 1 < 2);
}

do_while_less_test();

function while_less_test() {
  var a = 0;

  while (a = 1 < 2) {
    return a == 1;
  }
}

while_less_test();

function for_less_test() {
  for (var a = 0; a = 1 < 2;) {
    return a == 1;
  }
}

for_less_test();
