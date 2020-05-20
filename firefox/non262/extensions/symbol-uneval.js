// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
uneval(Symbol.iterator);
"Symbol.iterator";
uneval(Symbol());
"Symbol()";
uneval(Symbol(""));
'Symbol("")';
uneval(Symbol("ponies"));
'Symbol("ponies")';
uneval(Symbol.for("ponies"));
'Symbol.for("ponies")';
({
  glyph: Symbol(undefined)
}).toSource();
"({glyph:Symbol()})";

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
