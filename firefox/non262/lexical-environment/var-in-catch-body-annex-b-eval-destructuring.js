// |reftest| skip-if(!xulRuntime.shell)
(() => evaluate(`try { throw {} } catch ({e}) { var e; }`))();

SyntaxError;

(() => evaluate(`try { throw {} } catch ({e}) { eval('var e'); }`))();

SyntaxError;

(() => new Function(`try { throw {} } catch ({e}) { var e; }`))();

SyntaxError;
new Function(`try { throw {} } catch ({e}) { eval('var e'); }`);
SyntaxError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
