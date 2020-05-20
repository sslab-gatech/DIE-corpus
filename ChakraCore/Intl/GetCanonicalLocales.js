//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testRangeError(tag) {
  try {
    Intl.getCanonicalLocales(tag);
  } catch (e) {
    ;
  }
}
/**
 * Allows different values to be asserted depending on the Intl implementation
 *
 * @param {String|String[]} expectedWinGlob
 * @param {String|String[]} expectedICU
 * @param {String|String[]} actual
 * @param {String} message
 */


const equal = function () {
  return function (_, expectedICU, actual, message) {
    console.log(expectedICU === actual);
  };
}();

const gcl = Intl.getCanonicalLocales;

function t1() {
  // ensure output is an array even if input was not an array
  console.log(Intl.getCanonicalLocales('en'), ['en']); // canonicalize case

  console.log(Intl.getCanonicalLocales(['en']), ['en']);
  console.log(Intl.getCanonicalLocales(['en-us']), ['en-US']);
  console.log(Intl.getCanonicalLocales(['en-Us']), ['en-US']);
  console.log(Intl.getCanonicalLocales(['EN-us']), ['en-US']);
  console.log(Intl.getCanonicalLocales(['de-de']), ['de-DE']); // array-like objects are be fine (according to spec, arrays are converted to Object anyway)
  // ECMA 402 #sec-canonicalizelocalelist
  //      5. Let len be ? ToLength(? Get(O, "length")).
  //      6. Let k be 0.
  //      7. Repeat, while k < len
  // Since ToLength(undefined) === 0, we don't enter the loop (essentially treat the input as a zero-length array).
  //      ToLength(undefined) -> ToInteger(undefined) -> ToNumber(undefined) -> NaN
  //      ToInteger converts NaN to +0.

  console.log(Intl.getCanonicalLocales({
    '0': 'en-us'
  }), []);
  console.log(Intl.getCanonicalLocales({
    'a': 'b'
  }), []); // Objects contained in the input array are fine if their toString is a valid language tag.

  console.log(Intl.getCanonicalLocales(['en-us', {
    toString() {
      return 'en-us';
    }

  }]), ['en-US']);

  try {
    Intl.getCanonicalLocales([{
      toString() {
        return undefined;
      }

    }]);
  } catch (e) {
    ;
  } // canonicalization of script code subkey


  console.log(Intl.getCanonicalLocales(['zh-hans-cn']), ['zh-Hans-CN']);
  console.log(Intl.getCanonicalLocales(['zh-hant-hk']), ['zh-Hant-HK']); // language-extlang form and other non-preferred forms normalize to preferred ISO 639-3
  // This should be handled implicitly by canonicalization routine (no knowledge of language tags required),
  // but we make sure it works for some actual languages in any case.
  // RFC 5646 2.1:
  //      language = 2-3ALPHA ["-" extlang]
  //      extlang  = 2-3ALPHA *2("-" 3ALPHA)
  // https://en.wikipedia.org/wiki/IETF_language_tag#ISO_639-3_and_ISO_639-1

  let mandarinChinese = ['cmn', 'zh-cmn']; // Mandarin Chinese (language-extlang: zh-cmn; prefer ISO 639-3: cmn)

  let minNanChinese = ['nan', 'zh-nan', 'zh-min-nan']; // Min-Nan Chinese (ISO 639-3: nan)

  let hakkaChinese = ['hak', 'zh-hak', 'zh-hakka', 'i-hak']; // Hakka Chinese (ISO 639-3: hak)

  let chineseIn = [].concat(mandarinChinese, minNanChinese, hakkaChinese);
  let chineseOut = [].concat(mandarinChinese[0], minNanChinese[0], hakkaChinese[0]); // after de-dup should be only these three preferred codes

  console.log(Intl.getCanonicalLocales(chineseIn), chineseOut); // canonicalization of -u- extension keys
  // V8 and CC-ICU convert boolean keys (kn) to boolean string values (including giving them default values),
  // which is incorrect. SpiderMonkey and CC-WinGlob correctly avoid this.
  // V8 and CC-ICU also give the default value of "yes" to non-boolean keys (co), which also is incorrect.
  // Everyone (should) correctly re-order extension keys alphabetically
  // Microsoft/ChakraCore#4490 tracks the incorrect defaulting, Microsoft/ChakraCore#2964 tracks the overall investigation

  equal("de-DE-u-co-kn", "de-DE-u-co-yes-kn-true", gcl("de-de-u-kn-co")[0]);
  equal("de-DE-u-co-phonebk-kn", "de-DE-u-co-phonebk-kn-true", gcl("de-de-u-kn-co-phonebk")[0]);
  equal("de-DE-u-co-phonebk-kn-yes", "de-DE-u-co-phonebk-kn-true", gcl("de-DE-u-kn-yes-co-phonebk")[0]); // De-dupe after locales are canonicalized

  console.log(Intl.getCanonicalLocales(['en-us', 'en-us']), ['en-US']);
  console.log(Intl.getCanonicalLocales(['en-US', 'en-US']), ['en-US']);
  console.log(Intl.getCanonicalLocales(['en-us', 'en-US']), ['en-US']);
  console.log(Intl.getCanonicalLocales(["de-de", "de-DE-u-co-phonebk-kn-true", "de-DE-u-kn-true-co-phonebk"]), ["de-DE", "de-DE-u-co-phonebk-kn-true"], "No duplicates after re-ordering options");
}

