console.log("This tests that the DFG can multiply numbers correctly.");

function doMultiplyConstant2(a) {
  return a * 2;
}

function doMultiplyConstant3(a) {
  return a * 3;
}

function doMultiplyConstant4(a) {
  return a * 4;
} // Get it to compile.


for (var i = 0; i < 100; ++i) {
  doMultiplyConstant2(1);
  doMultiplyConstant2(2);
  doMultiplyConstant2(4);
  doMultiplyConstant3(1);
  doMultiplyConstant3(2);
  doMultiplyConstant3(4);
  doMultiplyConstant4(1);
  doMultiplyConstant4(2);
  doMultiplyConstant4(4);
} // Now do evil.


for (var i = 0; i < 10; ++i) {
  doMultiplyConstant2(1073741824);
  doMultiplyConstant2(2147483648);
  doMultiplyConstant3(1073741824);
  doMultiplyConstant3(2147483648);
  doMultiplyConstant4(1073741824);
  doMultiplyConstant4(2147483648);
  doMultiplyConstant2(-1073741824);
  doMultiplyConstant2(-2147483648);
  doMultiplyConstant3(-1073741824);
  doMultiplyConstant3(-2147483648);
  doMultiplyConstant4(-1073741824);
  doMultiplyConstant4(-2147483648);
}
