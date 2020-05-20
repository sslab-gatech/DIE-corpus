// |reftest| skip-if(!xulRuntime.shell)
(() => evaluate(`
    try { throw null; } catch (e) { eval("for (var e of []) {}") }
`))();

SyntaxError;
new Function(`
    try { throw null; } catch (e) { eval("for (var e of []) {}") }
`);
SyntaxError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
