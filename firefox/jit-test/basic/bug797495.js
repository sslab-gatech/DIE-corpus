try {
  // Don't assert.
  var f = Function("for(w in\\");
} catch (e) {
  ;
}
