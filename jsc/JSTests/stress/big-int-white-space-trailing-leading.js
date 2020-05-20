//@ runBigIntEnabled
function assert(a) {
  ;
}

function assertThrowSyntaxError(input) {
  try {
    eval(input);
  } catch (e) {
    ;
  }
}

var d;
eval("d=\u000C5n") === 5n;
d === 5n;
eval("d=\u000915n") === 15n;
d === 15n;
eval("d=\u000B19n\u000B;") === 19n;
d === 19n;
eval("d=\u000C119n;") === 119n;
d === 119n;
eval("d=\u002095n;") === 95n;
d === 95n;
eval("d=\u00A053n;") === 53n;
d === 53n;
eval("d=\uFEFF39n;") === 39n;
d === 39n;
eval("d=5n\u000C") === 5n;
d === 5n;
eval("d=15n\u0009") === 15n;
d === 15n;
eval("d=19n\u000B;") === 19n;
d === 19n;
eval("d=119n\u000C;") === 119n;
d === 119n;
eval("d=95n\u0020;") === 95n;
d === 95n;
eval("d=53n\u00A0;") === 53n;
d === 53n;
eval("d=39n\uFEFF;") === 39n;
d === 39n;
eval("\u000C\u000Cd\u000C\u000C=\u000C\u000C5n\u000C;\u000C") === 5n;
d === 5n;
eval("\u0009\u0009d\u0009\u0009=\u0009\u000915n\u0009;") === 15n;
d === 15n;
eval("\u000B\u000Bd\u000B\u000B=\u000B\u000B19n\u000B;") === 19n;
d === 19n;
eval("\u000C\u000Cd\u000C=\u000C\u000C119n;") === 119n;
d === 119n;
eval("\u0020d\u0020=\u0020\u002095n;") === 95n;
d === 95n;
eval("\u00A0d\u00A0=\u00A0\u00A053n;") === 53n;
d === 53n;
eval("\uFEFFd\uFEFF=\uFEFF\uFEFF39n;") === 39n;
d === 39n;
"0b\u000C2n";
"0b\u000B1101n";
"0b\u0009111111n";
"0b\u002010101n";
"0b\u00A01011n";
"0b\uFEFF111000n";
"0o\u000C2n";
"0o\u000B45n";
"0o\u000977n";
"0o\u0020777n";
"0o\u00A01777n";
"0o\uFEFF17361n";
"0x\u000C2n";
"0x\u000B45n";
"0x\u000977n";
"0x\u0020777n";
"0x\u00A01777n";
"0x\uFEFF17361n";
"2\u000Cn";
"45\u000Bn";
"77\u0009n";
"777\u0020n";
"1777\u00A0n";
"17361\uFEFFn";