t1();

function t2() {
  console.log(Intl.getCanonicalLocales('en-zz'), ['en-ZZ']);
  console.log(Intl.getCanonicalLocales('ZZ-us'), ['zz-US']);
  console.log(Intl.getCanonicalLocales('xx-abcd-zz'), ['xx-Abcd-ZZ'], "xx-Abcd-ZZ: [unsupported language xx] using [unsupported script Abcd] as used in [unsupported locale ZZ]"); // TODO (doilij): Investigate what is correct/allowable here (Microsoft/ChakraCore#2964)

  equal("xx-zzz", "zzz", gcl("xx-zzz")[0]); // See discussion of defaulting above (V8/CC-ICU and CC-WinGlob/SM distinction remains true here)

  equal("xx-ZZ-u-yy-zz", "xx-ZZ-u-yy-yes-zz-yes", gcl("xx-zz-u-zz-yy")[0]);
}

t2();

function t3() {
  const duplicateSingletons = ['cmn-hans-cn-u-u', 'cmn-hans-cn-t-u-ca-u'];
  const duplicateUnicodeExtensionKeys = ['de-de-u-kn-true-co-phonebk-co-phonebk'];
  const duplicateTags = ['de-gregory-gregory'];
  duplicateTags.forEach(testRangeError); // duplicateTags.forEach(testRangeError);

  duplicateSingletons.forEach(testRangeError);
  duplicateUnicodeExtensionKeys.forEach(testRangeError);
}

t3();

function t4() {
  const empty = [''];
  const invalidSubtags = ['en-A1'];
  const invalidVariants = ['en-us-latn', 'en-us-latnlatnlatn'];
  const invalidChars = ['en-a@'];
  const nonAsciiChars = ['中文', 'de-ßß'];
  const boundaryHyphen = ['-en', '-en-us', 'en-', 'en-us-'];
  const incompleteSubtags = ['de-de-u'];
  const extlangNotAllowedAfterScript = ['xx-abcd-zzz', 'xx-yyy-abcd-zzz', 'xx-yyy-Abcd-zzz-aa'];
  empty.forEach(testRangeError);
  invalidSubtags.forEach(testRangeError);
  invalidVariants.forEach(testRangeError);
  invalidChars.forEach(testRangeError);
  nonAsciiChars.forEach(testRangeError);
  boundaryHyphen.forEach(testRangeError);
  incompleteSubtags.forEach(testRangeError);
  extlangNotAllowedAfterScript.forEach(testRangeError);
}

t4();

