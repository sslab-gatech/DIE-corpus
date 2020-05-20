//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
const constructors = [Intl.Collator, Intl.NumberFormat, Intl.DateTimeFormat];

function t1() {
  function test(Ctor, locale) {
    try {
      new Ctor(locale);
    } catch (e) {
      ;
    }
  }

  function testWithVariants(variants) {
    for (const Ctor of constructors) {
      for (let i = 0; i < variants.length; ++i) {
        for (let k = 0; k < variants.length; ++k) {
          for (let m = 0; m < variants.length; ++m) {
            test(Ctor, `und-${variants[i]}-${variants[k]}-${variants[m]}`);
            test(Ctor, `en-${variants[i]}-${variants[k]}-${variants[m]}`);
            test(Ctor, `de-DE-${variants[i]}-${variants[k]}-${variants[m]}`);
            test(Ctor, `zh-Hans-CN-${variants[i]}-${variants[k]}-${variants[m]}`);
          }

          test(Ctor, `und-${variants[i]}-${variants[k]}`);
          test(Ctor, `en-${variants[i]}-${variants[k]}`);
          test(Ctor, `de-DE-${variants[i]}-${variants[k]}`);
          test(Ctor, `zh-Hans-CN-${variants[i]}-${variants[k]}`);
        }
      }
    }
  }
}

t1();

function t2() {
  function test(callback, optionName, optionValue, shouldCallSecondGetter) {
    const options = {};
    let calledSecondGetter = false;
    Object.defineProperty(options, optionName, {
      get() {
        Object.defineProperty(options, optionName, {
          get() {
            calledSecondGetter = true;
            return undefined;
          }

        });
        return optionValue;
      },

      configurable: true
    });
    callback(options);
    console.log(shouldCallSecondGetter, calledSecondGetter);
  }

  test(options => new Intl.Collator("en-US", options).compare("A", "a"));
  test(options => new Intl.Collator("en-US", options).compare("A", "B"));
  test(options => new Intl.Collator("en-US", options).compare("a", "\u00E2"));
  test(options => new Intl.NumberFormat("en-US", options).format(1000));
  test(options => new Intl.NumberFormat("en-US", Object.assign(options, {
    currency: "USD"
  })).format(1.5)); // This was the original bug - at present, all browsers format the string as "" because the value returned by the second getter dictates format selection

  test(options => new Intl.DateTimeFormat("en-US", options).format());
  test(options => new Intl.DateTimeFormat("en-US", options).format());
}

t2();

function t3() {
  function testFallbackSymbol(Ctor, shouldHaveFallbackSymbol) {
    const objNew = new Ctor();
    const objCall = Ctor.call(objNew);
    const symbols = Object.getOwnPropertySymbols(objCall);
    console.log(objCall instanceof Ctor, `The given object should be an instance of ${Ctor.name}`);
    console.log(0, Object.getOwnPropertyNames(objCall).length);

    if (shouldHaveFallbackSymbol) {
      console.log(1, symbols.length);
      const fallbackSymbol = symbols[0];
      console.log("Symbol(Intl.FallbackSymbol)", fallbackSymbol.toString());
      console.log("object", typeof objCall[fallbackSymbol]);
      console.log(objCall[fallbackSymbol] instanceof Ctor, `objCall[fallbackSymbol] should be an instance of ${Ctor.name}`);

      try {
        Ctor.call(objNew);
      } catch (e) {
        ;
      }

      try {
        Ctor.call(objCall);
      } catch (e) {
        ;
      }

      console.log(objNew, objCall);
    } else {
      console.log(0, symbols.length);
    }
  } // only NumberFormat and DateTimeFormat should have Intl.FallbackSymbol behavior. PluralRules has no legacy construction behavior.


  testFallbackSymbol(Intl.Collator, false);
  testFallbackSymbol(Intl.NumberFormat, true);
  testFallbackSymbol(Intl.DateTimeFormat, true);

  try {
    Intl.PluralRules.call(new Intl.PluralRules());
  } catch (e) {
    ;
  }
}

t3();
