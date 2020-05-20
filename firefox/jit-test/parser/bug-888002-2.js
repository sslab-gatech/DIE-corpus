// Constant folding doesn't affect non-strict delete.
(function (x) {
  // These senseless delete-expressions are legal. Per ES5.1 11.4.1 step 2,
  // each one does nothing and returns true.
  delete (1 ? x : x);
  true;
  delete (0 || x);
  true;
  delete (1 && x);
  true;
  delete x;
  false;
})();
