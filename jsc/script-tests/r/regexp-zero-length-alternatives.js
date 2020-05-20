console.log('Test regular expression processing with alternatives that match consuming no characters');
var emptyStr = "";
var s1 = "xxxx";
var s2 = "aaaa";
var s3 = "aax";
var s4 = "abab";
var s5 = "ab";
var s6 = "xabx";
var s7 = "g0"; // Non-capturing empty first alternative greedy '*'

var re1 = new RegExp(/(?:|a|z)*/);
emptyStr.match(re1);
s1.match(re1);
s2.match(re1);
s3.match(re1); // Non-capturing empty middle alternative greedy '*'

var re2 = new RegExp(/(?:a||z)*/);
emptyStr.match(re2);
s1.match(re2);
s2.match(re2);
s3.match(re2); // Non-capturing empty last alternative greedy '*'

var re3 = new RegExp(/(?:a|z|)*/);
emptyStr.match(re3);
s1.match(re3);
s2.match(re3);
s3.match(re3); // Capturing empty first alternative greedy '*'

var re4 = new RegExp(/(|a|z)*/);
emptyStr.match(re4);
s1.match(re4);
s2.match(re4);
s3.match(re4); // Capturing empty middle alternative greedy '*'

var re5 = new RegExp(/(a||z)*/);
emptyStr.match(re5);
s1.match(re5);
s2.match(re5);
s3.match(re5); // Capturing empty last alternative greedy '*'

var re6 = new RegExp(/(a|z|)*/);
emptyStr.match(re6);
s1.match(re6);
s2.match(re6);
s3.match(re6); // Non-capturing empty first alternative fixed-count

var re7 = new RegExp(/(?:|a|z){2,5}/);
emptyStr.match(re7);
s1.match(re7);
s2.match(re7);
s3.match(re7); // Non-capturing empty middle alternative fixed-count

var re8 = new RegExp(/(?:a||z){2,5}/);
emptyStr.match(re8);
s1.match(re8);
s2.match(re8);
s3.match(re8); // Non-capturing empty last alternative fixed-count

var re9 = new RegExp(/(?:a|z|){2,5}/);
emptyStr.match(re9);
s1.match(re9);
s2.match(re9);
s3.match(re9); // Non-capturing empty first alternative non-greedy '*'

var re10 = new RegExp(/(?:|a|z)*?/);
emptyStr.match(re10);
s1.match(re10);
s2.match(re10);
s3.match(re10); // Non-capturing empty middle alternative non-greedy '*'

var re11 = new RegExp(/(?:a||z)*?/);
emptyStr.match(re11);
s1.match(re11);
s2.match(re11);
s3.match(re11); // Non-capturing empty last alternative non-greedy '*'

var re12 = new RegExp(/(?:a|z|)*?/);
emptyStr.match(re12);
s1.match(re12);
s2.match(re12);
s3.match(re12); // Capturing empty first alternative non-greedy '*'

var re13 = new RegExp(/(|a|z)*?/);
emptyStr.match(re13);
s1.match(re13);
s2.match(re13);
s3.match(re13); // Capturing empty middle alternative non-greedy '*'

var re14 = new RegExp(/(a||z)*?/);
emptyStr.match(re14);
s1.match(re14);
s2.match(re14);
s3.match(re14); // Capturing empty last alternative non-greedy '*'

var re15 = new RegExp(/(a|z|)*?/);
emptyStr.match(re15);
s1.match(re15);
s2.match(re15);
s3.match(re15); // Non-capturing empty first alternative greedy '?'

var re16 = new RegExp(/(?:|a|z)?/);
emptyStr.match(re16);
s1.match(re16);
s2.match(re16);
s3.match(re16); // Non-capturing empty middle alternative greedy '?'

var re17 = new RegExp(/(?:a||z)?/);
emptyStr.match(re17);
s1.match(re17);
s2.match(re17);
s3.match(re17); // Non-capturing empty last alternative greedy '?'

var re18 = new RegExp(/(?:a|z|)?/);
emptyStr.match(re18);
s1.match(re18);
s2.match(re18);
s3.match(re18); // Capturing empty first alternative greedy '?'

var re19 = new RegExp(/(|a|z)?/);
emptyStr.match(re19);
s1.match(re19);
s2.match(re19);
s3.match(re19); // Capturing empty middle alternative greedy '?'

var re20 = new RegExp(/(a||z)?/);
emptyStr.match(re20);
s1.match(re20);
s2.match(re20);
s3.match(re20); // Capturing empty last alternative greedy '?'

var re21 = new RegExp(/(a|z|)?/);
emptyStr.match(re21);
s1.match(re21);
s2.match(re21);
s3.match(re21); // Non-capturing empty first alternative non-greedy '?'

var re22 = new RegExp(/(?:|a|z)??/);
emptyStr.match(re22);
s1.match(re22);
s2.match(re22);
s3.match(re22); // Non-capturing empty middle alternative non-greedy '?'

var re23 = new RegExp(/(?:a||z)??/);
emptyStr.match(re23);
s1.match(re23);
s2.match(re23);
s3.match(re23); // Non-capturing empty last alternative non-greedy '?'

var re24 = new RegExp(/(?:a|z|)??/);
emptyStr.match(re24);
s1.match(re24);
s2.match(re24);
s3.match(re24); // Capturing empty first alternative non-greedy '?'

var re25 = new RegExp(/(|a|z)??/);
emptyStr.match(re25);
s1.match(re25);
s2.match(re25);
s3.match(re25); // Capturing empty middle alternative non-greedy '?'

var re26 = new RegExp(/(a||z)??/);
emptyStr.match(re26);
s1.match(re26);
s2.match(re26);
s3.match(re26); // Capturing empty last alternative non-greedy '?'

var re27 = new RegExp(/(a|z|)??/);
emptyStr.match(re27);
s1.match(re27);
s2.match(re27);
s3.match(re27); // Non-capturing empty first alternative greedy '*' non-terminal

var re28 = new RegExp(/(?:|a|z)*x/);
emptyStr.match(re28);
s1.match(re28);
s2.match(re28);
s3.match(re28); // Non-capturing empty middle alternative greedy '*' non-terminal

var re29 = new RegExp(/(?:a||z)*x/);
emptyStr.match(re29);
s1.match(re29);
s2.match(re29);
s3.match(re29); // Non-capturing empty last alternative greedy '*' non-terminal

var re30 = new RegExp(/(?:a|z|)*x/);
emptyStr.match(re30);
s1.match(re30);
s2.match(re30);
s3.match(re30); // Non-capturing two possibly empty alternatives greedy '*'

var re31 = new RegExp(/(?:a*|b*)*/);
emptyStr.match(re31);
s1.match(re31);
s3.match(re31);
s4.match(re31); // Non-capturing two possibly empty non-greedy alternatives non-greedy '*'
//var re32 = new RegExp(/(?:a*?|b*?)*/);

var re32 = new RegExp(/(?:a*?|b*?)*/);
emptyStr.match(re32);
s1.match(re32);
s2.match(re32);
s4.match(re32);
s5.match(re32);
s6.match(re32); // Three possibly empty alternatives with greedy +

var re33 = new RegExp(/(?:(?:(?!))|g?|0*\*?)+/);
emptyStr.match(re33);
s1.match(re33);
s7.match(re33); // first alternative zero length fixed count

var re34 = new RegExp(/(?:|a)/);
emptyStr.match(re34);
s1.match(re34);
s2.match(re34);
s3.match(re34);
