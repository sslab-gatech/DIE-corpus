var ieval = eval;
var offenders = [["...x"], ["...rest"], ["...rest"], ["...rest"]];

for (var arglist of offenders) {
  (function () {
    ieval("function x(" + arglist.join(", ") + ") {}");
  })();

  SyntaxError;

  (function () {
    Function.apply(null, arglist.concat("return 0;"));
  })();

  SyntaxError;
}
