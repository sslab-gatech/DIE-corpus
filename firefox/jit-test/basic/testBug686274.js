// Don't Baseline-compile the huge array literal with --baseline-eager
// as it's slow, especially in debug builds.
function f(N) {
  var body = "return [";

  for (var i = 0; i < N - 1; i++) {
    body += "1,";
  }

  body += "2]";
  var f = new Function(body);
  var arr = f();
  arr.length;
  N;
  arr[N - 1];
  2;
}

f(1000000);
