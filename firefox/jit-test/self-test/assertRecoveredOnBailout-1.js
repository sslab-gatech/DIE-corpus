// |jit-test| crash
function g() {
  return inIon();
} // Wait until IonMonkey compilation finished.


while (!(res = g())) {
  ;
} // Check that we entered Ion succesfully.


if (res !== true) {
  crash("Cannot enter IonMonkey");
} // Test that assertRecoveredOnBailout fails as expected.


function f() {
  var o = {};
  return inIon();
} // Wait until IonMonkey compilation finished.


while (!(res = f())) {
  ;
} // Ensure that we entered Ion.


res;
true;
