//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function format() {
  let locale = "en-US",
      options,
      n;
  console.log(arguments.length > 0);

  if (typeof arguments[0] === "number") {
    [n] = arguments;
  } else {
    if (typeof arguments[0] === "object" && !(arguments[0] instanceof Array)) {
      [options, n] = arguments;
    } else {
      [locale, options, n] = arguments;
    }
  }

  const nf = new Intl.NumberFormat(locale, options);
  const format = nf.format(n);
  const localeString = n.toLocaleString(locale, options);
  console.log(format === localeString, `[locale = ${JSON.stringify(locale)}, options = ${JSON.stringify(options)}] format does not match toLocaleString`);
  console.log(format === nf.formatToParts(n).map(part => part.value).join(""), `[locale = ${JSON.stringify(locale)}, options = ${JSON.stringify(options)}] format does not match formatToParts`);
  return format;
}

function t1() {
  console.log("5", format(5));
  console.log("5,000", format(5000));
  console.log("50.474", format(50.474));
}

t1();

function t2() {
  // min
  console.log("5.00", format({
    minimumFractionDigits: 2
  }, 5));
  console.log("5.0", format({
    minimumFractionDigits: 1
  }, 5)); // min and max

  console.log("5.00", format({
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }, 5));
  console.log("5.0", format({
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }, 5)); // max

  console.log("5.44", format({
    maximumFractionDigits: 2
  }, 5.444));
  console.log("5.444", format({
    maximumFractionDigits: 4
  }, 5.444));
  console.log("5.45", format({
    maximumFractionDigits: 2
  }, 5.445));
  console.log("5.445", format({
    maximumFractionDigits: 4
  }, 5.445));
  console.log("5.55", format({
    maximumFractionDigits: 2
  }, 5.554));
  console.log("5.554", format({
    maximumFractionDigits: 4
  }, 5.554));
  console.log("5", format({
    maximumFractionDigits: 0
  }, 5.45));
  console.log("6", format({
    maximumFractionDigits: 0
  }, 5.5));
}

t2();

function t3() {
  console.log("5", format({
    minimumIntegerDigits: 1
  }, 5));
  console.log("05", format({
    minimumIntegerDigits: 2
  }, 5));
  console.log("0,000,000,005", format({
    minimumIntegerDigits: 10
  }, 5));
  console.log("500", format({
    minimumIntegerDigits: 1
  }, 500));
  console.log("0,000,000,500", format({
    minimumIntegerDigits: 10
  }, 500));
}

t3();

function t4() {
  // min
  console.log("5.0", format({
    minimumSignificantDigits: 2
  }, 5));
  console.log("500", format({
    minimumSignificantDigits: 2
  }, 500));
  console.log("500.0", format({
    minimumSignificantDigits: 4
  }, 500)); // min and max

  console.log("5.0", format({
    minimumSignificantDigits: 2,
    maximumSignificantDigits: 2
  }, 5));
  console.log("5", format({
    minimumSignificantDigits: 1,
    maximumSignificantDigits: 2
  }, 5)); // max

  console.log("5.44", format({
    maximumSignificantDigits: 3
  }, 5.444));
  console.log("5.444", format({
    maximumSignificantDigits: 4
  }, 5.4444));
  console.log("5.45", format({
    maximumSignificantDigits: 3
  }, 5.445));
  console.log("5.445", format({
    maximumSignificantDigits: 4
  }, 5.4445));
  console.log("5.55", format({
    maximumSignificantDigits: 3
  }, 5.554));
}

t4();

function t5() {
  console.log("50,000", format({
    useGrouping: true
  }, 50000));
  console.log("50000", format({
    useGrouping: false
  }, 50000));
  console.log("0000000005", format({
    minimumIntegerDigits: 10,
    useGrouping: false
  }, 5));
  console.log("0000005000", format({
    minimumIntegerDigits: 10,
    useGrouping: false
  }, 5000));
}

t5();

function t6() {
  console.log("123", format({
    minimumSignificantDigits: 3,
    maximumSignificantDigits: 3,
    minimumIntegerDigits: 5,
    minimumFractionDigits: 5,
    maximumFractionDigits: 5
  }, 123.1));
  console.log("00,123.10000", format({
    minimumIntegerDigits: 5,
    minimumFractionDigits: 5,
    maximumFractionDigits: 5
  }, 123.1));
}

t6();

function t7() {
  function formatCurrency() {
    let locale = "en-US",
        currency = "USD",
        options,
        n;
    console.log(arguments.length > 0);

    if (typeof arguments[0] === "number") {
      [n] = arguments;
    } else {
      if (typeof arguments[0] === "object") {
        [options, n] = arguments;
      } else {
        if (arguments.length === 3) {
          [currency, options, n] = arguments;
        } else {
          [locale, currency, options, n] = arguments;
        }
      }
    }

    options = options || {};
    options.style = "currency", options.currency = currency;
    return format(locale, options, n);
  }

  console.log("$1.00", formatCurrency(1));
  console.log("$1.50", formatCurrency(1.50));
  console.log("$1.50", formatCurrency(1.504));
  console.log("$1.51", formatCurrency(1.505));
  console.log("$1.00", formatCurrency({
    currencyDisplay: "symbol"
  }, 1));
  console.log("$1.50", formatCurrency({
    currencyDisplay: "symbol"
  }, 1.504));
  console.log("$1.51", formatCurrency({
    currencyDisplay: "symbol"
  }, 1.505));
}

