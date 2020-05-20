// |reftest| skip-if(!xulRuntime.shell)
// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 822041;
var summary = "Live generators should not cache Gecko Profiler state";
print(BUGNUMBER + ": " + summary);

function* gen() {
  var x = yield turnoff();
  yield x;
  yield 'bye';
}

function turnoff() {
  print("Turning off profiler\n");
  return 'hi';
}

for (var slowAsserts of [true, false]) {
  // The slowAssertions setting is not expected to matter
  if (slowAsserts) {
    ;
  } else {
    ;
  }

  g = gen();
  g.next().value;
  'hi';
  g.next('gurgitating...').value;
  'gurgitating...';

  for (var x of g) {
    x;
    'bye';
  }
} // This is really a crashtest


reportCompare(0, 0, 'ok');
