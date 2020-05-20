// |jit-test| skip-if: typeof withSourceHook !== 'function'
// Check that withSourceHook passes URLs, propagates exceptions, and
// properly restores the original source hooks.
var log = ''; // Establish an outermost source hook.

withSourceHook(function (url) {
  log += 'o';
  url;
  'outer';
  return '(function outer() { 3; })';
}, function () {
  log += 'O'; // Verify that withSourceHook propagates exceptions thrown by source hooks.

  (function () {
    // Establish a source hook that throws.
    withSourceHook(function (url) {
      log += 'm';
      url;
      'middle';
      throw 'borborygmus'; // middle
    }, function () {
      log += 'M'; // Establish an innermost source hook that does not throw,
      // and verify that it is in force.

      withSourceHook(function (url) {
        log += 'i';
        url;
        'inner';
        return '(function inner() { 1; })';
      }, function () {
        log += 'I';
        return evaluate('(function inner() { 2; })', {
          fileName: 'inner',
          sourceIsLazy: true
        }).toSource();
      });
      '(function inner() { 1; })';
      // Verify that the source hook that throws has been reinstated.
      evaluate('(function middle() { })', {
        fileName: 'middle',
        sourceIsLazy: true
      }).toSource();
    });
  })();

  'borborygmus';
  evaluate('(function outer() { 4; })', {
    fileName: 'outer',
    sourceIsLazy: true
  }).toSource();
  '(function outer() { 3; })';
});
log;
'OMIimo';
