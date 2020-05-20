const BUGNUMBER = 1405943;
const summary = "Implement pipeline operator (parse error)";
print(BUGNUMBER + ": " + summary);

if (hasPipeline()) {
  // Invalid Token
  (() => Function("2 | > parseInt"))();

  SyntaxError;

  (() => Function("2 ||> parseInt"))();

  SyntaxError;

  (() => Function("2 |>> parseInt"))();

  SyntaxError;

  (() => Function("2 <| parseInt"))();

  SyntaxError;

  (() => Function("2 |>"))();

  SyntaxError;

  (() => Function("|> parseInt"))();

  SyntaxError;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
