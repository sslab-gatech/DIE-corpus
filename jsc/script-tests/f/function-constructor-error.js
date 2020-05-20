console.log("This test checks that the Function constructor detects some syntax errors correctly (bug#59795).");

try {
  Function('(i + (j)');
} catch (e) {
  ;
}

try {
  Function('return (i + (j)');
} catch (e) {
  ;
}
