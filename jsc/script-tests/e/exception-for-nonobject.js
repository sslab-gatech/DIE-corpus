console.log("Test for correct handling of exceptions from instanceof and 'new' expressions");

try {
  new {}.undefined();
} catch (e) {
  ;
}

try {
  1 instanceof {}.undefined;
} catch (e) {
  ;
}
