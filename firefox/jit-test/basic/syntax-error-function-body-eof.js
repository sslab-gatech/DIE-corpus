var caught = false;

try {
  new Function("switch (x) {} }");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("unexpected garbage after function body, starting with '}'") == -1;
  false;
  caught = true;
}

caught;
true;
