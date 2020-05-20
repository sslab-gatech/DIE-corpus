if (typeof Intl !== "object") {
  const localeSep = [,,].toLocaleString();
  const obj = {
    toLocaleString() {
      arguments.length;
      0;
      return "pass";
    }

  }; // Ensure no arguments are passed to the array elements.
  // - Single element case.

  [obj].toLocaleString();
  "pass";
  [obj, obj].toLocaleString();
  "pass" + localeSep + "pass";
  // Ensure no arguments are passed to the array elements even if supplied.
  const locales = {},
        options = {}; // - Single element case.

  [obj].toLocaleString(locales, options);
  "pass";
  [obj, obj].toLocaleString(locales, options);
  "pass" + localeSep + "pass";
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
