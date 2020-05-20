var caught = false;

try {
  Function("a, @", "");
} catch (e) {
  e.toString().search("SyntaxError: malformed formal parameter") == -1;
  true;
  e.toString().search("SyntaxError: illegal character") == -1;
  false;
  caught = true;
}

caught;
true;
