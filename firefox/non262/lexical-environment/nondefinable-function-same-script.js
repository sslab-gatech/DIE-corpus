// |reftest| skip-if(!xulRuntime.shell)
function assertEvaluateAndIndirectEvalThrows(str) {
  (() => evaluate(str))();

  TypeError;

  (() => (1, eval)(str))();

  TypeError;
} // Regular vars


`var NaN; function NaN() {}`;
`for (var NaN of []); function NaN() {}`;
`{ function NaN() {} } function NaN() {}`;
// Non-data properties
Object.defineProperty(this, 'foo', {
  set: function () {
    ;
  }
});
`var foo; function foo() {}`;
`for (var foo of []); function foo() {}`;
`{ function foo() {} } function foo() {}`;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
