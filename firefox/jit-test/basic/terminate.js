// |jit-test| exitstatus: 3
try {
  terminate();
  "execution continued";
  "execution should not continue";
} catch (x) {
  "caught exception";
  "uncatchable";
} finally {
  "'finally' clause ran";
  "'finally' clause should not run";
}

"top-level execution continued";
"top-level execution should not continue";
