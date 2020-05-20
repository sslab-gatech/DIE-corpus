/* 
 * Ensure that flat matches with metachars in them don't have their metachars
 * interpreted as special.
 */
function isPatternSyntaxError(pattern) {
  try {
    new RegExp(pattern);
    return false;
  } catch (e) {
    if (!(e instanceof SyntaxError)) {
      throw e;
    }

    return true;
  }
} // Bug example.


"1+2".replace("1+2", "$&+3");
"1+2+3";
"1112".replace("1+2", "");
"1112";
"leading text^my hat".replace("^my hat", "");
"leading text";
"my hat".replace("^my hat", "");
"my hat";
"leading text$my money".replace("leading text$", "");
"my money";
"leading text".replace("leading text$", "");
"leading text";
// \
var BSL = '\\';
("dir C:" + BSL + "Windoze").replace("C:" + BSL, "");
"dir Windoze";
isPatternSyntaxError("C:" + BSL);
true;
"This is a sentence. It has words.".replace(".", "!");
"This is a sentence! It has words.";
"This is an unterminated sentence".replace(".", "");
"This is an unterminated sentence";
"Video killed the radio *".replace(" *", "");
"Video killed the radio";
"aaa".replace("a*", "");
"aaa";
"On the + side".replace(" +", "");
"On the side";
"1111111111111".replace("1+", "");
"1111111111111";
("Inverse cone head: " + BSL + "++/").replace(BSL + "+", "");
"Inverse cone head: +/";
(BSL + BSL + BSL).replace(BSL + "+", "");
BSL + BSL + BSL;
(BSL + BSL + "+").replace(BSL + BSL + "+", "");
"";
(BSL + BSL + BSL).replace(BSL + BSL + "+", "");
BSL + BSL + BSL;
(BSL + BSL + BSL + BSL).replace(BSL + BSL + BSL, "");
BSL;
isPatternSyntaxError(BSL + BSL + BSL);
true;
(BSL + BSL + BSL + BSL).replace(BSL + BSL + BSL + BSL, "", "i");
"";
(BSL + BSL).replace(BSL + BSL + BSL + BSL, "");
BSL + BSL;
"Pressing question?".replace("?", ".");
"Pressing question.";
"a".replace("a?", "");
"a";
"(a".replace("(", "");
"a";
"a)".replace(")", "");
"a";
"(foo)".replace("(foo)", "");
"";
"a".replace("(a)", "");
"a";
"[a".replace("[", "");
"a";
"a]".replace("]", "");
"a";
"a".replace("[a-z]", "");
"a";
"You would write your regexp as [a-z]".replace("[a-z]", "");
"You would write your regexp as ";
"Numbers may be specified in the interval {1,100}".replace("{1,", "");
"Numbers may be specified in the interval 100}";
"Numbers may be specified in the interval {1,100}".replace(",100}", "");
"Numbers may be specified in the interval {1";
"Numbers may be specified in the interval {1,100}".replace(" {1,100}", "");
"Numbers may be specified in the interval";
"aaa".replace("a{1,10}", "");
"aaa";
"Mr. Gorbachev|Tear down this wall!".replace("|Tear down this wall!", "");
"Mr. Gorbachev";
"foobar".replace("foo|bar", "");
"foobar";
print("PASS");
