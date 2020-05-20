var caught = false;

try {
  evaluate(cacheEntry(""), {
    saveBytecode: {
      value: true
    },
    global: this
  });
  [[0]];
} catch (err) {
  caught = true;
  err.message;
  "compartment cannot save singleton anymore.";
}

caught;
true;
