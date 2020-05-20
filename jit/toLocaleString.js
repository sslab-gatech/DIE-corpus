if (typeof Intl === "object") {
  const constructors = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
  const localeSep = [,,].toLocaleString();
  const originalNumberToLocaleString = Number.prototype.toLocaleString; // Missing arguments are passed as |undefined|.

  for (let constructor of constructors) {
    Number.prototype.toLocaleString = function () {
      arguments.length;
      2;
      arguments[0];
      undefined;
      arguments[1];
      undefined;
      return "pass";
    }; // Single element case.


    new constructor(1).toLocaleString();
    "pass";
    new constructor(2).toLocaleString();
    "pass" + localeSep + "pass";
  }

  Number.prototype.toLocaleString = originalNumberToLocaleString; // Missing options is passed as |undefined|.

  for (let constructor of constructors) {
    Number.prototype.toLocaleString = function () {
      arguments.length;
      2;
      arguments[0];
      locales;
      arguments[1];
      undefined;
      return "pass";
    };

    let locales = {}; // Single element case.

    new constructor(1).toLocaleString(locales);
    "pass";
    new constructor(2).toLocaleString(locales);
    "pass" + localeSep + "pass";
  }

  Number.prototype.toLocaleString = originalNumberToLocaleString; // Ensure "locales" and "options" arguments are passed to the array elements.

  for (let constructor of constructors) {
    Number.prototype.toLocaleString = function () {
      arguments.length;
      2;
      arguments[0];
      locales;
      arguments[1];
      options;
      return "pass";
    };

    let locales = {};
    let options = {}; // Single element case.

    new constructor(1).toLocaleString(locales, options);
    "pass";
    new constructor(2).toLocaleString(locales, options);
    "pass" + localeSep + "pass";
  }

  Number.prototype.toLocaleString = originalNumberToLocaleString;
  new Float32Array([NaN]).toLocaleString("ar");
  "ليس رقم";
  new Float64Array([NaN]).toLocaleString(["zh-hant", "ar"]);
  "非數值";
  new Float32Array([Infinity]).toLocaleString(["dz"]);
  "གྲངས་མེད";
  new Float64Array([-Infinity]).toLocaleString(["fr", "en"]);
  "-∞";
  const sampleValues = [-0, +0, -1, +1, -2, +2, -0.5, +0.5];
  const sampleLocales = [void 0, "en", "th-th-u-nu-thai", ["tlh", "de"]];
  const sampleOptions = [void 0, {}, {
    style: "percent"
  }, {
    style: "currency",
    currency: "USD",
    minimumIntegerDigits: 4
  }];

  for (let locale of sampleLocales) {
    for (let options of sampleOptions) {
      let nf = new Intl.NumberFormat(locale, options);

      for (let constructor of constructors) {
        let typedArray = new constructor(sampleValues);
        let expected = [].map.call(typedArray, nf.format).join(localeSep);
        typedArray.toLocaleString(locale, options);
        expected;
      }
    }
  }
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
