console.log("Ensure various bit operators correctly tag the final result value");
aDouble = 100000000.5;
aDouble >> 27;
aDouble >> 27 | 0;
aDouble >> 0;
aDouble >> 0 | 0;
aDouble | 0;

(function (x) {
  return 2147483648 >>> x;
})(31);
