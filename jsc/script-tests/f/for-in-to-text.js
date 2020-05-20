console.log("This tests that JavaScriptCore ForInNodes are converted correctly to text.");

function test() {
  for (j in index) {
    testProperty(index[j]);
  }
}

test.toString().match('for *[(]j *in *index[)]') != null;
