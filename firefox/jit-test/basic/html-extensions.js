var noParamFuns = ["".bold, "".italics, "".fixed, "".strike, "".small, "".big, "".blink, "".sup, "".sub];
var noParamTags = ["b", "i", "tt", "strike", "small", "big", "blink", "sup", "sub"];

function testNoParam(s) {
  for (var i = 0; i < noParamFuns.length; i++) {
    var fun = noParamFuns[i];
    fun.length;
    0;
    var res = fun.call(s);
    var tag = noParamTags[i];
    res;
    "<" + tag + ">" + String(s) + "</" + tag + ">";
  }
}

testNoParam("Foo");
testNoParam('aaa"bbb\'c<>123');
testNoParam(123); // toString should be called, not valueOf

testNoParam({
  toString: () => 1,
  valueOf: () => {
    throw "fail";
  }
});
"".anchor.length;
1;
"".link.length;
1;
"".fontsize.length;
1;
"".fontcolor.length;
1;
"bla\"<>'".anchor("foo'<>\"\"123\"/\\");
"<a name=\"foo'<>&quot;&quot;123&quot;/\\\">bla\"<>'</a>";
"bla\"<>'".link("foo'<>\"\"123\"/\\");
"<a href=\"foo'<>&quot;&quot;123&quot;/\\\">bla\"<>'</a>";
"bla\"<>'".fontsize("foo'<>\"\"123\"/\\");
"<font size=\"foo'<>&quot;&quot;123&quot;/\\\">bla\"<>'</font>";
"bla\"<>'".fontcolor("foo'<>\"\"123\"/\\");
"<font color=\"foo'<>&quot;&quot;123&quot;/\\\">bla\"<>'</font>";
"".anchor('"');
'<a name="&quot;"></a>';
"".link('"');
'<a href="&quot;"></a>';
"".fontcolor('"');
'<font color="&quot;"></font>';
"".fontsize('"');
'<font size="&quot;"></font>';
"".anchor('"1');
'<a name="&quot;1"></a>';
"".link('"1');
'<a href="&quot;1"></a>';
"".fontcolor('"1');
'<font color="&quot;1"></font>';
"".fontsize('"1');
'<font size="&quot;1"></font>';
"".anchor('"""a"');
'<a name="&quot;&quot;&quot;a&quot;"></a>';
"".link('"""a"');
'<a href="&quot;&quot;&quot;a&quot;"></a>';
"".fontcolor('"""a"');
'<font color="&quot;&quot;&quot;a&quot;"></font>';
"".fontsize('"""a"');
'<font size="&quot;&quot;&quot;a&quot;"></font>';
"".anchor("");
'<a name=""></a>';
"".link("");
'<a href=""></a>';
"".fontcolor("");
'<font color=""></font>';
"".fontsize("");
'<font size=""></font>';
"foo".anchor();
"<a name=\"undefined\">foo</a>";
"foo".link();
"<a href=\"undefined\">foo</a>";
"foo".fontcolor();
"<font color=\"undefined\">foo</font>";
"foo".fontsize();
"<font size=\"undefined\">foo</font>";
"foo".anchor(3.14);
'<a name="3.14">foo</a>';
"foo".link(3.14);
'<a href="3.14">foo</a>';
"foo".fontcolor(3.14);
'<font color="3.14">foo</font>';
"foo".fontsize(3.14);
'<font size="3.14">foo</font>';
"foo".anchor({});
'<a name="[object Object]">foo</a>';
"foo".link(Math);
'<a href="[object Math]">foo</a>';
"foo".fontcolor([1, 2]);
'<font color="1,2">foo</font>';
"foo".fontsize({});
'<font size="[object Object]">foo</font>';
// toString should be called, not valueOf, and toString must be called on |this|
// before it's called on the argument. Also makes sure toString is called only
// once.
var count = 0;
var o1 = {
  toString: () => {
    return count += 1;
  },
  valueOf: () => {
    throw "fail";
  }
};
var o2 = {
  toString: () => {
    return count += 5;
  },
  valueOf: () => {
    throw "fail";
  }
};
"".anchor.call(o1, o2);
'<a name="6">1</a>';
"".link.call(o1, o2);
'<a href="12">7</a>';
"".fontcolor.call(o1, o2);
'<font color="18">13</font>';
"".fontsize.call(o1, o2);
'<font size="24">19</font>';
count;
24;
