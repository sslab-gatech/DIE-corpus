console.log('Tests that regular expressions do not have extensions that diverge from the JavaScript specification. ' + 'Because WebKit originally used a copy of PCRE, various non-JavaScript regular expression features were historically present. ' + 'Also tests various related edge cases.');
/\x{41}/.exec("yA1");
/[\x{41}]/.exec("yA1").toString();
/\x1g/.exec("x1g").toString();
/[\x1g]/.exec("x").toString();
/[\x1g]/.exec("1").toString();
/\2147483648/.exec(String.fromCharCode(140) + "7483648").toString();
/\4294967296/.exec("\"94967296").toString();
/\8589934592/.exec("\\8589934592").toString();
/\9589934592/.exec("\\9589934592").toString();
"\nAbc\n".replace(/(\n)[^\n]+$/, "$1");
/x$/.exec("x\n");

try {
  /x++/;
} catch (e) {
  ;
}

/[]]/.exec("]");
console.log('');
console.log('Octal escape sequences are in Annex B of the standard.');
console.log('');
/\060/.exec("y01").toString();
/[\060]/.exec("y01").toString();
/\606/.exec("y06").toString();
/[\606]/.exec("y06").toString();
/[\606]/.exec("y6").toString();
/\101/.exec("yA1").toString();
/[\101]/.exec("yA1").toString();
/\1011/.exec("yA1").toString();
/[\1011]/.exec("yA1").toString();
/[\1011]/.exec("y1").toString();
/\10q/.exec("y" + String.fromCharCode(8) + "q").toString();
/[\10q]/.exec("y" + String.fromCharCode(8) + "q").toString();
/\1q/.exec("y" + String.fromCharCode(1) + "q").toString();
/[\1q]/.exec("y" + String.fromCharCode(1) + "q").toString();
/[\1q]/.exec("yq").toString();
/\8q/.exec("\\8q").toString();
/[\8q]/.exec("y8q").toString();
/[\8q]/.exec("yq").toString();
/\9q/.exec("\\9q").toString();
/[\9q]/.exec("y9q").toString();
/[\9q]/.exec("yq").toString();
/(x)\1q/.exec("xxq").toString();
/(x)[\1q]/.exec("xxq").toString();
/(x)[\1q]/.exec("xx" + String.fromCharCode(1)).toString();
console.log('');
