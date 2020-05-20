console.log("Test for error messages for in");

try {
  20 in 'in in in';
} catch (e) {
  ;
}

try {
  20 in true;
} catch (e) {
  ;
}

try {
  20 in {}.foo;
} catch (e) {
  ;
}

try {
  20 in 20;
} catch (e) {
  ;
}

try {
  20 in null;
} catch (e) {
  ;
}
