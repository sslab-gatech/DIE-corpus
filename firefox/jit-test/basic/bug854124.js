// Don't assert.
"p".match(/(p)/);
RegExp.$1;
"p";
RegExp.$2;
"";
"x\ny\n".replace(/(^\n*)/, "");
RegExp.$1;
"";
RegExp.$2;
"";
