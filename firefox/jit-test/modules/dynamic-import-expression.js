var {
  Pattern,
  MatchError
} = Match;

program = elts => Pattern({
  type: "Program",
  body: elts
});

expressionStatement = expression => Pattern({
  type: "ExpressionStatement",
  expression: expression
});

assignmentExpression = (left, operator, right) => Pattern({
  type: "AssignmentExpression",
  operator: operator,
  left: left,
  right: right
});

ident = name => Pattern({
  type: "Identifier",
  name: name
});

importCall = (ident, singleArg) => Pattern({
  type: "CallImport",
  ident: ident,
  arg: singleArg
});

function parseAsClassicScript(source) {
  return Reflect.parse(source);
}

function parseAsModuleScript(source) {
  return Reflect.parse(source, {
    target: "module"
  });
}

for (let parse of [parseAsModuleScript, parseAsClassicScript]) {
  program([expressionStatement(importCall(ident("import"), ident("foo")))]).assert(parse("import(foo);"));
  program([expressionStatement(assignmentExpression(ident("x"), "=", importCall(ident("import"), ident("foo"))))]).assert(parse("x = import(foo);"));
}

function assertParseThrowsSyntaxError(source) {
  (() => parseAsClassicScript(source))();

  SyntaxError;

  (() => parseAsModuleScript(source))();

  SyntaxError;
}

"import";
"import(";
"import(1,";
"import(1, 2";
"import(1, 2)";
"x = import";
"x = import(";
"x = import(1,";
"x = import(1, 2";
"x = import(1, 2)";
