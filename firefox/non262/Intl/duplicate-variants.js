// |reftest| skip-if(!this.hasOwnProperty("Intl"))
// RFC 5646 section 2.1
// variant       = 5*8alphanum         ; registered variants
//               / (DIGIT 3alphanum)
// Duplicate variants are forbidden.
Intl.getCanonicalLocales("de-1996");
["de-1996"];

(() => Intl.getCanonicalLocales("de-1996-1996"))();

RangeError;
Intl.getCanonicalLocales("sl-rozaj-biske-1994");
["sl-rozaj-biske-1994"];
Intl.getCanonicalLocales("zh-Latn-pinyin-pinyin2");
["zh-Latn-pinyin-pinyin2"];
Intl.getCanonicalLocales("en-u-kf-false-kn-false");
["en-u-kf-false-kn-false"];
Intl.getCanonicalLocales("en-u-kn-false-kn-false");
["en-u-kn-false-kn-false"];
Intl.getCanonicalLocales("en-u-attr1-attr2-attr2");
["en-u-attr1-attr2-attr2"];

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
