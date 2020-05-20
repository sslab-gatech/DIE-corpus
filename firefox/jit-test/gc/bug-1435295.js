// |jit-test| skip-if: helperThreadCount() === 0 || !('oomTest' in this)
oomTest(new Function(`function execOffThread(source) {
}
b = execOffThread("[1, 2, 3]")
`));
