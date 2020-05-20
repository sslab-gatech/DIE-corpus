const BUGNUMBER = 1405943;
const summary = "Implement pipeline operator (Reflect.parse)";
print(BUGNUMBER + ": " + summary);

if (hasPipeline()) {
  if (typeof Reflect !== "undefined" && Reflect.parse) {
    const parseTree1 = Reflect.parse("a |> b");
    parseTree1.body[0].type;
    "ExpressionStatement";
    parseTree1.body[0].expression.type;
    "BinaryExpression";
    parseTree1.body[0].expression.operator;
    "|>";
    parseTree1.body[0].expression.left.name;
    "a";
    parseTree1.body[0].expression.right.name;
    "b";
    const parseTree2 = Reflect.parse("a |> b |> c");
    parseTree2.body[0].type;
    "ExpressionStatement";
    parseTree2.body[0].expression.type;
    "BinaryExpression";
    parseTree2.body[0].expression.operator;
    "|>";
    parseTree2.body[0].expression.left.type;
    "BinaryExpression";
    parseTree2.body[0].expression.left.operator;
    "|>";
    parseTree2.body[0].expression.left.left.name;
    "a";
    parseTree2.body[0].expression.left.right.name;
    "b";
    parseTree2.body[0].expression.right.name;
    "c";
  }
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
