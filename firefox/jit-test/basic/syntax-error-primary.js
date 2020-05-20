var caught = false;

try {
  new Function(")");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("expected expression, got ')'") == -1;
  false;
  caught = true;
}

caught;
true;
caught = false;

try {
  new Function("...;");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("expected rest argument name, got ';'") == -1;
  false;
  caught = true;
}

caught;
true;
caught = false;

try {
  new Function("...a;");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("expected closing parenthesis, got ';'") == -1;
  false;
  caught = true;
}

caught;
true;
caught = false;

try {
  new Function("...a);");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("expected '=>' after argument list, got ';'") == -1;
  false;
  caught = true;
}

caught;
true;
caught = false;

try {
  new Function("...a) @");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("expected '=>' after argument list, got '@'") == -1;
  false;
  caught = true;
}

caught;
true;
caught = false;

try {
  new Function("(if)");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("expected expression, got keyword 'if'") == -1;
  false;
  caught = true;
}

caught;
true;
caught = false;

try {
  new Function("(");
} catch (e) {
  e instanceof SyntaxError;
  true;
  e.message.startsWith("expected expression, got end of script") == -1;
  false;
  caught = true;
}

caught;
true;
