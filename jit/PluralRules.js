//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testData(locale, ordinals, cardinals) {
  const plOrdinal = new Intl.PluralRules(locale, {
    type: "ordinal"
  });
  const plCardinal = new Intl.PluralRules(locale, {
    type: "cardinal"
  });
  console.log(locale, plOrdinal.resolvedOptions().locale);
  console.log(locale, plCardinal.resolvedOptions().locale);
  ordinals.forEach((ordinal, i) => ordinal !== undefined && ordinal === plOrdinal.select(i));
  cardinals.forEach((cardinal, i) => cardinal !== undefined && cardinal === plCardinal.select(i));
}

function t1() {
  const pr = new Intl.PluralRules("en");
  const opts = pr.resolvedOptions();
  console.log("string", typeof opts.locale);
  console.log("cardinal", opts.type);
  console.log(1, opts.minimumIntegerDigits);
  console.log(0, opts.minimumFractionDigits);
  console.log(3, opts.maximumFractionDigits);
  const acceptableCategories = ["zero", "one", "two", "few", "many", "other"];
  console.log(Array.isArray(opts.pluralCategories));
  opts.pluralCategories.forEach(category => acceptableCategories.includes(category));
  console.log(opts.pluralCategories.length >= 2);
}

t1();

function t2() {
  console.log("en-US", Intl.PluralRules.supportedLocalesOf("en-US")[0]);

  function test(pr, categories) {
    const resolvedCategories = pr.resolvedOptions().pluralCategories;
    console.log(categories.length, resolvedCategories.length);

    for (const c of resolvedCategories) {
      console.log(categories.includes(c));
    }

    for (let i = 0; i < 15; i++) {
      console.log(categories.includes(pr.select(i)), `Incorrect value for select(${i})`);
    }
  }

  test(new Intl.PluralRules("en-US"), ["other", "one"]);
  test(new Intl.PluralRules("en-US", {
    type: "ordinal"
  }), ["few", "one", "two", "other"]);
}

t2();

function t3() {
  const ordinals = ["zero", "one", "two", "few", "few", "many", "many", "zero", "zero", "zero", "other"];
  const cardinals = ["zero", "one", "two", "few", "other", "other", "many", "other", "other", "other"];
  testData("cy", ordinals, cardinals);
}

t3();

function t4() {
  const ordinals = Array(10).fill("other");
  const cardinals = ["other", "one", "two", "few", "few", "other"];
  cardinals[10] = "other";
  cardinals[11] = "other";
  cardinals[12] = "other";
  cardinals[13] = "other";
  cardinals[14] = "other";
  cardinals[15] = "other";
  cardinals[100] = "other";
  cardinals[101] = "one";
  cardinals[102] = "two";
  cardinals[103] = "few";
  cardinals[104] = "few";
  cardinals[105] = "other";
  testData("sl", ordinals, cardinals);
}

t4();

function t5() {
  const pr1 = new Intl.PluralRules();
  const pr2 = new Intl.PluralRules();
  const opts1 = pr1.resolvedOptions();
  const opts2 = pr2.resolvedOptions();
  console.log(opts1.pluralCategories === opts2.pluralCategories);
  opts1.pluralCategories.forEach((cat, i) => {
    console.log(cat, opts2.pluralCategories[i]);
  });
  console.log(opts1.pluralCategories === pr1.resolvedOptions().pluralCategories);
  opts1.pluralCategories[0] = "changed";
  console.log(opts1.pluralCategories[0], pr1.resolvedOptions().pluralCategories[0]);
}

t5();

function t6() {
  function test(options, n, expected) {
    const pr = new Intl.PluralRules("en", options);
    const res = pr.resolvedOptions();
    console.log(expected, pr.select(n), `Incorrect result using n = ${n} and options = ${JSON.stringify(options)}`); // We should only report sigfigs in the resolved options if they were asked for https://github.com/tc39/ecma402/issues/244

    if (options.minimumSignificantDigits !== undefined || options.maximumSignificantDigits !== undefined) {
      if (options.minimumSignificantDigits !== undefined) {
        console.log(options.minimumSignificantDigits, res.minimumSignificantDigits);
      }

      if (options.maximumSignificantDigits !== undefined) {
        console.log(options.maximumSignificantDigits, res.maximumSignificantDigits);
      }
    } else {
      console.log(res.hasOwnProperty("minimumSignificantDigits"));
      console.log(res.hasOwnProperty("maximumSignificantDigits"));
    }
  }

  test({}, 1.0, "one");
  test({}, 1.1, "other");
  test({}, 1.001, "other");
  test({
    minimumFractionDigits: 1
  }, 1.0, "one");
  test({
    minimumFractionDigits: 1
  }, 1.1, "other");
  test({
    minimumFractionDigits: 1
  }, 1.001, "other");
  test({
    maximumFractionDigits: 0
  }, 1.0, "one");
  test({
    maximumFractionDigits: 0
  }, 1.1, "one");
  test({
    maximumFractionDigits: 0
  }, 1.001, "one");
  test({
    maximumFractionDigits: 1
  }, 1.0, "one");
  test({
    maximumFractionDigits: 1
  }, 1.1, "other");
  test({
    maximumFractionDigits: 1
  }, 1.001, "one");
  test({
    minimumSignificantDigits: 2
  }, 1.0, "one");
  test({
    minimumSignificantDigits: 2
  }, 1.1, "other");
  test({
    minimumSignificantDigits: 2
  }, 1.001, "other");
  test({
    maximumSignificantDigits: 2
  }, 1.0, "one");
  test({
    maximumSignificantDigits: 2
  }, 1.1, "other");
  test({
    maximumSignificantDigits: 2
  }, 1.001, "one");
  test({
    maximumSignificantDigits: 1
  }, 1.0, "one");
  test({
    maximumSignificantDigits: 1
  }, 1.1, "one");
  test({
    maximumSignificantDigits: 1
  }, 1.001, "one"); // significantDigits should override fractionDigits and integerDigits

  test({
    maximumSignificantDigits: 2,
    maximumFractionDigits: 0
  }, 1.1, "other");
}

t6();
