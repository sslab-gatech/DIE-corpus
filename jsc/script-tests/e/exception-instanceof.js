console.log("Test for error messages for instanceof");

try {
  'instanceof' instanceof 'instanceof';
} catch (e) {
  ;
}

try {
  20 instanceof 'hello';
} catch (e) {
  ;
}

try {
  20 instanceof {};
} catch (e) {
  ;
}

try {
  20 instanceof {}.foo;
} catch (e) {
  ;
}

try {
  20 instanceof true;
} catch (e) {
  ;
}
