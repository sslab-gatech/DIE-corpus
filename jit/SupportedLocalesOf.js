//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
const ctors = [Intl.Collator, Intl.NumberFormat, Intl.DateTimeFormat];

function assertEachIsOneOf(expectedList, actualList, msg) {
  if (!actualList || actualList.length === 0) {
    ;
  }

  for (a of actualList) {
    console.log(expectedList.includes(a), msg);
  }
}

function t1() {
  const rangeErrorMessage = "Option value 'incorrect' for 'localeMatcher' is outside of valid range. Expected: ['best fit', 'lookup']";
  const fakeLocales = {
    get length() {
      throw new Error("User-provided locale object throws");
    }

  };

  function test(ctor) {
    try {
      new ctor.supportedLocalesOf();
    } catch (e) {
      ;
    }

    try {
      Reflect.construct(function () {
        ;
      }, [], ctor.supportedLocalesOf);
    } catch (e) {
      ;
    }

    try {
      ctor.supportedLocalesOf(["en-US"], {
        localeMatcher: "incorrect"
      });
    } catch (e) {
      ;
    }

    try {
      ctor.supportedLocalesOf(null);
    } catch (e) {
      ;
    }

    try {
      ctor.supportedLocalesOf(fakeLocales);
    } catch (e) {
      ;
    }
  }

  ctors.forEach(test);
}

t1();

function t2() {
  function test(ctor) {
    ["en", "en-US"];
    ctor.supportedLocalesOf(["en"]);
    ["en", "en-US"];
    ctor.supportedLocalesOf(["en"], {
      localeMatcher: "lookup"
    });
    ["en", "en-US"];
    ctor.supportedLocalesOf(["en"], {
      localeMatcher: "best fit"
    });
    ['de', 'de-DE'];
    ctor.supportedLocalesOf(['de-de']);
    ['ja', 'ja-JP'];
    ctor.supportedLocalesOf(['ja-JP']);
    ['zh', 'zh-CN', 'zh-Hans-CN'];
    ctor.supportedLocalesOf(['zh-cn']);
    ['en', 'en-US', 'de', 'de-DE', 'ja', 'ja-JP', 'zh', 'zh-CN', 'zh-Hans-CN'];
    ctor.supportedLocalesOf(['en-us', 'de-de', 'ja-JP', 'zh-cn']);
  }

  ctors.forEach(test);
}

t2();

function t3() {
  function test(ctor) {
    ["en", "en-US"];
    ctor.supportedLocalesOf.call({}, ["en"]);
    ["en", "en-US"];
    ctor.supportedLocalesOf.call({}, ["en"], {
      localeMatcher: "lookup"
    });
    ["en", "en-US"];
    ctor.supportedLocalesOf.call({}, ["en"], {
      localeMatcher: "best fit"
    });
    ["en", "en-US"];
    ctor.supportedLocalesOf.bind({})(["en"]);
    ["en", "en-US"];
    ctor.supportedLocalesOf.bind({})(["en"], {
      localeMatcher: "lookup"
    });
    ["en", "en-US"];
    ctor.supportedLocalesOf.bind({})(["en"], {
      localeMatcher: "best fit"
    });
  }

  ctors.forEach(test);
}

t3();

function t4() {
  function test(ctor) {
    console.log(0, ctor.supportedLocalesOf(undefined).length);
    console.log(0, ctor.supportedLocalesOf(undefined, {
      localeMatcher: "lookup"
    }).length);
    console.log(0, ctor.supportedLocalesOf(undefined, {
      localeMatcher: "best fit"
    }).length);
  }
}

t4();
