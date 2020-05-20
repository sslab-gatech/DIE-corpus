//@ runBigIntEnabled
function assert(a) {
  ;
}

function assertThrowTypeError(input) {
  try {
    eval(input);
  } catch (e) {
    ;
  }
}

"a" + 100n;
"a100";
128n + "baba";
"128baba";
"10n + 30";
"36 + 15n";
"120n + 30.5";
"44.5 + 112034n";
"10n - 30";
"36 - 15n";
"120n - 30.5";
"44.5 - 112034n";
"10n * 30";
"36 * 15n";
"120n * 30.5";
"44.5 * 112034n";
"10n / 30";
"36 / 15n";
"120n / 30.5";
"44.5 / 112034n";
"10n ** 30";
"36 ** 15n";
"120n ** 30.5";
"44.5 ** 112034n";
