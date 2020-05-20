var a;

try {
  a();
} catch (e) {
  e instanceof TypeError;
  true;
}
