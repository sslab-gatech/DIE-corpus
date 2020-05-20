//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
let staticMethods = [Intl.getCanonicalLocales, Intl.Collator.supportedLocalesOf, Intl.DateTimeFormat.supportedLocalesOf, Intl.NumberFormat.supportedLocalesOf];
let longNames = ["Intl.getCanonicalLocales", "Intl.Collator.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf"];
let shortNames = ["getCanonicalLocales", "supportedLocalesOf", "supportedLocalesOf", "supportedLocalesOf"];
let expectedToString = `function() {
[native code]
}`;

function t1() {
  for (let i in staticMethods) {
    console.log(staticMethods[i].name, shortNames[i]);
  }
}

t1();

function t2() {
  for (let i in staticMethods) {
    const expectedMessage = "";

    try {
      new staticMethods[i]();
    } catch (e) {
      ;
    }
  }
}

t2();

function t3() {
  for (let i in staticMethods) {
    const expectedMessage = expectedToString;
    console.log(expectedMessage, "" + staticMethods[i]);
    console.log(expectedMessage, staticMethods[i].toString());
  }
}

t3();
