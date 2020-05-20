console.log("This tests that Math.min and Math.max for doubles works correctly in the DFG JIT.");

function doMin(a, b) {
  return Math.min(a, b);
}

function doMax(a, b) {
  return Math.max(a, b);
}

noInline(doMin);
noInline(doMax);
var count = 0; // while (!testRunner.numberOfDFGCompiles(doMin) || !testRunner.numberOfDFGCompiles(doMax)) {

for (var i = 0; i < 100; i++) {
  doMin(1.5, 2.5);
  doMax(1.5, 2.5);
  count++;
}

doMin(1.5, 2.5);
doMin(2.5, 1.5);
doMin(1.5, 1.5);
doMin(2.5, 2.5);
doMin(1.5, NaN);
doMin(2.5, NaN);
doMin(NaN, 1.5);
doMin(NaN, 2.5);
doMin(NaN, NaN);
doMax(1.5, 2.5);
doMax(2.5, 1.5);
doMax(1.5, 1.5);
doMax(2.5, 2.5);
doMax(1.5, NaN);
doMax(2.5, NaN);
doMax(NaN, 1.5);
doMax(NaN, 2.5);
doMax(NaN, NaN);
var successfullyParsed = true;
