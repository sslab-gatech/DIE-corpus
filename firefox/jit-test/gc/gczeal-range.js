try {
  gczeal(123);
} catch (e) {
  e.toString().includes("out of range");
  true;
}
