var lfcode = new Array();
lfcode.push = loadFile;
lfcode.push(")");
lfcode.push(`
assertThrowsInstanceOf(function () {}, TypeError);
var g = newGlobal();
`);

function loadFile(lfVarx) {
  try {
    evaluate(lfVarx, {
      noScriptRval: true,
      compileAndGo: true
    });
  } catch (lfVare) {
    ;
  }
}