function t5() {
  // ECMA 402 #sec-canonicalizelocalelist -- step 1.a. if locales is undefined, return []
  console.log(Intl.getCanonicalLocales(), []);
  console.log(Intl.getCanonicalLocales(undefined), []); // There is no special case for null type inputs in the definition, so throw TypeError
  // ECMA 402 #sec-canonicalizelocalelist -- step 4.a. Let O be ? ToObject(locales).
  // ECMA 262 #sec-toobject

  try {
    Intl.getCanonicalLocales(null);
  } catch (e) {
    ;
  } // Test Number literals


  console.log(Intl.getCanonicalLocales(1), []);
  console.log(Intl.getCanonicalLocales(3.14), []);
  console.log(Intl.getCanonicalLocales(Infinity), []);
  console.log(Intl.getCanonicalLocales(-Infinity), []);
  console.log(Intl.getCanonicalLocales(NaN), []); // Test other types of literals

  console.log(Intl.getCanonicalLocales(true), []);
  console.log(Intl.getCanonicalLocales(Symbol.toStringTag), []); // RegExp and Object literals

  console.log(Intl.getCanonicalLocales(/a/), []);
  console.log(Intl.getCanonicalLocales(/en-us/), []);
  console.log(Intl.getCanonicalLocales([]), []);
  console.log(Intl.getCanonicalLocales({}), []);
  console.log(Intl.getCanonicalLocales({
    '0': 'en-us'
  }), []);
  console.log(Intl.getCanonicalLocales(['en-us', {
    toString: () => 'en-us'
  }]), ['en-US']);
  console.log(Intl.getCanonicalLocales({
    toString: () => 'en-us'
  }), []); // Arrays containing anything which is not String or Object type should throw.
  // ECMA 402 #sec-canonicalizelocalelist
  // * step 7.c.ii. If Type(kValue) is not String or Object, throw a TypeError exception.
  // * step 7.c.iii. Let tag be ? ToString(kValue).

  try {
    Intl.getCanonicalLocales(['en-us', null]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', 1]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', 3.14]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', Infinity]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', -Infinity]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', NaN]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', true]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', Symbol.toStringTag]);
  } catch (e) {
    ;
  } // RegExp and Object literals
  // * step 7.c.iv. If IsStructurallyValidLanguageTag(tag) is false, throw a RangeError exception.


  try {
    Intl.getCanonicalLocales(['en-us', /a/]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', /en-us/]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', []]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales(['en-us', {}]);
  } catch (e) {
    ;
  }

  try {
    Intl.getCanonicalLocales([{
      '0': 'en-us'
    }]);
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  let a = [];
  a[1] = 'en';
  console.log(Intl.getCanonicalLocales(a), ['en']);
}

t6();

function t7() {
  let locales = {
    length: 2,
    0: 'zh',
    1: 'en'
  };
  console.log(Intl.getCanonicalLocales(locales), ['zh', 'en']);
}

t7();

function t8() {
  let locales = {
    length: 2,
    // 0: 'zh',
    1: 'en'
  };
  console.log(Intl.getCanonicalLocales(locales), ['en']);
}

t8();

function t9() {
  class x {
    get 0() {
      return 'zh';
    }

    get 1() {
      return 'en';
    }

    get length() {
      return 2;
    }

  }

  let locales = new x();
  console.log(Intl.getCanonicalLocales(locales), ['zh', 'en']);
}

t9();

function t10() {
  class x {
    // get 0() { return 'zh'; } // culture[0] is a hole
    get 1() {
      return 'en';
    }

    get length() {
      return 2;
    }

  }

  let locales = new x();
  console.log(Intl.getCanonicalLocales(locales), ['en']);
}

t10();

function t11() {
  class base {
    get 0() {
      return 'jp';
    } // closes the hole in x


  }

  class x extends base {
    // get 0() { return 'zh'; } // culture[0] has a hole
    get 1() {
      return 'en';
    }

    get length() {
      return 2;
    } // try 2 with get 0 defined in base; try 2,3 with get 2 defined in base; try 3 with get 0, get 1 defined


  }

  let locales = new x();
  console.log(Intl.getCanonicalLocales(locales), ['jp', 'en']);
}

t11();
