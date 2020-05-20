console.log("This test checks a few cases of extended (> 127) characters in repeat regular expressions.");
"foo\xa0\xa0\xa0".replace(/\xa0*/, "");
"foo\xa0\xa0\xa0".replace(/\xa0+/, "");
"foo\xa0\xa0\xa0".replace(/\xa0*$/, "");
