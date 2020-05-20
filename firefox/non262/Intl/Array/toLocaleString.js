if (typeof Intl === "object") {
  const localeSep = [,,].toLocaleString(); // Missing arguments are passed as |undefined|.

  const objNoArgs = {
    toLocaleString() {
      arguments.length;
      2;
      arguments[0];
      undefined;
      arguments[1];
      undefined;
      return "pass";
    }

  }; // - Single element case.

  [objNoArgs].toLocaleString();
  "pass";
  [objNoArgs, objNoArgs].toLocaleString();
  "pass" + localeSep + "pass";
  // Ensure "locales" and "options" arguments are passed to the array elements.
  const locales = {},
        options = {};
  const objWithArgs = {
    toLocaleString() {
      arguments.length;
      2;
      arguments[0];
      locales;
      arguments[1];
      options;
      return "pass";
    }

  }; // - Single element case.

  [objWithArgs].toLocaleString(locales, options);
  "pass";
  [objWithArgs, objWithArgs].toLocaleString(locales, options);
  "pass" + localeSep + "pass";
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
