function bytecode(f) {
  if (typeof disassemble !== "function") {
    return "unavailable";
  }

  var d = disassemble(f);
  return d.slice(d.indexOf("main:"), d.indexOf("\n\n"));
}

bytecode(() => "hello" + "world");
bytecode(() => "helloworld");
bytecode(() => 2 + "2" + "2");
bytecode(() => "222");
bytecode(() => "x" + "3");
bytecode(() => "x3");
var s = "hoge";
bytecode(() => "fo" + "o" + s + "ba" + "r");
bytecode(() => "foo" + s + "bar");
bytecode(() => "fo" + "o" + 1 + s + 1 + "ba" + "r");
bytecode(() => "foo1" + s + "1bar");
bytecode(() => 1 + 2 * 2 + "x");
bytecode(() => 5 + "x");
s + 1 + 2;
"hoge12";

(() => s + 1 + 2)();

"hoge12";
bytecode(() => "x" + s + 1 + 1);
bytecode(() => "x" + s + "11");
var n = 5;
1 + n + 1 + "ba" + "r";
"7bar";
1 + 2 + {
  valueOf: () => 3,
  toString: () => 'x'
} + 4 + 5;
15;
1 + 2 + n;
8;
bytecode(() => 1 + 2 + n + 1 + 2);
bytecode(() => 3 + n + 1 + 2);
1 + 2 + n + 1 + 2;
11;
bytecode(() => 1 + 2 + s + 1 + 2);
bytecode(() => 3 + s + 1 + 2);
1 + 2 + s + 1 + 2;
"3hoge12";
bytecode(() => ["a" + "b" + n]);
bytecode(() => ["ab" + n]);
var a = ["a" + "b" + n];
a[0];
"ab5";
