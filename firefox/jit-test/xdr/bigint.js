// |jit-test| skip-if: !('BigInt' in this)
let test = `
  assertEq(2n**64n - 1n, BigInt("0xffffFFFFffffFFFF"));
`;
evalWithCache(test, {
  assertEqBytecode: true,
  assertEqResult: true
});
