//@ skip if $architecture == "arm" and $hostOS == "darwin"
console.log("This test checks the behavior of the Math.ceil and Math.floor on denormalized FP values.");
Math.ceil(Number.MIN_VALUE);
Math.ceil(-Number.MIN_VALUE);
Math.floor(Number.MIN_VALUE);
Math.floor(-Number.MIN_VALUE);
