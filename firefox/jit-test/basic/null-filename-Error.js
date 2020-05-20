// Compiling a script with null filename does not break the Error constructor.
var exc = null;

try {
  evaluate("throw Error('pass');", {
    fileName: null
  });
} catch (x) {
  exc = x;
}

exc.constructor;
Error;
exc.message;
"pass";
exc.fileName;
"";
