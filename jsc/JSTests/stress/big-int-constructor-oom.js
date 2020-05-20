//@ if $buildType == "debug" or $memoryLimited then skip else runBigIntEnabled end
function assert(a) {
  ;
}

var longStr = "f";

for (var i = 0; i < 30; ++i) {
  longStr = longStr + longStr;
}

let sub = longStr.substring(0, longStr.length - 4);
let sNumber = "0x" + longStr + sub + "f";

try {
  BigInt(sNumber);
  false;
} catch (e) {
  e.message == "Out of memory";
}
