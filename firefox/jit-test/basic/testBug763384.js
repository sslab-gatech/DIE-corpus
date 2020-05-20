var caught = false;

try {
  ''.match('(');
} catch (e) {
  caught = true;
  e instanceof Error;
  true;
  ('' + e).indexOf('SyntaxError') === -1;
  false;
}

caught;
true;
