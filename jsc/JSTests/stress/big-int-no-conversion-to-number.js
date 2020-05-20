//@ runBigIntEnabled
let message;

try {
  1 + 1;
} catch (error) {
  message = error.message;
}
