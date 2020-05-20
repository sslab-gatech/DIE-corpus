// Test that Annex B function interaction with 'arguments'.
(function () {
  typeof arguments;
  "object";
  {
    function arguments() {
      ;
    }
  }
  typeof arguments;
  "function";
})();

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
