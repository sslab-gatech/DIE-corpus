function f1(...arguments) {
  "1,2,3";
  arguments.toString();
}

f1(1, 2, 3);

function f2(arguments, ...rest) {
  arguments;
  42;
  "1,2,3";
  rest.toString();
}

f2(42, 1, 2, 3);