t7();

function t9() {
  console.log(0, new Intl.NumberFormat(undefined, {
    minimumFractionDigits: -0
  }).resolvedOptions().minimumFractionDigits, "Passing -0 for minimumFractionDigits should get normalized to 0 by DefaultNumberOption");
  console.log("-0", (-0).toLocaleString());
  console.log("-0", new Intl.NumberFormat().format(-0));
  console.log("-0", new Intl.NumberFormat().formatToParts(-0).map(v => v.value).join(""));
}

t9();

function t10() {
  function assertParts(locale, options, n, expectedParts) {
    const nf = new Intl.NumberFormat(locale, options);
    const resolved = nf.resolvedOptions();
    console.log(locale, resolved.locale, `This test requires ${locale} support`);

    if (options) {
      for (const opt of Object.getOwnPropertyNames(options)) {
        console.log(options[opt], resolved[opt], `Bad option resolution for option ${opt}`);
      }
    }

    const actualParts = nf.formatToParts(n);
    console.log(Array.isArray(actualParts), `formatToParts(${n}) did not return an array`);
    console.log(expectedParts.length, actualParts.length, `formatToParts(${n}) returned wrong number of parts (actual: ${JSON.stringify(actualParts, null, 2)})`);

    try {
      expectedParts.forEach((part, i) => {
        console.log(expectedParts[i].type, actualParts[i].type, `formatToParts(${n}) returned bad type for part ${i}`);
        console.log(expectedParts[i].value, actualParts[i].value, `formatToParts(${n}) returned bad value for part ${i} (code points: ${actualParts[i].value.split("").map(char => char.charCodeAt(0)).toString()})`);
      });
    } catch (e) {
      ;
    }
  }

  "en-US";
  undefined;
  1000;
  [{
    type: "integer",
    value: "1"
  }, {
    type: "group",
    value: ","
  }, {
    type: "integer",
    value: "000"
  }];
  "en-US";
  undefined;
  -1000;
  [{
    type: "minusSign",
    value: "-"
  }, {
    type: "integer",
    value: "1"
  }, {
    type: "group",
    value: ","
  }, {
    type: "integer",
    value: "000"
  }];
  "en-US";
  undefined;
  NaN;
  [{
    type: "nan",
    value: "NaN"
  }];
  "en-US";
  undefined;
  Infinity;
  [{
    type: "infinity",
    value: "∞"
  }];
  "en-US";
  undefined;
  1000.3423;
  [{
    type: "integer",
    value: "1"
  }, {
    type: "group",
    value: ","
  }, {
    type: "integer",
    value: "000"
  }, {
    type: "decimal",
    value: "."
  }, {
    type: "fraction",
    value: "342"
  }];
  "en-US";
  ({
    minimumFractionDigits: 5
  });
  1000.3423;
  [{
    type: "integer",
    value: "1"
  }, {
    type: "group",
    value: ","
  }, {
    type: "integer",
    value: "000"
  }, {
    type: "decimal",
    value: "."
  }, {
    type: "fraction",
    value: "34230"
  }];
  "en-US";
  ({
    style: "currency",
    currency: "CAD",
    currencyDisplay: "name"
  });
  1000.3423;
  [{
    type: "integer",
    value: "1"
  }, {
    type: "group",
    value: ","
  }, {
    type: "integer",
    value: "000"
  }, {
    type: "decimal",
    value: "."
  }, {
    type: "fraction",
    value: "34"
  }, {
    type: "literal",
    value: " "
  }, {
    type: "currency",
    value: "Canadian dollars"
  }];
  "en-US";
  ({
    style: "percent",
    minimumSignificantDigits: 4
  });
  0.3423;
  [{
    type: "integer",
    value: "34"
  }, {
    type: "decimal",
    value: "."
  }, {
    type: "fraction",
    value: "23"
  }, {
    type: "percent",
    value: "%"
  }];
  "de-DE";
  ({
    minimumFractionDigits: 5
  });
  1000.3423;
  [{
    type: "integer",
    value: "1"
  }, {
    type: "group",
    value: "."
  }, {
    type: "integer",
    value: "000"
  }, {
    type: "decimal",
    value: ","
  }, {
    type: "fraction",
    value: "34230"
  }];
  "de-DE";
  ({
    style: "currency",
    currency: "CAD",
    currencyDisplay: "name"
  });
  1000.3423;
  [{
    type: "integer",
    value: "1"
  }, {
    type: "group",
    value: "."
  }, {
    type: "integer",
    value: "000"
  }, {
    type: "decimal",
    value: ","
  }, {
    type: "fraction",
    value: "34"
  }, {
    type: "literal",
    value: " "
  }, {
    type: "currency",
    value: "Kanadische Dollar"
  }];
  "de-DE";
  ({
    style: "percent",
    minimumSignificantDigits: 4
  });
  0.3423;
  [{
    type: "integer",
    value: "34"
  }, {
    type: "decimal",
    value: ","
  }, {
    type: "fraction",
    value: "23"
  }, {
    type: "literal",
    value: "\u00A0"
  }, // non-breaking space
  {
    type: "percent",
    value: "%"
  }];
}

t10();
